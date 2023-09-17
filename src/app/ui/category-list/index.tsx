import Link from "next/link";
import styles from "./category-list.module.scss";
import { getCategory } from "@/app/services/product.service";
import Image from "next/image";

export async function getData() {
  const response = await getCategory();
  return response;
}

export default async function CategoryList() {
  const category = await getData();

  return (
    <>
      <div className={styles.categoryTitle}>
        <p>Top Kategori</p>
      </div>

      <div className={styles.categorySlider}>
        {category.map((item) => (
          <div key={item.id} className={styles.categorySliderGrid}>
            <Image src={item.imgSrc} alt={item.name} objectFit="cover" fill />
            <div className={styles.categoryGridTitle}>
              <Link href={`/category/${item.id}`}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
