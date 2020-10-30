import React, { useContext } from 'react';
import { Theme } from './ThemeContext';

function ThemeButton(props) {

  const themeContext = useContext(Theme);

  function setLightTheme() {
    themeContext[1]("light");
    console.log(themeContext[0])
  } 

  function setDarkTheme() {
    themeContext[1]("dark");
    console.log(themeContext[0])
  }

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="toggle-btn btn btn-secondary active shadow-none" onClick={setLightTheme}>
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Light
      </label>
      <label className="toggle-btn btn btn-secondary shadow-none" onClick={setDarkTheme}>
        <input type="radio" name="options" id="option2" autoComplete="off" />Dark
      </label>
    </div>
  );
}

export default ThemeButton;