import { useRouter } from "next/router";

function Card({ src, Icon, tag, title, to }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <div
      className="rounded-lg relative shadow-md w-80 h-80 cursor-pointer group mb-4"
      onClick={handleClick}
    >
      <img className="h-full w-full rounded-lg" src={src} alt={tag} />
      <div className="hidden absolute top-0 left-0 bg-purple-600 opacity-90 h-full w-full rounded-lg group-hover:flex justify-center items-center ">
        {/* transition-all duration-500 transform -translate-y-5 group-hover:translate-y-0 */}
        <p className="bg-red-500 max-w-max px-4 pb-1 rounded-b-xl text-white absolute top-0 left-9 opacity-0 transform -translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          {tag}
        </p>
        <h2 className="text-3xl font-bold text-white animate-bounce">
          {title}
        </h2>
        <Icon className="h-10 bg-yellow-300 absolute  text-white rounded-full p-1 bottom-4 left-9" />
      </div>
    </div>
  );
}

export default Card;
