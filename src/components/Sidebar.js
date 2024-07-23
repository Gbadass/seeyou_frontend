import { doubleArrow, linkPng } from "./../assets";
import routes from "../routes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, theme, useTheme } from "@chakra-ui/react";

export default function Sidebar() {
  const location = useLocation();
  const { colors, fonts } = useTheme(theme);

  const isActiveRoute = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div className="py-5 pr-3 pl-10 z-10 border-l h-screen overflow-x-hidden fixed sidebar_width bg-white">
        <div className="overflow-scroll">
          <div className="flex items-center justify-between">

            <img src={doubleArrow} className="w-4 h-4" alt="" />
          </div>

        </div>
      </div>
    </>
  );
}
