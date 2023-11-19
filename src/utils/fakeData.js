import { AiFillSetting } from "react-icons/ai";
import { BsQrCode, BsTrophyFill } from "react-icons/bs";
import { DiSenchatouch } from "react-icons/di";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

export const AdvantagesData = [
  {
    title: "Học theo lộ trình, có định hướng",
    Icon: FaRegCheckCircle,
    content:
      "BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.",
  },
  {
    title: "Nền tảng cốt lõi trong lập trình",
    Icon: AiFillSetting,
    content:
      "BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.",
  },
  {
    title: "Mài giũa bạn qua thực tế",
    Icon: DiSenchatouch,
    content:
      'Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.',
  },
  {
    title: "Mentor tận tâm",
    Icon: HiOutlineUserGroup,
    content:
      "Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.",
  },
  {
    title: "Công nghệ mới, thực tế",
    Icon: BsQrCode,
    content:
      "Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.",
  },
  {
    title: "Trao tay chìa khóa thành công",
    Icon: BsTrophyFill,
    content:
      "Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.",
  },
];

export const Categories = [
  {
    id: 1,
    name: "Front-end",
  },
  {
    id: 2,
    name: "Back-end",
  },
  {
    id: 3,
    name: "Database",
  },
  {
    id: 4,
    name: "Cấp tốc",
  },
  {
    id: 5,
    name: "Other",
  },
  {
    id: 6,
    name: "STEM",
  },
];

export const CourseList = [
  {
    id: 1,
    level: 1,
    title: ".NET Core API",
    mentor: {
      name: "Trần Hoà Hiệp",
      image: "/mentor-2.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 15,
    description:
      ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.    ",
    numStudent: 15,
    banner: "/PRJ302.png",
    categories: {
      id: 1,
      name: "Back-end",
    },
    learnMethod: "Online",
  },
  {
    id: 2,
    level: 3,
    title: "Nhập môn kiểm thử phần mềm",
    mentor: {
      name: "Tô Lý Hữu Nhân",
      image: "/mentor-3.webp",
    },
    price: 2500000,
    rating: 5,
    numOfSessions: 15,
    description:
      "Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.",
    numStudent: 15,
    banner: "/PRJ303.jpeg",
    categories: {
      id: 5,
      name: "Other",
    },
    learnMethod: "Online",
  },
  {
    id: 3,
    level: 2,
    title: "C Fundamental",
    mentor: {
      name: "Phan Nhật Tân",
      image: "/mentor-1.webp",
    },
    price: 2000000,
    rating: 5,
    numOfSessions: 18,
    description:
      "Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách sử dụng ngôn ngữ lập trình C++ để tạo ra các chương trình ứng dụng và phần mềm.",
    numStudent: 17,
    banner: "/PRJ304.png",
    categories: {
      id: 5,
      name: "Other",
    },
    learnMethod: "Online",
  },
  {
    id: 4,
    level: 3,
    title: "Object-oriented programming (OOP)",
    mentor: {
      name: "Nguyễn Viết Châu",
      image: "/mentor-4.webp",
    },
    numOfSessions: 18,
    description:
      "Lập trình hướng đối tượng (OOP) là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.",
    numStudent: 14,
    banner: "/PRJ305.png",
    categories: {
      id: 2,
      name: "Back-end",
    },
    learnMethod: "Offline",
    price: 2000000,
  },
  {
    id: 5,
    level: 1,
    title: "HTML & CSS",
    mentor: {
      name: "Đỗ Minh Quân",
      image: "/mentor-5.webp",
    },
    price: 2500000,
    rating: 5,
    numOfSessions: 18,
    description:
      "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây dựng cấu trúc các thành phần có trong trang web hoặc ứng dụng. Cùng với đó chúng cũng giúp trang web phân chia các đoạn văn, links, heading, blockquotes",

    numStudent: 19,
    banner: "/PRJ306.jpeg",
    categories: {
      id: 1,
      name: "Front-end",
    },
    learnMethod: "Offline",
  },
  {
    id: 6,
    level: 2,
    title: "Java Web Application_Cấp Tốc",
    mentor: {
      name: "Phan Nhật Tân",
      image: "/mentor-1.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 2,
    description: "Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!",

    numStudent: 15,
    banner: "/PRJ301.webp",
    categories: {
      id: 4,
      name: "Cấp tốc",
    },
    learnMethod: "Online",
  },
  {
    id: 7,
    level: 2,
    title: "Database_Cấp Tốc",
    mentor: {
      name: "Phan Nhật Tân",
      image: "/mentor-1.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 2,
    description: "Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!",
    numStudent: 15,
    banner: "/PRJ306.webp",
    categories: {
      id: 4,
      name: "Cấp tốc",
    },
    learnMethod: "Online",
  },
  {
    id: 8,
    title: "Software Requirement_Cấp Tốc",
    level: 2,
    mentor: {
      name: "Tô Lý Hữu Nhân",
      image: "/mentor-3.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 3,
    description:
      "Zero to Hero, khóa học cấp tốc này giúp các bạn sẽ dễ dàng hiểu và làm được bài thi thực hành chỉ với các thao tác đơn giản!",
    numStudent: 15,
    banner: "/PRJ307.webp",
    categories: {
      id: 4,
      name: "Cấp tốc",
    },
    learnMethod: "Online",
  },
  {
    id: 9,
    level: 3,
    title: "Object-oriented programming (OOP)",
    mentor: {
      name: "Nguyễn Viết Châu",
      image: "/mentor-4.webp",
    },
    numOfSessions: 18,
    description:
      "Lập trình hướng đối tượng (OOP) là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.",
    numStudent: 14,
    banner: "/PRJ305.png",
    categories: {
      id: 2,
      name: "Back-end",
    },
    learnMethod: "Offline",
  },
  {
    id: 10,
    level: 1,
    title: "HTML & CSS",
    mentor: {
      name: "Đỗ Minh Quân",
      image: "/mentor-5.webp",
    },
    price: 2500000,
    rating: 5,
    numOfSessions: 18,
    description:
      "HTML (hay Hypertext Markup Language) là ngôn ngữ đánh dấu siêu văn bản. Nó hỗ trợ người dùng xây dựng cấu trúc các thành phần có trong trang web hoặc ứng dụng. Cùng với đó chúng cũng giúp trang web phân chia các đoạn văn, links, heading, blockquotes",

    numStudent: 19,
    banner: "/PRJ306.jpeg",
    categories: {
      id: 1,
      name: "Front-end",
    },
    learnMethod: "Offline",
  },
  {
    id: 11,
    level: 2,
    title: "Java Web Application_Cấp Tốc",
    mentor: {
      name: "Phan Nhật Tân",
      image: "/mentor-1.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 2,
    description: "Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!",

    numStudent: 15,
    banner: "/PRJ301.webp",
    categories: {
      id: 4,
      name: "Cấp tốc",
    },
    learnMethod: "Online",
  },
  {
    id: 12,
    level: 2,
    title: "Database_Cấp Tốc",
    mentor: {
      name: "Phan Nhật Tân",
      image: "/mentor-1.webp",
    },
    price: 500000,
    rating: 4,
    numOfSessions: 2,
    description: "Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!",
    numStudent: 15,
    banner: "/PRJ306.webp",
    categories: {
      id: 4,
      name: "Cấp tốc",
    },
    learnMethod: "Online",
  },
];

export const MentorList = [
  {
    id: 1,
    image: "/mentor-1.webp",
    name: "Phan Nhật Tân",
    description:
      "Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập cùng tôi.",
  },
  {
    id: 2,
    image: "/mentor-3.webp",
    name: "Tô Lý Hữu Nhân",
    description:
      "Tôi là Hữu Nhân, hiện tại là một Business Analyst với hơn 3 năm kinh nghiệm và 2 năm với vị trí Tester/QC. Tôi đã tham gia các dự án product tới outsource. Và từ những kinh nghiệm trầy da tróc vảy khi tham gia các dự án, tôi tin rằng tôi có thể chia sẻ các kinh nghiệm về quản lý dự án, quy trình làm phầm mềm, kiểm thử phần mềm và những kinh nghiệm xử lý vấn đề.",
  },
  {
    id: 3,
    image: "/mentor-2.webp",
    name: "Trần Hoà Hiệp",
    description:
      "Tôi là Trần Hòa Hiệp, một full stack developer với 5 năm kinh nghiệm về công nghệ .NET có kiến ​​thức tốt về Thiết kế cơ sở dữ liệu, Design Pattern, Phân tích và thiết kế hướng đối tượng. 2 năm trong việc đào tạo học viên là người đi làm, và sinh viên sắp ra trường.",
  },
  {
    id: 4,
    image: "/mentor-5.webp",
    name: "Đỗ Minh Quân",
    description:
      "Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công trong lĩnh vực lập trình Front-end.",
  },
  {
    id: 5,
    image: "/mentor-4.webp",
    name: "Nguyễn Viết Châu",
    description:
      "Xin chào! Tôi là Nguyễn Viết Châu – mentor có kinh nghiệm trong việc giảng dạy các môn học liên quan đến công nghệ thông tin. Với 3 năm kinh nghiệm làm mentor và một nền tảng kiến thức chuyên môn vững vàng, tôi tự tin rằng mình có thể giúp các bạn sinh viên nắm vững kiến thức, nâng cao kỹ năng và đạt được thành tích tốt nhất trong học tập. Tôi luôn đặt sự tiếp thu và hiểu biết của sinh viên lên hàng đầu và dùng các phương pháp giảng dạy đa dạng, trực quan để giúp các bạn hiểu bài một cách dễ dàng và thú vị.",
  },
];
