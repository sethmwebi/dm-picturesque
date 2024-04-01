import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import { links } from "@/lib/data";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle}: any) => (
  <div className="h-[100vh] flex flex-col w-full items-center justify-center">
    <motion.ul
      className="absolute flex flex-col justify-between h-[60vh] text-[#fafafa] w-[50%] mx-auto"
      variants={variants}
    >
      {links.map((i) => (
        <MenuItem i={i.name} key={i.hash} toggle={toggle}/>
      ))}
    </motion.ul>
  </div>
);
