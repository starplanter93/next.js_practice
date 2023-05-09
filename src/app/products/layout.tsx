import React from "react";
import styles from "./layout.module.css";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">여성복</a>
        <a href="">남성복</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

export default ProductsLayout;
