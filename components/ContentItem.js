import {
  LightBulbIcon,
  HeartIcon,
  LightningBoltIcon,
  MoonIcon,
} from "@heroicons/react/outline";

// import { useIsVisible } from "react-is-visible";
// import { useRef, useEffect, useContext } from "react";

function ContentItem({ dark, iconBG, children, nodeRef, ...props }) {
  // const [state, dispatch] = useContext(context);
  // const nodeRef = useRef();
  // const isVisible = useIsVisible(nodeRef);

  // useEffect(() => {

  //   console.log(nodeRef.current.id + isVisible);

  //   if (isVisible) {
  //     if (state.section != nodeRef.current.id) {
  //       dispatch({ type: nodeRef.current.id });
  //     }
  //   }
  // }, [isVisible]);

  // const [visible,setVisible]=useState(isVisible)

  return (
    <section
      className={`${dark ? "bg-customeBG" : "bg-gray-100"}  ${
        iconBG ? "relative" : null
      }`}
      {...props}
      ref={nodeRef}
    >
      {iconBG && (
        <div className="w-full h-full absolute top-0 left-0">
          <LightBulbIcon className="h-9 text-yellow-300 absolute top-12 left-9 animate-bounce" />
          <HeartIcon className="h-9 text-green-600 absolute top-24 right-24 animate-bounce" />
          <LightningBoltIcon className="h-9 text-blue-600 absolute top-32 right-32 animate-bounce" />
          <HeartIcon className="h-9 text-red-500 absolute top-56 left-6 animate-bounce" />
          <LightningBoltIcon className="h-9 text-purple-500 absolute top-96 left-12 animate-bounce " />
          <MoonIcon className="h-9 text-customeYellow absolute top-96 right-48 animate-bounce" />
        </div>
      )}
      {children}
    </section>
  );
}

export default ContentItem;
