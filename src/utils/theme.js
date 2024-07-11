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
    },
    hover:{
      100:'#F6D8FE'
    },
    primary_purp:{
      100:'#C813F6'
    },
    input_bg:{
      100:'#F3F3F3'
    }

  },
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Poppins, sans-serif',

},
});

export default theme;