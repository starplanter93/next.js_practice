import Image from 'next/image';
import { Inter } from "next/font/google";
import os from 'os'; //노드 api
import Counter from '@/components/Counter';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('hi - 서버');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
      {/*로컬이 아니라 외부의 이미지 소스를 가져오고 싶을 땐, next.config에 등록하고, height와 width 속성을 반드시 주어야한다. */}
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        height={400}
        width={400}
      />
    </>
  );
}
