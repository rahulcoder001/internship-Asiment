"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/School_Logo.png";
import contact from "/public/contact-me.svg";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp",
    "/image6.webp",
    "/image7.webp",
    "/image8.webp",
    "/image9.webp",
    "/image10.webp",
  ];

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="w-full h-screen flex flex-col">
        {/* Header Section */}
        <div className="w-full h-8 bg-[#0d369f] flex justify-between items-center text-sm font-bold text-white">
          <p>Registration open for LKG, UKG, and I for session (2025-2026)</p>
          <p className="flex gap-3">
            Any questions?
            <span className="underline"><Call/></span> (+91)9453XXXX76
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center font-bold text-[#0d369f]">
            <Image src={logo} alt="School Logo" width={120} height={120} />
            <ul className="flex gap-4 ml-4">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mr-5">
            <div className="flex rounded-lg border-2 p-2 bg-slate-100 hover:border-[#0d369f]">
              <input
                className="outline-none bg-slate-100"
                type="text"
                placeholder="Search"
              />
              <Search/>
            </div>
            <button className="rounded-xl p-2 px-3 hover:bg-blue-600 text-sm font-bold bg-[#0d369f] text-white">
              Register
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="flex-grow w-full relative overflow-hidden p-1">
          {/* Current Image */}
          <div
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
            className="bg-cover bg-center w-full h-full transition-all duration-700 ease-in-out"
          ></div>

          {/* Left Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-5 top-1/2 transform -translate-y-1/2  bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <Left/>
          </button>

          {/* Right Button */}
          <button
            onClick={goToNext}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white  text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <Right/>
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
           <p className="text-center"><span className="font-extrabold text-[#0d369f] text-4xl">Welcome to</span><span className="font-bold ml-3 text-2xl text-[#ffc10e]">Vishal Bharti Senior Secondary School</span></p>
           <div className="flex ml-40 mr-40 mt-40 gap-52">
            <div className="flex flex-col items-center justify-center w-1/3">
              <Image src={"/img1.png"} alt="img1" height={120} width={120}/>
              <p className="text-2xl mt-8 text-[#0d369f] font-bold">Trending Courses</p>
              <p className="text-sm text-slate-500 mt-5">Your chance to be a trending expert in IT industries and make a successful career after  completion of our courses.</p>
              <p className="mt-5 text-lg font-semibold text-[#0d369f] hover:text-[#ffc10e] cursor-pointer">+ READ MORE</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
            <Image src={"/img2.png"} alt="img1" height={150} width={150}/>
            <p className="text-2xl mt-8 text-[#0d369f] font-bold">Certified Teachers</p>
              <p className="text-sm text-slate-500 mt-5">Your chance to be a trending expert in IT industries and make a successful career after  completion of our courses.</p>
              <p className="mt-5 text-lg font-semibold text-[#0d369f] hover:text-[#ffc10e] cursor-pointer">+ READ MORE</p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
            <Image src={"/img3.png"} alt="img1" height={120} width={120}/>
            <p className="text-2xl mt-8 text-[#0d369f] font-bold">Books & Library</p>
              <p className="text-sm text-slate-500 mt-5">Your chance to be a trending expert in IT industries and make a successful career after  completion of our courses.</p>
              <p className="mt-5 text-lg font-semibold text-[#0d369f] hover:text-[#ffc10e] cursor-pointer">+ READ MORE</p>
            </div>
           </div>
           <p className="text-slate-400 w-4/5 mt-12 font-bold text-sm">At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That’s why we’ve developed a unique approach to learning that focuses on each student’s individual needs and learning style. Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.</p>
      </section>
      <section className="mt-20">
      <div className="max-w-screen-xl mx-auto px-4 pb-12 Varela_round">
      <h2 className="text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-3 w-max mx-auto text-center text-white bg-[#0d369f] rounded-md">
        Let's Connect
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full">
          <Image src={contact} alt="phone" />
        </div>
        <form
          className="w-full"
          name="contactUS"
        >
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@procodrr.com"
            />
          </div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              rows={8}
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full text-white bg-[#0d369f] hover:bg-blue-500 focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none}`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
      </section>
      <footer className="flex flex-col items-center justify-center">
      <Image src={logo} alt="School Logo" width={120} height={120} />
           <p className="font-bold text-xl">Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India</p>
          <p className="text-sm font-bold text-slate-300">Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.</p>
      </footer>
    </div>
  );
}



const Left = () =>(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
  className="w-6 h-6 text-[#0d369f]"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15 19l-7-7 7-7"
  />
</svg>

)

const Right = () =>(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
  className="w-6 h-6 text-[#0d369f]"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 5l7 7-7 7"
  />
</svg>

)

const Call = ()=>(
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="feather feather-phone"
>
  <path
    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  ></path></svg>
)

const Search = () =>(
  <svg className="text-[#0d369f]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
</svg>
)