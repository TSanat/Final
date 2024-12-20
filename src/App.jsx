import './App.css'
import Product from'./pages/product/product.jsx'
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Main from "./pages/main/main.jsx";
import Order from "./pages/order/order.jsx";
import Checkout from "./pages/checkout/checkout.jsx";
function App() {


  return (
      <>
          <Header/>
          <Main/>
          <Order/>
          <Checkout/>
          <Footer/>
      </>
  )
}

export default App
