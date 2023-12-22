"use client"

import { useState } from "react";
import generateSparkle from "./sparkleGenerator";
import { useRandomInterval } from "./util";
import { motion } from "framer-motion";

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

interface SparklesInstance {
    id: string,
    createdAt: number,
    color: string,
    size: number,
    style: SparkleStyle
}

interface SparkleStyle {
    top: string;
    left: string;
    zIndex: number;
}

interface SparkleProps {
    color: string;
    size: number;
    style: SparkleStyle;
}

export default function Sparkles({
    children,
}: {
    children: React.ReactNode
}) {

    const [sparkles, setSparkles] = useState<SparklesInstance[]>([]);

    useRandomInterval(() => {
        const now = Date.now();
        const sparkle = generateSparkle(DEFAULT_COLOR);

        const nextSparkles = sparkles.filter((sparkle: SparklesInstance) => {
            const delta = now - sparkle.createdAt;
            return delta < 1000;
        });

        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);
    }, 100, 600);
    return (
        <div className="relative inline-block">
            {sparkles.map(sparkle => (
                <SparklesInstance
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
            {children}
        </div>
    )
}


const SparklesInstance: React.FC<SparkleProps> = ({ color, size, style }) => {
    return (
        <div>
            <motion.svg
                initial={{ scale: 0 }}
                animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 0],
                }}
                transition={{ duration: 1 }}
                className=" absolute pointer-events-none z-10"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                fill="none"
                viewBox="0 0 160 160"
                style={style}
            >
                <path
                    fill={color}
                    d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
                ></path>
            </motion.svg>
        </div>
    );
}

