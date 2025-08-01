import { Link } from "next-view-transitions";
import { FC } from "react";

const Logo = () => {
  return (
    <Link href="/" className="group items-center flex">
      <div className="flex h-8 w-6 items-center justify-center rounded border border-white bg-transparent ">
        <span className="text-xl font-bold text-brand-300 dark:text-zinc-200">P</span>
      </div>
      <span aria-label="logo" className="dark:text-zinc-200 ml-2">
        pantaleone
      </span>
    </Link>
  );
};

export default Logo;
