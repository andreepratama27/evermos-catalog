import { getCategoryDetail } from "@/app/services/product.service";
import Image from "next/image";
import AppWrapper from "@/app/ui/app-wrapper";
import styles from "./page.module.scss";
import ProductList from "@/app/ui/product-list";

export async function getData({ id }: { id: number }) {
  const response = await getCategoryDetail({ id });
  return response;
}

export default async function Category({ params }: { params: { id: number } }) {
  const data = await getData({ id: params.id });

  return (
    <AppWrapper>
      <div className={styles.categoryTitle}>
        <p>{data.name}</p>

        <div className={styles.categoryImage}>
          <Image src={data.imgSrc} objectFit="cover" alt={data.name} fill />
        </div>
      </div>

      <ProductList />
    </AppWrapper>
  );
}
