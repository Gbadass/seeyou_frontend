import TopBar from "../../components/LandingPage/Topbar";
import { useTheme, Stack, Text, Icon } from "@chakra-ui/react";
import CustomAccordionItem from "./../../components/LandingPage/CustomAccordian";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useAccordionItemState,
} from "@chakra-ui/react";
import {
  faxCircle,
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
  circleframe,
  lineframe,
  card1,
  card2,
  card3,
  cardFull,
  cardgrid,
  cardgrid1,
  cardgrid2,
  cardgrid3,
  cardgrid4,
  cardgrid5,
  acccordianicon,
  acccordianicon1,
  acccordianicon2,
  acccordianicon3,
  faxExclipse,
  fax1,
  fax2,
  fax3,
  mailingIcon,
  mailingIcon1,
  mailingIcon2,
  arrowRight,
} from "./../../assets";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const theme = useTheme();
  const [animatedText, setAnimatedText] = useState("");
  const [displayedWord, setDisplayedWord] = useState("Later");
  const fullText = "Soon";

  useEffect(() => {
    // Handle the disappearance of each letter from "LETTER" (right-to-left)
    let index = "Later".length - 1; // Start from the last letter

    const clearLetterInterval = setInterval(() => {
      if (index >= 0) {
        setDisplayedWord((prev) => prev.slice(0, index)); // Remove the last letter
        index--;
      } else {
        clearInterval(clearLetterInterval); // Stop when all letters are gone
        // animateSoon(); // Start animating "Soon"
      }
    }, 300); // Adjust speed of letter disappearance

    return () => clearInterval(clearLetterInterval); // Cleanup interval on unmount
  }, []);

  // Function to animate the word "Soon"
  const animateSoon = () => {
    let index = 0;

    const soonInterval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText((prev) => prev + fullText[index]); // Add one letter at a time
        index++;
      } else {
        clearInterval(soonInterval); // Stop when "Soon" is fully written
      }
    }, 300); // Adjust speed of writing "Soon"
  };

  return (
    <>
      <div className="xl:w-full xl:h-full">
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

        <div className="xl:flex xl:justify-center items-center xl:gap-[120px] mobile_ads_card01 relative mt-8">
          <div className="mobile_ads_card02 absolute top-0">
            <img src={card2} alt="" className="w-full h-full" />
          </div>
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

        <div className="seyou_banner xl:mt-[230px]"></div>

        <div className="smart_features relative xl:flex xl:justify-center xl:items-center xl:text-center xl:mt-10 ">
          <div className="">
            <button
              style={{
                backgroundColor: theme.colors.primary01[300],
                color: theme.colors.primary01[400],
              }}
              className="benefit_btn"
            >
              Features
            </button>
            <h1 className="smart_features_h1 mt-5">
              Smart Features to Keep <br /> You
              <span
                className="smart_features_span xl:pl-5"
                style={{ backgroundImage: theme.colors.gradiant_primary[200] }}
              >
                on Track
              </span>
            </h1>

            <p className="smart_features_p xl:mt-3">
              See You comes packed with tools to make your scheduling, <br />{" "}
              planning, and coordinating easier than ever
            </p>
          </div>

          <img
            src={circleframe}
            alt=""
            className="circle_frame absolute top-[20px] z-10 left-20"
          />
          <img src={lineframe} alt="" className="lineframe absolute top-0" />
        </div>

        <div className="xl:flex  xl:w-full xl:h-full mt-3">
          <div className="xl:flex xl:flex-row xl:gap-5 xl:w-full xl:h-full xl:items-center xl:justify-center xl:text-center">
            <div className="grid_part1">
              <img src={cardgrid} alt="loading" className="w-full h-full" />
            </div>
            <div className="grid_part2">
              <img src={cardgrid1} alt="loading" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="xl:flex  xl:w-full xl:h-full mt-2">
          <div className="xl:flex xl:flex-row xl:gap-5 xl:w-full xl:h-full xl:items-center xl:justify-center xl:text-center">
            <div className="grid_part3">
              <img src={cardgrid2} alt="loading" className="w-full h-full" />
            </div>
            <div className="grid_part4">
              <img src={cardgrid3} alt="loading" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="xl:flex  xl:w-full xl:h-full mt-2">
          <div className="xl:flex xl:flex-row xl:gap-5 xl:w-full xl:h-full xl:items-center xl:justify-center xl:text-center">
            <div className="grid_part4">
              <img src={cardgrid4} alt="loading" className="w-full h-full" />
            </div>
            <div className="grid_part3">
              <img src={cardgrid5} alt="loading" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={faxCircle}
            alt=""
            className="absolute right-[192px] fax_icons2 top-[52px]"
          />
        </div>

        <div className="mt-20 xl:grid xl:justify-between xl:grid-cols-2  px-20 h-[498px] w-full relative">
          <div className="h-full">
            <Accordion allowToggle>
              <CustomAccordionItem title="How do I create an event?">
                Simply tap the "Create Event" button, fill in the details, and
                invite your friends!
              </CustomAccordionItem>
            </Accordion>

            <Accordion allowToggle className="mt-[70px]">
              <CustomAccordionItem title="How do I create an event?">
                Simply tap the "Create Event" button, fill in the details, and
                invite your friends!
              </CustomAccordionItem>
            </Accordion>
            <Accordion allowToggle className="mt-[70px]">
              <CustomAccordionItem title="How do I create an event?">
                Simply tap the "Create Event" button, fill in the details, and
                invite your friends!
              </CustomAccordionItem>
            </Accordion>

            <Accordion allowToggle className="mt-[70px]">
              <CustomAccordionItem title="How do I create an event?">
                Simply tap the "Create Event" button, fill in the details, and
                invite your friends!
              </CustomAccordionItem>
            </Accordion>
          </div>

          <div className="px-20 py-20 relative h-full">
            <img src={fax1} alt="" className="fax_icons" />

            <div className="mt-16 ml-12">
              <h1 className="fax_text">FAQs</h1>
              <p className="fax_p">
                Here are the most common questions <br /> about using See You.
              </p>

              <div className="absolute right-0 top-0">
                <img src={faxExclipse} alt="" className="h-[496px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src={mailingIcon}
            alt=""
            className="mailing_icon absolute right-[270px] top-[74px]"
          />
        </div>
        <div className="bgFeature xl:h-[779px] xl:mt-[40px] xl:flex  xl:justify-center xl:items-center xl:flex-col xl:relative border">
          <img
            src={mailingIcon1}
            alt=""
            className="mailing_icon xl:absolute  xl:left-[270px] xl:top-[75px]"
          />
          <button
            style={{
              backgroundColor: theme.colors.primary01[300],
              color: theme.colors.primary01[400],
            }}
            className="benefit_btn"
          >
            Features
          </button>

          <h1 className="joim_our text-[64px] font-semibold">
            Join Our <span className="mailing_list">Mailing List</span>{" "}
          </h1>
          <p className="text-2xl font-normal text-center">
            Subscribe to get updates, insights, and be the first to know <br />{" "}
            when we launch!
          </p>

          <div className="xl:w-[400px] h-[64px] mt-[50px] mailing_inpt_cont">
            <div className="mailing_inpt_inner w-full h-full">
              <input
                type="text"
                className="w-[70%] h-full"
                name="message"
                placeholder="Enter Your Email"
              />
              <div className="relative">
                <button className="flex items-center mailing_btn">
                  <p>Send</p>
                  <img src={arrowRight} alt="loading" className="border" />
                </button>
                <img
                  src={mailingIcon2}
                  alt=""
                  className="mailing_icon xl:absolute xl:left-[370px] xl:top-[0px] xl:bottom-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
