import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

function Pants({ params }: Props) {
  return <div>{params.slug} 제품 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

export default Pants;
