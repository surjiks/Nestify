import React from "react";
import homeimg from "../../images/indexbg.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#a8e6cf] via-[#8FD97C] to-[#6dcf62] h-screen w-full relative text-center">
        <div className="-space-y-20 absolute left-0 right-0 mt-20">
          <p className="mt-8 text-4xl">
            Transforming the future of home living
          </p>
          <p className="head font-['MuseoModerno'] text-[220px] text-black font-bold">
            NESTIFY
          </p>
        </div>
        <div className="absolute bottom-0 ml-150">
          <img className="h-160" src={homeimg} alt="" />
        </div>
        <div className="flex justify-between absolute mt-150 right-0 left-0">
          <div className="max-w-lg text-left ml-10 -mt-30">
            <p className="text-2xl mb-6">
              Make your dream of homeownership a reality with guidance, support,
              and the right opportunities at your fingertips.
            </p>
            <Link
              to={"/login"}
              className="bg-[#095B15] p-3 text-white text-xl rounded-2xl hover:bg-[#07400F] transition"
            >
              Get Started
            </Link>
          </div>
          <div className="flex flex-col justify-center space-y-4 text-right -mt-55 mr-30">
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-house-user text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">
                Modern Homes
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-star text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">
                Luxury
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-leaf text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">
                Eco-Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Why Choose Nestify?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 text-center">
              <i className="fa-solid fa-cube text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Modern Architecture
              </h3>
              <p className="text-gray-600">
                Discover contemporary designs built with cutting-edge materials
                for ultimate style and durability.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 text-center">
              <i className="fa-solid fa-seedling text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Sustainable Living
              </h3>
              <p className="text-gray-600">
                Homes that are kind to the planet, featuring solar panels,
                efficient insulation, and minimal footprint.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 text-center">
              <i className="fa-solid fa-diamond text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Unmatched Luxury
              </h3>
              <p className="text-gray-600">
                Premium properties with state-of-the-art amenities and smart
                technology for effortless comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">
            Your Journey to a New Home
          </h2>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-emerald-200/70 -z-10"></div>

            <div className="p-6 text-center bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                <i className="fa-solid fa-magnifying-glass text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                1. Explore & Filter
              </h3>
              <p className="text-gray-600">
                Use our smart search to find eco-friendly or luxury properties
                that fit your vision.
              </p>
            </div>

            <div className="p-6 text-center bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                <i className="fa-solid fa-handshake-simple text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                2. Connect & Secure
              </h3>
              <p className="text-gray-600">
                Get connected with verified sellers and Nestify agents for
                trusted deals and guidance.
              </p>
            </div>

            <div className="p-6 text-center bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                <i className="fa-solid fa-key text-2xl text-emerald-600"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                3. Move Into Your Future
              </h3>
              <p className="text-gray-600">
                The keys are yours. Enjoy a seamless transaction and settle into
                your dream home.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-br from-[#a8e6cf] via-[#8FD97C] to-[#6dcf62] py-20 text-black text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p className="mb-6 text-xl">
          Join Nestify today and start your journey to modern, luxury living.
        </p>
        <Link
          to={"login"}
          className="bg-[#095B15] text-white px-6 py-3 rounded-2xl font-semibold text-xl hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
