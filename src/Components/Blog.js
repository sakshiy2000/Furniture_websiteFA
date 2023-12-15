import React from 'react'

const Blog = () => {
  return (
    <>
    {/* Blog section */}
    <div class="our-blog">
        <h1 class="text-center mt-2 mb-2"> <ins>Summery</ins> </h1>
        <h4 class="text-center mt-3">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim <br/> veniam, quis nostrud exercitation ullamco laboris</h4>

    </div>

   <div class="our-blog">
    <div class="grid"> 
        <div class="container">
            <div class="row">
                <div class="col-md-3 grid-cols  mt-5">
                    <img src=".\assets\Images\BlogFirst-img.jpg"
                        height="240vh" width="290vw" alt=""/>
                </div>
                <div class="col-md-6 grid-cols mt-2">
                    <img src=".\assets\Images\BlogMiidle-img.jpg"
                       height="350vh" width="600vw" alt=""/>
                    <h4 class="text-center mt-3 mb-3">magna aliqua. Ut enim ad minim veniam,quis nostrud <br/>
                        exercitation ullamco laboris</h4>
                </div>
                <div class="col-md-3 grid-cols  mt-5">
                    <img src=".\assets\Images\BlogLast=img.jpg"
                        height="240vh" width="290vw" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>


      {/* <!-- bakground-imga --> */}
      <div class="scroll-me"></div>
      <div class="bg-image container">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris consequat consequat enim, non auctor massa ultrices non."
        <br />
        <p class="text-center h4">- Michael Strahan </p>


      </div>
      <div class="scroll-me"></div>

      
      

  {/* <!-- About-info --> */}
  <div class="about-info container">
    <div class="row g-0  position-relative">
       
      <div class="col-md-12 p-4 ps-md-0">
        <h1 class="mt-4 mb-4 text-center"><ins>The Little Summery</ins></h1>
        {/* <h6 class="text-center mt-3">Little Story</h6> */}
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris consequat consequat enim, non auctor massa ultrices non.
            Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Maecenas varius egestas diam, eu sodales metus scelerisque congue.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
            Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
            Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
            Donec gravida lorem elit, quis condimentum ex semper sit amet.
            Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
            
      </h4>
        
      </div>
    </div>
  </div>

    </>
  )
}

export default Blog;