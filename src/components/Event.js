import {theme, useTheme } from "@chakra-ui/react";
import {
  clockPng,
  userPng,
  editPng,
  linkblackPng,
  morePng,
} from "./../assets";

export default function Event(){

  const { colors, fonts } = useTheme(theme);
  return(
    <>
          <div className="eventCard mt-20 py-3 px-5">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <p className="font-semibold text-lg">15 min meeting</p>
                  <span className="event_link">/seeyousystem.com/inidara/</span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="event_time">
                    <img src={clockPng} alt="" />
                    <p className="even_time_text">30 minutes</p>
                  </div>

                  <div className="event_users">
                    <img src={userPng} alt="" />
                    <p className="even_time_text">1-on-1</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <img src={editPng} alt="" />
                <img src={linkblackPng} alt="" />
                <img src={morePng} alt="" />
              </div>
            </div>
          </div>
    </>
  )
}