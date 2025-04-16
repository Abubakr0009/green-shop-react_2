import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../AuthModal";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { data } = useSelector((state) => state.shopping);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const userMenu = {
    items: [
      {
        key: "1",
        label: (
          <span onClick={handleLogout} className="text-red-500">
            Logout
          </span>
        ),
      },
    ],
  };

  return (
    <>
      <div className="h-[80px] m-auto flex items-center justify-between p-6 align-center">
        <div>
          <img
            src="/icons/logo.svg"
            alt="Logo"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex justify-center w-[463px] gap-8">
          <h3 className="cursor-pointer">
            <a href="/">Home</a>
          </h3>
          <h3 className="cursor-pointer">
            <a href="/blog">Blog</a>
          </h3>
        </div>
        <div className="justify-end items-center flex gap-8">
          {/* Search Icon */}
          <span
            className="anticon anticon-search flex items-center cursor-pointer text-[20px]"
          >
            🔍
          </span>

          {/* Notification Icon */}
          <span className="anticon anticon-bell cursor-pointer text-[23px]">
            🔔
          </span>

          {/* Cart */}
          <Link to={"/productCard"}>
            <span className="text-[25px] relative">
              🛒
              {data.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  {data.length}
                </span>
              )}
            </span>
          </Link>

          {/* Login / User Info */}
          {user ? (
            <Dropdown menu={userMenu} placement="bottomRight">
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar style={{ backgroundColor: "#87d068" }}>
                  {user.name[0]}
                </Avatar>
                <span>{user.name}</span>
              </div>
            </Dropdown>
          ) : (
            <>
              <AuthModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              />
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#46A358] flex rounded-md w-24 items-center justify-center gap-1 h-9 text-base text-white cursor-pointer"
              >
                🔐 Login
              </button>
            </>
          )}
        </div>
      </div>
      <hr className="border-[#46A358] m-auto border my-[10px]" />
    </>
  );
};

export default Navbar;
