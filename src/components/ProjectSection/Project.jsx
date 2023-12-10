import React from "react";

import PassGen from "../../assets/PassGen.png";
import currPreview from "../../assets/CurrPreview.png";
import youtubeClone from "../../assets/YoutubeClone.png";
import movflix from "../../assets/movflix.png";
import amazoncrop from "../../assets/amazoncrop.png";
import Quizland from "../../assets/Quizland.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ProjectsCard from "./ProjectsCard";

const Project = () => {
  return (
    <div className=" max-w-[1240px] mx-auto sm:px-12">
      <div className=" text-center pt-24">
        <h1 className=" gradient-text text-4xl font-bold text-textClr pb-2 ">
          Projects
        </h1>
        <p className=" font-semibold text-sm text-[#8B94A3]">
          Most recent work
        </p>
      </div>
      <div className=" md:grid md:grid-cols-2 md:gap-10 py-12 md:mx-4 mx-0 flex flex-col gap-10">
        <ProjectsCard
          ProjectName={
            <a
              href="https://video-streaming-clone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube Clone
            </a>
          }
          image={youtubeClone}
          link={"https://github.com/brijesh2392/youtube_clone"}
        />

        <ProjectsCard
          ProjectName={
            <a
              href="https://amazon-clone020309.netlify.app/"
              target="blank"
              rel="noreferrer noopener"
            >
              Amazon clone
            </a>
          }
          image={amazoncrop}
          link={"https://github.com/brijesh2392/AmazonClone"}
        />

        <ProjectsCard
          ProjectName={
            <a
              href="https://mov-flix.vercel.app/"
              target="blank"
              rel="noreferrer noopener"
            >
              MovFlix
            </a>
          }
          image={movflix}
          link={
            "https://github.com/brijesh2392/MovFlix/tree/29d1f1cc9657526e6a7a19e0cb12dccfc66eee79"
          }
        />
        <Carousel>
          <ProjectsCard
            ProjectName={
              <a
                href="https://quizland.vercel.app/"
                target="blank"
                rel="noreferrer noopener"
              >
                Quizland
              </a>
            }
            image={Quizland}
            link={"https://github.com/brijesh2392/Quizland"}
          />

          <ProjectsCard
            ProjectName={"Color Generator"}
            image={PassGen}
            link={"https://github.com/brijesh2392/bnewapp/tree/main/PassGen"}
          />

          <ProjectsCard
            ProjectName={"Currency Convertor"}
            image={currPreview}
            link={
              "https://github.com/brijesh2392/bnewapp/tree/main/CurrencyConverter"
            }
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
