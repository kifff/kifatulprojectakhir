// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="descrr">
//         <h2>About Me</h2>
//         <p>
//           Hello! I am a web developer with a passion for creating beautiful and
//           functional websites.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;


// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <div className="bg">
//       <div className="about">
//         <div className="descrr">
//           <h2>About Me</h2>
//           <p>
//             Hello! I am a web developer with a passion for creating beautiful
//             and functional websites.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";

const About = () => {
  return (
    <div className="bg text-white  ">
      <div className="container py-5">
        <div className="descrr">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center">
            Hello! I am a web developer with a passion for creating beautiful
            and functional websites.
          </p>
        </div>
        <div className="a  ">
          <div className="a1">
            <p>Tk</p>
            Pendidikan taman kanak kanak saya pada tahun 2008 - 2009 . Di TK
            Mutiara Hati
          </div>
          <br />
          <div className="a2">
            <p>SD</p>
            pada jenjang Sekolah Dasar saya bersekolah di SDn 02 Baruah Gunuang
            . Semenjak Sd saya sudah mulai aktif di perolimpiadean
          </div>
          <br />
          <div className="a3">
            <p>MTs</p>
            Setingkat SLTp saya di MTsN 2 Lima puluh kota . Disana saya dapat
            berbagai pengalaman karna di sana adalah moment saya pertama kali
            ngekos. Saat MTs Saya juga aktif ikut berbagai macam olipiade dan
            berhasil mendapat juara 3 tingkat kabupaten. Selain itu saya juga
            aktif di Organisasi OSIM ( Organisasi siswa Intra Madrasah)
          </div>
          <br />
          <div className="a4">
            <p>MA</p>
            Masa MA tak kalah seru bagi saya . Disana saya dilatih di berbagai
            bidang . Mengajarkan saya cara mengambil keputusan . Pada masa MA
            saya juga aktif ikut olipiade . Saya pernah Meraih medali Perak dan
            Perungnggu pada ajang olipiade nasional yg di selenggarakan oleh
            POSI
          </div>
          <br />
          <div className="a5">
            <p>Perguruan Tinggi</p>
            Saya Berkuliah Di salah satu PTS di kota Padang yaitu Institut
            Teknologi Padang ( ITP ). Di ITP Saya mengambil Jurusan Informatics
            Engineering di bawah naungan Fakultas Teknik Institut Teknologi
            Padang
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

