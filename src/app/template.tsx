"use client"
import { Variants, motion } from "framer-motion"

const variants: Variants = {
    hidden: { opacity: 0, x: 0, y: 0, transition: { duration: 2 } },
    enter: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
}

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear" }}
        >
            {children}
        </motion.main>
    )
}

export default Template