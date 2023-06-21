import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["name"]);
  const navigate = useNavigate();
  const forgetPassword = async () => {
    Swal.fire({
      title: "قريباً...",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.includes("@tuwaiq.sa")) {
      try {
        const res = await axios.post("http://localhost:8888/instructor/login", {
          username: username,
          password: password,
        });
        setCookie("token", res.data.token);
        localStorage.setItem("isTeacher", true);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "تم تسجيل الدخول بنجاح",
        });
        navigate("/");
      } catch {
        Swal.fire({
          icon: "error",
          title: "شكلك نسيت كلمة المرور...",
          text: "متاكد من اسم المستخدم وكلمة المرور؟",
        });
      }
    } else {
      try {
        const res = await axios.post("http://localhost:8888/student/login", {
          username: username,
          password: password,
        });
        setCookie("token", res.data.token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "تم تسجيل الدخول بنجاح",
        });
        navigate("/");
      } catch {
        Swal.fire({
          icon: "error",
          title: "شكلك نسيت كلمة المرور...",
          text: "متاكد من اسم المستخدم وكلمة المرور؟",
        });
      }
    }
  };

  return (
    //login page
    <>
      <section className="h-full grid grid-cols-6 gap-4">
        <section className="lg:col-span-4 col-span-6 flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center my-4 items-center">
            <div className="text-center">
              <img
                className="max-w-xs max-h-32"
                src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
              />
            </div>
          </div>
          <div className="flex justify-center  my-4 items-center  w-full">
            <div className="w-full flex flex-col p-3 rounded-md bg-white max-w-sm shadow-md">
              <h1 className="w-full my-4 p-2 text-center font-bold text-xl">
                تسجيل الدخول
              </h1>
              <div>
                <fieldset>
                  <label className="block font-bold" htmlFor="username">
                    اسم المستخدم أو البريد الإلكتروني
                  </label>

                  <input
                    className="w-full my-4 p-2 border-2 rounded-md"
                    type="text"
                    id="username"
                    placeholder="اسم المستخدم"
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </fieldset>
                <fieldset>
                  <label className="block font-bold" htmlFor="password">
                    كلمة المرور
                  </label>
                  <input
                    className="w-full my-4 p-2 border-2 rounded-md"
                    type="password"
                    id="password"
                    placeholder="كلمة السر"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </fieldset>
                <fieldset className="flex justify-between">
                  <a onClick={forgetPassword}>نسيت كلمة المرور؟</a>
                </fieldset>
                <button
                  className="w-full my-4 px-2 py-3  text-white rounded-md"
                  type="submit"
                  style={{ backgroundColor: "#818EFF" }}
                  onClick={handleSubmit}
                >
                  دخول
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-2">
          <img
            className="h-screen w-full"
            src="https://c.top4top.io/p_2725gygyo1.png"
          />
        </section>
      </section>
    </>
  );
};

export default Login;
