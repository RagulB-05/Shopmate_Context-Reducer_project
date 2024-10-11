import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";
import useTitle from "../hooks/useTitle";

const Cart = () => {
  useTitle("Cart");
  const { total, cartList } = useCart();

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} / ₹{total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}

        <Link to="/" className="backbutton">
          <button onClick={() => addToCart(product)}>Back to Home</button>
        </Link>
      </section>
    </main>
  );
};

export default Cart;
