"use client"

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle({ text }: { text: string }) {
  const control = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (!inView) {
      control.start("hidden");
    }
  }, [control, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="text-5xl font-bold">
      {text.split(" ").map((word: string, index: number) => {
        return (
          <motion.span className="inline-block mr-4 whitespace-nowrap"
            ref={ref}
            key={index}
            aria-hidden="true"
            initial="hidden"
            animate={control}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}>

            {word.split("").map((character: string, index: number) => {
              return (
                <motion.span className=" inline-block"
                  key={index}
                  aria-hidden="true"
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        )
      })}
    </div>
  );
}