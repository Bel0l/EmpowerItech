import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import islamia2 from "../assets/islamia2.jpg";
import img1 from "../assets/image1.jpg";
import techheart from "../assets/techheart.jpg";

import bgtech from "../assets/bgtech.jpg";


const Home = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    // Set rendered to true when the component mounts or refreshes
    setRendered(true);
  }, []);

  const carouselRef = useRef(null);
  const currentIndexRef = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    if (rendered) {
      const carouselItems = carouselRef.current.querySelectorAll(
        "[data-carousel-item]"
      );

      const showItem = (index) => {
        currentIndexRef.current = index;
        carouselItems.forEach((item, i) => {
          item.classList.toggle("hidden", i !== index);
        });
      };

      const handleNext = () => {
        const newIndex = (currentIndexRef.current + 1) % carouselItems.length;
        showItem(newIndex);
      };

      const startSliding = () => {
        autoSlideIntervalRef.current = setInterval(() => {
          handleNext();
        }, 4000); // Change this interval as per your requirement
      };

      const handleCarouselClick = () => {
        clearInterval(autoSlideIntervalRef.current);
      };

      // Check if the carouselRef.current is not null before adding the event listener
      const currentCarouselRef = carouselRef.current;
      if (currentCarouselRef) {
        currentCarouselRef.addEventListener("click", handleCarouselClick);
      }

      startSliding();

      return () => {
        // Remove the event listener only if it exists
        if (currentCarouselRef) {
          currentCarouselRef.removeEventListener("click", handleCarouselClick);
        }

        clearInterval(autoSlideIntervalRef.current);
      };
    }
  }, [rendered]);

  if (!rendered) {
    // If not yet rendered, return null or a loading message
    return <p>Loading...</p>;
  }

  return (
    <div
      id="default-carousel"
      className="relative w-full h-full p-5 bg-[#f1f2f8]"
      data-carousel="slide"
      ref={carouselRef}
    >
      <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
        <div className="duration-10000 ease-in-out" data-carousel-item>
          <img
            src={islamia2}
            height={999}
            width={600}
            className="absolute  w-full h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
          />
        </div>
        <div className="duration-1 h-48 w-full ease-in-out" data-carousel-item>
          <img
            src={img1}
            height={800}
            width={600}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
          />
        </div>
    
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      <div>
        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="flex flex-col items-center md:flex-row justify-center md:justify-start py-12 space-y-5">
            <div className="md:w-2/4">
            <h2 className="mb-4 text-center text-3xl font-bold">
              About Allied Skill
            </h2>
              <p className="text-lg text-justify mr-4 px-4 py-4 md:text-xl">
              Welcome to our agency, where we are dedicated to helping you unlock your full potential in the world of freelancing and digital marketing. Whether you are a seasoned professional looking to refine your skills or a newcomer eager to dive into the dynamic gig economy, our academy offers the resources, training, and support you need to succeed on platforms like Fiverr and Upwork, as well as in the realm of guest posting.
              </p>
              
              <Link to="/AboutUs">
              <button className="bg-blue-500 text-white p-2 rounded-md ml-4 hover:bg-blue-600">See more...</button>
              </Link>
            </div>
            <img className="w-1/2 h-80 ml-7 " src={techheart} alt="" />
          </div>
        </div>

        {/* <div>
          <div className="w-full bg-gradient-to-tr from-purple-400 to-green-700 h-96 relative">
            <img
              src={bgtech}
              alt=" "
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <div className="px-96 py-32">
              <h1 className="text-white text-6xl font-bold">
                This is the headline
              </h1>
            </div>
          </div>
        </div> */}

        <div className="slider mt-4 flex-col-reverse md:flex-row bg-white">
          <div className="left flex flex-col  items-center md:items-baseline py-12  space-y-5">
          <h2 className="mb-4 text-center px-3 text-3xl font-bold">
              Our Objective
            </h2>
            <p className="text-lg mr-6 text-justify px-4 md:text-xl ">
              {" "}
              Our Objective is to empower individuals and businesses to succeed in the digital marketplace by providing top-notch training, resources, and support. We are dedicated to helping freelancers thrive on platforms like Fiverr and Upwork, enhancing online visibility through guest posting, and equipping our students with the practical skills needed for a successful career in digital marketing.
              </p>
              <p className="text-lg mr-6 text-justify px-4 md:text-xl ">
We believe in the transformative power of knowledge and the importance of personalized guidance. Our goal is to create a nurturing environment where everyone, regardless of their background or experience level, can learn, grow, and achieve their professional aspirations. By fostering a community of continuous learning and support, we aim to inspire and enable our clients and students to reach new heights in their freelancing and digital marketing journeys.
</p>
<p className="text-lg mr-6 text-justify px-4 md:text-xl ">
In essence, our mission is to turn your dreams into reality by providing you with the tools, knowledge, and support to excel in the ever-evolving digital world.

            </p>
          </div>
        </div>




        {/* <!-- Container for demo purpose --> */}
        <div className="bg-white container my-5 py-5 mx-auto md:px-6">
          {/* <!-- Section: Design Block --> */}
          <section className="mb-32">
            <h2 className="mb-16  text-center text-3xl font-bold">
              Latest articles
            </h2>

            <div className="mb-16 flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl font-bold">Fiverr and Upwork Optimization</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  Travels
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>14.01.2022</u> by
                  <a href="#!">Lisa McCartney</a>
                </p>
                <p className="mb-6 text-neutral-600">
                Our experts will help you create standout profiles and optimize your gigs to attract more clients. From writing compelling descriptions to selecting the right keywords, we ensure your profile gets noticed. 
                </p>
                <p className="text-neutral-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quae nulla saepe rerum aspernatur odio amet perferendis
                  tempora mollitia? Ratione unde magni omnis quaerat blanditiis
                  cumque dolore placeat rem dignissimos?
                </p>
              </div>
            </div>

            <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
                <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                  Art
                </div>
                <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                  Published <u>12.01.2022</u> by
                  <a href="#!">Anna Doe</a>
                </p>
                <p className="text-neutral-600">
                  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                  porta dui, sit amet rutrum enim massa in ante. Curabitur in
                  justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                  eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                  ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                  faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                  Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                  Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                  tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                  aliquam lectus. Vestibulum mattis felis quis ex pharetra
                  luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                  ut.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                <div
                  className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>
                <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  Business
                </div>
                <p className="mb-6 text-sm text-neutral-500 ">
                  Published <u>10.01.2022</u> by
                  <a href="#!">Joe Svan</a>
                </p>
                <p className="text-neutral-600">
                  Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                  tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                  Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                  augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                  lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                  congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                  magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                  Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                  euismod dignissim malesuada, lacus lorem commodo leo,
                  tristique blandit ante mi id metus. Integer et vehicula leo,
                  vitae interdum lectus. Praesent nulla purus, commodo at
                  euismod nec, blandit ultrices erat. Aliquam eros ipsum,
                  interdum et mattis vitae, faucibus vitae justo. Nulla
                  condimentum hendrerit leo, in feugiat ipsum condimentum ac.
                  Maecenas sed blandit dolor.
                </p>
              </div>
            </div>
          </section>
          {/* <!-- Section: Design Block --> */}
        </div>
        {/* <!-- Container for demo purpose --> */}
      </div>
      {/* </div> */}
      {/* </div> */}

      
    </div>
  );
};

export default Home;
