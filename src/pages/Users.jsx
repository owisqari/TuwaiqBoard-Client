import SideNav from "../components/SideNav";
// import { useState } from "react";
import { Cookies } from "react-cookie";
const Users = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) {
    window.location.href = "/login";
  }

  const isTeacher = Boolean(localStorage.getItem("isTeacher"));
  return (
    <>
      <SideNav h={"screen"}/>

      {isTeacher ? (
        <>
          <h1>Teacher</h1>
        </>
      ) : (
        <>
          <h1>Student</h1>
        </>
      )}
    </>
  );
};

export default Users;
