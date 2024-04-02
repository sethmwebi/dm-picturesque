import { motion } from "framer-motion";
import Link from "next/link"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, toggle }: { i: any; toggle: any }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mb-[20px] z-[10000] flex items-center cursor-pointer"
      onClick={toggle}
    >
      <Link href={i.hash}>{i.name}</Link>
    </motion.li>
  );
};
