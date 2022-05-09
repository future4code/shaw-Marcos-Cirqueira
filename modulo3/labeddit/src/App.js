import React from "react";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import FeedPage from "./pages/FeedPage/FeedPage";
// import PostPage from "./pages/PostPage/PostPage";
import { Router } from "./routes/Router";

const App = () => {
  return (
    <div>
      {/* <LoginPage />
      <RegistrationPage />
      <FeedPage />
      <PostPage /> */}
      <Router />
    </div>
  );
}
export default App;

