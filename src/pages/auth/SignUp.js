import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, useTheme } from "@chakra-ui/react";
import theme from "./../../utils/theme";

export default function SignUp() {
  const { colors } = useTheme(theme);

  return (
    <>
      <Box
        className="w-full h-full grid grid-cols-2 lg:p-16"
        bg={colors.tertiary[100]}
      >
        <div className="border lg:p-10">
          <h1 className="text-5xl font-bold">LOGO</h1>

          <p
            className="mt-8 text-4xl font-bold"
            style={{ color: colors.text[500] }}
          >
            Create an account
          </p>
          <div>
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
              <div className="form2 ">
                {/* {!userDetails.fullName && err && (
                <span className="err_msg">please enter your fullname</span>
              )} */}
                <select
                  type="text"
                  name="gender"
                  className="form_input"
                  autoComplete="off"
                >
                  <option value="" hidden className="">select gender</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>

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
                  type="text"
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
                  type="text"
                  name="fullName"
                  className="form_input"
                  autoComplete="off"
                  placeholder=" "
                />

                <label htmlFor="email" className="form_label">
                   Password*
                </label>
              </div>

              <div className="flex items-center gap-3">
<input type="check" />
              </div>
          </div>
        </div>
        <div></div>
      </Box>
    </>
  );
}
