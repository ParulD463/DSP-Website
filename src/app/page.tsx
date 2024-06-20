"use client";
import Image from "next/image";
import "../app/globals.css";

import Hero from "../components/Hero";
import CorePillar from "../components/CorePillar";
import "flowbite";
import Link from "next/link";
import { Navbar } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-nonwrap flex-row">
        <div className="flex ml-10 items-center ">
          <div className="spin-on-hover-y rounded-full">
            <Image
              src="/delta_sigma_pi_SEAL_image.webp"
              alt="Delta Sigma Pi Seal"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="flex flex-col flex-nonwrap ml-2">
          <div className="text-start font-Lato text-lg font-extralight text-white tracking-tight text-nowrap antialiased mt-1">
            Delta Sigma Pi
          </div>

          <div className="text-start font-Lato text-base font-thin text-white tracking-tight text-nowrap antialiased mb-2">
            ΠΧ CHAPTER, UC SANTA CRUZ
          </div>
        </div>

        {/* <div className="grid grid-cols-5 gap-x-[19px] ml-96"> */}
        {/* <div>
            <button
              id="aboutDropdownHoverButton"
              data-dropdown-toggle="about_dropdownHover"
              data-dropdown-trigger="hover"
              className=" mb-3 mt-4  hover:bg-transparent-800 bg-opacity-0"
              type="button"
            >
              About{" "}
            </button>
            <div
              id="about_dropdownHover"
              className=" z-20 hidden bg-transparent divide-y divide-transparent-100 rounded-sm shadow w-44 dark:bg-transparent-700"
            >
              <Link
                href="/ourChapter"
                className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
              >
                Our Chapter
              </Link>
              <Link
                href="/History"
                className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
              >
                History
              </Link>
            </div>
          </div> */}
        {/* 
          <div>
            <button
              id="brothersDropdownHoverButton"
              data-dropdown-toggle="brothers_dropdownHover"
              data-dropdown-trigger="hover"
              className=" ml-86 mb-3 mt-4 hover:bg-transparent-800 bg-opacity-0"
              type="button"
            >
              Brothers{" "}
            </button>
            <div
              id="brothers_dropdownHover"
              className="z-20 hidden bg-transparent divide-y divide-transparent-100 rounded-sm shadow w-44 dark:bg-transparent-700"
            >
              <Link
                href="/ExecutiveBoard"
                className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
              >
                Executive Board
              </Link>
              <Link
                href="/Actives"
                className="block px-4 py-2 hover:bg-black-100 dark:hover:bg-grey dark:hover:text-yellow hover:text-yellow-500"
              >
                Actives
              </Link>
            </div>
          </div> */}
        <Navbar />
        {/* </div> */}
      </div>

      <Hero />

      {/* "Who We Are" Section (Static) */}
      <section className="py-24 text-center">
        <div className="flex justify-center">
          <div className="spin-on-hover-y rounded-full">
            <Image
              src="/delta_sigma_pi_SEAL_image.webp"
              alt="Delta Sigma Pi Seal"
              width={150}
              height={150}
            />
          </div>
        </div>

        <h2
          className="underline underline-offset-8 decoration-1"
          style={{
            fontFamily: "Lato",
            fontSize: "25px",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "white",
          }}
        >
          Who We Are
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "Lato",
              fontWeight: "400",
              fontSize: "17px",
              letterSpacing: "0.85px",
              lineHeight: "23.8px",
              width: "858px",
              textAlign: "center",
              color: "white",
            }}
          >
            The Pi Chi Chapter of Delta Sigma Pi is the largest and oldest co-ed
            professional business fraternity at the University of California,
            Santa Cruz. Since our founding in 2010, we have been dedicated to
            creating an environment that gives our brothers an opportunity to
            grow personally and professionally. As a group of inspired young
            professionals, we believe in giving back to the community that has
            shaped us into the people we are today.
          </p>
        </div>

        <div>
          <Link href="/Actives">
            <button className="black-white-button mt-11">
              Meet the Brothers
            </button>
          </Link>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h2 className="font-Lato text-4xl font-medium text-transform:uppercase text-white underline underline-offset-8 decoration-1">
          Core Pillars
        </h2>
      </div>

      <div className="mt-10">
        <CorePillar
          imageLink="/dsp_website_professionalismPillar.webp"
          title="Professionalism"
          altText="Brother's professional photoshoot"
          text="We believe that Professionalism is a state of mind. Our Brothers have emerged more knowledgeable about the professional world and have found success in a variety of industries worldwide."
          left={true}
        />
      </div>
      <div className="mt-10 mr-65">
        <CorePillar
          imageLink="/dsp_website_brotherhoodPillar.webp"
          title="Brotherhood"
          altText="Brother's in tahoe"
          text="As Brothers, we encourage mutual growth, professionally and personally. We make memories to last a lifetime not only within our chapter, but also extending to our 220+ national chapters."
          left={false}
        />
      </div>
      <div className="mt-10 mr-65">
        <CorePillar
          imageLink="/dsp_website_communityServicePillar.webp"
          title="Community Service"
          altText="Brother's serving the community"
          text="We join together today in order to build a better tomorrow for ourselves and those around us."
          left={true}
        />
      </div>

      <div>
        <h2 className="text-center ml-52 mt-36 font-Lato text-3xl font-medium uppercase text-white tracking-tighter underline underline-offset-8 decoration-1 ">
          A Message From Our President
        </h2>
      </div>
      <div className="flex flex-row">
        <div className="mt-14 ml-56 flex-shrink-0">
          <Image
            src="/dsp_webiste_president_message_picture.webp"
            alt="President"
            width={295}
            height={20}
            className="rounded-xl"
          />
        </div>
        <div className="ml-20 mt-6 ">
          <div className="mr-72 text-start font-Lato text-lg font-thin text-white tracking-tight text-wrap antialiased">
            Welcome to America’s premier and foremost co-ed professional
            business fraternity, Delta Sigma Pi!
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Our Pi Chi Chapter at UC Santa Cruz is the oldest and largest
            business organization on campus. Founded in 2010; since then, we've
            grown quite a bit, with over 330 initiated members! Every member
            embodies our commitment to developing our professional lives, giving
            back to our community, and treasuring the lifelong bonds we make
            with one another along the way. Our vast alumni network spans the
            entirety of the Bay Area, the larger California region, and the
            entire country.
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Brothers and alumni from Delta Sigma Pi work in fields such as
            accounting, auditing, investment banking, consulting, marketing,
            business analytics, product management, human resources, sales,
            software engineering, technology development, network engineering,
            and many more.
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Brothers and alumni from Delta Sigma Pi work in fields such as
            accounting, auditing, investment banking, consulting, marketing,
            business analytics, product management, human resources, sales,
            software engineering, technology development, network engineering,
            and many more.
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Since joining Delta Sigma Pi, I've discovered a community of
            like-minded and driven individuals, who support my academic and
            career advancement. I've improved my interviewing skills, leveraged
            alumni connections to land internship opportunities, and gained a
            family. Delta Sigma Pi has pushed me to elevate my purpose, make
            memories, and learn many valuable lessons I'll never forget; I hope
            to continue sharing them with others who are also interested in
            pursuing a similar path.
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            We are committed and dedicated to helping you grow. Delta Sigma Pi
            creates a space for individuals with bold and passionate dreams to
            come together and achieve success. Whether it's academic help,
            career consulting, or joining a group of skilled professionals,
            Delta Sigma Pi will always foster you with the resources you desire.
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Are you ready to be a Deltasig? Do you want to expand your
            potential? Come join us at our Fall 2023 Recruitment!
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            Let's get back to business, I look forward to seeing you during
            Recruitment Week!
          </div>

          <div className="mr-60 text-start mt-3 font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            {" "}
            Fraternally yours,{" "}
          </div>
          <div className="mr-60 text-start font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            {" "}
            Heather Robinson{" "}
          </div>
          <div className="mr-60 text-start font-Lato text-base font-thin text-white tracking-tighter text-wrap antialiased">
            {" "}
            President 2023-2024{" "}
          </div>
        </div>
      </div>
    </>
  );
}
