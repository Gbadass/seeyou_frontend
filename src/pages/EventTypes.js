import Layout from "../components/Layout";
import {
  addPng,
  clockPng,
  userPng,
  editPng,
  linkblackPng,
  morePng,
  arrowdownPng
} from "./../assets";
import { Box, theme, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "../components/Calender";
import WeekCalendar from "./../components/WeekCalender";

export default function EventTypes({ currentView, onViewChange }) {
  const { colors, fonts } = useTheme(theme);
  const [noEvent, setNoEvent] = useState(true);

  return (
    <>
      <Layout>
        <div className="">
          <div className="flex justify-between items-center">


            <div>
              <button
                className="top_bar_btn3 flex items-center border rounded-full justify-center gap-2 py-3"
                style={{ borderColor: colors.primary2[100] }}
              >
                <img src={addPng} alt="" className="w-4 h-4" />
                <p
                  className="text-base  font-medium"
                  style={{ color: colors.primary2[100] }}
                >
                  Create
                </p>
                <img src={arrowdownPng} alt="" className="w-5 h-5" />
              </button>
            </div>
          </div>


          {noEvent?<WeekCalendar currentView={currentView} onViewChange={onViewChange}/>:""}
        </div>
      </Layout>
    </>
  );
}
