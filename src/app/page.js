import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  console.log("홈 페이지 동작");
  return (
    <>
      <h1>Next.js</h1>
      <p>Hello, world</p>
      <Image src="/home.png" alt="Picture of the author" width={50} height={50} />
    </>
  );
}
