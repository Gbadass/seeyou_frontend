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
      <div className="py-5 pr-3 pl-10 w-full border-r h-screen">
        <div className="overflow-scroll">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl">LOGO</h1>
            <img src={doubleArrow} className="w-4 h-4" alt="" />
          </div>

          <div className="mt-10">
            {routes
              .filter((route) => route.isSidebar)
              .map((route) => (
                <Link>
                  <div
                    className="flex gap-3 mt-3 items-center sidebar_route_h rounded-xl p-2 "
                    style={{
                      backgroundColor: isActiveRoute(route.path)
                        ? colors.hover[100]
                        : "",
                    }}
                  >
                    <span>{route.icon}</span>
                    <p className="text-base font-medium">{route.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
