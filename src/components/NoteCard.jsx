
import React from "react";

const NoteCard = ({ data }) => {

  console.log(data.id);
  
  return (
    <div className="border p-5 flex flex-col gap-y-3 my-5 rounded-lg shadow-md">
      <a
        href={`note/${data.id}`}
        className="font-bold text-2xl hover:text-yellow-600"
      >
        {data.title}
      </a>
      <p>{data.body}</p>
      <p className="text-sm text-neutral-500">
        {new Date(data.createAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default NoteCard;
