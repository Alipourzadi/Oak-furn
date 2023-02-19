import React from "react";
import commonSectionImg from "../../assets/images/common-section-image.jpg";

type Props = {
  innerText: string;
};

const CommonSection = ({ innerText }: Props) => {
  return (
    <div className="flex items-center justify-center h-64 w-full">
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max bg-zinc-700 dark:bg-zinc-400 p-1 rounded-sm shadow-2xl dark:shadow-zinc-50/5 dark:drop-shadow-sm">
        <h1 className="text-zinc-50 dark:text-neutral-800 text-4xl md:text-6xl font-semibold">
          {innerText}
        </h1>
      </div>
    </div>
  );
};

export default CommonSection;
