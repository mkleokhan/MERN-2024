import { useState } from "react";
import bgimage from '../4.avif'
import { Link } from "react-router-dom";

function Signup() {
  const [isLandlord, setIsLandlord] = useState(false); // Fixed useState hook

  return (
    <>
    {/* <form action className="form-group">
    <button className="btn btn-primary" onClick={()=>{setIsLandlord(true)}}>Landlord</button>
    <button className="btn btn-primary" onClick={()=>{setIsLandlord(false)}}>Tenant</button>
    </form> */}
  
        
        <div className="container mt-4 myContainer">
        
          <h1>Sign up as Landlord</h1>
          
          <form class="row g-3 form-group">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Select State</option>
      <option>KPK</option>
      <option>Punjab</option>
      <option>Sindh</option>
      <option>Balochistan</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">

    
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign Up</button>
    <h4>Already have an account??? <Link to='/SignIn'>Sign in here</Link></h4>
  </div>
</form>
          </div>
</>)
}

export default Signup;
