import {linkPng,bookingPng,avialabilityPng,inboxPng,calenderPng,applicationPng} from './assets'
import Layout from '././components/Layout'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import EventTypes from './pages/EventTypes'


let routes = [
  {
    path: "/signup",
    name: " Sign Up",
    icon: null,
    component: SignUp,
    isSidebar: false,
    roles: [],
},
  {
    path: "/login",
    name: " Login",
    icon: null,
    component: Login,
    isSidebar: false,
    roles: [],
},
  {
    path: "/eventtypes",
    name: "Event Types",
    icon: <img src={linkPng} className="" alt="" />,
    component: EventTypes,
    isSidebar: true,
    roles: [],
},
{
  path: "/booking",
  name: "Booking",
  icon: <img src={bookingPng} className="" alt="" />,
  component: Layout,
  isSidebar: true,
  roles: [],
},
{
  path: "/availability",
  name: "Availability",
  icon: <img src={avialabilityPng} className="" alt="" />,
  component: Layout,
  isSidebar: true,
  roles: [],
},
{
  path: "/inbox",
  name: "Inbox",
  icon: <img src={inboxPng} className="" alt="" />,
  component: Layout,
  isSidebar: true,
  roles: [],
},
{
  path: "/calender",
  name: "Calender",
  icon: <img src={calenderPng} className="" alt="" />,
  component: Layout,
  isSidebar: true,
  roles: [],
},
{
  path: "/integrations",
  name: "Integerations & apps",
  icon: <img src={applicationPng} className="" alt="" />,
  component: Layout,
  isSidebar: true,
  roles: [],
},

];

export default routes;