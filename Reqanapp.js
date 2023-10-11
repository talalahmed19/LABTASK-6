// import{Link} from "react-router-dom";
// import { useState } from "react";
// import {useRef} from 'react';

// import "./Req.css";
// function Reqanapp(){

//   const refr=useRef(null);
//   const refren=useRef(null);
//   const refrenc=useRef(null);
//   const refrence=useRef(null);
//   const refrnce=useRef(null);
//   const refre=useRef(null);
//   function HandleChange(){
//     refr.current.focus();
//     refr.current.style.color="blue";
//     refren.current.style.color="blue";
//     refrenc.current.style.color="blue";
//     refrence.current.style.color="blue";
//     refrnce.current.style.color="blue";
//     refre.current.style.color="blue";
  
//   }

//   const [cards, set] = useState([
//     {
//         title: 'Appointment # 1',
//         text:'I have appointment with Dr Jack',
//     },
//     {
//       title: 'Appointment # 2',
//       text:'I have appointment for E.N.T Specialist',
//   },
//   ])
//   function handleDelete(title) {
//     const updateCard = cards.filter((card) => card.title !==title);
//     set(updateCard);
//   }
//     return(
//       <div className="Req">
//         <form>
//   <div class="form-row">
//     <div class="col-md-20 mb-3">
//       <label for="validationDefault01">First name</label>
//       <input type="text" ref={refr}  class="form-control" id="validationDefault01" placeholder="First name"  required/>
//     </div>
//     <div class="col-md-20 mb-3">
//       <label for="validationDefault02">Last name</label>
//       <input type="text" ref={refren}  class="form-control" id="validationDefault02" placeholder="Last name"  required/>
//     </div>
//     <div class="col-md-20 mb-3">
//       <label for="validationDefaultUsername">Username</label>
//       <div class="input-group">
//         <div class="input-group-prepend">
//           <span class="input-group-text" id="inputGroupPrepend2">@</span>
//         </div>
//         <input type="text" ref={refrenc}  class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
//       </div>
//     </div>
//   </div>
//   <div class="form-row">
//     <div class="col-md-20 mb-3">
//       <label for="validationDefault03">City</label>
//       <input type="text" ref={refrence}  class="form-control" id="validationDefault03" placeholder="City" required/>
//     </div>
//     <div class="col-md-20 mb-3">
//       <label for="validationDefault04">State</label>
//       <input type="text" ref={refrnce}  class="form-control" id="validationDefault04" placeholder="State" required/>
//     </div>
//     <div class="col-md-20 mb-3">
//       <label for="validationDefault05">Zip</label>
//       <input type="text" ref={refre}  class="form-control" id="validationDefault05" placeholder="Zip" required/>
//     </div>
//   </div>
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input"  type="checkbox" value="" id="invalidCheck2" required/>
//       <label class="form-check-label" for="invalidCheck2">
//         Agree to terms and conditions
//       </label>
//     </div>
//   </div>
//   <button class="btn btn-primary" onClick={HandleChange} type="submit" className="submit">Submit form</button>
// </form>
// <h2 style={{marginTop:'80px'}}>Appointments</h2>
// <div style={{marginTop:'30px',width:'500px',display:'flex',flex:'wrap'}}>
// {
//                 cards.map((t) => (
          
// <div class="card w-50" style={{marginLeft:'10px'}}>
//   <div class="card-body">
//     <h5 class="card-title">{t.title}</h5>
//     <p class="card-text">{t.text}</p>
//   </div>
//   <div style={{marginLeft:'150px',marginTop:'-20px'}}>
// <button style={{width:'70px',backgroundColor:'grey',color:'white'}} onClick={() =>handleDelete(t.title)}>Delete</button>
// </div>
// </div>
//                 ))
//                 }
// </div>




// </div>

//     );
// }
// export default Reqanapp;
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Req.css";

function Reqanapp() {
  const [cards, setCards] = useState([
    {
      title: "Appointment #1",
      text: "I have an appointment with Dr. Jack",
    },
    {
      title: "Appointment #2",
      text: "I have an appointment for E.N.T Specialist",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
  });

  const [actionSuccess, setActionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a delay for the action.
    setTimeout(() => {
      setLoading(false);
      setActionSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        city: "",
        state: "",
        zip: "",
      });

      // Reset the success message after a certain time.
      setTimeout(() => {
        setActionSuccess(false);
      }, 3000);
    }, 2000);
  };

  function handleDelete(title) {
    const updatedCards = cards.filter((card) => card.title !== title);
    setCards(updatedCards);
  }

  return (
    <div className="Req">
      {actionSuccess && (
        <div className="success-message">Submission Successful</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              autoFocus
              onChange={handleChange}
              className="form-control"
              id="validationDefault01"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              id="validationDefault02"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="validationDefaultUsername">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              id="validationDefaultUsername"
              placeholder="Username"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-control"
              id="validationDefault03"
              placeholder="City"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-control"
              id="validationDefault04"
              placeholder="State"
              required
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="form-control"
              id="validationDefault05"
              placeholder="Zip"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <button
          className="btn btn-primary submit"
          type="submit"
          disabled={loading}
          style={{backgroundColor:"rgba(16, 71, 78, 0.597)"}}
        >
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>

      <h2 style={{ marginTop: "80px" }}>Appointments</h2>
      <div className="appointment-cards">
        {cards.map((t) => (
          <div className="card" key={t.title}>
            <div className="card-body">
              <h5 className="card-title">{t.title}</h5>
              <p className="card-text">{t.text}</p>
            </div>
            <div className="delete-button">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(t.title)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reqanapp;
