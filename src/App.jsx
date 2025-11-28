import { motion } from "framer-motion";
import "./App.css";


export default function BirthdayWish() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-lg w-full text-center border border-white/40"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold text-purple-700 mb-4"
        >
          🎉 Happy Birthday, Sister! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg text-gray-700 mb-6"
        >
          Wishing you a day filled with love, laughter, and all the happiness
          in the world. You deserve the best! 💖
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all"
          onClick={() => alert("Love you didi! 💕")}
        >
          Send Love 💌
        </motion.button>
      </motion.div>
    </div>
  );
}
