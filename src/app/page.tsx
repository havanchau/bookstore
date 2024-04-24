'use client'
import ActionAreaCard from "@/components/ActionAreaCard";
import StateTextFields from "@/components/StateTextFields";


const Home = () => {

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
