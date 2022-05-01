import React  from 'react'

const Login = props => {
  const open = () => {props.set(!props.name)}
  return (
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" />
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<div onClick={open}className="cursor"><p>Register</p></div>
</>
  );
};
export default Login