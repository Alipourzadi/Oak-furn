import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { reviews } from "../../../shared/productType";
import CommentForm from "./CommentForm/CommentForm";

type Props = {
  reviews: reviews[];
};

const ProductReviews = ({ reviews }: Props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  return (
    <div className="px-4 mb-40 text-center mx-auto space-y-4">
      {reviews.map((item) => {
        return (
          <div className="px-1 text-left pb-3 border-b-[1px] last:border-b-0">
            <div className="flex items-center gap-2 text-neutral-700 dark:text-zinc-200">
              <StarIcon className="w-5 text-amber-400" />
              {item.rating}
            </div>
            <p className="text-neutral-700 dark:text-zinc-200">{item.text}</p>
          </div>
        );
      })}
      <button
        className="bg-zinc-400 px-4 py-3 text-center rounded-sm hover:text-white hover:bg-zinc-600"
        onClick={() => {
          setFormIsVisible((pervState) => !pervState);
        }}
      >
        Share Your Experience
      </button>
      {formIsVisible && <CommentForm />}
    </div>
  );
};

export default ProductReviews;
