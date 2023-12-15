// import React from 'react'
// import { useState } from 'react'
// import classes from './Contact.module.css';


// const Contact = () => {
  

//   const [firstName, setFirstName] = useState();
//   const [fname, setfname] = useState();

//   const [email, setEmail] = useState();
//   const [email1, setemail] = useState();

//   const [phone, setPhone] = useState();
//   const [phone1, setphone] = useState();

//   const [city, setCity] = useState();
//   const [city1, setcity] = useState();


//   const handleForm = (e) => {
//     e.preventDefault();
//     setfname(firstName)
//     setemail(email)
//     setphone(phone)
//     setcity(city)

//   }
//   return (
    
     
//         <form onSubmit={handleForm} className={`mt-2 text-center ${classes.form}`}>
          
//           <label className={`${classes.head2}`}>Enter Name :</label>
//           <input type='text' onChange={(e) => setFirstName(e.target.value)} className={`${classes.head1}`} /> <br/><br/>

        
//           <label className={`${classes.head2}`}>Enter Email :</label>
//           <input type='email' onChange={(e) => setEmail(e.target.value)} className={`${classes.head1}`} /><br /><br />

//           <label className={`${classes.head2}`}>Phone No :</label>
//           <input type='tel' onChange={(e) => setPhone(e.target.value)} className={`${classes.head1}`} /><br /><br />

//           <label className={`${classes.head2}`}>City : </label>
//           <input type='text' onChange={(e) => setCity(e.target.value)} className={`${classes.head1}`} /><br /><br />


//           <button type='submit' className={`${classes.button}`}>Submit</button>
//         </form>
      
      


    
//   )
// }


 

// export default Contact;

import React from 'react'
import Rating from './Rating';

import classes from './Contact.module.css';
const Contact = () => {


  

 
  return (

    
  <>
  <div className='contactUs container'>
    <img src='https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.jpg?s=1024x1024&w=is&k=20&c=ePzMmpr2JHgjnN6E7th3qqbNJyILNewIKUUJw1DSHG8=' alt='' style={{ height: "20rem", width: "84.3rem", marginTop: "5px" }} />
    <p className='cont_para' style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "bolder", marginTop: "5px" }}>Please drop us a line, we'd love to hear from you !<br />
      We'll  get back to you as soon as we can.</p>
  </div>

  <div className='d-flex'>
    <div className='p-3'>
      <h4 style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>Get In Touch</h4>
      <form style={{ padding: "10px", textAlign: "left" }}>
        <input type='text' placeholder='Name' className='outline outline-primary' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
        <input type='email' placeholder='Email' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
        <input type='tel' placeholder='Phone Number' style={{ height: "2.5rem", width: "50rem" }} /><br /><br />
        <textarea type='text' placeholder='Comments' style={{ height: "10rem", width: "50rem" }} /><br /><br />
        <button className="btn btn-success" type="submit">Send Message</button><br />
      </form>
    </div>

    <div className='p-3'>
      <h5>Name</h5>
      <p>Felix It Pvt Ltd</p>
      <h5>Address</h5>
      <p>907,Platinum Square, Vascon Weikfield Corporate<br /> Park Nagar Road, next to Hyatt Hotel, opp. WNS, Pune,<br /> Maharashtra 411014,<br />
        Telephone : +91-91-29912-991</p>
      <h5>Email</h5>
      <p>felixit@gmail.com</p>
      <h5>Rate Us</h5>
      <Rating/>
    </div><br/>
  </div>
  <div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2885560781506!2d73.90960317404729!3d18.561025167939533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c139e3055555%3A0xd5c2716ff5580211!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1690882909291!5m2!1sen!2sin" style={{width:"84rem", height:"20rem" , style:"border:0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

</>

  )
}




export default Contact;