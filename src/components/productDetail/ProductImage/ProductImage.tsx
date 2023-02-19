import { motion } from "framer-motion";

type Props = {
  imgUrl: string;
  productName: string;
};

const ProductImage = ({ imgUrl, productName }: Props) => {
  return (
    <motion.div
      className="flex items-center justify-center basis-1/3"
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -5, scale: 1.1, shadow: "4px" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img src={imgUrl} alt={productName} className="rounded-sm" />
    </motion.div>
  );
};

export default ProductImage;
