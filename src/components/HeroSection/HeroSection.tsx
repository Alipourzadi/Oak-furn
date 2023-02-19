import HeroImage from "../../assets/images/HeroImage2.png";
import { motion } from "framer-motion";
// type Props = {};

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center md:pt-36  px-5 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="basis-1/2 px-12 space-y-4 z-20 select-none"
      >
        <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-50">
          Make a
          <span className="bg-zinc-700 text-zinc-100 block w-fit dark:bg-zinc-400 dark:text-neutral-900 ">
            Minimalistic
          </span>
          Home
        </h1>
        <div className="space-y-4">
          <p className="font-light text-zi hidden md:block dark:text-zinc-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ad,
            doloribus eius possimus facere reiciendis. Beatae ullam ipsum sint
            obcaecati minus. Aliquid laboriosam pariatur suscipit in eligendi
            ullam assumenda. Dolore!
          </p>
          <button className="bg-zinc-400 px-4 py-3 rounded-sm hover:text-white hover:bg-zinc-600">
            Minimal now.
          </button>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="basis-1/3 absolute max-w-screen-sm md:relative md:right-0 blur-[2px] md:blur-0 select-none"
      >
        <img
          src={HeroImage}
          alt="Minimal-Image"
          className="drop-shadow shadow-zinc-500"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
