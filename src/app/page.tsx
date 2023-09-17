import { getProduct } from "./services/product.service";
import AppWrapper from "./ui/app-wrapper";
import CategoryList from "./ui/category-list";
import ProductList from "./ui/product-list";
import styles from "./page.module.scss";

export async function getData() {
  const response = await getProduct();

  return response;
}

export default async function Home() {
  const data = await getData();

  return (
    <AppWrapper>
      <CategoryList />

      <div className={styles.gridProductTitle}>
        <p>Produk List</p>
      </div>
      <ProductList data={data} />
    </AppWrapper>
  );
}
