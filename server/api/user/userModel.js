const bcrypt = require('bcrypt');
const db = require('../../lib/dbConnect.js');
const { getUserData, getUserToken } = require('../../lib/auth.js');

const saltRounds = 10;

const isValidEmail = (email) => {
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    return emailRegex.test(email);
};

const userLogin = (req, res, next) =>  {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    if (!email || !password) next(new Error('Logging in requires both an email and a password.'));
    if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));
// execute query, expecting either one row or none - for emails that don't exist
    db.oneOrNone(`SELECT * FROM "user" WHERE email = $1;`, [email])
      .then((data) => {
// if email doesn't exist, reject the user
  if (!data) next(new Error('Invalid login credentials.'));
// email definitely exists; next step:
// check if submitted password matches the one in the db
  if (bcrypt.compareSync(password, data.password)) {
// password matches - good to go!
// build out an object that we're going to send to the getUserToken method as payload to jwt.sign
  const userObj = {};
    for (let key in data) {
      if (key != 'password') userObj[key] = data[key];
    }
// call getUserToken on user's data and send it back to the user
     getUserToken(userObj)
      .then((token) => res.token = token)
      .then(() => next())
      .catch(err => next(err));
      } else {
// if password doesn't match, reject the login attempt
      next(new Error('Invalid login credentials.'));
    }
  })
/* all that happend inside the then of the db call; now we catch db errors */
      .catch(err => next(err));
};

const createUser = (req, res, next) => {
// get data
const first = req.body.firstName;
const last = req.body.lastName;
const email = req.body.email.toLowerCase();
const password = bcrypt.hashSync(req.body.password, saltRounds);
// validate data
if (!(first || last || email || password)) next(new Error('Please check that all fields were filled out properly.'));
if (!isValidEmail(email)) next(new Error('Please submit a valid email address.'));

// prepare values array
const values = [
    first,
    last,
    email,
    password,
];
// execute query with the data...
  db.one(`INSERT INTO "user" (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id, fname, lname, email;`, values)
      .then((data) => {
// ...then get a token for the user and send it back to the caller
      getUserToken(data)
      .then((token) => res.token = token)
      .then(() => next())
      .catch(err => next(err));
    })
/* end of db then; catch db errors now */
     .catch(err => next(err));
};

// helper middleware that prepares res.data for sending. It serves two purposes:
//  1) just copies res.userData to res.data, which allows us to just use the authenticate middleware to get generic user data
//  2) builds out the res.data object from res.token and calling auth.getUserData on the token
const prepUserData = (req, res, next) => {
    if (res.token) {
        getUserData(res.token)
            .then((userData) => {
            res.data = {
                token: res.token,
                user_data: userData.data,
            };
        })
            .then(() => next())
            .catch(err => next(err));
    } else {
        res.data = res.userData;
        next();
    }
};

module.exports = {
    userLogin,
    createUser,
    prepUserData,
}
