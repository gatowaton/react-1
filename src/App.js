import './App.css';
import data from "./Components/data.json"
import Card from './Components/Card/Card';
import ProductCard from './Components/productCard/ProductCard';
import Slider from './Components/Slider/Slider';
import SliderReact from './Components/Slider2/SliderReact';

function App() {
  return (
    <div className="App">
      <Slider/>
      <h1>Pet Store</h1>
      <Card/>
      <h2 className='h2'>Products</h2>
      <ProductCard products={data.products}/>
      <SliderReact/>
    </div>
  );
}

export default App;
