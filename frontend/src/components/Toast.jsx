import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message, show, success }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 left-1/2 px-6 py-3 rounded-full text-white text-sm font-semibold z-50 whitespace-nowrap max-w-[90vw] md:max-w-md text-center"
          style={{
            translateX: "-50%",
            background: success
              ? "linear-gradient(135deg,#10B981,#059669)"
              : "linear-gradient(135deg,#EF4444,#DC2626)",
            boxShadow: success
              ? "0 6px 24px rgba(16,185,129,0.4)"
              : "0 6px 24px rgba(239,68,68,0.4)",
          }}
          initial={{ y: 80, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", bounce: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}