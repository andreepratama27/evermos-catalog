import Link from "next/link";
import styles from "./card.module.scss";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";

export default function ProductCard({ id, title, price }) {
  const imgRandomId = id * 10;

  return (
    <div className={styles.grid}>
      <div className={styles.productImage}>
        <Image
          src={`https://picsum.photos/id/${imgRandomId}/200/300`}
          alt={title}
          fill
        />
      </div>
      <div className={styles.productTitle}>
        <Link href={`/product/${id}`}>{title}</Link>

        <p className={styles.productPrice}>{formatCurrency(price)}</p>
      </div>
    </div>
  );
}
