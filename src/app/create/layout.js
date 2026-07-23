export default function createLayout({ children }) {
  console.log("생성 레이아웃 동작");
  return (
    <form>
      <h2>Create layout</h2>
      {children}
    </form>
  );
}
