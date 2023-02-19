import { motion } from "framer-motion";
import {
  CameraIcon,
  ChatBubbleLeftRightIcon,
  LinkIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type Props = {
  showModal: (value: boolean) => void;
};

const ShareModal = ({ showModal }: Props) => {
  const closeModalHandler = () => {
    showModal(false);
  };
  return (
    <div className="flex justify-center items-center w-full h-fulll">
      <div className="absolute left-0 top-0 w-screen h-screen bg-black/20 z-40"></div>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-fit p-3 bg-zinc-100/70 rounded-md backdrop-blur-sm backdrop:bg-black/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
        }}
      >
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-center items-center">
            <div className="flex w-10/12 py-2 justify-center items-center text-2xl font-bold text-neutral-700">
              Share Links
            </div>
            <div
              onClick={closeModalHandler}
              className="absolute right-6 top-4 flex justify-center cursor-pointer hover:bg-zinc-300 transition-colors rounded-full p-2"
            >
              <XMarkIcon className="w-5" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 p-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <ChatBubbleLeftRightIcon className="w-12 bg-green-600 text-white rounded-full p-2" />
              <p className="text-neutral-700">Whatsapp</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <CameraIcon
                className="w-12 bg-green-600 text-white rounded-full p-2"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                }}
              />
              <p className="text-neutral-700">Instagram</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <PaperAirplaneIcon className="w-12 -rotate-[40deg] bg-blue-400 text-white rounded-full p-2" />
              <p className="text-neutral-700">Telegram</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <LinkIcon className="w-12 bg-zinc-300 text-white rounded-full p-2" />
              <p className="text-neutral-700">Link</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShareModal;
