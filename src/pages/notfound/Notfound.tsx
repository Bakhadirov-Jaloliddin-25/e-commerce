import { motion } from "framer-motion";
import NotFoundBtn from "./NotFoundBtn";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md"
      >
        <h1 className="text-9xl font-bold text-gray-950 mt-6">404</h1>
        <p className="text-2xl text-gray-900 mt-4 font-inter mb-6">
          Sorry, this page was not found.
        </p>
        <p className="text-base text-gray-800 mb-8 font-inter">
          The page you are looking for does not exist or has been moved.
        </p>
        <NotFoundBtn title={"Return Home"} />
      </motion.div>
    </div>
  );
}
