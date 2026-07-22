import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const metadata = {
  title: "웹 언어",
  description: "웹 페이지 구현하기",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <h1>
              <a className="navbar-brand" href="#">
                Web
              </a>
            </h1>
            <ul className="nav mb-2 mb-lg-0 d-flex">
              <li className="nav-item">
                <a className="nav-link" href="/read/1">
                  HTML
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read/2">
                  CSS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read/3">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          {children}
          <div className="d-flex gap-1">
            <a className="btn btn-primary" href="/create">
              Create
            </a>
            <a className="btn btn-secondary" href="/update">
              Update
            </a>
            <a className="btn btn-danger" href="/delete">
              Delete
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}

/*


<button type="button" class="btn btn-success">Success</button>

*/
