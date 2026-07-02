export default function LandingPage({ onNavigate }) {
  return (
    <div>
      <header>
        <h1>Project Management Platform</h1>
        <p>
          Our application helps small teams organize tasks, track project
          progress, and collaborate in real-time.
        </p>
        <div>
          <button onClick={() => onNavigate("signup")}>Sign Up</button>
          <button onClick={() => onNavigate("login")}>Log In</button>
        </div>
      </header>

      <section>
        <h2>What You Can Do Here</h2>
        <div>
          <h3>we check efficiency</h3>
          <p>
            we analyze and optimize workflows for better performance in your car
            .
          </p>
        </div>
        <div>
          <h3>Secure Accounts</h3>
          <p>Your data is protected with secure encryption protocols.</p>
        </div>
        <div>
          <h3>Collaborate</h3>
          <p>
            Invite team members to work on shared workspaces simultaneously.
          </p>
        </div>
      </section>

      <section>
        <h2>Ready to start?</h2>
        <p>Create an account today to access your dashboard.</p>
        <button onClick={() => onNavigate("signup")}>
          Create Free Account
        </button>
      </section>
    </div>
  );
}
