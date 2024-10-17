import { useEffect, useState, createContext } from 'react';
import Products from './components/Products';
import axios from 'axios';
import Theme from './components/Theme';

export const ThemeContext = createContext('light');
export const ProductsContext = createContext(null);

function App() {
  const [productsList, setProductsList] = useState([]);
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
      setProductsList(result.data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList, setProductsList }}>
      <ThemeContext.Provider value={themeType}>
        <Theme themeType={themeType} setThemeType={setThemeType} />
        <Products />
      </ThemeContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
