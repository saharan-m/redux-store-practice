import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const amount = useSelector((item) => item.cart.totalQuantity);
  const clickHandler = (event) => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
