import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  // const cart = useSelector((state) => state.cart);
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;
    // const updatedItems = cart.items.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem };
    //   updatedItem.quantity++;
    //   updatedItem.totalPrice = updatedItem.totalPrice + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   const newItem = {
    //     title: title,
    //     id: id,
    //     quantity: 1,
    //     price: price,
    //     totalPrice: price,
    //   };
    //   updatedItems.push(newItem);
    // }
    // const newCart = {
    //   totalQuantity:newTotalQuantity,
    //   items:updatedItems
    // }
    // dispatch(cartActions.replaceCart(newCart));
    dispatch(
      cartActions.addItem({
        title,
        id,

        price,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
