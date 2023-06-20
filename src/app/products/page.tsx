import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

// export const revalidate = 3;

async function ProductsPage() {
  const products = await getProducts();

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
      <MeowArticle />
    </div>
  );
}

export default ProductsPage;
