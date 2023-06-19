import React from 'react';
import { notFound } from 'next/navigation';
import { getProduct, getProducts } from '@/service/products';

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
function Pants({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <div>{product} 제품 설명 페이지</div>;
}

//동적 라우팅을 했다 하더라도, 특정 params에 대해서는 ssg를 적용하고 싶을 때, 아래와 같이 generateStaticParams 함수 사용한다.
export function generateStaticParams() {
  // ssg를 적용하고 싶은 params를 배열에 추가.
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄것임(SSG)
  const products = getProducts();

  // 해당 배열을 mapping 한다. 이때, 각각의 요소들은 동적 라우팅 시 전달받은 params와 같은 형태여야 한다.
  return products.map((product) => ({
    slug: product,
  }));
}

export default Pants;
