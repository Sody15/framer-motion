import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import {
   Slider,
   SliderTrack,
   SliderFilledTrack,
   SliderThumb,
   Button,
} from "@chakra-ui/react";
import Section from "../layout/Section";
import clsx from "clsx";
import ManualControls from "./ManualControls";
import Layout from "./Layout";

const Animate = () => {
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);
   const [rotate, setRotate] = useState(0);
   const [scale, setScale] = useState(1);

   const [showHide, setShowHide] = useState(true);

   const [menuOpen, setMenuOpen] = useState(false);

   const menuVariants: Variants = {
      open: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            staggerChildren: 0.1,
            when: "beforeChildren",
            duration: 0.3,
         },
      },
      closed: {
         opacity: 0,
         y: -10,
         transition: {
            duration: 0.1,
            staggerChildren: 0.2,
            when: "afterChildren",
         },
      },
   };
   const menuItemVarients: Variants = {
      open: {
         opacity: 1,
         y: [50, 0],
         transition: { type: "spring" },
      },
      closed: {
         opacity: 0,
         y: -10,
         transition: { duration: 0.2 },
      },
   };

   return (
      <div className="flex flex-col gap-10 items-center">
         <Section title="Simple animations">
            <div className="flex flex-col gap-2 justify-center w-1/3">
               <div>
                  <label htmlFor="x-val">X-Val</label>
                  <Slider
                     aria-label="slider-ex-1"
                     defaultValue={x}
                     max={500}
                     min={-500}
                     onChange={(num) => setX(num)}
                  >
                     <SliderTrack>
                        <SliderFilledTrack />
                     </SliderTrack>
                     <SliderThumb />
                  </Slider>
               </div>
               <div>
                  <label htmlFor="y-val">Y-Val</label>
                  <Slider
                     aria-label="slider-ex-1"
                     defaultValue={y}
                     max={500}
                     min={-500}
                     onChange={(num) => setY(num)}
                  >
                     <SliderTrack>
                        <SliderFilledTrack />
                     </SliderTrack>
                     <SliderThumb />
                  </Slider>
               </div>
               <div>
                  <label htmlFor="rotate-val">Rotate</label>
                  <Slider
                     aria-label="slider-rotate"
                     defaultValue={rotate}
                     max={360}
                     min={-360}
                     onChange={(num) => setRotate(num)}
                  >
                     <SliderTrack>
                        <SliderFilledTrack />
                     </SliderTrack>
                     <SliderThumb />
                  </Slider>
               </div>
               <div>
                  <label htmlFor="scale-val">Scale</label>

                  <Slider
                     aria-label="slider-scale"
                     defaultValue={scale}
                     max={2}
                     min={0}
                     step={0.5}
                     onChange={(num) => setScale(num)}
                  >
                     <SliderTrack>
                        <SliderFilledTrack />
                     </SliderTrack>
                     <SliderThumb />
                  </Slider>
               </div>
            </div>

            <motion.img
               src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X8TlQRuD6h0AX-NaIaK&_nc_ht=scontent-sea1-1.xx&oh=00_AfBWurvNen8L26bk3zZjHRUL4YFtZHD6PJ4juydHzvDydg&oe=646BA20E"
               className="w-52 h-52 bg-blue-600 rounded-xl"
               animate={{ x, y, rotate, scale }}
               transition={{ type: "spring", stiffness: 100 }}
            />
         </Section>
         <Section title="Animate Presence">
            <Button
               colorScheme="teal"
               onClick={() => setShowHide((prevVal) => !prevVal)}
            >
               Show/Hide
            </Button>
            <AnimatePresence>
               {showHide && (
                  <motion.div
                     className="w-52 h-52 bg-blue-600 rounded-xl"
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0 }}
                  />
               )}
            </AnimatePresence>
         </Section>
         <Section title="Keyframes">
            <motion.div
               className="w-52 h-52 bg-red-400"
               animate={{
                  scale: [1, 1.3, 1.3, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["10%", "10%", "50%", "50%", "10%"],
               }}
               transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                  times: [0, 0.2, 0.5, 0.8, 1],
               }}
            />
         </Section>
         <Section title="Gesture animations">
            <motion.div
               className="w-52 h-52 bg-yellow-200 rounded-xl"
               whileHover={{ scale: 1.2, transition: { duration: 1 } }}
               whileTap={{ scale: 0.9 }}
            />
         </Section>
         <Section title="Variants">
            <div className="menu-container relative">
               <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={clsx("relative px-3 py-2 rounded-md", {
                     "hover:bg-blue-500": !menuOpen,
                     "cursor-default": menuOpen,
                  })}
               >
                  Menu
               </button>
               <motion.ul
                  initial={false}
                  animate={menuOpen ? "open" : "closed"}
                  className="bg-blue-500 text-white py-2 rounded-md flex flex-col justify-start text-left absolute top-8 w-40 -left-12"
                  variants={menuVariants}
               >
                  <motion.li
                     className="cursor-pointer px-5 border-2 border-transparent"
                     variants={menuItemVarients}
                     whileHover={{
                        backgroundColor: "#60a5fa",
                        transition: { ease: "easeInOut" },
                     }}
                  >
                     Item 1
                  </motion.li>
                  <motion.li
                     className="cursor-pointer px-5 border-2 border-transparent"
                     variants={menuItemVarients}
                     whileHover={{
                        backgroundColor: "#60a5fa",
                        transition: { ease: "easeInOut" },
                     }}
                  >
                     Item 2
                  </motion.li>
                  <motion.li
                     className="cursor-pointer px-5 border-2 border-transparent"
                     variants={menuItemVarients}
                     whileHover={{
                        backgroundColor: "#60a5fa",
                        transition: { ease: "easeInOut" },
                     }}
                  >
                     Item 3
                  </motion.li>
               </motion.ul>
            </div>
         </Section>
         <ManualControls />
         <Layout />
      </div>
   );
};

export default Animate;
