function SiderBarItem({ Icon, title, active, clicked, href }) {
  return (
    <li
      className="flex items-center mb-9 cursor-pointer group"
      onClick={clicked}
    >
      <Icon className="h-4 mr-4 text-customeYellow group-hover:animate-bounce" />
      <a
        className={`font-bold ${
          active ? "text-customeYellow" : "text-white"
        } hover:text-customeYellow`}
        href={`#${href}`}
      >
        {title}
      </a>
    </li>
  );
}

export default SiderBarItem;
