"use client";

import Link from "next/link";

export default function Listitem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link prefetch={false} href={`/detail/${result[i]._id.toString()}`}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link prefetch={false} href={`/edit/${result[i]._id.toString()}`}>
            ✏️
          </Link>
          <span
            onClick={(e) => {
              //   fetch("/api/post/delete", {
              //     method: "DELETE",
              //     body: result[i]._id.toString(),
              //   })
              //     .then((r) => r.json())
              //     .then(() => {
              //       e.target.parentElement.style.opacity = 0;
              //       setTimeout(() => {
              //         e.target.parentElement.style.display = "none";
              //       }, 1000);
              //     });
              fetch("/api/test?name=kim");
            }}
          >
            🗑️
          </span>
          {/* <DetailLink /> */}
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
