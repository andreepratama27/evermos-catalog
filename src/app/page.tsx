import AppWrapper from "./ui/app-wrapper";
import CategoryList from "./ui/category-list";
import ProductList from "./ui/product-list";

export default async function Home() {
  return (
    <AppWrapper>
      <CategoryList />
      <ProductList />
    </AppWrapper>
  );
}
