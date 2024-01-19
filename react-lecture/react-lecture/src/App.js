
import './App.css';
import { InventoryMain } from './components/InventoryMain';
import { PRODUCTS } from './data/products';

function App() {
  return (
    <InventoryMain products={PRODUCTS}/>
  );
}

export default App;
