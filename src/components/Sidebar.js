import {
  doubleArrow,
  notificationPng,
  profilePng,
  addUserPng,
  arrowPng,
  calenderAddPng
} from "./../assets";
import routes from "../routes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, theme, useTheme } from "@chakra-ui/react";
import MiniCalender from "./../components/MiniCalender";

export default function Sidebar() {
  const location = useLocation();
  const { colors, fonts } = useTheme(theme);

  const isActiveRoute = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <div className="py-5 pr-5 pl-5 z-10 border-l h-screen overflow-x-hidden fixed sidebar_width bg-white">
        <div className="overflow-scroll">
          <div className="flex items-center justify-between">
            <img
              src={doubleArrow}
              className="w-4 h-4 transform rotate-180"
              alt=""
            />

            <div className="flex items-center gap-3">
              <img src={notificationPng} className="w-6 h-6" alt="" />
              <img src={profilePng} alt="" className="w-10 h-10" />
            </div>
          </div>

          <div className="mt-20">
            <MiniCalender />
          </div>

          <div className="mt-8">
            <button
              className="flex gap-3 items-center width241 h-10 rounded-xl justify-center"
              style={{ backgroundColor: colors.primary2[300] }}
            >
              <img src={addUserPng} className="w-4 h-4" alt="" />
              <p
                style={{ color: colors.primary2[100] }}
                className="text-base font-normal"
              >
                Invite user
              </p>
            </button>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="text-base font-semibold">My Calendars </p>
            <img src={arrowPng} alt="" className="w-5 h-5" />
          </div>

          <div className="px-5 py-3 ">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors.mycalender[100] }}
              ></div>
              <p className="text-xs font-medium">Work Plan</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors.mycalender[200] }}
              ></div>
              <p className="text-xs font-medium"> Project</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors.mycalender[300] }}
              ></div>
              <p className="text-xs font-medium"> Holiday</p>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: colors.mycalender[400] }}
              ></div>
              <p className="text-xs font-medium"> Fitness</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
          <img src={calenderAddPng} alt="" className="w-5 h-5" />
            <p className="text-base font-semibold">Add calender account </p>

          </div>
        </div>
      </div>
    </>
  );
}
