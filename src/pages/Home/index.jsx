import Aboutus from "./components/Aboutus";
import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import Course from "./components/Course";
import IntensiveCourse from "./components/IntensiveCourse";
import Learning from "./components/Learning";
import Mentor from "./components/Mentor";

export default function Home() {
  return (
    <div className="wrapper ">
      <Banner />
      <Aboutus />
      <Advantages />
      <Learning />
      <Course />
      <IntensiveCourse />
      <Mentor />
    </div>
  );
}
