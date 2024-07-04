import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import theme from "./../../utils/theme";
import { BiChevronDown } from "react-icons/bi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import BackgroundBanner from "../../components/BackgroundBanner";

export default function SignUp() {
  const { colors, fonts } = useTheme(theme);
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const openModal = () => {
    setModal((prevModal) => !prevModal);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Box
        className="w-full h-full grid grid-cols-2 lg:p-16"
        bg={colors.tertiary[100]}
      >
        <div className="lg:p-10">
          <h1 className="text-5xl font-bold">LOGO</h1>

          <p
            className="mt-8 text-4xl font-extrabold"
            style={{ color: colors.text[500], fontFamily: fonts.heading }}
          >
            Create an account
          </p>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="form2 ">
                {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
                <input
                  type="text"
                  name="fullName"
                  className="form_input"
                  autoComplete="off"
                  placeholder=" "
                />

                <label htmlFor="email" className="form_label">
                  First Name
                </label>
              </div>
              <div className="form2 ">
                {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
                <input
                  type="text"
                  name="fullName"
                  className="form_input"
                  autoComplete="off"
                  placeholder=" "
                />

                <label htmlFor="email" className="form_label">
                  Last Name
                </label>
              </div>
              <div className="form2 ">
                {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
                <input
                  type="text"
                  name="fullName"
                  className="form_input"
                  autoComplete="off"
                  placeholder=" "
                />

                <label htmlFor="email" className="form_label">
                  Phone Number
                </label>
              </div>
              <div className="form2">
                {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
                <div
                  type="text"
                  name="gender"
                  className="form_input "
                  autoComplete="off"
                >
                  <p className="selected_option">{selectedOption || ""}</p>

                  <BiChevronDown className="chevron_down" onClick={openModal} />
                  {modal ? (
                    <div className="select_dropdown">
                      <p onClick={() => handleOptionSelect("Male")}>Male</p>
                      <p onClick={() => handleOptionSelect("Female")}>Female</p>
                      <p onClick={() => handleOptionSelect("Others")}>Others</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <label htmlFor="email" className="form_label">
                  Gender
                </label>
              </div>
            </div>
            <div className="form ">
              {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
              <input
                type="email"
                name="fullName"
                className="form_input"
                autoComplete="off"
                placeholder=" "
              />

              <label htmlFor="email" className="form_label">
                Email
              </label>
            </div>
            <div className="form ">
              {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
              <input
                type={showPassword ? "text" : "password"}
                name="fullName"
                className="form_input"
                autoComplete="off"
                placeholder=" "
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>

              <label htmlFor="email" className="form_label">
                Password*
              </label>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <input type="checkbox" />
              <p
                className="text-base font-medium"
                style={{ fontFamily: fonts.body }}
              >
                I agree to the{" "}
                <span className="" style={{ color: colors.primary[100] }}>
                  Terms & conditions
                </span>{" "}
              </p>
            </div>

            <div className="mt-8">
              <button
                className="linear_bg w-full h-14 text-base rounded-md"
                style={{
                  color: colors.tertiary[100],
                  fontFamily: fonts.heading,
                }}
              >
                Create Account
              </button>
            </div>
            <p
              className="mt-8 text-base font-medium"
              style={{ fontFamily: fonts.heading }}
            >
              Already have an account?{" "}
              <span style={{ color: colors.primary[100] }}>Sign In</span>
            </p>
          </div>
        </div>
        <div className="">
          <BackgroundBanner />
        </div>
      </Box>
    </>
  );
}
