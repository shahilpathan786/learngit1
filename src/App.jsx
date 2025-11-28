import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayWish() {
  const [showMessage, setShowMessage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const text = "Happy Birthday Sister!";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-6">
      <div className="text-center">
        {!showMessage && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all"
            onClick={() => setShowMessage(true)}
          >
            Open Surprise 🎁
          </motion.button>
        )}

        {/* LETTER BY LETTER ANIMATION */}
        {showMessage && (
          <div className="mt-6 text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,0,255,0.6)] animate-pulse tracking-widest">
            {text.split("").map((char, i) => (
              <motion.span
                className="mx-1 hover:scale-150 inline-block transition-transform duration-200"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onAnimationComplete={() => {
                  if (i === text.length - 1) {
                    setTimeout(() => setShowImage(true), 800);
                  }
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        )}

        {/* IMAGE FROM BOTTOM TO CENTER */}
        {showImage && (
          <motion.img
            src="/sister-photo.jpg" // Put your sister photo in public folder
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-10 w-60 h-60 object-cover rounded-2xl shadow-xl border-4 border-white"
          />
        )}
      </div>
    </div>
  );
}
