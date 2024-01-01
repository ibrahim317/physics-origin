import React from "react";
import Logout from "./components/logout";
import MyCourses from "./components/mycourses";
import Me from "./components/me";
import NotFound from "@/src/app/not-found";

const page = ({ params }: { params: { page: string } }) => {
  switch (params.page) {
    case "logout":
      return <Logout />;
    case "mycourses":
      return <MyCourses />;
    case "me":
      return <Me />;
    default:
      return <NotFound />;
  }
};

export default page;
