import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors:{
    gradiant_primary:{
      100: 'linear-gradient(180deg, #6D4F98 0%, #E3A5C7 100%)',
      200: 'linear-gradient(180deg, #6D4F98 0%, #E3A5C7 100%)'
    },
    
    primary01:{
      100:'#6D4F98',
      200:'linear-gradient(9.14deg, #FFFFFF 6.93%, #F5EDFF 97.85%)',
      300:'#F0EDF4',
      400:'#6D4F98'
    },
    primary:{
      100: '#E2452E',
      200: '#ec8451',
      300: '#e8b070'
    },
    primary2:{
      100:'#794330',
      200:'#D3C0BE',
      300:'#E9E0D9'
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
    },
    bordercolor:{
      100:'#E4E1E1'
    },
    text_color:{
      100:'#4F4F4F'
    },
    mycalender:{
      100:'#DB6D32',
      200:'#A2DB32',
      300:'#DB32C4',
      400:'#323DDB'
    }


  },
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Poppins, sans-serif',

},
});

export default theme;