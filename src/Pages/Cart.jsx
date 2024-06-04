import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Socials from "../Components/Socials";
import BestSeller from "../Components/main-components/BestSeller";


function Cart() {
  return (
    <>
      <Socials />
      <NavBar />
      <section>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Shopping Cart</a>
      </section>
      <section>
        <main>
          <h1>Shopping Cart</h1>
          <div>
            <p>Item Details</p>
            <p>Quantity</p>
            <p>Price</p>
            <>ADD CART COMPONENTS</>
          </div>
        </main>
        <aside>
          <span>
            <b>Order Summary</b>
            <p>4 Items</p>
          </span>
          <span>
            <p>Delkivery Charges</p>
            <p>Add your delivery address to checkout to see delivery charges</p>
          </span>
          <hr />
          <span>
            <p>Subtotal</p>
            <p>N26,500</p>
          </span>
          <hr />
          <span> 
            <p>Total</p>
            <p>N26,500</p>
          </span>
          <hr />
          <span>
            <p>Excluding delivery Services</p>
          </span>
          <span>
            <button type="submit">Proceed to Checkout</button>
          </span>
          <hr />
          <span>
            <span>master card</span><span>pay stack</span>
          </span>
        </aside>
      </section>
      <section>
        <h1>PRODUCTS RELATED TO ITEMS ON YOUR CART</h1>
        <BestSeller />
      </section>
      <section></section>
      <Footer />
    </>
  );
}

export default Cart;
