// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; 2023 My Portfolio. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-2 fixed-bottom">
      <p className="mb-0">
        {" "}
        Create By kifff &copy; 2023 My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
