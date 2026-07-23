export default async function Read(props) {
  console.log("읽기 페이지 동작");
  const { id } = await props.params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`); // 서버 컴포넌트에서의 fetch
  const topics = await response.json(); // 서버 컴포넌트에서의 fetch
  return (
    <>
      <h2>{topics.title}</h2>
      <p>{topics.message}</p>
    </>
  );
}
