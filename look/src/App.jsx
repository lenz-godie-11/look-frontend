import { useState } from "react";

import LandingPage from "./components/home.jsx";
import SignUp from "./components/signup.jsx";
import LogIn from "./components/login.jsx";
import ImageUpload from "./components/upload.jsx"; // Imports from your upload.jsx file

function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");

  return (
    <>
      <nav>
        <button onClick={() => setCurrentScreen("landing")}>Home Info</button>
        <button onClick={() => setCurrentScreen("login")}>Log In View</button>
        <button onClick={() => setCurrentScreen("signup")}>Sign Up View</button>
        <button onClick={() => setCurrentScreen("upload")}>
          Upload Picture
        </button>
      </nav>

      <main>
        {currentScreen === "landing" && (
          <LandingPage onNavigate={setCurrentScreen} />
        )}

        {currentScreen === "signup" && <SignUp onNavigate={setCurrentScreen} />}

        {currentScreen === "login" && <LogIn onNavigate={setCurrentScreen} />}

        {/* ✅ FIXED: Changed lowercase <upload> to uppercase <ImageUpload> */}
        {currentScreen === "upload" && (
          <ImageUpload onNavigate={setCurrentScreen} />
        )}
      </main>
    </>
  );
}

export default App;
