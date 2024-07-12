import Layout from "../components/Layout"
import {addPng,clockPng,userPng,editPng,linkblackPng,morePng} from './../assets'
import { Box, theme, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import NoEvent from './../components/NoEvent'


export default function EventTypes(){
  const { colors, fonts } = useTheme(theme);
  const [noEvent,setNoEvent]=useState(true)

  return(
    <>
    <Layout>
      <div className="">
      <div className="flex justify-between items-center">
          <div className="mt-2">
          <h1 className="text-4xl font-semibold">Event types</h1>
          <p className="text-sm">create events to share for people to book on your calender</p>
          </div>

          <div>
          <button
              className="top_bar_btn3 flex items-center border rounded-full justify-center gap-2 py-3"
              style={{ borderColor: colors.primary_purp[100] }}
            >
              <img src={addPng} alt="" className="w-4 h-4" />
              <p
                className="text-base  font-medium"
                style={{ color: colors.primary_purp[100] }}
              >
                New Event Type
              </p>
            </button>
          </div>
        </div>

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

{/* {noEvent?<NoEvent/>:""} */}



      </div> 
    </Layout>
    </>
  )
}