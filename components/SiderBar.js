import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChatAlt2Icon,
  PencilAltIcon,
  MenuIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import SiderBarItem from "./SiderBarItem";
import { useContext } from "react";

function SiderBar({ Context }) {
  const [state, dispatch] = useContext(Context);

  const iconOpen = () => {
    dispatch({ type: "openbar" });
  };

  const iconClose = () => {
    dispatch({ type: "closebar" });
  };

  return (
    <aside className=" h-16 w-screen bg-customeBG border-b border-gray-500 fixed z-20 lg:w-80 lg:h-screen  lg:border-r">
      <div className="flex items-center p-4 lg:p-9  lg:relative  lg:h-full  lg:flex-col">
        <MenuIcon
          className="h-9 text-white mr-4 cursor-pointer lg:hidden"
          onClick={iconOpen}
        />
        <h1 className="text-white text-2xl font-bold mr-4 lg:mb-1">趙一航</h1>
        <h2 className="text-white text-xl font-bold lg:mb-32">
          チヨウ　イチコウ
        </h2>
        <nav className="hidden lg:block">
          <ul>
            <SiderBarItem
              title="Home"
              Icon={HomeIcon}
              active={state.section == "home" ? true : false}
              href="home"
              clicked={() => dispatch({ type: "home" })}
            />
            <SiderBarItem
              title="About"
              Icon={UserIcon}
              active={state.section == "about" ? true : false}
              href="about"
              clicked={() => dispatch({ type: "about" })}
            />
            <SiderBarItem
              title="Experience"
              Icon={AcademicCapIcon}
              active={state.section == "experience" ? true : false}
              href="experience"
              clicked={() => dispatch({ type: "experience" })}
            />
            <SiderBarItem
              title="Works"
              Icon={BriefcaseIcon}
              active={state.section == "work" ? true : false}
              href="work"
              clicked={() => dispatch({ type: "work" })}
            />
            <SiderBarItem
              title="Blogs"
              Icon={PencilAltIcon}
              active={state.section == "blog" ? true : false}
              href="blog"
              clicked={() => dispatch({ type: "blog" })}
            />
            <SiderBarItem
              title="Contact"
              Icon={ChatAlt2Icon}
              active={state.section == "contact" ? true : false}
              href="contact"
              clicked={() => dispatch({ type: "contact" })}
            />
          </ul>
        </nav>
        <p className=" hidden lg:block text-gray-300 absolute bottom-4">
          © {new Date().getFullYear()} by 趙一航
        </p>
      </div>
      <div
        className={` absolute top-0 left-0 w-screen h-screen bg-customeBG z-20 ${
          state.barOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <XCircleIcon
          className="h-10 absolute top-12 right-12 text-white cursor-pointer hover:text-yellow-300"
          onClick={iconClose}
        />
        <h1 className="text-2xl text-white font-bold absolute top-14 left-12">
          趙一航
        </h1>
        <ul className="w-full h-full flex flex-col justify-center items-center">
          <SiderBarItem
            title="Home"
            Icon={HomeIcon}
            active={state.section == "home" ? true : false}
            clicked={iconClose}
            href="home"
          />
          <SiderBarItem
            title="About"
            Icon={UserIcon}
            active={state.section == "about" ? true : false}
            clicked={iconClose}
            href="about"
          />
          <SiderBarItem
            title="Experience"
            Icon={AcademicCapIcon}
            active={state.section == "experience" ? true : false}
            clicked={iconClose}
            href="experience"
          />
          <SiderBarItem
            title="Works"
            Icon={BriefcaseIcon}
            active={state.section == "work" ? true : false}
            clicked={iconClose}
            href="work"
          />
          <SiderBarItem
            title="Blogs"
            Icon={PencilAltIcon}
            active={state.section == "blog" ? true : false}
            clicked={iconClose}
            href="blog"
          />
          <SiderBarItem
            title="Contact"
            Icon={ChatAlt2Icon}
            active={state.section == "contact" ? true : false}
            clicked={iconClose}
            href="contact"
          />
        </ul>
      </div>
    </aside>
  );
}

export default SiderBar;
