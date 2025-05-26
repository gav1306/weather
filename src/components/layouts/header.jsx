import { Icons } from "@/assets/icons/icons";
import { ToggleTheme } from "./toggle-theme";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b backdrop-blur-xs border-dashed w-full flex items-center sticky top-0 z-[1000]">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center border-x border-dashed p-4">
        <Link href="/" className="flex items-center">
          <Icons.Logo className="w-18" />
          <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Weather
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <div className="md:hidden"></div>
        </div>
      </div>
    </header>
  );
};
