import Aboutus from "./components/Aboutus";
import Advantages from "./components/Advantages";
import Advantages2 from "./components/Advantages2";
import Banner from "./components/Banner";
import Course from "./components/Course";
import IntensiveCourse from "./components/IntensiveCourse";
import Learning from "./components/Learning";
import LogoSlide from "./components/LogoSlide";
import Mentor from "./components/Mentor";

export default function Home() {
  return (
    <>
    <div className="wrapper ">
      <Banner />
      <Aboutus />
      <Advantages />
      <Learning />
      <Course />
      <IntensiveCourse />
      <Mentor />
      <Advantages2/>
    </div>
    <LogoSlide/>
    </>
  );
}
