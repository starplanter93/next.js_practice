'use client';

import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  console.log('hi - 클라이언트');
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}

export default Counter;
