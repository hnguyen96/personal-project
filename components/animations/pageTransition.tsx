"use client"

import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-black origin-bottom"
                key="bottom"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />
            {children}
            {/* <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-black origin-top"
                key="top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            /> */}
        </AnimatePresence>
    );
}
