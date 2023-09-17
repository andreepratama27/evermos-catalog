import AppWrapper from "@/app/ui/app-wrapper";
import styles from "./page.module.scss";
import { getProductDetail } from "@/app/services/product.service";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export async function getData({ id }: { id: number }) {
  const response = await getProductDetail({ id });

  return response;
}

export default async function Product({ params }: { params: { id: number } }) {
  const data = await getData({ id: params.id });
  const imgRandomId = params.id * 10;

  return (
    <AppWrapper>
      <div className={styles.imageWrapper}>
        <Image
          src={`https://picsum.photos/id/${imgRandomId}/800/900`}
          alt={data.title}
          fill
        />
      </div>

      <div className={styles.productTitle}>
        <p>{data.title}</p>
        <p className={styles.productPrice}>{formatCurrency(data.price)}</p>
      </div>

      <div className={styles.productDescription}>
        <p className={styles.productDescriptionTitle}>Description</p>
        <p>{data.description}</p>
      </div>
    </AppWrapper>
  );
}
