import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-empty-pattern
export default function Navbar({ }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav id="MainContent" className=" lg:px-14 relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div>
            <Link
              className="text-sm flex mb-5 lg:mb-0 justify-center bg-white rounded-xl shadow leading-relaxed  mr-2 px-1 whitespace-nowrap uppercase text-gray-600"
              to="/"
            >
              <h2 className="h-16  rounded-sm text-3xl px-5 pt-3" >Nir</h2>
              {/* <img className="h-16  rounded-xl" src="https://i.ibb.co/Ltk5Hxr/1.png" alt="" /> */}
              <span className="mx-2 hidden md:visible  mt-6 font-bold text-base">উলিপুর বই মেলা </span>
            </Link>
            </div>
            <button
              className="text-white bg-slate-50  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img className="h-7 bg-white p-1 rounded" src="	https://icons.iconarchive.com/icons/fa-team/fontawesome/256/FontAwesome-Bars-icon.png" alt="" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                <span className="ml-2">পরিচিতি</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/volunteer"
                >
                  <span className="ml-2">স্বেচ্ছাসেবী</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/gest"
                >
                  <span className="ml-2">অতিথি</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/certificate"
                >
                  <span className="ml-2">সনদ যাচাই</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}