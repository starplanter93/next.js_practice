import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";

function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}

export default ProductsLayout;
