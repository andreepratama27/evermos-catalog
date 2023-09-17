"use client";
import Link from "next/link";
import styles from "./card.module.scss";
import Image from "next/image";
import { formatCurrency } from "@/app/lib/utils";
import { useStore } from "@/app/store/favoriteStore";

export default function ProductCard({ item }: { item: Product }) {
  const { addFavorite, isFavorited, removeFavorite } = useStore();
  const { id, title, price } = item;
  const imgRandomId = id * 10;

  const renderButton = () => {
    if (isFavorited(item)) {
      return (
        <div
          className={styles.favoriteButton}
          role="button"
          onClick={() => removeFavorite(item)}
        >
          <Image
            width={40}
            height={40}
            src="/love-red.png"
            alt="favorite-btn"
          />
        </div>
      );
    }

    return (
      <div
        className={styles.favoriteButton}
        role="button"
        onClick={() => addFavorite(item)}
      >
        <Image
          width={40}
          height={40}
          src="/love-white.png"
          alt="favorite-btn"
        />
      </div>
    );
  };

  return (
    <div className={styles.grid}>
      {renderButton()}
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
