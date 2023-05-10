import Link from "next/link";
import React from "react";

const products = ["shirt", "pants", "skirt", "shoes"];

function ProductsPage() {
  return (
    <div>
      제품 소개 페이지!
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
