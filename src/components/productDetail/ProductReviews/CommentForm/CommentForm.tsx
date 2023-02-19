import React from "react";

type Props = {};

const CommentForm = (props: Props) => {
  const formSubmitHandler = () => {};
  return (
    <form
      className="flex flex-col items-center justify-center gap-4 w-full dark:text-zinc-100"
      onSubmit={formSubmitHandler}
    >
      <div className="flex flex-col items-start w-3/4 ">
        <label htmlFor="input">Name</label>
        <input
          type="text"
          className="w-full outline-none rounded-sm px-2 py-1 bg-zinc-100 dark:bg-neutral-700"
        />
      </div>
      <div className="flex flex-col items-start w-3/4">
        <label htmlFor="input">Comment</label>
        <textarea
          rows={5}
          className="w-full outline-none rounded-sm px-2 py-1 bg-zinc-100 resize-none dark:bg-neutral-700"
        />
      </div>
      <div className="flex flex-col items-start w-3/4">
        <label>Rate</label>
        <input
          type="number"
          min={0}
          max={5}
          step={0.1}
          className="outline-none rounded-sm px-2 py-1 bg-zinc-100 resize-none dark:bg-neutral-700"
        />
      </div>
      <button
        className="bg-zinc-400 px-4 py-3 rounded-sm hover:text-white hover:bg-zinc-600"
        type="submit"
      >
        Add Comment
      </button>
    </form>
  );
};

export default CommentForm;
