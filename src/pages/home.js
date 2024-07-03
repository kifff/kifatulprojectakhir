// import React from "react";
// import "./home.css";
// import portfolioImage from "../assets/images/kifffprofil2.png";

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="des">
//         <h2>Welcome to My Portfolio</h2>
//         <p>This is the home page.</p>
//       </div>

//       <div class="container">
//         <div class="box1">
//           <img
//             src={portfolioImage}
//             alt="Portfolio"
//             className="portfolio-image"
//           />
//         </div>
//         <div className="box2">
//           <div className="aa">
//             <div className="hello">Hello,</div>
//             <div className="im"> I'm Kifff</div>
//           </div>
//           <div className="bb">
//             <div className="be">
//               My study focus and concentration is in the field of backend
//               engineering, artificial intelligence, embedded systems / internet
//               of thinks{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import portfolioImage from "../assets/images/kifffwebta.png";
import "./home.css";

const Home = () => {
  return (
    <div className="container mt-5 py-5 ">
      <div className="des mt-5 text-white ">
        <h2>Welcome to My Profile</h2>
        <p>This is home page</p>
      </div>
      <div className=" sejajar">
        <div className="images">
          <div className="ml-5 col-md-5 flex-grow-1">
            <img src={portfolioImage} alt="" className="gambar" />
          </div>
        </div>
        <br /> <br /> <br />
        <div className="tulisan d-flex justify-content-between align-items-center">
          <div className="col-md-6 flex-grow-1 ">
            <div className="aa">
              <div className="hello text-white">Hello,</div>
              <div className="im text-white">I'm Kifff</div>
            </div>
            <div className="bb">
              <div className="be text-white">
                My study focus and concentration is in the field of backend
                engineering, artificial intelligence, embedded systems /
                internet of things.
              </div>
            </div>
            <div className="container2 mt-5 text-white ">
              <div
                className="d-flex justify-content-between align-items-center position-z-index text-white"
                style={{ fontSize: "4rem" }}
              >
                <a href="https://github.com/kifff" className="mr-3">
                  <i className="bi bi-github"></i>
                  <p>GitHub</p>
                </a>
                <a
                  href="https://www.instagram.com/kifff.tn_24/"
                  className="mr-3"
                >
                  <i className="bi bi-instagram"></i>
                  <p>Instagran</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/kifatul-najmi-a089151b8/"
                  className="mr-3"
                >
                  <i className="bi bi-linkedin"></i>
                  <p>LinkedIn</p>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCX2p5jQRdhZJufUNakU-2Mg"
                  className="mr-3"
                >
                  <i className="bi bi-youtube"></i>
                  <p>YouTube</p>
                </a>
              </div>
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

