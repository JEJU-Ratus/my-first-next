export default async function Read(props) {
  console.log("읽기 페이지 동작");
  const { id } = await props.params;
  return (
    <>
      <h2>Read Page</h2>
      <p>parameter:{id}</p>
    </>
  );
}
