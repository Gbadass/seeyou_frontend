import {
  addPng,
  PersonPng,
  searchPng,
  notificationPng,
  profilePng,
  BiChevronDown,
  calenderPng2,
  TaskPng
} from "./../assets";
import { Box, theme, useTheme } from "@chakra-ui/react";

export default function TopBar() {
  const { colors, fonts } = useTheme(theme);
  return (
    <>
      {/* <div className="px-3 py-5 w-full "> */}
      <div className="flex justify-evenly items-center sticky  h-20 px-3 py-5 w-full top-0 z-2 bg-white border">
        <h1 className="font-bold text-4xl">LOGO</h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center gap-2 border h-10 width100 rounded-xl">
            <p className="text-base" style={{ colors: colors.text_color[100] }}>
              Day
            </p>
            <BiChevronDown
              className="text-xl"
              style={{ colors: colors.text_color[100] }}
            />
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{backgroundColor:colors.primary2[100]}}>
            <img src={calenderPng2} alt="" className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-center w-10 h-10 rounded-xl border">
            <img src={TaskPng} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
