import TopBar from "../../components/LandingPage/Topbar";
import { useTheme } from "@chakra-ui/react";
import {
  appadscont,
  appadsimg2,
  appadsimg3,
  appstoreimg,
  playstoreimg,
  locationBanner,
  PolyganBanner,
  PolyganBanner2,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
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

        <div className="xl:flex xl:justify-center xl:mt-60">
          <button
            style={{
              backgroundColor: theme.colors.primary01[300],
              color: theme.colors.primary01[400],
            }}
            className="benefit_btn"
          >
            Benefits
          </button>
        </div>

        <div className="relative ">
          <h1 className="love_seeyou">
            You're Going to Love{" "}
            <span
              style={{ backgroundImage: theme.colors.gradiant_primary[200] }}
              className="see_you_span"
            >
              'See You'
            </span>{" "}
          </h1>
          <div className="absolute top-4 left-14">
            <img src={PolyganBanner} alt="" className="PolyganBanner_img " />
          </div>

          <div className="absolute bottom-4 right-14">
            <img src={PolyganBanner2} alt="" className="PolyganBanner_img " />
          </div>
        </div>

        <div className="xl:flex xl:justify-center xl:mt-5">
          <div className="xl:grid xl:grid-cols-2 xl:justify-center xl:items-center xl:text-center xl:gap-8">
            <img src={benefit1} alt="" className="benefit1_img " />

            <img src={benefit2} alt="" className="benefit1_img " />

            <img src={benefit3} alt="" className="benefit1_img " />

            <img src={benefit4} alt="" className="benefit1_img " />
          </div>
        </div>
      </div>
    </>
  );
}
