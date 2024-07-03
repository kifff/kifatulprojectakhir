// import React from "react";
// import { Link } from "react-router-dom";
// import "./header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>My Portfolio</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  return (
    <header className="header bg-dark text-white fixed-top">
      <div className="container d-flex py-4 align-items-center justify-content-between">
        <h1 className="h3">My Portfolio</h1>
        <nav className="navi ms-auto">
          <ul className="nav justify-content-end mb-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

