function Progress({ name, percent, color }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className=" capitalize ">{name}</h1>
        <p>{percent}%</p>
      </div>
      <div className=" bg-gray-400 w-full h-3 relative rounded-xl">
        <div
          className={`absolute top-0 left-0 ${color} h-full z-10 rounded-xl`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
