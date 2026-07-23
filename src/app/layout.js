// "use client"; // 클라이언트 컴포넌트 "처럼" 돌아가라(클라이언트 모듈 사용 가능하게)
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Script from "next/script";
// import { useState, useEffect } from "react"; // 클라이언트 모듈

// 서버 컴포넌트에서 메타데이터를 사용하기에 use client 같은걸로 클라이언트 컴포넌트로 인식하면 주석
export const metadata = {
  title: "웹 언어",
  description: "웹 페이지 구현하기",
};

export default async function RootLayout({ children }) {
  // const [topics, setTopics] = useState([]); // topic 저장
  // useEffect(() => {
  //   // 토픽을 기본적으로 한번만 불러오기
  //   fetch("http://localhost:9999/topics") // 서버의 토픽 주소 - 서버던 클라이언트던 다 사용 가능(fetch)
  //     .then(res => res.json())
  //     .then(result => setTopics(result));
  // }, []);
  // fetch(`https://...`, { next: { revalidate: false | 0 | number } })
  const response = await fetch("http://localhost:9999/topics"); // 서버 컴포넌트에서의 fetch
  const topics = await response.json(); // 서버 컴포넌트에서의 fetch

  console.log("공통 레이아웃 동작");
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <h1>
              <Link className="navbar-brand" href="/">
                Home
              </Link>
            </h1>
            <ul className="nav mb-2 mb-lg-0 d-flex">
              {/* 토픽 배열을 map을 이용해 정해진 토픽 가져와서 메뉴 만들기 - 이건 서버컴포넌트로 돌아감. 유저 인터랙션이 따로 필요 없음. */}
              {topics.map(topic => {
                return (
                  <li className="nav-item" key={topic.id}>
                    <Link className="nav-link" href={`/read/${topic.id}`}>
                      {topic.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <main>
          {children}
          <hr />
          <div className="d-flex gap-1">
            <Link className="btn btn-primary" href="/create">
              Create
            </Link>
            <Link className="btn btn-secondary" href="/update">
              Update
            </Link>
            <Link className="btn btn-danger" href="/delete">
              Delete
            </Link>
          </div>
        </main>
        <Script src="/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

/*


<button type="button" class="btn btn-success">Success</button>

*/
