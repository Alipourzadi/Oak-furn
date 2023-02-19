import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/images/Logo.png";

type Props = {
  isAboveMediumScreen: boolean;
  isScroll: boolean;
};

const Header = ({ isAboveMediumScreen, isScroll }: Props) => {
  return (
    <div
      className={`${
        isAboveMediumScreen
          ? "absolute top-0 left-0 w-full"
          : "fixed -bottom-0 w-full z-30"
      }`}
    >
      <nav
        className={`flex items-center justify-center gap-8 px-14 py-3 w-full mx-auto z-30 $
        ${
          !isAboveMediumScreen
            ? "bg-stone-200 dark:bg-neutral-800 fixed bottom-0 rounded-t-3xl"
            : ""
        } ${
          isScroll && isAboveMediumScreen
            ? "fixed top-0 backdrop-filter dark:bg-neutral-700/50 bg-zinc-400/30 backdrop-blur-md shadow-md"
            : ""
        }`}
      >
        <div
          className={`${
            !isAboveMediumScreen ? "hidden" : "flex items-center justify-center"
          }`}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-24 dark:filter dark:brightness-0 dark:contrast-0"
          />
          <div className="-space-y-1 dark:text-zinc-50">
            <p className="text-sm">OAK</p>
            <p className="text-sm">FURN</p>
          </div>
        </div>
        <Navigation isAboveMediumScreen={isAboveMediumScreen} />
      </nav>
    </div>
  );
};

export default Header;
