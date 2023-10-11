// import "./Login.css";

// function Login(){

//     return(
// <div className="login">
//         <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
 
//   <div class="form-check mb-3">
//     <label class="form-check-label">
//       <input class="form-check-input"  type="checkbox" name="remember"/> Remember me
//     </label>
//   </div>

//   <button type="submit" class="btn btn-primary" className="submit">Submit</button>
// </form>
// </div>
//     );
// }
// export default Login;
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setError("");
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Show a loading indicator while performing login.
    setIsLoading(true);

    // Simulate a delay for the login process (you can replace this with your actual login logic).
    setTimeout(() => {
      setIsLoading(false);

      // Check the user's credentials and show an error message if incorrect.
      if (email === "user@example.com" && password === "password") {
        // Successful login, you can redirect the user to another page here.
        setError("");
        setSuccessMessage("Login successful! Redirecting...");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }, 1500); // Simulated delay of 1.5 seconds for feedback.
  };

  // Create a CSS class for the button style to reuse it consistently.
  const buttonStyle = {
    backgroundColor: "rgba(16, 71, 78, 0.597)",
    border: "none",
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoFocus
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="remember"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={buttonStyle}
          disabled={isLoading} // Disable the button during form submission.
        >
          {isLoading ? "Logging in..." : "Submit"}
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          style={{buttonStyle , marginLeft:"15px",backgroundColor:"rgba(16, 71, 78, 0.597)"}}
          onClick={handleClear}
          
          
        >
          Cancel
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default Login;
