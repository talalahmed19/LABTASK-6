// import "./Contact.css";
// function Contact(){
    
//     return(
//         <div className="contact">
//         <section class="mb-4">

//     {/* <!--Section heading--> */}
//     <h2 class="h1-responsive font-weight-bold">Contact us</h2>
//     {/* <!--Section description--> */}
//     <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//         a matter of hours to help you.</p>

//     <div class="row">

//         {/* <!--Grid column--> */}
//         <div class="col-md-7 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">

//                 {/* <!--Grid row--> */}
//                 <div class="row">
//                 <label for="name" class="">Your name</label>
//                     {/* <!--Grid column--> */}
//                     <div class="col-md-6">
//                         <div class="md-form mb-0">
//                             <input type="text" id="name" name="name" class="form-control"/>
                           
//                         </div>
//                     </div>
//                     {/* <!--Grid column--> */}
//                     <label for="email" class="">Your email</label>
//                     {/* <!--Grid column--> */}
//                     <div class="col-md-6">
                    
//                         <div class="md-form mb-0">
//                             <input type="text" id="email" name="email" class="form-control"/>
                            
//                         </div>
//                     </div>
//                     {/* <!--Grid column--> */}

//                 </div>
//                 {/* <!--Grid row-->

//                 <!--Grid row--> */}
//                 <label for="subject" class="">Subject</label>
//                 <div class="row">
//                     <div class="col-md-12">
//                         <div class="md-form mb-0">
//                             <input type="text" id="subject" name="subject" class="form-control"/>
                            
//                         </div>
//                     </div>
//                 </div>
//                 {/* <!--Grid row-->

//                 <!--Grid row--> */}
//                  <label for="message">Your message</label>
//                 <div class="row">
// {/* 
//                     <!--Grid column--> */}
//                     <div class="col-md-12">

//                         <div class="md-form">
//                             <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                           
//                         </div>

//                     </div>
//                 </div>
//                 {/* <!--Grid row--> */}
//                 <button type="submit" class="btn btn-primary" className="submit">Submit</button>
//             </form>
//             </div>

//     </div>

// </section>
// <div style={{height:'500px',width:'1270px'}}>
//     <h2 style={{marginTop:'100px'}}>Comment & Reviews</h2>
//     <h5 style={{color:'grey'}}>Alex:</h5>
//     <h6 style={{marginLeft:'50px',marginTop:'-28px',fontWeight:'normal'}}>Hospital staff is very good....and very cooperative</h6>
//     <h5 style={{color:'grey'}}>Bairstow:</h5>
//     <h6 style={{marginLeft:'90px',marginTop:'-28px',fontWeight:'normal'}}>Facilities in hospital are amazing</h6>
//     <h5 style={{color:'grey'}}>Hazzle:</h5>
//     <h6 style={{marginLeft:'70px',marginTop:'-28px',fontWeight:'normal'}}>Great to see they are accpti ng Government Health Cards....This is good for the peoples who dont have much capacity to afford</h6>
//     <h5 style={{color:'grey'}}>Wood:</h5>
//     <h6 style={{marginLeft:'65px',marginTop:'-28px',fontWeight:'normal'}}>Staff is very good they are keeping an eye on clealiness in rooms</h6>
// </div>

// </div>
//     )
// }
// export default Contact;
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form validation here.
    if (!name || !email || !subject || !message) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    // Show that the form submission is in progress.
    setIsSubmitting(true);

    // Simulate a delay for the form submission.
    setTimeout(() => {
      // Simulate form submission success.
      setSubmitSuccess(true);
      setSubmitError("");

      // Clear the form fields.
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Hide the success message after a certain time.
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

      // Reset the form submission status.
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact">
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold">Contact us</h2>
        <p>
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
        <div class="row">
          <div class="col-md-7 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-md-6">
                  <label for="name">Your name*</label>
                  <div class="md-form mb-0">
                    <input autoFocus type="text" id="name" name="name" class="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="email">Your email*</label>
                  <div class="md-form mb-0">
                    <input type="email" id="email" name="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
              </div>
              <label for="subject">Subject*</label>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
                  </div>
                </div>
              </div>
              <label for="message">Your message*</label>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea id="message" name="message" rows="4" class="form-control md-textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                </div>
              </div>
              {submitError && <div className="form-error">{submitError}</div>}
              <button type="submit" class={`btn ${isSubmitting ? "btn-secondary" : "btn-primary"} submit`} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitSuccess && <div className="success-message">Form submitted successfully.</div>}
            </form>
          </div>
        </div>
      </section>
      {/* ... Your existing code ... */}
    </div>
  );
}

export default Contact;
