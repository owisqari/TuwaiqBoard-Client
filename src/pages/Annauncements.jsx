import { useState, useEffect } from "react";
import { Cookies } from "react-cookie";
import {
  Flex,
  Input,
  Button,
  Image,
  Card,
  CardBody,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import Swal from "sweetalert2";
const Annauncements = () => {
  const [announcments, setAnnouncments] = useState([]);
  const [newAnnouncment, setNewAnnouncment] = useState("");
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (!token) {
    window.location.href = "/login";
  }

  const isTeacher = Boolean(localStorage.getItem("isTeacher"));

  const getAnnouncments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8888/instructor/getAnnauncements",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.annauncements);
      setAnnouncments(res.data.annauncements);
    } catch (err) {
      console.log(err);
    }
  };
  const CreateAnnouncment = async () => {
    try {
      if (!newAnnouncment) {
        return;
      }
      const res = await axios.post(
        "http://localhost:8888/instructor/createAnnauncements",
        {
          message: newAnnouncment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getAnnouncments();
      console.log(res.data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  useEffect(() => {
    if (isTeacher) {
      getAnnouncments();
      CreateAnnouncment();
      return;
    }
    getAnnouncments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Flex
        h={"100%"}
        direction={"column"}
        justifyContent="flex-end"
        alignItems={"center"}
      >
        <Image
          src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
          opacity={0.1}
          position={"absolute"}
          h={"100%"}
          zIndex={-1}
        />
        <div style={{ overflowY: "scroll", height: "100vh", width: "100%" }}>
          {announcments.map((announcment) => {
            return (
              <>
                <Card
                  key={announcment._id}
                  mt={"10"}
                  mb={"10"}
                  bgColor="#EDF2F7"
                  shadow={"md"}
                >
                  <CardBody>
                    <Heading size="sm">
                      {announcment.instructorId.fullName}
                      <Badge
                        mr={"2"}
                        ml="1"
                        fontSize="0.8em"
                        colorScheme="green"
                      >
                        New
                      </Badge>
                    </Heading>
                    <Text>{announcment.message}</Text>
                  </CardBody>
                </Card>
              </>
            );
          })}
        </div>

        {isTeacher ? (
          <Flex w="100%" mt="5">
            <Button
              bg={"#260B3A"}
              color="white"
              h={"3em"}
              onClick={CreateAnnouncment}
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              ارسل
            </Button>
            <Input
              h={"3em"}
              placeholder="اكتب اعلان ..."
              borderStyle={"solid"}
              borderColor={"#260B3A"}
              onChange={(e) => setNewAnnouncment(e.target.value)}
            />
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Layout>
  );
};

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "الواجبات",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMCAxNGg0di0yaC00djJabTAtM2g4VjloLTh2MlptMC0zaDhWNmgtOHYyWk04IDE4cS0uODI1IDAtMS40MTMtLjU4OFQ2IDE2VjRxMC0uODI1LjU4OC0xLjQxM1Q4IDJoMTJxLjgyNSAwIDEuNDEzLjU4OFQyMiA0djEycTAgLjgyNS0uNTg4IDEuNDEzVDIwIDE4SDhabS00IDRxLS44MjUgMC0xLjQxMy0uNTg4VDIgMjBWNmgydjE0aDE0djJINFoiLz48L3N2Zz4=",
      href: "/",
    },
    {
      title: "الإعلانات",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yIDEwcTAtMi4yLjg4OC00LjE2M1Q1LjQyNSAyLjQ1bDEuNDI1IDEuNFE1LjUgNS4wMjUgNC43NSA2LjYxM1Q0IDEwSDJabTE4IDBxMC0xLjgtLjc1LTMuMzg4dC0yLjEtMi43NjJsMS40MjUtMS40cTEuNjUgMS40MjUgMi41MzggMy4zODhUMjIgMTBoLTJaTTQgMTl2LTJoMnYtN3EwLTIuMDc1IDEuMjUtMy42ODhUMTAuNSA0LjJ2LS43cTAtLjYyNS40MzgtMS4wNjNUMTIgMnEuNjI1IDAgMS4wNjMuNDM4VDEzLjUgMy41di43cTIgLjUgMy4yNSAyLjExM1QxOCAxMHY3aDJ2Mkg0Wm04IDNxLS44MjUgMC0xLjQxMy0uNTg4VDEwIDIwaDRxMCAuODI1LS41ODggMS40MTNUMTIgMjJaIi8+PC9zdmc+",
      href: "/annaun",
    },
    {
      title: "المحتوى",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNCAyMnYtMi4xMjVsNS4xNS01LjE3NWwyLjE1IDIuMWwtNS4xNzUgNS4ySDE0Wm04LjAyNS01LjlMMTkuOSAxMy45NzVsLjctLjdxLjMtLjMuNzI1LS4zdC43LjNsLjcuNzI1cS4yNzUuMy4yNzUuNzEzdC0uMjc1LjY4N2wtLjcuN1pNNCAyMHEtLjgyNSAwLTEuNDEzLS41ODhUMiAxOFY2cTAtLjgyNS41ODgtMS40MTNUNCA0aDZsMiAyaDhxLjgyNSAwIDEuNDEzLjU4OFQyMiA4djIuOTI1cS0uNzc1IDAtMS41MjUuMTg4dC0xLjMuNzM3bC04LjEgOC4xNUg0WiIvPjwvc3ZnPg==",
      href: "/content",
    },
    {
      title: "انضم إلى قناتنا بالدسكورد",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xOS4yNyA1LjMzQzE3Ljk0IDQuNzEgMTYuNSA0LjI2IDE1IDRhLjA5LjA5IDAgMCAwLS4wNy4wM2MtLjE4LjMzLS4zOS43Ni0uNTMgMS4wOWExNi4wOSAxNi4wOSAwIDAgMC00LjggMGMtLjE0LS4zNC0uMzUtLjc2LS41NC0xLjA5Yy0uMDEtLjAyLS4wNC0uMDMtLjA3LS4wM2MtMS41LjI2LTIuOTMuNzEtNC4yNyAxLjMzYy0uMDEgMC0uMDIuMDEtLjAzLjAyYy0yLjcyIDQuMDctMy40NyA4LjAzLTMuMSAxMS45NWMwIC4wMi4wMS4wNC4wMy4wNWMxLjggMS4zMiAzLjUzIDIuMTIgNS4yNCAyLjY1Yy4wMy4wMS4wNiAwIC4wNy0uMDJjLjQtLjU1Ljc2LTEuMTMgMS4wNy0xLjc0Yy4wMi0uMDQgMC0uMDgtLjA0LS4wOWMtLjU3LS4yMi0xLjExLS40OC0xLjY0LS43OGMtLjA0LS4wMi0uMDQtLjA4LS4wMS0uMTFjLjExLS4wOC4yMi0uMTcuMzMtLjI1Yy4wMi0uMDIuMDUtLjAyLjA3LS4wMWMzLjQ0IDEuNTcgNy4xNSAxLjU3IDEwLjU1IDBjLjAyLS4wMS4wNS0uMDEuMDcuMDFjLjExLjA5LjIyLjE3LjMzLjI2Yy4wNC4wMy4wNC4wOS0uMDEuMTFjLS41Mi4zMS0xLjA3LjU2LTEuNjQuNzhjLS4wNC4wMS0uMDUuMDYtLjA0LjA5Yy4zMi42MS42OCAxLjE5IDEuMDcgMS43NGMuMDMuMDEuMDYuMDIuMDkuMDFjMS43Mi0uNTMgMy40NS0xLjMzIDUuMjUtMi42NWMuMDItLjAxLjAzLS4wMy4wMy0uMDVjLjQ0LTQuNTMtLjczLTguNDYtMy4xLTExLjk1Yy0uMDEtLjAxLS4wMi0uMDItLjA0LS4wMnpNOC41MiAxNC45MWMtMS4wMyAwLTEuODktLjk1LTEuODktMi4xMnMuODQtMi4xMiAxLjg5LTIuMTJjMS4wNiAwIDEuOS45NiAxLjg5IDIuMTJjMCAxLjE3LS44NCAyLjEyLTEuODkgMi4xMnptNi45NyAwYy0xLjAzIDAtMS44OS0uOTUtMS44OS0yLjEycy44NC0yLjEyIDEuODktMi4xMmMxLjA2IDAgMS45Ljk2IDEuODkgMi4xMmMwIDEuMTctLjgzIDIuMTItMS44OSAyLjEyeiIvPjwvc3ZnPg==",
      href: "/discord",
    },
    {
      title: "المستخدمين",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEyNS4xOCAxNTYuOTRhNjQgNjQgMCAxIDAtODIuMzYgMGExMDAuMjMgMTAwLjIzIDAgMCAwLTM5LjQ5IDMyYTEyIDEyIDAgMCAwIDE5LjM1IDE0LjJhNzYgNzYgMCAwIDEgMTIyLjY0IDBhMTIgMTIgMCAwIDAgMTkuMzYtMTQuMmExMDAuMzMgMTAwLjMzIDAgMCAwLTM5LjUtMzJaTTQ0IDEwOGE0MCA0MCAwIDEgMSA0MCA0MGE0MCA0MCAwIDAgMS00MC00MFptMjA2LjEgOTcuNjdhMTIgMTIgMCAwIDEtMTYuNzgtMi41N0E3Ni4zMSA3Ni4zMSAwIDAgMCAxNzIgMTcyYTEyIDEyIDAgMCAxIDAtMjRhNDAgNDAgMCAxIDAtMTQuODUtNzcuMTZhMTIgMTIgMCAxIDEtOC45Mi0yMi4yOGE2NCA2NCAwIDAgMSA2NSAxMDguMzhhMTAwLjIzIDEwMC4yMyAwIDAgMSAzOS40OSAzMmExMiAxMiAwIDAgMS0yLjYyIDE2LjczWiIvPjwvc3ZnPg==",
      href: "/users",
    },
    {
      title: "تسجيل الخروج ",
      src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTExNiAyMTZhMTIgMTIgMCAwIDEtMTIgMTJINDhhMjAgMjAgMCAwIDEtMjAtMjBWNDhhMjAgMjAgMCAwIDEgMjAtMjBoNTZhMTIgMTIgMCAwIDEgMCAyNEg1MnYxNTJoNTJhMTIgMTIgMCAwIDEgMTIgMTJabTEwOC40OS05Ni40OWwtNDAtNDBhMTIgMTIgMCAwIDAtMTcgMTdMMTg3IDExNmgtODNhMTIgMTIgMCAwIDAgMCAyNGg4M2wtMTkuNTIgMTkuNTFhMTIgMTIgMCAwIDAgMTcgMTdsNDAtNDBhMTIgMTIgMCAwIDAgLjAxLTE3WiIvPjwvc3ZnPg==",
      gap: true,
      href: "/logout",
    },
    // { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#260B3A] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple 
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <a href="/">
            <img
              src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </a>

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
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4  
              ${Menu.gap ? "mt-96" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} />
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
      <div className="h-screen flex-1 p-7">{children}</div>
    </div>
  );
};
export default Annauncements;
