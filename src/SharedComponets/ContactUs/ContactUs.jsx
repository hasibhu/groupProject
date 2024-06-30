const ContactUs = () => {
  const title = 'Contact';
  const subtilte = 'Contact Us'
  const description = 'Step into our project gallery where each piece of work reflects our dedication and skill in coding.  From sleek websites to complex applications, CodingLab’s projects'
  return (
    <div className="max-w-[1440px] m-auto py-10">
      <div>
        <div className="flex justify-center mb-7">
          <div className="flex flex-col justify-center items-center ">
          <SectionTitle title={title} subtitle={subtilte} description={description} designAmount={1} ></SectionTitle>
          </div>
        </div>
        <div>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29196.946878638242!2d90.3479296!3d23.8321664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2sbd!4v1719658185135!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>
        <div className="mt-10 grid grid-cols-12">
          <div className="flex flex-col gap-10 col-span-12 lg:col-span-4">
            <div className="flex gap-3">
              <div className="bg-[#FDEFF2] text-[#E43C5C] flex justify-center items-center px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[#493C3E] font-semibold text-[18px]">
                    Location
                  </h1>
                  <p className="text-[#816A6E]">Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#FDEFF2] text-[#E43C5C] flex justify-center items-center px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[#493C3E] font-semibold text-[18px]">
                    Email
                  </h1>
                  <p className="text-[#816A6E]">websitexyz@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-[#FDEFF2] text-[#E43C5C] flex justify-center items-center px-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <h1 className="text-[#493C3E] font-semibold text-[18px]">
                    Call
                  </h1>
                  <p className="text-[#816A6E]">+880 1612345678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 mt-5 lg:mt-0">
            <div className="grid grid-cols-12 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="border h-[30px] col-span-6 p-5 rounded"
              />
              <input
                type="text"
                placeholder="Email"
                className="border h-[30px] col-span-6 p-5 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border h-[30px] col-span-12 p-5 rounded"
              />
              <textarea
                placeholder="Message"
                className="border h-[100px] col-span-12 py-4 px-5 rounded"
                name=""
                id=""
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="bg-[#E43C5C] hover:bg-[#D01D3F] text-white px-7 py-3 rounded-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

