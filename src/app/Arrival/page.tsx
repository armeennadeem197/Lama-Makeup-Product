import Link from "next/link";
import Data from "@/productDetails/productData";
import ProductCard from "@/product";
import './arrival.css';

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      <h2>New Arrival</h2>

      {/* Category Links */}
      <div className="new-arrival-links">
        <ul>
          <li><Link href="/">All</Link></li>
          <li><Link href="/">Skin Care</Link></li>
          <li><Link href="/">Lipstick</Link></li>
          <li><Link href="/">Makeup</Link></li>
          <li><Link href="/">Nail & Wax</Link></li>
        </ul>
      </div>

      {/* Product Cards */}
      <div className="product-card-container">
        {Data.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            rating={item.rating}
            price={item.price}
            sales={item.sales}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
