export default function UpdateLayout({ children }) {
  console.log("수정 레이아웃 동작");
  return (
    <form>
      <h2>Update layout</h2>
      {children}
    </form>
  );
}
