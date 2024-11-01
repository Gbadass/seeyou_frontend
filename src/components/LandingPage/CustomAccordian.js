import TopBar from "../../components/LandingPage/Topbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useTheme,
} from "@chakra-ui/react";
import { acccordianicon } from "./../../assets";
import { useEffect, useState } from "react";

const CustomAccordionItem = ({ title, children }) => (
  <AccordionItem>
    {({ isOpen }) => (
      <div
        className={`accordian_cont flex gap-5 h-full transition-colors duration-300 ${
          isOpen ? "Abg_color" : ""
        }`}
      >
        <div className="acccordianicon_img absolute">
          <img src={acccordianicon} alt="" className="w-full h-full" />
        </div>

        <Accordion allowToggle w="100%" className="mt-1 ml-[60px]">
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl font-semibold flex items-center"
              >
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </Accordion>
      </div>
    )}
  </AccordionItem>
);

export default CustomAccordionItem;