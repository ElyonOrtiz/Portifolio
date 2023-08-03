'use client'
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SideBarMobile } from "./sidebar-mobile";

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
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const changeSideBar = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  }
  const handleScroll = () => {
    setIsMobileMenuVisible(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) 
      ) {
        setIsMobileMenuVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Adicionando event listener para capturar o clique fora do sidebar
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Removendo o event listener quando o componente é desmontado
      document.removeEventListener("click", handleClickOutside);
      
    };
  }, [isMobileMenuVisible]);

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
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 w-full z-10 h-16 flex items-center justify-center shadow-buttonSm rounded-sm bg-gray-900 bg-cover bg-center bg-no-repeat"
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
               <div onClick={changeSideBar}>
                 <GiHamburgerMenu size={30} className="text-gray-400 cursor-pointer" />
                 { isMobileMenuVisible && (
                  <div ref={sidebarRef}>
                  <SideBarMobile NAV_ITEMS={NAV_ITEMS}/></div>
                 )}
              </div>
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