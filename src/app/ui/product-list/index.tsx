import { getProduct } from "@/app/services/product.service";
import styles from "./product-list.module.scss";
import ProductCard from "../product-card";

export async function getData() {
  const response = await getProduct();

  return response;
}

export default async function ProductList() {
  const data = await getData();
  return (
    <>
      <div className={styles.gridProductTitle}>
        <p>Produk List</p>
      </div>

      <div className={styles.gridProduct}>
        {data.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
