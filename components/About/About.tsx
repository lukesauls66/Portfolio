import Mission from "./Mission";
import Perks from "./Perks";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <Mission />
      <Perks />
    </div>
  );
};

export default About;
