import React from 'react'

const Footer = () => {
  return (
    <>
      {/* review code here (Five star ***** ) 
      <div className='main-review'>
        <div class="rating">
          <input value="star-1" name="star-radio" id="star-1" type="radio" />
          <label for="star-1">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-2" type="radio" />
          <label for="star-2">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-3" type="radio" />
          <label for="star-3">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-4" type="radio" />
          <label for="star-4">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
          <input value="star-1" name="star-radio" id="star-5" type="radio" />
          <label for="star-5">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
          </label>
        </div>
      </div> */}

      {/* timer .......... */}
      {/* <div className='timer'>
        <div class="hourglassBackground">
          <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
          </div>
        </div>
      </div> */}
      {/* timer end */}





      {/* footer code */}
      <div className=" footer-bottom container-fluid mt-4 bg-dark">
        <div className="row">
          <div className="col-md-3 footer-bottom-cols mt-4">
            <h4 className="text-center text-light">ABOUT US</h4>
            <hr className="text-light" />
            <p className="text-light">
              Integer cursus scelerisque ipsum idefficitur. Donec a dui fringilla, gravidalorem ac, semper magna.
              Aeneanrhoncus ac lectus a interdum. Vivamussemper posuere dui, at ornare turpisultrices sit amet. Nulla
              cursus lorem utnisi porta, ac eleifend arcu ultrices.
            </p>

          </div>
          <div className="col-md-3 footer-bottom-cols mt-4">
            <h4 className="text-center text-light">OPENING HOURS</h4>
            <hr className="text-light" />
            <p className="text-light text-center">
              Monday : Closed<br />
              Tue-Wed : 09am - 10pm<br />
              Thu-Fri : 09am - 10pm<br />
              Sat-Sun : 09am - 10pm<br />
            </p>

          </div>
          <div className="col-md-3 footer-bottom-cols mt-4">
            <h4 className="text-center text-light">CONTACT INFORMATION</h4>
            <hr className="text-light" />
            <p className="text-light text-center">
              Ipsum Street,Lorem Tower,MO,<br />
              Columbia,508000 <br />

              +01 2000 800 9999 <br />

              info@admin.com
            </p>
          </div>

          <div className="col-md-3 footer-bottom-cols mt-4">
            <h4 className="text-center text-light">SUBSCRIBE</h4>
            <hr className="text-light" />
            <input type="text" placeholder="Email" value="" name="email" />
            <a href="#" className="btn3 btn btn-outline-primary" tabindex="-1" role="button"
              aria-disabled="true">SUBSCRIBE</a><br />
            <span>
              <i className="call fa-brands fa-facebook text-dark m-1"></i>
              <i className="call fa-brands fa-instagram text-dark m-1"></i>
              <i className="call fa-brands fa-twitter text-dark m-1"></i>
              <i className="call fa-brands fa-linkedin text-dark m-1"></i>
              <i className="call fa-brands fa-google-plus-g text-dark m-1"></i>
            </span>

          </div>

          <p className="text-dark text-center bg-light">All Rights Reserved &copy. 2022 The Furniture</p>


        </div>
      </div>



    </>






  );
}
export default Footer;