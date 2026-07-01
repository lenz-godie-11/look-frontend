function Login() {
  return (
    <div>
      <h1>LogIn</h1>
      <div>
        <label>email</label>
        <input type="email" placeholder="email" />
      </div>
      <div>
        <label>password</label>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <label>confirm</label>
        <input type="password" placeholder="confirm" />
      </div>
      <button type="submit">login</button>
    </div>
  );
}
export default Login;
