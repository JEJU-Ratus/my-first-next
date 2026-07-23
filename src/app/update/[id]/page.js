"use client";
import { useRouter, useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Update() {
  console.log("수정 페이지 동작");
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${id}`)
      .then(res => res.json())
      .then(result => {
        setTitle(result.title);
        setMessage(result.message);
      });
  }, [id]);
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      message,
    }),
  };
  return (
    <>
      <h3>Update Form</h3>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          fetch(`http://localhost:9999/topics/${id}`, options)
            .then(res => res.json())
            .then(result => {
              router.push(`/read/${result.id}`);
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
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            name="message"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}
