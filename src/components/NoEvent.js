import {theme, useTheme } from "@chakra-ui/react";
import {LinkPng} from './../assets'

export default function NoEvent(){

  const { colors, fonts } = useTheme(theme);
  return(
    <>
            <div className="no_eventCard mt-20 flex justify-center items-center">
        <div className="">
          <div>
          <div className="centerItem link_circle rounded-full flex items-center justify-center" style={{backgroundColor:colors.primary_purp[100]}}>
            <img src={LinkPng} className="" alt="" />


          </div>
          <p className="text-2xl font-semibold text-center mt-8">No event yet</p>
          <p className="noevent_message text-sm font-normal">You have no upcoming event. As soon as there is an event, it will show up here </p>
          </div>


        </div>

        </div>
    </>
  )
}