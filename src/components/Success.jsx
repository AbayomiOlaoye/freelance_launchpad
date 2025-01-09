import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import success from "../assets/success.svg";
import { toggle } from "../redux/popSlice";

const Success = () => {
  const dispatch = useDispatch();

  return (
    <motion.section
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => dispatch(toggle())}
      className="fixed top-0 left-0 z-5000 w-full h-full bg-primary bg-opacity-70 flex items-center justify-center cursor-pointer"
    >
      <div className="text-center bg-white rounded-[20px] p-4 lg:p-16 py-12">
        <img src={success} alt="success" className="w-30 h-30 lg:w-40 lg:h-40 mx-auto animate-bounce" />
        <h1 className="text-3xl text-mv-deep font-semibold">You are in! 💪</h1>
        <p className="text-gray-500 mt-2 max-w-64">An email containing the meeting link is on its way...</p>
      </div>
    </motion.section>
  )
}

export default Success;
