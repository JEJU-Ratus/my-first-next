// _를 파일 이름 앞에 붙여서 임시파일로 바꿔서 next에서 인식 못하게 설정
export default function createLayout({ children }) {
  console.log("생성 레이아웃 동작");
  return (
    <form>
      <h2>Create layout</h2>
      {children}
    </form>
  );
}
