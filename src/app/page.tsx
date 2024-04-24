"use client";
import React, { useEffect } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";
import StateTextFields from "@/components/StateTextFields";
import axios from "axios";
import { BASE_API_URL } from "@/ultils/contranst";

const Home = () => {
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/payments/2369704266273513`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="w-full">
      <div className="flex-row items-center justify-center mt-12">
        <div className="w-full flex flex-wrap items-start justify-center">
          <div className="w-1/3 min-w-[20rem] mr-8">
            <ActionAreaCard />
          </div>
          <div className="w-1/3 min-w-[20rem]">
            <StateTextFields />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
