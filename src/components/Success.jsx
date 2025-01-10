import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import success from "../assets/success.svg";

const Success = () => {
  const [close, setClose] = useState(false);

  return (
    <AnimatePresence>
      <motion.section
      initial={{ opacity: 0, y: 50, x: 100 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 50, x: 100 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.5 }}
      onClick={() => setClose(true)}
      className={`min-h-screen bg-primary flex w-full z-[100] items-center justify-center fixed top-0 left-0 bg-opacity-85 ${close ? 'hidden' : ''}`}
    >
      <div className="text-center bg-white rounded-[20px] p-4 lg:p-16 py-12">
        <img src={success} alt="success" className="w-30 h-30 lg:w-40 lg:h-40 mx-auto animate-bounce" />
        <h1 className="text-3xl text-mv-deep font-semibold">You are in! 💪</h1>
        <p className="text-gray-500 mt-2 max-w-64">An email containing the meeting link is on its way...</p>
      </div>
    </motion.section>
  </AnimatePresence>
  )
}

export default Success;
