import { HeartIcon, TagIcon } from "@heroicons/react/outline";

function BlogCard({ title, cover, description, time, author, like, tags }) {
  return (
    <div className="h-80 shadow-lg rounded-lg md:flex mb-4">
      <img
        className=" rounded-t-lg w-full h-2/3 md:w-80 md:h-full md:rounded-b-lg"
        src={cover}
        alt="cover"
      />
      <div className="mt-1 p-4 relative">
        <h1 className="text-md font-bold md:text-3xl">{title}</h1>
        <div className="mt-1">
          {" "}
          <span className="text-blue-400 capitalize text-sm md:text-base">
            {author}
          </span>{" "}
          <span className="text-gray-400 text-xs md:text-sm">{time}</span>
        </div>
        <p className="hidden md:block md:mt-4 md:mb-4">
          {description.slice(0, 66)}
        </p>
        <div className="hidden md:flex absolute bottom-9">
          <div className="mr-2 flex">
            <HeartIcon className="h-6 text-red-500 mr-1 md:text-sm" />
            <span>{like}</span>
          </div>

          {tags.map((tag) => {
            return (
              <div className="mr-2 flex cursor-pointer" key={tag}>
                <TagIcon className="h-6 text-yellow-400 mr-1" />
                <span className="capitalize text-blue-300 md:text-sm">
                  {tag}
                </span>
              </div>
            );
          })}
        </div>
        <button className=" absolute bottom-4 right-4 border border-blue-400 p-1 rounded-lg capitalize text-sm md:text-lg hover:text-white hover:bg-blue-400">
          read more
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
