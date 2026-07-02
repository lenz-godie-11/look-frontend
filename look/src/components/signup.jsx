import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //perform signup logic here and sent to server
  };

  return (
    <div>
      <div>
        <h1>create account</h1>
        <div>
          <label>email</label>
          <input type="email" placeholder="email" />
        </div>
      </div>
      <div>
        <label>password</label>
        <input type="password" placeholder="password" />
      </div>
      <button type="submit">signup</button>
    </div>
  );
}
export default Signup;
