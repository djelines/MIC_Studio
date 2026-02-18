import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountingNumber } from "./animate-ui/primitives/texts/counting-number";

export const StatCard = ({ stat, idx }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="bg-lemonade-bg rounded-[32px] shadow-sm p-8 card-shadow flex flex-col items-center text-center border border-gray-100/50"
    >
      <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center mb-6">
        {stat.icon}
      </div>

      <div className="flex text-4xl font-black mb-2">
        {isInView ? (
            <CountingNumber number={Number(stat.value)} />
        ) : (
            <span className="text-4xl font-bold">0</span>
        )}
        {stat.afterValue}
      </div>

      <div className="text-sm font-bold uppercase tracking-widest opacity-60">
        {stat.label}
      </div>

      {stat.illustration}
    </motion.div>
  );
};