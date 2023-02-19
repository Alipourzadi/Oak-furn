import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import ShareProduct from "../ShareProduct/ShareProduct";

type Props = {
  productName: string;
  category: string;
  avgRating: number;
  price: number;
  shortDesc: string;
  showModal: (value: boolean) => void;
};

const ProductInformation = ({
  productName,
  category,
  avgRating,
  price,
  shortDesc,
  showModal,
}: Props) => {
  return (
    <motion.div
      className="basis-1/2 space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="space-y-4 dark:text-zinc-200 text-neutral-700">
        <div>
          <h1 className="text-4xl font-bold">{productName}</h1>
          <p className="text-xl font-medium">{category}</p>
        </div>
        <div className="flex items-center justify-center gap-4 p-1 rounded-sm w-fit">
          <div className="flex space-x-2">
            <StarIcon className="w-5 text-amber-400" />
            <p className="font-light text-sm">{avgRating}</p>
          </div>
          <ShareProduct showShareModal={showModal} />
        </div>
        <div className="flex items-center gap-5">
          <p className="font-base text-xl">{`${price}$`}</p>
          <button className=" bg-zinc-400 px-3 py-3 rounded-sm hover:text-white hover:bg-zinc-600">
            Add to cart
          </button>
        </div>
      </div>
      <div className="border-t-2 w-fit text-justify pt-4 text-neutral-700 dark:text-zinc-200">
        {shortDesc}
      </div>
    </motion.div>
  );
};

export default ProductInformation;
