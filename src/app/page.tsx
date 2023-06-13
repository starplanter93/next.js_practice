import Image from 'next/image';
import { Inter } from '@next/font/google';
import os from 'os'; //노드 api
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('hi');
  console.log(os.hostname());
  return <h1>홈페이지다!!</h1>;
}
