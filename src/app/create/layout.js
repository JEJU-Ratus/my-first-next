import styles from "./create.module.css";
export default function createLayout({ children }) {
  console.log("생성 레이아웃 동작");
  return (
    <form>
      <h2 className={styles.title}>Create layout</h2>
      {children}
    </form>
  );
}
