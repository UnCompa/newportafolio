import { motion } from "framer-motion";
export default function Skills({color, border, children}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1 , scale: 1}}
      transition={{transition: 2}}
      // viewport={{ once: true }}
      className={`grid place-items-center h-48 w-48 bg-slate-800/20 hover:bg-slate-800/50 text-8xl shadow-lg ${color} border-b-4 ${border}`}
    >
      {children}
    </motion.div>
  );
}
