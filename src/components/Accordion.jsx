import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="glass-card rounded-[28px] border border-white/10 overflow-hidden shadow-soft"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left transition hover:bg-white/5 bg-white/5"
          >
            <span className="text-lg font-semibold text-white">{item.title}</span>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-brand text-xl"
            >
              ↓
            </motion.span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-white/10 bg-white/5"
              >
                <div className="p-5 text-sm leading-7 text-slate-200">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
