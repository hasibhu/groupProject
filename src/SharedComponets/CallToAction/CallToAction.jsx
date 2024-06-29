

import React, { useState } from 'react';
import bgImage from '../../assets/callToActionImage.jpg';

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

    return (
        <div
            className="flex w-full max-w-[1440px] mx-auto items-center justify-center text-white text-center bg-cover bg-center relative p-8 sm:p-16 rounded-xl"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                height: '390px'
            }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl mb-4">Call Us Now!</h1>
                <p className="text-xl mb-6">Explore Our Amazing Services.</p>

                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                >
                    {buttonText}
                </button>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-8 rounded-lg text-center">
                        <h2 className="text-2xl mb-4">Confirm Call</h2>
                        <p className="text-xl mb-6">Call {phoneNumber}?</p>

                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
                            onClick={handleCall}
                        >
                            {buttonText}
                        </button>

                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleModal}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CallToAction;

