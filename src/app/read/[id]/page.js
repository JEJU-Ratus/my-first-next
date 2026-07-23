export default async function Read(props) {
  const { id } = await props.params;
  return (
    <>
      <h2>Read Page</h2>
      <p>parameter:{id}</p>
    </>
  );
}
