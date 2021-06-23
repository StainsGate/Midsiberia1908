import Head from "next/head";
import Content from "../components/Content";
import ContentItem from "../components/ContentItem";
import SiderBar from "../components/SiderBar";
import {
  ChevronDoubleDownIcon,
  BriefcaseIcon,
  UserGroupIcon,
  StarIcon,
  TrendingUpIcon,
  AcademicCapIcon,
  ZoomInIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
import React, { useReducer, useRef } from "react";
import Box from "../components/Box";
import Progress from "../components/Progress";
import Number from "../components/Number";
import Step from "../components/Step";
import Card from "../components/Card";
import BlogCard from "../components/BlogCard";
import MapBox from "../components/MapBox";
import Message from "../components/Message";
import TextLoop from "react-text-loop";
import { info } from "../components/Data";

const Home = "home";
const About = "about";
const Experience = "experience";
const Work = "work";
const Blog = "blog";
const Contact = "contact";
const Openbar = "openbar";
const Closebar = "closebar";

let Context = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case Home:
      return Object.assign({}, state, { section: "home" });
    case About:
      return Object.assign({}, state, { section: "about" });
    case Experience:
      return Object.assign({}, state, { section: "experience" });
    case Work:
      return Object.assign({}, state, { section: "work" });
    case Blog:
      return Object.assign({}, state, { section: "blog" });
    case Contact:
      return Object.assign({}, state, { section: "contact" });
    case Openbar:
      return Object.assign({}, state, { barOpen: true });
    case Closebar:
      return Object.assign({}, state, { barOpen: false });
    default:
      return state;
  }
}

export default function Index() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const workRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  const [state, dispatch] = useReducer(reducer, {
    section: "home",
    barOpen: false,
    home: homeRef,
    about: aboutRef,
    exp: expRef,
    work: workRef,
    blog: blogRef,
    contact: contactRef,
  });

  return (
    <div>
      <Head>
        <title>Gravity Portfolio</title>
        <meta name="description" content="Personal Portfolio Homepage" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Context.Provider value={[state, dispatch]}>
        {/* siderBar */}
        <SiderBar Context={Context} />
        {/* content */}
        <Content Context={Context}>
          <ContentItem dark iconBG id="home" nodeRef={homeRef}>
            <div className="flex flex-col justify-center items-center h-screen relative">
              <img className="h-40 mb-6" src="/favicon.svg" alt="avator" />
              <h2 className="text-2xl text-white font-bold mb-4">趙一航</h2>
              <TextLoop adjustingSpeed={300}>
                <p className="text-green-500 mb-4">
                  {" "}
                  はフロントエンド開発に集中するWeb開発者です！{" "}
                </p>
                <p className="text-red-500 mb-4">
                  {" "}
                  は常に新し技術を学び続けてます！{" "}
                </p>
                <p className="text-yellow-300 mb-4">
                  {" "}
                  はバックエンドの開発もできる！{" "}
                </p>
              </TextLoop>
              <button className=" w-36 h-10 rounded-3xl bg-red-500 text-white font-bold transition duration-500 ease-in-out  transform  hover:-translate-y-1 hover:scale-110 ">
                もっと知る
              </button>
              <div className=" flex flex-col justify-center absolute bottom-9">
                <span className="text-white mb-4">スクロール</span>
                <ChevronDoubleDownIcon className="h-9 text-white animate-bounce" />
              </div>
            </div>
          </ContentItem>
          <ContentItem id="about" nodeRef={aboutRef}>
            <div className="p-9">
              <h1 className="text-4xl text-customeBG font-bold font-serif mt-4">
                About Me
              </h1>
              <div className="flex flex-col justify-center items-center mt-9 lg:grid grid-cols-4 gap-4">
                <img
                  className=" h-48 w-48 rounded-full lg:mt-12"
                  src="/resumePhoto.jpg"
                  alt="portfolio"
                />
                <div className="lg:col-span-3">
                  <Box>
                    <div className="md:flex md:flex-col md: justify-between">
                      <p className="mb-4">{info.self_introduce}</p>
                      <button className="flex justify-center items-center w-36 h-10 rounded-3xl bg-red-500 text-white font-bold transition duration-500 ease-in-out  transform  hover:-translate-y-1  hover:scale-110">
                        <DownloadIcon className="h-6 mr-1 animate-bounce" />
                        Download
                      </button>
                    </div>
                    <div>
                      <Progress
                        name="Javascript/Css/Html"
                        percent={92}
                        color="bg-green-500"
                      />
                      <Progress
                        name="React/NextJs/GatsbyJs"
                        percent={80}
                        color="bg-blue-500"
                      />
                      <Progress
                        name="NodeJs/HapiJs/KoaJs"
                        percent={70}
                        color="bg-yellow-500"
                      />
                      <Progress
                        name="MySQL/PoestgreSQL/Redis/MongoDB"
                        percent={60}
                        color="bg-red-500"
                      />
                      <Progress
                        name="Git/SVN,Slack/MicroSoft Team"
                        percent={90}
                        color="bg-green-500"
                      />
                      <Progress
                        name="Docker/Linux/"
                        percent={60}
                        color="bg-red-500"
                      />
                    </div>
                  </Box>
                </div>
              </div>
              <div className="hidden lg:flex mt-20 justify-evenly">
                <Number
                  Icon={BriefcaseIcon}
                  number={99}
                  text="projects completed"
                  color="text-green-500"
                />
                <Number
                  Icon={UserGroupIcon}
                  number={199}
                  text="Satisfied clients"
                  color="text-blue-500"
                />
                <Number
                  Icon={TrendingUpIcon}
                  number={234}
                  text="Cilents Benefit up"
                  color="text-red-500"
                />
                <Number
                  Icon={StarIcon}
                  number={99}
                  text="Nominees winner"
                  color="text-yellow-500"
                />
              </div>
            </div>
          </ContentItem>

          <ContentItem id="experience" nodeRef={expRef}>
            <div className="p-9">
              <h1 className="text-4xl text-customeBG font-bold font-serif">
                Experience
              </h1>

              <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                <div className=" shadow-lg rounded-lg p-4 ">
                  {info.education.map((item, index) => {
                    return (
                      <Step
                        key={index}
                        time={item.time}
                        title={item.school}
                        Icon={AcademicCapIcon}
                        iconcolor="text-green-500"
                        dividercolor="border-green-500"
                      >
                        <p className=" text-gray-600">{item.info}</p>
                      </Step>
                    );
                  })}
                </div>
                <div className=" shadow-lg rounded-lg p-4 ">
                  {info.expericens.map((item) => {
                    return (
                      <Step
                        key={item.id}
                        time={item.startDate + "から" + item.endDate + "まで"}
                        title={item.company}
                        Icon={BriefcaseIcon}
                        iconcolor="text-blue-500"
                        dividercolor="border-blue-500"
                      >
                        <p className="text-gray-600">
                          タイプ: {item.employmentType}
                        </p>
                        <p className="text-gray-600">場所: {item.location}</p>
                        <p className=" text-gray-600">
                          役目:{item.descriptions}
                        </p>
                      </Step>
                    );
                  })}
                </div>
              </div>
            </div>
          </ContentItem>
          <ContentItem id="work" nodeRef={workRef}>
            <div className="p-9">
              <h1 className="text-4xl text-customeBG font-bold font-serif mb-4">
                Some Demos
              </h1>
              <div className="flex flex-col items-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-1">
                <Card
                  src="/cola.png"
                  tag="product"
                  title="CocoCola"
                  Icon={ZoomInIcon}
                  to="https://yihang-cola.netlify.app"
                />
                <Card
                  src="/headphone.jpg"
                  tag="product"
                  title="headphone"
                  Icon={ZoomInIcon}
                  to="https://yihang-headphone.netlify.app"
                />
                <Card
                  src="/micro.jpg"
                  tag="HomePage"
                  title="MicroSoftware"
                  Icon={ZoomInIcon}
                  to="https://yihang-microsoft.netlify.app"
                />
                <Card
                  src="/anime.jpg"
                  tag="Media"
                  title="Movies"
                  Icon={ZoomInIcon}
                  to="https://gravitymovie.vercel.app"
                />
                <Card
                  src="/code.jpg"
                  tag="Admin"
                  title="An Admin"
                  Icon={ZoomInIcon}
                  to="https://gravity-admin.vercel.app/"
                />
                <Card
                  src="/saierda.jpg"
                  tag="Game"
                  title="Zelda Legends"
                  Icon={ZoomInIcon}
                  to="#"
                />
              </div>
            </div>
          </ContentItem>
          <ContentItem id="blog" nodeRef={blogRef}>
            <div className="p-9">
              <h1 className="text-4xl text-customeBG font-bold font-serif mb-4">
                Blogs
              </h1>
              {info.blogs.map((blog) => {
                return (
                  <BlogCard
                    key={blog.id}
                    time={blog.time}
                    title={blog.title}
                    cover={blog.cover}
                    author={blog.author}
                    like={blog.like}
                    tags={blog.tags}
                    description={blog.descriptions}
                  />
                );
              })}
            </div>
          </ContentItem>
          <ContentItem id="contact" nodeRef={contactRef}>
            <div className="p-9">
              <h1 className="text-4xl text-customeBG font-bold font-serif mb-4">
                Contact
              </h1>
              <div className="flex">
                <MapBox />
                <Message />
              </div>
            </div>
          </ContentItem>
        </Content>
      </Context.Provider>
    </div>
  );
}
