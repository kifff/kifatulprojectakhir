// // export default Projects;

// import React from "react";
// import "./project.css";

// const Projects = () => {
//   return (
//     <div className="projects">
//       <div className="descr">
//         <h2>Projects</h2>
//         <div className="project-list">
//           <div className="project-item">
//             <h3></h3>
//             <p></p>
//           </div>
//           <div className="project-item">
//             <h3></h3>
//             <p></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./project.css";
// import portfolioImage1 from "../assets/images/g1.png";
// import portfolioImage2 from "../assets/images/g2.png";
// import portfolioImage3 from "../assets/images/g3.png";
// import portfolioImage4 from "../assets/images/g4.png";
// import portfolioImage5 from "../assets/images/g5.png";
// import portfolioImage6 from "../assets/images/g6.png";
// import portfolioImage7 from "../assets/images/g7.png";

// const Projects = () => {
//   return (
//     <div className="bg text-white">
//       <div className="container py-5">
//         <div className="descr">
//           <h2 className="text-center mb-4">Projects</h2>
//           <div className="row">
//             <div className="col-md-6 mb-3">
//               <div className="sss project-item border p-1">
//                 <h3>
//                   <img src={portfolioImage1} alt="Portfolio" className="" />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage2} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage3} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage4} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage5} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage6} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//             <div className="col-md-6 mb-3">
//               <div className="project-item border p-3">
//                 <h3>
//                   <img src={portfolioImage7} alt="Portfolio" className="  " />
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./project.css";
import portfolioImage1 from "../assets/images/g1.png";
import portfolioImage2 from "../assets/images/g2.png";
import portfolioImage3 from "../assets/images/g3.png";
import portfolioImage4 from "../assets/images/g4.png";
import portfolioImage5 from "../assets/images/g5.png";
import portfolioImage6 from "../assets/images/g6.png";
import portfolioImage7 from "../assets/images/g7.png";

const Projects = () => {
  return (
    <div className="bg text-white">
      <div className="container py-5">
        <div className="descr">
          <h2 className="text-center mb-4">Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="project-item border p-3">
                <h3>
                  <img src={portfolioImage1} alt="Portfolio" className="" />
                  <img src={portfolioImage2} alt="Portfolio" className="" />
                  <img src={portfolioImage3} alt="Portfolio" className="" />
                  <img src={portfolioImage4} alt="Portfolio" className="" />
                </h3>
              </div>
            </div>
            <div className="col">
              <div className="project-item border p-3">
                <h3>
                  <img src={portfolioImage5} alt="Portfolio" className="" />
                  <img src={portfolioImage6} alt="Portfolio" className="" />
                  <img src={portfolioImage7} alt="Portfolio" className="" />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
