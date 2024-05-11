"use client";
import React, { useEffect } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";
import StateTextFields from "@/components/StateTextFields";
import { Images } from "../../public";

const Home = () => {

  return (
    <main className="w-full">
      <div className="flex-row items-center justify-center mt-12">
        <div className="w-full flex flex-wrap items-start justify-center">
          <div className="w-1/3 min-w-[20rem] mx-4">
            <ActionAreaCard
              image={Images.bookImage}
              title="Bí mật của may"
              author="Alex Rovia"
              type="Khác, Phương Tây"
              status="Full"
              price="2,000"
            />
          </div>
          <div className="w-1/3 min-w-[20rem] mx-4">
            <StateTextFields />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
