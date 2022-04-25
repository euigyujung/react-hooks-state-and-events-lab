import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react/cjs/react.production.min";
 // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
function App() {
  const [darkMode, setDarkMode] = useState(false)
 
  // const appClass = false ? "App dark" : "App light"{
    function handleDarkMode(){
      setDarkMode(!darkMode)
      console.log(darkMode)
    }

  return (
    <div className={darkMode? "App dark":"App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{!darkMode ? "Dark mode" : "Light mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  }

export default App;
