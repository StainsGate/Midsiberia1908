function Box({ children }) {
  return (
    <div className=" p-8 flex flex-col lg:grid grid-cols-2 gap-6 shadow-xl rounded-md">
      {children}
    </div>
  );
}

export default Box;
