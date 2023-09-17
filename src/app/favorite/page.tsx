"use client";
import { useStore } from "../store/favoriteStore";
import AppWrapper from "../ui/app-wrapper";
import ProductList from "../ui/product-list";
import styles from "./page.module.scss";

export default function FavoritePage() {
  const { favorites } = useStore();

  const renderContent = () => {
    if (favorites.length) {
      return <ProductList data={favorites} />;
    }

    return (
      <div className={styles.emptyWrapper}>
        <p>Katalog Favorite sedang kosong</p>
        <p>Tambahkan sekarang juga!</p>
      </div>
    );
  };

  return (
    <AppWrapper>
      <div className={styles.productTitle}>Favorit Katalog</div>
      {renderContent()}
    </AppWrapper>
  );
}
