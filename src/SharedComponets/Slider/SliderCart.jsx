/* eslint-disable react/prop-types */
const SliderCart = ({ bg, title, subTitle, description }) => {
  return (
    <div className={` lg:h-[700px] h-[calc(100vh-200px)] w-full relative`}>
      <div className=" w-full h-full ">
        <img src={bg} alt="" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="space-y-5 flex items-center justify-center bg-opacity-80 absolute top-0 left-0 w-full h-full bg-black rounded-lg p-3">
        <div className="space-y-5">
          <div className="text-center">
            <h3 className="bg-[#E43C5C] bg-opacity-60 inline-block uppercase text-[#ffffff] text-[16px] font-semibold py-1 px-5 rounded-full">
              {subTitle}
            </h3>
          </div>

          <h1 className="text-3xl text-[#E43C5C] lg:text-6xl font-bold text-center">{title}</h1>

          <p className="lg:text-lg text-center text-gray-100 lg:w-2/3 mx-auto">{description}</p>

          <div className="text-center">
            <button className="px-8 py-3 text-gray-100 border-2 border-[#E43C5C] hover:bg-[#E43C5C] transition rounded-full text-lg font-semibold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCart;
