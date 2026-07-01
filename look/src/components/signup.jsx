function Signup() {
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
