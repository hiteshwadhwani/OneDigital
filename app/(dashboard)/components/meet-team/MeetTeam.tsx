"use client";

import Card from "./Cards";

const MeetTeam = () => {
  return (
    <div className="h-[100vh] flex flex-col">
        <h1 className="text-[70px] md:text-[180px] leading-[84.72px] md:leading-[217.84px] uppercase pt-[20px] md:pt-[60px] text-center">Meet Our Team</h1>
        <div className="flex-1">
            <div className="flex flex-row items-center justify-center">
                <Card color="bg-[#A500FF]" />
                <Card color="bg-[#84EDFF]" />
                <Card image="/images/team/dhruv.svg" />
                <Card image="/images/team/hitesh.svg" />
                <Card image="/images/team/ashu.svg" />
                <Card color="bg-[#FF00AA]" />
                <Card color="bg-[#CDFF00]" />
            </div>
        </div>
    </div>
  );
};
export default MeetTeam;
