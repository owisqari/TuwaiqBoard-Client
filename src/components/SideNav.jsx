import { useState } from "react";
// import { FaBeer } from 'react-icons/fa';
// import app.
const SideNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "لوحة القيادة", src: "Chart_fill", href: "/dashboard" },
    { title: "الواجبات", src: "Chat", href: "/homework" },
    { title: "الإعلانات", src: "User", href: "/annauncements" },
    { title: "المحتوى", src: "Calendar", href: "/Content" },
    { title: "انضم الى قناة الدسكورد", src: "Search", href: "/join" },
    { title: "المستخدمين", src: "Chart", href: "/users" },
    { title: "تسجيل الخروج ", src: "Search", gap: true, href: "/logout" },
    // { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            أكاديمية طويق
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <a
                className={`${!open && "hidden"} origin-left duration-200`}
                href={Menu.href}
              >
                {Menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
