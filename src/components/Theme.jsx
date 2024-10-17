import React from 'react';

function Theme({ themeType, setThemeType }) {
  const changeToDark = () => {
    setThemeType('dark');
  };
  const changeToLight = () => {
    setThemeType('light');
  };

  return (
    <div>
      <button onClick={changeToDark}>Dark</button>
      <button onClick={changeToLight}>Lght</button>
    </div>
  );
}

export default Theme;
