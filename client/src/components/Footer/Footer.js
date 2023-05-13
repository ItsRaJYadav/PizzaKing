// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// export default function App() {

//   return (
//     <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
//       <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
//         <div className='me-5 d-none d-lg-block'>
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href='https://www.facebook.com/IamRAJAO9' className='me-4 text-reset'>
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href='https://twitter.com/rajydv07_' className='me-4 text-reset'>
//             <MDBIcon fab icon="twitter" />
//           </a>

//           <a href='https://www.instagram.com/its_raj_ydv/' className='me-4 text-reset'>
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href='https://www.linkedin.com/in/rajydv07/' className='me-4 text-reset'>
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href='https://github.com/ItsRaJYadav' className='me-4 text-reset'>
//             <MDBIcon fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className=''>
//         <MDBContainer className='text-center text-md-start mt-5'>
//           <MDBRow className='mt-3'>
//             <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>
//                 <MDBIcon icon="gem" className="me-3" />
//                 Pizza King
//               </h6>
//               <p>
//                 Pizza King web app is an online platform for ordering pizzas. It offers a range of pizzas, sides, drinks, and desserts with an easy-to-use ordering system and delivery options.
//               </p>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
//               <p>
//                 <Link to="/offers">
//                      <button className="text-gray-500 underline">Pizza</button>
//                 </Link>

//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Burgers
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Fries
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Soft Drink
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Pricing
//                 </a>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Settings
//                 </a>
//               </p>
//               <p>
//               <Link to="/cart">
//                      <button className="text-gray-500 underline">Orders</button>
//                 </Link>
//               </p>
//               <p>
//                 <a href='#!' className='text-reset'>
//                   Help
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
//               <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 New Delhi, 110005, India
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 info@example.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 91 9472040607
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 91 7352045288
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
//         © 2021 Copyright:
//         <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
//           Pizza King.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

import React from 'react'
const Footer = () => {
  return (
    <>
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
      <div>
        <p className="text-base text-gray-500">Company</p>
        <ul className="mt-8 space-y-4">
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              About{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Features{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Works{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Career{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">Help</p>
        <ul className="mt-8 space-y-4">
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Customer Support{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Delivery Details{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Terms &amp; Conditions{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Privacy Policy{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">Resources</p>
        <ul className="mt-8 space-y-4">
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Free eBooks{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Development Tutorial{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              How to - Blog{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              YouTube Playlist{" "}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-base text-gray-500">Extra Links</p>
        <ul className="mt-8 space-y-4">
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Customer Support{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Delivery Details{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Terms &amp; Conditions{" "}
            </a>
          </li>
          <li>
            <a
              href='abc'
              title=""
              className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
            >
              {" "}
              Privacy Policy{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="mt-16 mb-10 border-gray-800" />
    <div className="flex flex-wrap items-center justify-between">
      {/* <img
        className="h-8 auto md:order-1"
        src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg"
        alt=""
      /> */}
      <ul className="flex items-center space-x-3 md:order-3">
        <li>
          <a
            href='abc'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='abc'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='abc'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
              <circle cx="16.806" cy="7.207" r="1.078" />
              <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
            </svg>
          </a>
        </li>
        <li>
          <a
            href='abc'
            title=""
            className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              />
            </svg>
          </a>
        </li>
      </ul>
      <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
        © Copyright 2021, All Rights Reserved by PizzaKing
      </p>
    </div>
  </div>
</section>


    </>
  )
}

export default Footer