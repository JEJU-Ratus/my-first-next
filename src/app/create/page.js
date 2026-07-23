"use client";
import styles from "./create.module.css";
import { useRouter } from "next/navigation";

export default function Create() {
  console.log("생성 페이지 동작");
  const router = useRouter();
  return (
    <>
      <h3 className={styles.title}>Create Form</h3>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.title.value;
          const message = e.target.message.value;
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, message }), // title, message가 객체형태로 바뀌어서 들어감.
          };
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics`, options)
            .then(res => res.json())
            .then(result => {
              router.push(`/read/${result.id}`);
              router.refresh();
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="글 제목을 입력해주세요."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3" name="message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}
