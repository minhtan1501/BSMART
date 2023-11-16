import Aboutus from "./components/Aboutus";
import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import Course from "./components/Course";
import Learning from "./components/Learning";

export default function Home() {
  return (
    <div className="wrapper ">
        <Banner/>
        <Aboutus/>
        <Advantages/>
        <Learning/>
        <Course/>
    </div>
  )
}
