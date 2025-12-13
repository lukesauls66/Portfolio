import Mission from "./Mission";
import Perks from "./Perks";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">
      <div className="flex-1">
        <Mission />
      </div>
      <div className="flex-1">
        <Perks />
      </div>
    </div>
  );
};

export default About;
