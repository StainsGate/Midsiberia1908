function Message() {
  return (
    <div className=" w-full md:ml-12 md:w-1/2">
      <h1 className="text-2xl text-customeBG font-bold mb-9">
        メッセージを送ってください!
      </h1>
      <form action="" className="flex flex-col">
        <div className="mb-4 w-full shadow-md bg-white rounded-lg md:h-9">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="君の名 Your Name"
            className="p-1 rounded-lg w-full h-full outline-none "
          />
        </div>
        <div className="mb-4 w-full h-full shadow-md bg-white rounded-lg md:h-9">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="君のemail Your eamil"
            className="p-1 rounded-lg w-full h-full outline-none"
          />
        </div>
        <div className="mb-4 w-full shadow-md bg-white rounded-lg md:h-9">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="件名 Subject"
            className="p-1 rounded-lg w-full h-full outline-none"
          />
        </div>
        <div className="mb-4 w-full shadow-md bg-white rounded-lg md:h-32">
          <textarea
            placeholder="メッセージ Message"
            className="p-1 rounded-lg w-full h-full outline-none"
          ></textarea>
        </div>
        <button className="w-32 h-9 bg-red-500 text-white rounded-xl">
          送信
        </button>
      </form>
    </div>
  );
}

export default Message;
