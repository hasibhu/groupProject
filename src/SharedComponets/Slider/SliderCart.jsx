const SliderCart = ({ bg, title, subTitle, description }) => {
  return (
    <div className={` lg:h-[600px] w-full relative`}>
      <div className=" w-full h-full ">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-5 flex items-center justify-center bg-opacity-70 text-white absolute top-0 left-0 w-full h-full bg-black">
        <div className="space-y-5">
          <h1 className="text-3xl lg:text-6xl font-bold text-center">{title}</h1>
          <h3 className="text-xl lg:text-3xl text-center text-cyan-600 font-semibold">{subTitle}</h3>

          <p className="lg:text-lg lg:w-4/5 mx-auto">{description}</p>

          <div className="text-center">
            <button className="px-6 py-2 border-2 border-red-300 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCart;
