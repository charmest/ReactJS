import '../App.css';
import Banner from './Banner'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Banner/>
      <ShoppingList/>
      {/* <Cart/> */}
      <Footer/>
    </div>
  );
}

export default App;
