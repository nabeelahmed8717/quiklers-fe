import consultantBanner from "../assets/raw/consultant.png";
import userIcon from "../assets/raw/userIconOne.png";

import plumberIcon from "../assets/raw/plumber.png";
import plumberBanner from "../assets/raw/plumberBanner.png";

import driverIcon from "../assets/raw/driver.png";
import driverBanner from "../assets/raw/driverBanner.png";

export const servicesPageData = [
  {
    id: "1",
    serviceBanner: consultantBanner,
    userDetails: {
      userIcon: userIcon,
      userName: "Willam Marks",
      userProfileRatings: "4.5",
      userProfileLevel: "7",
    },
    ratings:"3.4",
    servicesDone:"343",
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Consultant",
    isVerified: false,
    isSponsor: true,
    sponsorDetails: {
      companyName:'Arrow cod',
    }
    
  },
  {
    id: "2",
    serviceBanner: plumberBanner,
    userDetails: {
      userIcon: plumberIcon,
      userName: "Jhon Max",
      userProfileRatings: "4.1",
      userProfileLevel: "6",
    },
    ratings:"3.7",
    servicesDone:"33",
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Plumber",
    isVerified: true,
    isSponsor: false,
  },
  {
    id: "3",
    serviceBanner: driverBanner,
    userDetails: {
      userIcon: driverIcon,
      userName: "Ethan Thompson",
      userProfileRatings: "3.1",
      userProfileLevel: "5",
    },
    ratings:"4.4",
    servicesDone:"56",
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Diiver",
    isVerified: false,
    isSponsor: true,
  },
  {
    id: "4",
    serviceBanner: consultantBanner,
    userDetails: {
      userIcon: userIcon,
      userName: "Willam Marks",
      userProfileRatings: "4.5",
      userProfileLevel: "7",
    },
    ratings:"5.0",
    servicesDone:"134",
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Consultant",
    isVerified: true,
    isSponsor: false,

  },
  {
    id: "5",
    serviceBanner: plumberBanner,
    userDetails: {
      userIcon: plumberIcon,
      userName: "Jhon Max",
      userProfileRatings: "4.1",
      userProfileLevel: "6",
    },
    ratings:"4.5",
    servicesDone:"56",
    serviceDiscription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quis, necessitatibus nobis sequi eius dolores, molestiae dolorum quia cum labore suscipit. Quia voluptate, illum placeat quibusdam beatae sit quis eaque",
    serviceLabel: "Plumber",
    isVerified: false,
    isSponsor: false,
  },
];
