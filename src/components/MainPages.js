import React from "react";
import Main from "./Main/Main";
import Advantages from "./Advantages/Advantages";
import Fond from "./Fond/Fond";
import Courses from "./Courses/Courses";
export default function MainPages() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <Advantages />
      <Fond />
      <Courses/>
    </>
  );
}
