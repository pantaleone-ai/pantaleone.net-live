import { getUrl } from "@/utils/helpers";
import { FaGithub, FaSquareRss } from "react-icons/fa6";

const MobileCopyright = () => {
  return (
    <div className="lg:hidden">
      <div className="mx-auto mt-10 flex max-w-4xl justify-center gap-x-2">
        {/* <a
          href="https://github.com/timtbdev/Next.js-Portfolio-App-v2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md dark:hover:text-brand-400 inline-flex items-center gap-1.5 text-gray-900 hover:text-gray-600 dark:text-white/80"
        >
          <FaGithub size={18} />
          Source code
        </a>
        <span> | </span> */}
        <a
          href={getUrl("/rss.xml")}
          className="text-md dark:text-brand-400 inline-flex items-center gap-1.5 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-200"
        >
          <FaSquareRss size={18} />
          RSS
        </a>
      </div>
      <div className="text-sm mx-auto mt-6 flex max-w-4xl justify-center text-center leading-5 text-gray-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Pantaleone.net. All rights reserved.
      </div>
      <div className="flex flex-1 justify-center text-center text-sm leading-5 text-gray-600 dark:text-zinc-400 pt-4">

<a
    href={getUrl("/privacy")}
    className="text-xs dark:text-brand-400 inline-flex items-center gap-1.5 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-200"
  >
  
  Privacy Policy
  </a>

  <a
    href={getUrl("/terms")}
    className="text-xs dark:text-brand-400 inline-flex items-center gap-1.5 dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-200 pl-4"
  >
    Terms of Use
    </a>
    </div>
    </div>
  );
};

export default MobileCopyright;
