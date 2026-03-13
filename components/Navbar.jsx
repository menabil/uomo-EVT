import React from "react";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/images/img1.png";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export const NavLinks = ({ title, link, className, children }) => {
  return (
    <li
      className={`text-xs md:text-sm font-medium relative group before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 ${className}`}
    >
      <Link href={link}>{title}</Link>
      {children}
    </li>
  );
};

const Navbar = () => {
  const menus = [
    {
      title: "home",
    },
    {
      title: "shop",
    },
    {
      title: "collection",
    },
    {
      title: "journal",
    },
    {
      title: "lookbook",
    },
    {
      title: "pages",
    },
  ];

  const subMenusHome = [
    {
      title: "shop pages",
      subMenus: [
        "default",
        "topbar",
        "collapse",
        "simple",
        "mansory",
        "default",
        "images left",
        "image grid",
        "image slider",
        "images stacked",
      ],
    },
    {
      title: "other pages",
      subMenus: [
        "collection",
        "lookBook",
        "categories page",
        "shopping page",
        "wishlist",
        "order tracking",
        "checkout",
      ],
    },
    {
      title: "elements",
      subMenus: [
        "accordion",
        "pricing table",
        "google maps",
        "message box",
        "progress bars",
        "charts",
        "icon box",
        "products tabs",
        "products grid",
        "tabs",
        "video players",
        "team",
      ],
    },
  ];
  const subMenusPage = [
    {
      title: "",
      subMenus: [
        "about",
        "contact us",
        "store location",
        "faq",
        "coming soon",
        "404 page",
      ],
    },
  ];
  const subMenusJournal = [
    {
      title: "blog styles",
      subMenus: [
        "alternative",
        "small images",
        "blog chess",
        "mansory grid",
        "infinit scrolling feature",
        "with background",
        "blog flat",
        "default flat",
        "blog mask",
      ],
    },
    {
      title: "single post ",
      subMenus: [
        "standart post",
        "image post",
        "video post",
        "audio post",
        "gallery post",
      ],
    },
    {
      title: "navigation",
      subMenus: ["simple", "image background"],
    },
  ];

  return (
    <nav>
      <Container
        className={`py-3 md:py-5 2xl:py-7.5 flex items-center justify-between`}
      >
        <div className="menu sm:hidden text-2xl ">
          <HiOutlineBars3CenterLeft />
        </div>
        <div className="main flex items-center gap-6 xl:gap-x-14">
          <div className="logo ">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="menu hidden sm:flex gap-3 md:gap-5 xl:gap-x-11 items-center capitalize">
            <NavLinks
              link={"/"}
              title={"home"}
              className={"static hover:before:w-0!"}
            >
              <div
                className={`bottom-0 w-full px-3 pb-10 translate-y-full left-1/2 -translate-x-1/2  absolute z-50 flex justify-between  xl:gap-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                {subMenusHome.map((item, index) => (
                  <ul key={index} className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase  ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, index) => (
                      <li
                        key={index}
                        className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
                <div className="card hidden sm:block  relative w-60 lg:w-100 aspect-square xl:aspect-41/45">
                  <Image
                    className="absolute -z-10"
                    fill
                    src={placeholder}
                    alt="placeholder"
                  />
                  <div className="text h-full w-full p-7.5 flex flex-col items-start justify-end gap-y-2  ">
                    <h2 className="text-2xl font-medium text-primary">
                      new <br /> horizon
                    </h2>
                    <Link
                      href={"/"}
                      className="text-primary  cursor-pointer w-fit text-sm capitalize relative before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 "
                    >
                      shop now
                    </Link>
                  </div>
                </div>
              </div>
            </NavLinks>
            <NavLinks link={"/"} title={"shop"} />
            <NavLinks link={"/"} title={"collection"} />
            <NavLinks
              link={"/"}
              title={"journal"}
              className={" hover:before:w-40"}
            >
              {" "}
              <div
                className={`top-[200%] left-0 -translate-x-1/2 lg:translate-x-0  px-3 pb-10 absolute z-50 flex  gap-20 xl:gap-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                {subMenusJournal.map((item, index) => (
                  <ul key={index} className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase  ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, index) => (
                      <li
                        key={index}
                        className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavLinks>
            <NavLinks link={"/"} title={"lookbook"} />
            <NavLinks
              link={"/"}
              title={"pages"}
              className={" hover:before:w-40"}
            >
              <div
                className={`top-[200%] left-0  px-3 pb-10 absolute z-50 flex  gap-20 xl:gap-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                {subMenusPage.map((item, index) => (
                  <ul key={index} className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase  ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, index) => (
                      <li
                        key={index}
                        className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavLinks>
          </ul>
        </div>
        <div className="btns flex gap-3 md:gap-5 xl:gap-x-7.5 text-xl sm:text-base  lg:text-xl">
          <div className="hover:cursor-pointer hidden sm:block">
            <CiSearch />
          </div>
          <div className="hover:cursor-pointer hidden sm:block">
            <CiUser />
          </div>
          <div className="hover:cursor-pointer hidden sm:block">
            <CiHeart />
          </div>
          <div className="hover:cursor-pointer">
            <IoBagOutline />
          </div>
          <div className="hover:cursor-pointer hidden sm:block">
            <HiOutlineBars3CenterLeft />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
