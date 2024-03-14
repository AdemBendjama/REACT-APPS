import ProductItem from './ProductItem';
import classes from './Products.module.css';
const productList = [
  {
    id: 'p1',
    title: 'Test 1',
    price: 6,
    description: 'This is the first product - amazing!'
  },
  {
    id: 'p2',
    title: 'Test 2',
    price: 8,
    description: 'This is the second product - awesome!'
  },
  {
    id: 'p3',
    title: 'Test 3',
    price: 10,
    description: 'This is the third product - fantastic!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map(product => (
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
