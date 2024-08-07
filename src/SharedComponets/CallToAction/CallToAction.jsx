import { useState } from "react";
import bgImage from "../../assets/callToActionImage.jpg";
import SectionTitle from "../../CustomComponent/SectionTitle";
import Button from "../../CustomComponent/Button";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonText = "Call Now";
  const phoneNumber = "01619971997";
  const backgroundImage = bgImage;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const title = 'Call To Action ';
    const subtilte = 'Any Query'
    const description = 'Our Expert Team Is Waiting for Your Call';
    
    return (
        <div className='mt-16 mx-0 '>
            
            <div className="mb-5">
                <SectionTitle designAmount={1} title={title} subtitle={subtilte} description={description} ></SectionTitle>
            </div>

        <div
        className="flex w-full  mx-auto items-center justify-center text-white text-center bg-cover bg-center relative p-8 sm:p-16 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "390px",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl mb-4">Call Us Now!</h1>
          <p className="text-xl mb-6">Explore Our Amazing Services.</p>

          <button
              // className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              className="btn rounded-full hover:bg-[#E9607A] text-[#FFFFFF] bg-[#E43C5C] px-6 py-2 border-none"
            onClick={toggleModal}
          >
            {buttonText}
          </button>
            
            {/* <Button onClick={toggleModal}>  {buttonText}</Button> */}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black rounded-lg text-center p-6">
              <h2 className="text-2xl mb-4">Confirm Call</h2>
              <p className="text-xl mb-6">Call {phoneNumber}?</p>

              
            
                  <button
                    className="btn rounded-full hover:bg-[#E9607A] text-[#FFFFFF] bg-[#E43C5C] px-6 py-2 border-none"
                    onClick={handleCall}
                  >
                    {buttonText}
                  </button>

                  <button
                  className="btn rounded-full hover:bg-[#f42a2a] text-[#FFFFFF] bg-black ml-3 px-6 py-2 border-none"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
              


            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
