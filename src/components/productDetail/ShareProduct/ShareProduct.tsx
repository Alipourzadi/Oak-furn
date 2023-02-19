import { useState } from "react";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  showShareModal: (value: boolean) => void;
};

const ShareProduct = ({ showShareModal }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const showModalHandlar = () => {
    showShareModal(true);
  };
  return (
    <div className="flex items-center gap-5">
      <ShareIcon className="w-5 cursor-pointer" onClick={showModalHandlar} />
      <motion.button
        whileTap={{ scale: 1.5 }}
        onClick={() => setIsLiked((pervState) => !pervState)}
      >
        {!isLiked && <HeartIcon className="w-5 hover:text-[#bf6d78]" />}
        {isLiked && <HeartIconSolid className="w-5 text-[#ae5863]" />}
      </motion.button>
    </div>
  );
};

export default ShareProduct;
