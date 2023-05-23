import React from 'react'
import { motion } from "framer-motion";
import "./Text.css";
export default function TextEffectts() {
   return (
            <div className="App">
                <motion.h1
                    animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                    transition={{
                        duration: 5,
                        delay: 0.3,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                >
                    Figma connects everyone in the design process so <br/> teams can deliver better products,faster.
                    
                </motion.h1>
            </div>
        );
    }
    


  

