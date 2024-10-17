import { useEffect, useState } from 'react';
import Products from './components/Products';
import axios from 'axios';
import Theme from './components/Theme';
function App() {
  const [productsList, setProductsList] = useState([]);
  const [themeType, setThemeType] = useState("light");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(result => {
      setProductsList(result.data)
    })
  }, [])
  return (
    <>
      <Theme themeType={themeType} setThemeType={setThemeType} />
      <Products productsList={productsList} themeType={themeType} />
    </>
  );
}

export default App;
