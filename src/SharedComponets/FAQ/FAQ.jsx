import SectionTitle from "../../CustomComponent/SectionTitle";


const FAQ = () => {

    const title = 'Frequently Asked Questions (FAQ)';
    const subtilte = 'Why With US ?'
    const description = ''
    return (
        <div className="lg:w-[1440px] mx-auto mt-10">

            <div className="flex flex-col justify-center items-center">
                {/* <h1 className="bg-[#FDEFF2] text-[#E43C5C] text-[16px]  font-semibold py-1 lg:w-[450px]  rounded-full text-center mt-10">Frequently Asked Questions (FAQ)</h1>

                <h2 className="text-[#444444] text-[40px] text-center font-semibold p-4">
                    Why With US <span className="text-[#E43C5C]">?</span>
                </h2> */}
                <SectionTitle title={title} subtitle={subtilte} description={description}></SectionTitle>
            </div>

            {/* questions section */}
            <div className="lg:w-[950px] mx-auto">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What services does CodeLab offer?</div>
                    <div className="collapse-content">
                        <p>CodeLab specializes in comprehensive website solutions, including custom website design, development, coding, and ongoing maintenance. Our services also encompass website optimization, security updates, and user experience enhancements to ensure your site remains modern, secure, and user-friendly.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How does the website design process work at CodeLab?</div>
                    <div className="collapse-content">
                        <p>At CodeLab, our design process begins with a consultation to understand your business goals and design preferences. We then create a prototype and gather your feedback. Once the design is finalized, our developers code the website, ensuring it is responsive and functional. Finally, we launch the site and provide training on how to manage it.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What types of websites can CodeLab create?</div>
                    <div className="collapse-content">
                        <p>CodeLab can create a wide range of websites tailored to your specific needs. Whether you need a simple informational site, a complex e-commerce platform, a dynamic blog, or a custom web application, our team has the expertise to deliver high-quality, fully-functional websites that meet your requirements.</p>
                    </div>
                </div>


                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Do you offer website maintenance services?</div>
                    <div className="collapse-content">
                        <p>Yes, CodeLab offers comprehensive website maintenance services to ensure your website remains secure, up-to-date, and fully functional. Our maintenance packages include regular updates, security patches, performance optimization, content updates, and technical support to address any issues that may arise.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How much does a new website cost?</div>
                    <div className="collapse-content">
                        <p>The cost of a new website at CodeLab varies depending on the complexity and specific requirements of your project. We offer a range of packages to suit different budgets, starting from basic website designs to fully customized solutions. Contact us for a detailed quote tailored to your needs.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can CodeLab help improve my existing website?</div>
                    <div className="collapse-content">
                        <p>Absolutely! CodeLab offers website redesign and improvement services. Whether you need a visual refresh, performance optimization, additional features, or enhanced security measures, our team can revamp your existing website to better meet your goals and provide an improved user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;