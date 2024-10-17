import { useEffect, useState, createContext } from 'react';
import Products from './components/Products';
import axios from 'axios';
import Theme from './components/Theme';

export const ThemeContext = createContext('light');


function App() {
  const [productsList, setProductsList] = useState([]);
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
      setProductsList(result.data);
    });
  }, []);


  return (
    <ThemeContext.Provider value={themeType}>
      <Theme themeType={themeType} setThemeType={setThemeType} />
      <Products productsList={productsList} />
    </ThemeContext.Provider>
  );
}

export default App;
