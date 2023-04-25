import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";
import { Button } from "@chakra-ui/react";

import { clsx } from "clsx";

export default function Layout() {
   const [isCol, setIsCol] = useState(false);

   return (
      <Section title="Layout">
         <Button onClick={() => setIsCol((prev) => !prev)}>Click</Button>
         <motion.div
            className={clsx("flex gap-4", {
               "flex-row": !isCol,
               "flex-col": isCol,
            })}
         >
            <motion.div
               layout
               className="rounded-md bg-green-400 w-10 h-10"
               transition={spring}
            ></motion.div>
            <motion.div
               layout
               className="rounded-full bg-green-500 w-10 h-10"
               transition={spring}
            ></motion.div>
            <motion.div
               layout
               className="rounded-md bg-green-600 w-10 h-10"
               transition={spring}
            ></motion.div>
         </motion.div>
         <motion.div
            className={clsx("flex gap-4", {
               "flex-row": !isCol,
               "flex-row-reverse": isCol,
            })}
         >
            <motion.div
               layout
               className="rounded-md bg-red-400 w-10 h-10"
               transition={spring}
            ></motion.div>
            <motion.div
               layout
               className="rounded-full bg-red-500 w-10 h-10"
               transition={spring}
            ></motion.div>
            <motion.div
               layout
               className="rounded-md bg-red-600 w-10 h-10"
               transition={spring}
            ></motion.div>
         </motion.div>
      </Section>
   );
}

const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30,
};
