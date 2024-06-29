

const Pricing = () => {
    return (
        <div className="py-10 max-w-[1440px] mx-auto">
            <div className="flex flex-col items-center justify-center">
        <h1 className="bg-[#FDEFF2] inline-block uppercase text-[#E43C5C] text-[16px] font-semibold py-1 px-5 rounded-full">
          Pricing
        </h1>
        <h2 className="text-[#444444] text-[40px] font-semibold">
          Our <span className="text-[#E43C5C]">Pricing</span>
        </h2>
        <p className="max-w-[700px] mx-auto text-center text-lg">
        Our pricing plans offer flexible, value-packed options for individuals, small businesses, and enterprises, with transparent pricing, no hidden fees, and dedicated support
        </p>
      </div>
        
            <div className="mt-10 grid md:grid-cols-3 grid-cols-1 lg:gap-0 gap-14">

                {/* <!-- Basic Plan --> */}
                <div className="max-w-sm mx-auto bg-[#F9F9F9] rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
                    <div className="text-xl font-bold mb-2">Basic Plan</div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">$9.99<span className="text-lg">/month</span></div>
                    <div className="text-sm text-gray-600 mb-4">Billed annually</div>
                    <div className="text-base mb-4">Great for individuals starting out immediately and thanks us</div>
                    <ul className="text-left text-sm mb-6">
                        <li className="mb-2">✔️ Access to core features</li>
                        <li className="mb-2">✔️ 10 GB storage</li>
                        <li className="mb-2">✔️ 24/7 customer support</li>
                        <li className="mb-2">✔️ Advanced analytics</li>
                        <li className="mb-2">✔️ Free updates</li>
                    </ul>
                    <button className="w-full bg-[#E43C5C] text-white py-2 rounded-lg transition duration-300">Get Started</button>
                    <div className="text-xs text-gray-500 mt-4">14-day free trial, cancel anytime</div>
                </div>

                {/* <!-- Pro Plan --> */}
                <div className="max-w-sm mx-auto bg-[#F9F9F9] border border-[#E43C5C] rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
                    <div className="text-xl font-bold mb-2">Pro Plan</div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">$29.99<span className="text-lg">/month</span></div>
                    <div className="text-sm mb-4">Billed annually</div>
                    <div className="text-base mb-4">Ideal for growing businesses with additional needs</div>
                    <ul className="text-left text-sm mb-6">
                        <li className="mb-2">✔️ Access to all core features</li>
                        <li className="mb-2">✔️ 50 GB storage</li>
                        <li className="mb-2">✔️ Priority 24/7 customer support</li>
                        <li className="mb-2">✔️ Advanced analytics and reporting</li>
                        <li className="mb-2">✔️ Customizable dashboard</li>
                        <li className="mb-2">✔️ Team collaboration tools</li>
                    </ul>
                    <button className="w-full bg-gray-300 text-[#E43C5C] py-2 rounded-lg transition duration-300">Upgrade Now</button>
                    <div className="text-xs mt-4">14-day free trial, cancel anytime</div>
                </div>

                {/* <!-- Enterprise Plan --> */}
                <div className="max-w-sm mx-auto bg-[#F9F9F9] rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
                    <div className="text-xl font-bold mb-2">Enterprise Plan</div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">Contact Us</div>
                    <div className="text-sm text-gray-600 mb-4">Custom billing</div>
                    <div className="text-base mb-4">Custom solutions for large enterprises and organizations</div>
                    <ul className="text-left text-sm mb-6">
                        <li className="mb-2">✔️ All Pro Plan features</li>
                        <li className="mb-2">✔️ Unlimited storage</li>
                        <li className="mb-2">✔️ Dedicated account manager</li>
                        <li className="mb-2">✔️ Premium 24/7 support</li>
                        <li className="mb-2">✔️ Custom integrations</li>
                        <li className="mb-2">✔️ Advanced security features</li>
                        <li className="mb-2">✔️ Tailored onboarding and training</li>
                    </ul>
                    <button className="w-full bg-[#E43C5C] text-white py-2 rounded-lg transition duration-300">Contact Us</button>
                    <div className="text-xs text-gray-500 mt-4">Custom plans tailored to your needs</div>
                </div>


            </div>

        </div>
    );
};

export default Pricing;