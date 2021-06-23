function Step({ time, title, Icon, color, children }) {
  return (
    <div className="flex p-4">
      <div className="flex flex-col items-center mr-4">
        <Icon className={`h-9 text-${color}-500`} />
        <div className={`border-l-2 border-${color}-500 rotate-90 h-full`} />
      </div>
      <div>
        <span className="text-gray-400">{time}</span>
        <h1 className="text-xl text-black font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default Step;
