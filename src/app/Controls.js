"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Controls() {
  const { id } = useParams();
  const router = useRouter();

  const handleDelete = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json)
      .then(() => {
        router.push(`/`);
        router.refresh();
      });
  };
  return (
    <div className="d-flex gap-1">
      <Link className="btn btn-primary" href="/create">
        Create
      </Link>
      {id && (
        <>
          <Link className="btn btn-secondary" href={`/update/${id}`}>
            Update
          </Link>
          <button className="btn btn-danger" type="button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
