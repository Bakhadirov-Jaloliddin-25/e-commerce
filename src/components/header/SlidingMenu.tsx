import { motion } from "framer-motion";
import { links } from "../../static";
import { NavLink } from "react-router-dom";

const SlidingMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: any;
  setIsOpen: any;
}) => {
  return (
    <>
      <motion.nav
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
        onClick={() => setIsOpen(false)} // Slider yopilishi uchun qo'shildi
      >
        <ul className="flex flex-col justify-center items-center gap-4 p-6">
          {links.map((link) => (
            <NavLink
              to={link.path}
              key={link.path}
              className={({ isActive }) =>
                isActive ? "text-gray-400 font-bold" : ""
              }
            >
              <li className="hover:text-gray-300 cursor-pointer text-lg font-poppins max-[430px]:text-base">
                {link.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default SlidingMenu;
