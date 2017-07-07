import React from 'react';
import { Link } from 'react-router';
import './Footer.css';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: 'Edtronics Product',
      services: 'Edtronics Services',
      store: 'Edtronics Store',
      platform: 'Platform',
      learn: 'Learn',
      values: 'Edtronics Values',
      about:  'About Edtronics',
      copyright: 'Copyright © 2017 Edtronics Corporation. All rights reserved',
      productList : [
        {
          productOne: 'Interactive whiteboards'
        },
        {
          productTwo: 'Projectors'
        },
        {
          productThree: 'Interactive Displays'
        },
        {
          productFour: 'Interactive Tables'
        },
        {
          productFive: 'Telepresence'
        },
        {
          productSix: 'Computerized or Smarted Table'
        },
        {
          productSeven: 'Computerized or Smarted Arm Desk'
        },
        {
          productEight: 'Computerized or Smarted Desk'
        },
        {
          productNine: 'Hologram Glass'
        },
        {
          productTen: 'Smart Backpack'
        }
      ],

      serviceList: [
        {
          serviceOne: 'Learning Management Systems'
        },
        {
          serviceTwo: 'Learning Content Development Systems'
        },
        {
          serviceThree: 'Student Response Systems'
        },
        {
          serviceFour: 'Assessment Systems'
        },
        {
          serviceFive: 'Exam Systems'
        },
        {
          serviceSix: 'Collaboration Systems'
        },
        {
          serviceSeven: 'Classroom Management Systems'
        },
        {
          serviceEight: 'Document Management Systems'
        },
        {
          serviceNine: 'Content Creation Systems'
        }
      ],

      storeList: [
        {
          storeOne: 'Find a Store'
        },
        {
          storeTwo: 'Edtronics Store App'
        },
        {
          storeThree: 'Shopping Help'
        },
        {
          storeFour: 'Order Status'
        },
        {
          storeFive: 'Sales & support'
        },
        {
          storeSix: 'Financing'
        }
      ],

       platformList: [
        {
          platformOne: 'Edtronics Developer'
        }
      ],

     learnList: [
        {
         learnOne: 'Personalize Learning'
        },

        {
         learnTwo: 'Educational Data and Analytics'
        },

        {
         learnThree: 'Competent-Base Learning'
        },

        {
          learnFour: 'Machine Learning in Education'
        },

        {
         learnFive: 'Virtual & Augmented reality in Education'
        },

        {
         learnSix: 'Artificial Intelligence in Education'
        }
      ],


      companyValues: [
        {
          companyValuesOne: 'Diversity and Inclusion'
        },
        {
          companyValuesTwo: 'Accessibility'
        },
        {
          companyValuesThree: 'Environment'
        },
        {
          companyValuesFour: 'Privacy'
        },
        {
          companyValuesFive: 'Supplier Responsibility'
        },
        {
          companyValuesSix: 'Corporate Social Responsibility'
        }
      ],

      aboutTheCompany: [
         {
          aboutTheCompanyOne: 'Edtronics Info'
         },
         {
          aboutTheCompanyTwo: 'Newsroom'
         },
         {
          aboutTheCompanyThree: 'Careers'
         },
         {
          aboutTheCompanyFour: 'Recherche'
         },
         {
          aboutTheCompanyFive: 'Press Info'
         },
         {
          aboutTheCompanySix: 'Investors'
         },
         {
          aboutTheCompanySeven: 'Events'
         },
         {
          aboutTheCompanyEight: 'Contact Edtronics'
         },
         {
          aboutTheCompanyNine: 'Blogs'
         }
      ],

      otherCopyRights: {
        privacy: 'Privacy Policy',
        term: 'Terms of Use',
        sale: 'Sales and Refunds',
        legal: 'Legal',
        site: 'Site Map'
      }

    }
  }




  render() {
    return (

        <footer className="page-footer grey lighten-5">
        <div className="row">
            <div className="col s2">
               <h5>{this.state.products}</h5>
                <ul>
                  <li><Link to="#" className="link">{this.state.productList[0].productOne}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[1].productTwo}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[2].productThree}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[3].productFour}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[4].productFive}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[5].productSix}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[6].productSeven}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[7].productEight}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[8].productNine}</Link></li>
                  <li><Link to="#" className="link">{this.state.productList[9].productTen}</Link></li>
                </ul>
            </div>
            <div className="col s2">
               <h5>{this.state.services}</h5>
                <ul>
                  <li><Link to="#" className="link">{this.state.serviceList[0].serviceOne}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[1].serviceTwo}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[2].serviceThree}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[3].serviceFour}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[4].serviceFive}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[5].serviceSix}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[6].serviceSeven}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[7].serviceEight}</Link></li>
                  <li><Link to="#" className="link">{this.state.serviceList[8].serviceNine}</Link></li>
                </ul>
            </div>


            <div className="col s2">
             <h5>{this.state.store}</h5>
                <ul>
                  <li><Link to="#" className="link">{this.state.storeList[0].storeOne}</Link></li>
                  <li><Link to="#" className="link">{this.state.storeList[1].storeTwo}</Link></li>
                  <li><Link to="#" className="link">{this.state.storeList[2].storeThree}</Link></li>
                  <li><Link to="#" className="link">{this.state.storeList[3].storeFour}</Link></li>
                  <li><Link to="#" className="link">{this.state.storeList[4].storeFive}</Link></li>
                  <li><Link to="#" className="link">{this.state.storeList[5].storeSix}</Link></li>
                </ul>
              <div >
                   <h5>{this.state.platform}</h5>
                  <ul>
                    <li><Link to="#" className="link">{this.state.platformList[0].platformOne}</Link></li>
                  </ul>
                </div>
             </div>


            <div className="col s2">
             <h5>{this.state.learn}</h5>
              <ul>
                <li><Link to="#" className="link">{this.state.learnList[0].learnOne}</Link></li>
                <li><Link to="#" className="link">{this.state.learnList[1].learnTwo}</Link></li>
                <li><Link to="#" className="link">{this.state.learnList[2].learnThree}</Link></li>
                <li><Link to="#" className="link">{this.state.learnList[3].learnFour}</Link></li>
                <li><Link to="#" className="link">{this.state.learnList[4].learnFive}</Link></li>
                <li><Link to="#" className="link">{this.state.learnList[5].learnSix}</Link></li>
              </ul>
            </div>



            <div className="col s2">
              <h5>{this.state.values}</h5>
              <ul>
                <li><Link to="diversity" className="link">{this.state.companyValues[0].companyValuesOne}</Link></li>
                <li><Link to="accessibility" className="link">{this.state.companyValues[1].companyValuesTwo}</Link></li>
                <li><Link to="environment" className="link">{this.state.companyValues[2].companyValuesThree}</Link></li>
                <li><Link to="privacy" className="link">{this.state.companyValues[3].companyValuesFour}</Link></li>
                <li><Link to="supplier" className="link">{this.state.companyValues[4].companyValuesFive}</Link></li>
                <li><Link to="social" className="link">{this.state.companyValues[5].companyValuesSix}</Link></li>
              </ul>
            </div>
             <div className="col s2">
               <h5>{this.state.about}</h5>
                <ul>
                  <li><Link to="info" className="link">{this.state.aboutTheCompany[0].aboutTheCompanyOne}</Link></li>
                  <li><Link to="news" className="link">{this.state.aboutTheCompany[1].aboutTheCompanyTwo}</Link></li>
                  <li><Link to="careers" className="link">{this.state.aboutTheCompany[2].aboutTheCompanyThree}</Link></li>
                  <li><Link to="recherchers" className="link">{this.state.aboutTheCompany[3].aboutTheCompanyFour}</Link></li>
                  <li><Link to="info" className="link">{this.state.aboutTheCompany[4].aboutTheCompanyFive}</Link></li>
                  <li><Link to="investors" className="link">{this.state.aboutTheCompany[5].aboutTheCompanySix}</Link></li>
                  <li><Link to="events" className="link">{this.state.aboutTheCompany[6].aboutTheCompanySeven}</Link></li>
                  <li><Link to="contact" className="link">{this.state.aboutTheCompany[7].aboutTheCompanyEight}</Link></li>
                   <li><Link to="Blog" className="link">{this.state.aboutTheCompany[8].aboutTheCompanyNine}</Link></li>
                </ul>
             </div>
          </div>
           <div className="footer-copyright">
                <p className="para">{this.state.copyright}</p>
                 <ul>
                   <li className="legal"><Link to="#" className="link">{this.state.otherCopyRights.privacy}</Link></li>
                   <li className="legal"><Link to="#" className="link">{this.state.otherCopyRights.term}</Link></li>
                   <li className="legal"><Link to="#" className="link">{this.state.otherCopyRights.legal}</Link></li>
                   <li className="legal"><Link to="#" className="link">{this.state.otherCopyRights.sale}</Link></li>
                   <li className="legal"><Link to="#" className="link">{this.state.otherCopyRights.site}</Link></li>
                </ul>
            </div>
         </footer>

    );
  }
}

