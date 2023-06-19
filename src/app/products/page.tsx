import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

// export const revalidate = 3;

async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 1 },
    // cache: 'no-store',
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <div>
      제품 소개 페이지!
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </div>
  );
}

export default ProductsPage;
