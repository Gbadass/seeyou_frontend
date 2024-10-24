import TopBar from "../../components/LandingPage/Topbar";
import { useTheme } from "@chakra-ui/react";
import {
  appadscont,
  appadsimg2,
  appadsimg3,
  appstoreimg,
  playstoreimg,
  locationBanner,
} from "./../../assets";

export default function LandingPage() {
  const theme = useTheme();

  return (
    <>
      <div className="xl:w-full">
        <TopBar />

        <div className="xl:flex xl:w-full xl:justify-center xl:items-center xl:flex-col xl:leading-snug xl:px-20">
          <h1 className="text96px">Meet your</h1>
          <h1 className="text96px">
            {" "}
            <span style={{ color: theme.colors.primary01[100] }}>
              {" "}
              scheduling
            </span>{" "}
            Buddy
          </h1>

          <p className="calender_desc xl:mt-5 ">
            Your calendar reimagined to be simpler & smarter. Schedule, plan and
            track with all participants through various tasks and events
            seamlessly.
          </p>
        </div>

        <div className="xl:flex xl:justify-center xl:gap-8 mt-8">
          <div className="play_store_cont">
            <img src={playstoreimg} alt="" className="play_store_cont_img1" />
          </div>
          <div className="play_store_cont">
            <img src={appstoreimg} alt="" className="play_store_cont_img1" />
          </div>
        </div>

        <div className="xl:flex xl:justify-center items-center gap-5 mt-10">
          <div
            className="mobile_ads_card"
            style={{ backgroundColor: theme.colors.primary01[200] }}
          >
            <img src={appadscont} alt="" className="mobile_ads_card_img" />
          </div>
          <div
            className="mobile_ads_card2 relative"
            style={{ backgroundColor: theme.colors.primary01[200] }}
          >
            <img src={appadsimg2} alt="" className="mobile_ads_card_img1 " />
            <img
              src={appadsimg3}
              alt=""
              className="mobile_ads_card_img2 absolute"
            />
          </div>
        </div>

        <div className="locationBanner_cont xl:mt-60">
          <img src={locationBanner} alt="" className="" />
        </div>

        <div className="xl:flex xl:justify-center">
          <button
            style={{ backgroundColor: theme.colors.primary01[300] }}
            className="benefit_btn"
          >
            Benefits
          </button>
        </div>
      </div>
    </>
  );
}
