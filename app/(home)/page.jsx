import Arrival from "@/components/home/Arrival";
import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import InstaHome from "@/components/home/InstaHome";
import Newsletter from "@/components/home/Newsletter";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Arrival />
      <Newsletter />
      <InstaHome />
    </div>
  );
};

export default page;
