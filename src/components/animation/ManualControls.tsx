import { useEffect } from "react";

import {
   useAnimate,
   useMotionValue,
   useTransform,
   motion,
} from "framer-motion";

import Section from "../layout/Section";

const ManualControls = () => {
   const [scope, animate] = useAnimate();

   useEffect(() => {
      const animation = async () => {
         await animate(scope.current, { x: "100%" });
         animate("li", { opacity: 1 });
      };

      animation();
   }, []);

   const count = useMotionValue(0);
   const rounded = useTransform(count, (latest) => Math.round(latest));

   useEffect(() => {
      const controls = animate(count, 100, { duration: 5 });

      return controls.stop;
   }, []);

   return (
      <Section title="Manual controls">
         <ul ref={scope}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
         <motion.div>{rounded}</motion.div>
      </Section>
   );
};

export default ManualControls;
