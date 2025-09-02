"use client";

import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import {
  ArrowUp,
  BarChart2,
  BookA,
  Bot,
  Box,
  ChartBarBig,
  CreditCard,
  Globe,
  MessageCircle,
  Smartphone,
  SquareCode,
  VideoIcon,
} from "lucide-react";

const ProductItems = [
  {
    title: "AI Automation",
    slug: "Streamline workflows, reduce manual work,",
    icon: <Bot className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Business Software",
    slug: "Custom tools and ERP/CRM systems ",
    icon: <SquareCode className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Web Development",
    slug: "Modern, scalable, and fast websites",
    icon: <Globe className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "App Development",
    slug: "Native and cross-platform apps",
    icon: <Smartphone className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "SaaS Products",
    slug: "From MVP to launch — scalable",
    icon: <ChartBarBig className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Card Issuing Solution",
    slug: "Streamline workflows, reduce manual work.",
    icon: <BarChart2 className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Crowdfunding Solutions",
    slug: "Streamline workflows, reduce manual work.",
    icon: <Box className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Digital Marketing Solutions",
    slug: "Streamline workflows, reduce manual work.",
    icon: <CreditCard className="  text-[#7F56D9] w-7 h-7" />,
  },
];

const ResourcesItems = [
  {
    title: "Support",
    slug: "Streamline workflows, reduce manual work.",
    icon: <MessageCircle className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Blog",
    slug: "Streamline workflows, reduce manual work.",
    icon: <BookA className="  text-[#7F56D9] w-7 h-7" />,
  },
  {
    title: "Events",
    slug: "Streamline workflows, reduce manual work.",
    icon: <VideoIcon className="  text-[#7F56D9] w-7 h-7" />,
  },
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center z-0 py-20"
      style={{
        backgroundImage: "url('/hero/hero.png')", // Set the background image from uploaded file
      }}
    >
      <div className="absolute inset-0 z-0  bg-black opacity-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-0">
        <h1 className="text-4xl md:text-[96px] font-semibold font-['roboto'] ">
          Ideas to impact
        </h1>
        <p className="text-lg md:text-[96px] font-semibold font-['roboto'] mb-6">
          We cover it all
        </p>
        <button className=" font-[16px] mb-30 flex items-center justify-center gap-2 rounded-lg  bg-transparent border-2 border-white px-4 py-2 font-semibold text-white transition-colors  hover:bg-white hover:text-black w-[195px] h-[52px]">
          <span>Schedule a call</span>
          <ArrowUp style={{ transform: "rotate(45deg)" }} />
        </button>
      </div>
    </section>
  );
};

const Example = () => {
  return (
    <>
      <FlyoutNav />
      <HeroSection />
    </>
  );
};

const FlyoutNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80 ? true : false);
  });

  return (
    <nav
      className={`fixed  top-0 z-50 w-full mx-auto  ${
        scrolled ? "text-black" : "text-white"
      }
      transition-all duration-300 ease-out lg:px-20
      ${
        scrolled
          ? "bg-white py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className=" flex  items-center justify-between">
        <Logo scrolled={scrolled} />
        <div className="hidden lg:flex z-100 gap-20 ">
          <Links scrolled={scrolled} />
          <CTAs scrolled={scrolled} />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ scrolled }: any) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      {scrolled ? (
        <img
          src="/Cryption verse for light bg.png"
          alt="Cryption Verse Australia"
          className="h-10 w-auto md:h-[43px] mb-[10px]"
        />
      ) : (
        <img
          src="/Cryption verse for dark bg.png"
          alt="Cryption Verse Australia"
          className="h-10 w-auto md:h-[43px] mb-[10px]"
        />
      )}

      {/* <span className="text-2xl font-bold" style={{ color }}>
        Placeholder
      </span>
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor={color}
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor={color}
        ></path>
      </svg> */}
    </div>
  );
};

const Links = ({ scrolled }: any) => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink
          scrolled={scrolled}
          key={l.text}
          href={l.href}
          FlyoutContent={l.component}
        >
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ scrolled, children, href, FlyoutContent }: any) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit "
    >
      <a href={href} className="relative text-[16px] font-['Inter']">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute  bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = ({ scrolled }: any) => {
  return (
    <div className="flex items-center gap-4 ">
      {/* <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-black transition-colors hover:bg-white hover:text-black">
        <FaUserCircle />
        <span>Sign in</span>
      </button> */}
      <button
        className={`flex items-center justify-center gap-2 rounded-lg w-[195px] h-[52px] ${
          scrolled ? "bg-black text-white" : "bg-white text-black"
        } px-4 py-2 font-semibold  font-[16px] transition-colors hover:border-indigo-600 hover:bg-black hover:text-white`}
      >
        <span>Book a call</span>{" "}
        <ArrowUp style={{ transform: "rotate(45deg)" }} />
      </button>
    </div>
  );
};

const ProductsContent = () => {
  return (
    <div className="grid bg-[#FFFFFF] rounded-md border border-neutral-200  w-full grid-cols-12 shadow-xl lg:h-auto lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="grid grid-cols-2   lg:col-span-12 lg:grid-cols-2">
        <div className="col-span-12 grid grid-cols-2 grid-rows-1 gap-3 bg-white p-2 lg:col-span-8">
          {ProductItems.slice(0, 4).map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-start gap-2  rounded  bg-white p-3 transition-colors hover:bg-neutral-100"
            >
              <span className="bg-[#F4EBFF] rounded-full p-2">{item.icon}</span>
              <div className="w-full">
                <h3 className=" font-semibold">{item.title}</h3>
                <p className="text-xs">{item.slug}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-2 grid-rows-1 gap-3 bg-white p-2 lg:col-span-8">
          {ProductItems.slice(4).map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-start gap-2   bg-white p-3 transition-colors hover:bg-neutral-100"
            >
              <span className="bg-[#F4EBFF] rounded-full p-2">{item.icon}</span>
              <div className="">
                <h3 className=" font-semibold">{item.title}</h3>
                <p className="text-xs">{item.slug}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 flex flex-row justify-between  p-6 lg:col-span-12">
        <h3 className="mb-2 text-xl font-semibold text-black">
          Sign up for free
        </h3>
        <div className="flex items-center gap-2">
          <VideoIcon className="  text-[#7F56D9] w-9 h-9 bg-[#F4EBFF] p-2 rounded-full" />
          <span className="text-sm">Watch our video</span>
          <MessageCircle className="  text-[#7F56D9] w-9 h-9 bg-[#F4EBFF] p-2 rounded-full" />
          <span className="text-sm">Contact sales</span>
        </div>
      </div>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="grid bg-[#FFFFFF] rounded-md border border-neutral-200  w-full grid-cols-12 shadow-xl lg:h-auto lg:w-[600px] lg:shadow-none xl:w-[750px]">
      {/* <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-black">About us</h2>
          <p className=" max-w-xs text-sm text-neutral-400">
            Placeholder is the world's leading placeholder company.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <FiArrowRight />
        </a>
      </div> */}
      <div className="grid grid-cols-2   lg:col-span-12 lg:grid-cols-2">
        <div className="col-span-12 grid grid-cols-2 grid-rows-1 gap-3 bg-white p-2 lg:col-span-8">
          {ProductItems.slice(0, 4).map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-start gap-2  rounded  bg-white p-3 transition-colors hover:bg-neutral-100"
            >
              <span className="bg-[#F4EBFF] rounded-full p-2">{item.icon}</span>
              <div className="">
                <h3 className=" font-semibold">{item.title}</h3>
                <p className="text-xs">{item.slug}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="col-span-12 grid grid-cols-2 grid-rows-1 gap-3 bg-white p-2 lg:col-span-8">
          {ProductItems.slice(4).map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-start gap-2   bg-white p-3 transition-colors hover:bg-neutral-100"
            >
              <span className="bg-[#F4EBFF] rounded-full p-2">{item.icon}</span>
              <div className="">
                <h3 className=" font-semibold">{item.title}</h3>
                <p className="text-xs">{item.slug}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 flex flex-row justify-between  p-6 lg:col-span-12">
        <h3 className="mb-2 text-xl font-semibold text-black">
          Sign up for free
        </h3>
        <div className="flex items-center gap-2">
          <VideoIcon className="  text-[#7F56D9] w-9 h-9 bg-[#F4EBFF] p-2 rounded-full" />
          <span className="text-sm">Watch our video</span>
          <MessageCircle className="  text-[#7F56D9] w-9 h-9 bg-[#F4EBFF] p-2 rounded-full" />
          <span className="text-sm">Contact sales</span>
        </div>
      </div>
    </div>
  );
};

const CareersContent = () => {
  return (
    <div className="grid w-full grid-cols-12 shadow-xl lg:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
        <div className="">
          <h2 className="mb-2 text-xl font-semibold text-black">Careers</h2>
          <p className="text-sm text-indigo-100">
            Placeholder was rated a top place to work by Placeholder.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
        >
          Careers site <FiArrowRight />
        </a>
      </div>
      <div className="col-span-12 grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
        <div className="space-y-3">
          <h3 className="font-semibold">Business</h3>
          <a href="#" className="block text-sm hover:underline">
            Marketing
          </a>
          <a href="#" className="block text-sm hover:underline">
            Finance
          </a>
          <a href="#" className="block text-sm hover:underline">
            Legal
          </a>
          <a href="#" className="block text-sm hover:underline">
            Sales
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Engineering</h3>
          <a href="#" className="block text-sm hover:underline">
            Full stack
          </a>
          <a href="#" className="block text-sm hover:underline">
            Dev ops
          </a>
          <a href="#" className="block text-sm hover:underline">
            QA
          </a>
          <a href="#" className="block text-sm hover:underline">
            Data
          </a>
          <a href="#" className="block text-sm hover:underline">
            Machine learning
          </a>
          <a href="#" className="block text-sm hover:underline">
            Management
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">More</h3>
          <a href="#" className="block text-sm hover:underline">
            Support
          </a>
          <a href="#" className="block text-sm hover:underline">
            Office
          </a>
          <a href="#" className="block text-sm hover:underline">
            Other
          </a>
        </div>
      </div>
    </div>
  );
};
const ResourcesContent = () => {
  return (
    <div className="grid bg-[#FFFFFF] rounded-md border border-neutral-200 grid-cols-12 shadow-xl lg:w-[650px]">
      <div className="col-span-12  grid grid-cols-2 gap-3 bg-white p-6 lg:col-span-8 lg:grid-cols-3">
        <div className="col-span-12 grid grid-cols-1  bg-white p-2 ">
          {ResourcesItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex  justify-start gap-2  rounded  bg-white p-3 transition-colors hover:bg-neutral-100"
            >
              <span className="bg-[#F4EBFF] rounded-full p-2">{item.icon}</span>
              <div className="">
                <h3 className=" font-semibold">{item.title}</h3>
                <p className="text-xs">{item.slug}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 flex flex-col justify-between bg-indigo-600 p-6 lg:col-span-4">
        <div className="">
          <h2 className="mb-2 text-xl font-semibold text-black">Careers</h2>
          <p className="text-sm text-indigo-100">
            Placeholder was rated a top place to work by Placeholder.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-xs text-indigo-200 hover:underline"
        >
          Careers site <FiArrowRight />
        </a>
      </div>
    </div>
  );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }: any) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <a
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </a>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <a
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </a>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Example;

const LINKS = [
  {
    text: "Products",
    href: "#",
    component: ProductsContent,
  },
  {
    text: "Services",
    href: "#",
    component: ServicesContent,
  },
  {
    text: "Pricing",
    href: "#",
  },
  {
    text: "Resources",
    href: "#",
    component: ResourcesContent,
  },
  {
    text: "About",
    href: "#",
    component: CareersContent,
  },
];
