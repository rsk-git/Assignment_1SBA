import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import NewUserRegistrationForm from "./pages/NewUserRegisterForm";
import Error from "./pages/Error";
import CreateRecipe from "./pages/CreateRecipe";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<NewUserRegistrationForm />} />
        <Route path="/error" element={<Error />} /> {/* Keep this route for displaying error */}
        <Route path="/recipe/createrecipe" element={<CreateRecipe />} />
        <Route path="/recipes" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;
