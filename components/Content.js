import { useContext } from "react";

function Content({ Context, children }) {
  const [state, dispatch] = useContext(Context);

  const scroll = (e) => {
    // console.log(state.home.current.id);
    // console.log(state.home.current.clientHeight);
    // console.log(state.about.current.clientHeight);
    // console.log(state.exp.current.clientHeight);

    const homeHeight = state.home.current.clientHeight;
    const aboutHeight = state.about.current.clientHeight;
    const expHeight = state.exp.current.clientHeight;
    const workHeight = state.work.current.clientHeight;
    const blogHeight = state.blog.current.clientHeight;
    const contactHeight = state.contact.current.clientHeight;

    const distance = e.target.scrollTop;
    // const sectionHeight = window.innerHeight;
    // if (distance > 0 && distance <= sectionHeight / 3) {
    //   if (state.section != "home") dispatch({ type: "home" });
    // }
    // if (distance > sectionHeight && distance <= sectionHeight * 2) {
    //   if (state.section != "about") dispatch({ type: "about" });
    // }
    // if (distance > sectionHeight * 2 && distance <= sectionHeight * 3) {
    //   if (state.section != "experience") dispatch({ type: "experience" });
    // }
    // if (distance > sectionHeight * 3 && distance <= sectionHeight * 4) {
    //   if (state.section != "work") dispatch({ type: "work" });
    // }
    // if (distance > sectionHeight * 4 && distance <= sectionHeight * 5) {
    //   if (state.section != "blog") dispatch({ type: "blog" });
    // }
    // if (distance == sectionHeight * 5) {
    //   if (state.section != "contact") dispatch({ type: "contact" });
    // }

    console.log(distance);

    if (distance > 0 && distance <= homeHeight / 3) {
      console.log("home height" + homeHeight);
      if (state.section != "home") dispatch({ type: "home" });
    }
    if (distance > homeHeight && distance <= homeHeight + aboutHeight / 3) {
      console.log("about height" + aboutHeight);
      if (state.section != "about") dispatch({ type: "about" });
    }
    if (
      distance > homeHeight + aboutHeight &&
      distance <= homeHeight + aboutHeight + expHeight / 3
    ) {
      console.log("exp height:" + expHeight);
      if (state.section != "experience") dispatch({ type: "experience" });
    }
    if (
      distance > homeHeight + aboutHeight + expHeight &&
      distance <= homeHeight + aboutHeight + expHeight + workHeight / 3
    ) {
      if (state.section != "work") dispatch({ type: "work" });
    }
    if (
      distance > homeHeight + aboutHeight + expHeight + workHeight &&
      distance <=
        homeHeight + aboutHeight + expHeight + workHeight + blogHeight / 3
    ) {
      if (state.section != "blog") dispatch({ type: "blog" });
    }
    if (
      distance >
      homeHeight + aboutHeight + expHeight + workHeight + 2 * (blogHeight / 3)
    ) {
      if (state.section != "contact") dispatch({ type: "contact" });
    }
  };

  return (
    <div className="h-screen  overflow-y-scroll lg:pl-80 " onScroll={scroll}>
      {children}
    </div>
  );
}

export default Content;
