import { addPng,PersonPng,searchPng,notificationPng,profilePng } from "./../assets";
import { Box, theme, useTheme } from "@chakra-ui/react";


export default function TopBar() {
  const { colors, fonts } = useTheme(theme);
  return (
    <>
      <div className="px-3 py-5 w-full ">
        <div className="flex justify-between items-center">
          <div>
            <button className="top_bar_btn flex items-center border rounded-full justify-center gap-2 py-3" style={{borderColor:colors.primary_purp[100]}}>
              <img src={addPng} alt="" className="w-4 h-4"/>
              <p className="text-base font-medium " style={{color:colors.primary_purp[100]}}>Create</p>
            </button>
          </div>

          <div className="flex items-center gap-5">
          <button className="top_bar_btn2 flex items-center border rounded-full justify-center gap-2 py-3" style={{borderColor:colors.primary_purp[100]}}>
              <img src={PersonPng} alt="" className="w-4 h-4" />
              <p className="text-base font-normal " style={{color:colors.primary_purp[100]}}>invite user</p>
            </button>

<div className="relative">
<input type="text" style={{backgroundColor:colors.input_bg[100]}} className="topbar_inpt p-2 " />
            <img src={searchPng} className="absolute search_png" alt="" />
</div>

<img src={notificationPng} alt="" className="w-6 h-6"/>

<img src={profilePng} alt="" className="w-10 h-10"/>

          </div>
        </div>
      </div>
    </>
  );
}
