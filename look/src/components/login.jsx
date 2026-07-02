import useState from "react";

function Login() {
  const [credentials, setCredentials] = useState({
    email: " ",
    password: " ",
  });

  const [message,setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e,target.value});
  };

  const handleSubmit = (e) =>{
    e,preventDefault();
    //perform login logic here and send to server 
  }

  return (
    <div>
      <h1>LogIn</h1>
      <div>
        <label>email</label>
        <input
          type="email"
          placeholder="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>

      <button type="submit">login</button>
    </div>
  );
}
export default Login;
