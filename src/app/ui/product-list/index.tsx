import styles from "./product-list.module.scss";
import ProductCard from "../product-card";

export default function ProductList({ data }: { data: any[] }) {
  return (
    <>
      <div className={styles.gridProduct}>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
