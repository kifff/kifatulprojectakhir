// import React from "react";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="desc">
//         <h2>Contact</h2>
//         <form>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />

//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" required></textarea>

//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

const Contact = () => {
  return (
    <div className="bg">
      <div id="contact" className="container my-5 col-3">
        <div className="desc">
          <h2 className="text-center mb-4 text-white ">Contact</h2>
          <form className="text-white">
            <div className="form-group ">
              <label htmlFor="name ">Name:</label>
              <input
                type="text"
                className="form-control "
                id="name"
                name="name"
                required
              />
            </div>

            <div className="form-group ">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark mt-3">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

