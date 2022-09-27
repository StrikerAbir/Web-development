import './Products.css'
const Products = ({ product, handleAddToCart }) => {
    const { id, img, price, name, seller, ratings } = product;
    
  return (
    <div className="products-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Price: $ {price}</h4>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>ratting: {ratings} stars</small>
        </p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(product)}>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Products;