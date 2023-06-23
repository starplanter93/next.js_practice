'use client';
import React, { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>;
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default ProductsError;
