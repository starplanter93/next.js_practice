import React from 'react';
import { notFound } from 'next/navigation';

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
function Pants({ params }: Props) {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <div>{params.slug} 제품 설명 페이지</div>;
}

//동적 라우팅을 했다 하더라도, 특정 params에 대해서는 ssg를 적용하고 싶을 때, 아래와 같이 generateStaticParams 함수 사용한다.
export function generateStaticParams() {
  // ssg를 적용하고 싶은 params를 배열에 추가.
  const products = ['pants', 'skirt'];

  // 해당 배열을 mapping 한다. 이때, 각각의 요소들은 동적 라우팅 시 전달받은 params와 같은 형태여야 한다.
  return products.map((product) => ({
    slug: product,
  }));
}

export default Pants;
