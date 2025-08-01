"use client";

import { usePathname } from "next/navigation";
import Logo from "./logo";
import DesktopNavigationLinks from "./navigation-links/desktop-navigation-links";
import MobileNavigationLinks from "./navigation-links/mobile-navigation-links";
// import ToggleTheme from "./toggle-theme";

const Header = () => {
  const path = usePathname();
  const currentPath = `/${path.split("/")[1]}`;
  return (
    <header className="sticky top-0 z-10 border-b-[1.2px] border-zinc-600/20 bg-white/30 shadow-sm shadow-zinc-800/5 backdrop-blur-lg dark:border-zinc-700/60 dark:bg-zinc-900/70">
      <nav
        aria-label="Navigation"
        className="mx-auto flex max-w-4xl items-center px-2 py-2.5"
      >
        <div className="z-10 flex flex-1 justify-start text-zinc-900/70 dark:text-zinc-600/90">
          <Logo />
        </div>
          <DesktopNavigationLinks currentPath={currentPath} />
        <div className="flex flex-1 justify-end">
          <MobileNavigationLinks currentPath={currentPath} />
          {/* <ToggleTheme /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
