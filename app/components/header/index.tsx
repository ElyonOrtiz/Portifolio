'use client'
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
  {
    label: "Sobre mim",
    href: "/time-line",
  },
];

export const Header = () => {
  const page = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Verificar tamanho da tela inicialmente
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let prevScrollPos = 0;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 w-full z-10 h-20 flex items-center justify-center bg-gray-900 bg-cover bg-center bg-no-repeat"
        >
          <div className="container flex items-center justify-between ">
            <Link href="/">
              <Image
                className="w-auto"
                width={58}
                height={49}
                src="/images/logo2.png"
                alt="Logo EO dev"
              />
            </Link>
            <nav className="flex items-center gap-4 sm:gap-10">
              {isSmallScreen ? (
                <GiHamburgerMenu size={30} className="text-gray-400" />
              ) : (
                NAV_ITEMS.map((item) => <NavItem {...item} key={item.href} />)
              )}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};