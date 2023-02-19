import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  description: string;
};

const AboutProduct = ({ description }: Props) => {
  return (
    <div className="px-8">
      <AnimatePresence>
        <motion.p
          className="p-4 text-neutral-700 dark:text-zinc-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          exit={{ y: -20, opacity: 0 }}
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          {description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AboutProduct;
