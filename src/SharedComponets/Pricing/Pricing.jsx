

const Pricing = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="max-w-[1440px] space-y-6 mx-auto text-center">
                <h1 className="text-4xl font-bold">Pricing</h1>
                <p className="text-xl">Our pricing plans are designed to cater to a variety of needs and budgets, ensuring you find the perfect fit for your requirements. Whether you are an individual, a small business, or a large enterprise, we have tailored options that offer flexibility, value, and comprehensive features. Each plan provides access to our core services, with the ability to scale up as your needs grow. Enjoy transparent pricing, no hidden fees, and dedicated support to help you get the most out of your subscription. Your satisfaction and success are our top priorities.</p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 grid-cols-1">

                {/* <!-- Basic Plan --> */}
                <div className="max-w-sm mx-auto bg-white hover:bg-blue-500 border border-blue-500 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
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
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</button>
                    <div className="text-xs text-gray-500 mt-4">14-day free trial, cancel anytime</div>
                </div>

                {/* <!-- Pro Plan --> */}
                <div className="max-w-sm mx-auto bg-white hover:bg-green-500 border border-green-500 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
                    <div className="text-xl font-bold mb-2">Pro Plan</div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">$29.99<span className="text-lg">/month</span></div>
                    <div className="text-sm text-gray-600 mb-4">Billed annually</div>
                    <div className="text-base mb-4">Ideal for growing businesses with additional needs</div>
                    <ul className="text-left text-sm mb-6">
                        <li className="mb-2">✔️ Access to all core features</li>
                        <li className="mb-2">✔️ 50 GB storage</li>
                        <li className="mb-2">✔️ Priority 24/7 customer support</li>
                        <li className="mb-2">✔️ Advanced analytics and reporting</li>
                        <li className="mb-2">✔️ Customizable dashboard</li>
                        <li className="mb-2">✔️ Team collaboration tools</li>
                    </ul>
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">Upgrade Now</button>
                    <div className="text-xs text-gray-500 mt-4">14-day free trial, cancel anytime</div>
                </div>

                {/* <!-- Enterprise Plan --> */}
                <div className="max-w-sm mx-auto bg-white hover:bg-red-500 border border-red-500 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-110">
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
                    <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300">Contact Us</button>
                    <div className="text-xs text-gray-500 mt-4">Custom plans tailored to your needs</div>
                </div>


            </div>

        </div>
    );
};

export default Pricing;