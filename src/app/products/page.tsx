import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import clothesImage from '../../../public/images/clothes.jpg';
import Image from 'next/image';

// export const revalidate = 3;

async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes' />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

export default ProductsPage;
