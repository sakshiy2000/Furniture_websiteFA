import React from 'react'
import Card from './Card'



const Living = () => {
  return (

    <>
      <div className='banner container-fuild'>
        <img className='myimg' src='.\assets\Images\Livingmainimg.jpeg'/>
      </div>


     {/* theory porsion here */}

     <h1 className='text-center mt-3'>
          Living
      </h1>
      <div className='livingDiv container'>
         
      <p>
        The office furniture store online at Durian.in

        With our diverse network of dealers, distributors and retail outlets we are able to provide you with tailor-made solutions for your office and workspace. We offer an extensive portfolio of office chairs, tables, desks, file cabinets and office sofas to truly satisfy your every need. With a goal to create beautiful workspaces we work closely with you to provide quality furniture with warranty for a trouble free working environment.

        Modular office furniture for your workspace

        The flow of work today is moving towards a more fluid, shared space while organisations are still working with a rigid linear system that is geared towards workstations and conferences or meeting rooms. With improvised designs and a highly modular system of office furniture, you; as an organisation can encourage engagement with multiple teams and develop a more involved approach to work and the flow of getting it done in a systematic manner.

        Getting furniture for your office space? Talk to us for all your bulk furniture requirements.

        With over thirty years of experience our designers will work with you to create a holistic space that reflects your brand identity. With customised furniture options you can now create a space that is truly your own.Along with our partners, we look to create collaborative spaces for work that encourage a sense of purpose amongst the workforce. We aim to provide furniture designs that enhance the channels for communication and foster a sense of community to build a business together for a common goal. Talk to us for your office furniture requirements and consultation by dropping us a query online here.
      </p>
      </div>



      {/* <CardSection products={DumData} /> */}


      <Card />

      

    </>



  )
}

export default Living