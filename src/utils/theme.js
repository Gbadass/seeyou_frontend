import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors:{
    primary:{
      100: '#E2452E',
      200: '#ec8451',
      300: '#e8b070'
    },
    secondary:{
      100: 'linear-gradient(90deg, #e8b070 0%, #e2452e 100%)',
    },
    tertiary:{
      100:'#ffffff',
    },
    text:{
      500: '#E2452E',
    }
  },
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Poppins, sans-serif',

},
});

export default theme;