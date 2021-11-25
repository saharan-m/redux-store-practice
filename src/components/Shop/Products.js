import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "m1",
    price: 6,
    title: "Test1",
    description: "This is a first product - amazing!",
  },
  {
    id: "m2",
    price: 7,
    title: "Test2",
    description: "This is a second product - amazing!",
  },
  {
    id: "m3",
    price: 5,
    title: "Test3",
    description: "This is a third product - amazing!",
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
