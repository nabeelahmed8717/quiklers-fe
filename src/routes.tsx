import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import loadingGif from "./assets/loading/boxes-loader.gif"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
      className="d-flex justify-center align-center" style={{ height: "80vh" }}
    >
      {/* <Spin indicator={antIcon} /> */}
      <img src={loadingGif} width={60} alt="" />
    </div>
  }>
    <Component {...props} />
  </Suspense>
);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/landingPage")));
const AboutUs = Loadable(lazy(() => import("./pages/aboutUs")));
const Services = Loadable(lazy(() => import("./pages/services")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));
const Chat = Loadable(lazy(() => import("./pages/chat")));
const Bookings = Loadable(lazy(() => import("./pages/bookings")));
const UserProfile = Loadable(lazy(() => import("./pages/userProfile")));

const ServiceProviderDashboard = Loadable(lazy(() => import("./pages/serviceProvider/serviceProviderDashboard")));
const BookingsServiceProvider = Loadable(lazy(() => import("./pages/serviceProvider/bookings")));
const MyServicesServiceProvider = Loadable(lazy(() => import("./pages/serviceProvider/myServices")));
const ProfileServiceProvider = Loadable(lazy(() => import("./pages/serviceProvider/userProfile")));

const PageNotFound = Loadable(lazy(() => import("./pages/pageNotFound")));

const Create = Loadable(lazy(() => import("./pages/create")));

const userRole = localStorage.getItem('userRole');
const isServiceProvider = userRole === 'serviceProvider'
const isServiceSeeker = userRole === 'serviceSeeker'




export const routes: any = [
  { path: "/", element: <Navigate to={isServiceProvider ? "service-provider" : isServiceSeeker ? 'home' : 'sign-in'} /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //service seeker
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "create/:state",
        element: <Create />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      //service provider routes
      {
        path: "service-provider",
        element: <ServiceProviderDashboard />,
      },
      {
        path: "service-provider/bookings",
        element: <BookingsServiceProvider />,
      },
      {
        path: "service-provider/my-services",
        element: <MyServicesServiceProvider />,
      },
      {
        path: "service-provider/profile",
        element: <ProfileServiceProvider />,
      },
    ],
  },
];


// export const routes: any = [
//   {
//     path: "/",
//     element: <Navigate to={isServiceProvider ? "service-provider" : isServiceSeeker ? 'home' : 'page-not-found'} />,
//   },
//   {
//     path: "sign-in",
//     element: <SignIn />,
//   },
//   {
//     path: "sign-up",
//     element: <SignUp />,
//   },
//   {
//     path: "page-not-found",
//     element: <PageNotFound />,
//   },
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       //service seeker
//       ...(isServiceSeeker
//         ? [
//           {
//             path: "home",
//             element: <LandingPage />,
//           },
//           {
//             path: "about-us",
//             element: <AboutUs />,
//           },
//           {
//             path: "services",
//             element: <Services />,
//           },
//           {
//             path: "chat", // Both service providers and seekers can access chat
//             element: <Chat />,
//           },
//           {
//             path: "bookings",
//             element: <Bookings />,
//           },
//           {
//             path: "create/:state",
//             element: <Create />,
//           },
//           {
//             path: "user-profile",
//             element: <UserProfile />,
//           },
//         ]
//         : []),
//       ...(isServiceProvider
//         ? [
//           {
//             path: "service-provider",
//             element: <ServiceProviderDashboard />,
//           },
//           {
//             path: "service-provider/bookings",
//             element: <BookingsServiceProvider />,
//           },
//           {
//             path: "chat", // Both service providers and seekers can access chat
//             element: <Chat />,
//           },
//         ]
//         : []),
//       {
//         path: "*",
//         element: <Navigate to="page-not-found" />,
//       },
//     ],
//   },
// ];
