"use client";

import Image from "next/image";
import Card from "./Cards";
import Designation from "./Designation";

const MeetTeam = () => {
  return (
    <div className="min-h-[100vh] h-fit flex flex-col">
      <h1 className="text-[70px] md:text-[180px] leading-[84.72px] md:leading-[217.84px] uppercase pt-[20px] md:pt-[60px] text-center font-light">
        Meet Our Team
      </h1>

      {/* desktop view */}
      <div className="flex-1 hidden lg:block relative">
        <div className="flex flex-row items-center justify-center">
          <Card color="bg-[#A500FF]" />
          <Card color="bg-[#84EDFF]" />
          <div className="relative">
            <Card image="/images/team/dhruv.svg" />
            <Image
              src={"/images/arrows/left.svg"}
              alt="left arrow"
              width={50}
              height={50}
              className="absolute top-[100%] left-[50%] -translate-x-[50%] translate-y-10"
            />
          </div>

          <div className="relative">
            <Card image="/images/team/hitesh.svg" />
            <Image
              src={"/images/arrows/down.svg"}
              alt="left arrow"
              width={50}
              height={50}
              className="absolute top-[100%] left-[50%] -translate-x-[50%] translate-y-10"
            />
          </div>

          <div className="relative">
            <Card image="/images/team/ashu.svg" />
            <Image
              src={"/images/arrows/right.svg"}
              alt="left arrow"
              width={50}
              height={50}
              className="absolute top-[100%] left-[50%] -translate-x-[50%] translate-y-10"
            />
          </div>

          <Card color="bg-[#FF00AA]" />
          <Card color="bg-[#CDFF00]" />
        </div>
        <div className="mt-32 flex flex-row items-center justify-center gap-x-28">
          <Designation
            name="Dhruv Patel"
            designation="Head of Design"
            imageUrl="/images/lines/img1.svg"
          />
          <Designation
            name="Hitesh Wadhwani"
            designation="Head of tech"
            imageUrl="/images/lines/img3.svg"
            className="translate-y-8"
          />
          <Designation
            name="Ishan Shivhare"
            designation="Head of Social media"
            imageUrl="/images/lines/img2.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default MeetTeam;
