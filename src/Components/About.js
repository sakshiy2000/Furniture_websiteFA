import React from 'react'
import AboutCard1 from './AboutCard1'

const About = () => {
  return (
    <>
      <div className='banner container-fluid'>
        <img className='myimg1' src='.\assets\Images\project-component-banner-img.jpg' />
      </div>


      <AboutCard1 />


      {/* here about img and side paragraph */}
      <div className='About-Heading text-center mt-4'>
        <h1>About Us</h1>
        <div class="About-bgimg card mb-3 mt-3">
          <div class="row g-0 bg-light position-relative">
            <div class="col-md-4">
              <img src=".\assets\Images\About-US1-sideimg.jpg" className='AboutUS-img' />
            </div>
            <div class="col-md-8">
              <div class="card-body">
              {/* <div class="col-md-6 mb-md-0 p-md-4"> */}
              <p className='Aboutpara'>
                  Our Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spacesOur Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- about middle card section--> */}
      <div className='About-Heading text-center mt-4'>
        <h1>About Us</h1>
        <div class="About-bgimg card mb-3 mt-3">
          <div class="row g-0 bg-light position-relative">
            <div class="col-md-4">
              <img src=".\assets\Images\About-US2-sideimg.jpg" className='AboutUS-img' />
            </div>
            <div class="col-md-8">
              <div class="card-body">
              {/* <div class="col-md-6 mb-md-0 p-md-4"> */}
              <p className='Aboutpara'>
                  Our Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spacesOur Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  about middle card section --> */}



      <div className='About-Heading text-center mt-4'>
        <h1>Our Manufacturing Capabilities</h1>
        <div class="About-bgimg card mb-3 mt-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=".\assets\Images\About-US3-sideimg.jpg" className='AboutUS-img' />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p className='Aboutpara'>
                  Our Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spacesOur Door and door frame unit is located in Maharashtra with a capacity of producing 8000 doors every month. This unit at any given time carries a raw material inventory that can support production of our doors for 6 months. The production line is equipped with state of the art machinery enabling us to provide a complete entryway solution for your spaces.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>






    </>
  )
}

export default About;