import { Cookies } from "react-cookie";

function Logout() {
  const cookies = new Cookies();
  cookies.remove("token");
  localStorage.removeItem("isTeacher");

  window.location.href = "/login";

  return <></>;
}

export default Logout;
