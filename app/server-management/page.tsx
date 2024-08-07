import MaxWidth from "@/components/max-width";
import Hero from "./Hero";
import Feature from "./Feature";
import KeyFeatures from "./KeyFeature";

const ServerMangement = () => {
  return (
    <div className="bg-server w-[100vw]">

      <MaxWidth className=" mt-6 flex flex-col">
        {/* hero */}
        <Hero />
        <Feature />
        <KeyFeatures/>
      </MaxWidth>
    </div>
      
  );
};

export default ServerMangement;
