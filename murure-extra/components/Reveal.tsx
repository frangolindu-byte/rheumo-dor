"use client";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
    className?: string;
}

export default function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
    const reduced = useReducedMotion();

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? (reduced ? 0 : 40) : 0,
            x: direction === "left" ? (reduced ? 0 : -50) : direction === "right" ? (reduced ? 0 : 50) : 0,
            scale: direction === "scale" ? (reduced ? 1 : 0.88) : 1,
        },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.8, 0.25, 1] }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
