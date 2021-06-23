import CountUp from "react-countup";

function Number({ Icon, number, text, color }) {
  return (
    <div className="flex">
      <Icon className={`h-12 ${color} mr-4`} />
      <div className="flex flex-col">
        <h2 className=" font-bold text-2xl text-gray-800">
          <CountUp end={number} duration={3} />
        </h2>
        <p className="text-gray-700 capitalize">{text}</p>
      </div>
    </div>
  );
}

export default Number;
