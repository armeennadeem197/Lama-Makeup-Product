import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import styles from "@/styles/product.module.css"; // Import CSS module

interface propType {
  img: string;
  title: string;
  rating: number;
  price: number;
  sales: boolean;
}

const ProductCard: React.FC<propType> = ({
  img,
  title,
  rating,
  price,
  sales,
}) => {
  // Generate star rating based on the rating value
  const generateStars = (rating: number) => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) =>
        index < rating ? <FaStar key={index} /> : <CiStar key={index} />
      )}
    </div>
  );

  return (
    <div className={styles.productCard}>
      {/* Product Image and Sales Badge */}
      <div className={styles.imageContainer}>
        {sales && (
          <div className={styles.salesBadge}>SALES!</div>
        )}
        <Image
          src={img}
          width={200}
          height={300}
          alt={title}
          className={styles.productImage}
        />
      </div>

      {/* Product Title, Rating, and Price */}
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle}>{title}</h3>
        {generateStars(rating)}
        <p className={styles.price}>${price}.00</p>
      </div>

      {/* Add to Cart Button */}
      <button className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
