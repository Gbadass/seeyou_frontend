import { seeyouLogo } from "./../../assets";
import { useTheme } from "@chakra-ui/react";
// import theme  from "./../../utils/theme";

export default function TopBar() {
  const theme = useTheme();

  return (
    <>
      <div className="xl:w-full xl:flex xl:justify-between px-20 py-20">
        <div>
          <img src={seeyouLogo} alt="" />
        </div>

        <div>
          <button
            style={{ backgroundImage: theme.colors.gradiant_primary[100] }}
            className="get_start_Btn"
          >
            Get Started!
          </button>
        </div>
      </div>
    </>
  );
}
