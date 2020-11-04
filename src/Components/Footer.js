import React from 'react';
import "../Style/Footer.css";


function Footer() {

  return (

    <section>
      <footer className="footer-distributed">

        <div className="footer-right" >

          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-twitter'></i></a>
          <a href="#"><i class='bx bxl-youtube' ></i></a>
          <a href="#"><i class='bx bxl-instagram' ></i></a>

        </div>

        <div className="footer-left">

          <p className="footer-links">
            <a className="link-1" href="#">Home</a>


            <a href="#">Article</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p>Sporg ent. &copy; 2020</p>
        </div>

      </footer>
    </section>


  );
}
export default Footer;