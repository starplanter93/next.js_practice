import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

//https://nextjs.org/docs/basic-features/pages
//https://beta.nextjs.org/docs/routing/fundamentals
//https://beta.nextjs.org/docs/routing/defining-routes
async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }

  return (
    <>
      <div>{product.name} 제품 설명 페이지</div>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width='300'
        height='300'
      />
      <GoProductsButton />
    </>
  );
}

//동적 라우팅을 했다 하더라도, 특정 params에 대해서는 ssg를 적용하고 싶을 때, 아래와 같이 generateStaticParams 함수 사용한다.
export async function generateStaticParams() {
  // ssg를 적용하고 싶은 params를 배열에 추가.
  const products = await getProducts();

  // 해당 배열을 mapping 한다. 이때, 각각의 요소들은 동적 라우팅 시 전달받은 params와 같은 형태여야 한다.
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default ProductPage;
