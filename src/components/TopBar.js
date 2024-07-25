import {
  addPng,
  PersonPng,
  searchPng,
  notificationPng,
  profilePng,
  BiChevronDown,
  calenderPng2,
  TaskPng,
} from "./../assets";
import {
  Box,
  theme,
  useTheme,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function TopBar({ onViewChange, currentView }) {
  const { colors, fonts } = useTheme(theme);

  const viewOptions = [
    { value: "timeGridDay", label: "Day" },
    { value: "timeGridWeek", label: "Week" },
    { value: "dayGridMonth", label: "Month" },
    { value: "dayGridYear", label: "Year" },
  ];

  return (
    <>
      <div className="flex justify-left items-center sticky  h-20 px-3 py-5 w-full top-0 z-50 bg-white ">
        <div className="flex justify-between w-2/4">
          <h1 className="font-bold text-4xl">LOGO</h1>

          <div className="flex items-center gap-2">
            <Menu>
              <div className="flex items-center justify-center gap-2 border h-10 width100 rounded-xl">
                <p
                  className="text-base"
                  style={{ colors: colors.text_color[100] }}
                >
                  {viewOptions.find((option) => option.value === currentView)
                    ?.label || "Day"}
                </p>

                <MenuButton>
                  <BiChevronDown
                    className="text-xl"
                    style={{ colors: colors.text_color[100] }}
                  />
                </MenuButton>
              </div>

              <MenuList
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                boxShadow="md"
                mt={3}
              >
                {viewOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    onClick={() => onViewChange(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <div
              className="flex items-center justify-center w-10 h-10 rounded-xl"
              style={{ backgroundColor: colors.primary2[200] }}
            >
              <img src={calenderPng2} alt="" className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-center w-10 h-10 rounded-xl border">
              <img src={TaskPng} alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
