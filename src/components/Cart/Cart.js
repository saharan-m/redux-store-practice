import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((item) => item.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((citem) => (
          <CartItem
            key={citem.id}
            item={citem}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
