import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "react-phone-number-input/style.css";

import { getBalanceAndPin } from "../../features/balance-and-pin/balanceAndPinSlice";
import {
  Download,
  EventInformation,
  Footer,
  Help,
  Hospitality,
  HospitalityItem,
  InfoAlert,
  MainContainer,
  Membership,
  MyKeyfob,
  NavBar,
  Welcome,
  ImageContainer,
  ImagesContainer
} from "./styled/BelfastGiantsPromo";

import Spinner from "../../components/Spinner";
import ExpandingContainer from "./ExpandingContainer";
import giantsPic from "./img/Giants 1.svg";
import giantsLogo from "./img/giants-logo.svg";
import digiseqLogo from "./img/digiseq-logo.png";
//import sodexoLiveLogo from "./img/sodexo-live.png";
import globalPayments from "./img/global-payments.svg";
import chevronRight from "./img/chevron-right.svg";
import chevronRightBlack from "./img/chevron-right-black.svg";
import infoCloseIcon from "./img/info-close-icon.svg";
import shoppingBasket from "./img/shopping-basket.png";
import appStore from "./img/app-store-badge.svg";
import playStore from "./img/play-store-badge.svg";


const BELFAST_DATA = {
  membership: [
    {
      title: "Membership",
      detail: "Free"
    },
    {
      title: "Season ticket",
      detail: "Main Stand"
    },
    {
      title: "Purchase date",
      detail: "21/06/2023"
    },
    { title: "Seat for next event", detail: "Main Stand, E17" },
    { title: "Type", detail: "Lorem" },
    { title: "Location", detail: "Lorem" }
  ],

  hospitality: [
    {
      title: "Seasonal Hospitality",
      link: "https://www.evertonfc.com/hospitality/seasonal-hospitality",
      //image: require("./img/season.webp")
    },
    {
      title: "Matchday Hospitality",
      link: "https://www.evertonfc.com/hospitality/vip-matchday-experiences",
      //image: require("./img/match.webp")
    },
    {
      title: "Venue Hire",
      link: "https://www.evertonfc.com/hospitality/venue-hire",
      //image: require("./img/venue.webp")
    }
  ],
  todays_schedule: [
    { time: "18:00", details: "Hospitality Area Opening" },
    { time: "19:30", details: "Official Welcoming" },
    { time: "19:45", details: "Ambassadors Q&As" },
    { time: "21:00", details: "Last Order Before the Match" },
    { time: "21:20", details: "Leave for Stadium" },
    { time: "22:00", details: "Match Kick-off" },
    { time: "00:00", details: "Match Ends (estimated)" },
    { time: "01:00", details: "Transfers to Hotel(s)" },
    {
      time: "02:00",
      details: "Hospitality Area Closes (or 2 hours after the final whistle)"
    }
  ],
  my_keyfob: [
    {
      title: "Season Ticket",
      subtitle: "Use your key fob to in place of your season ticket!",
      link: "https://www.evertonfc.com/seasontickets"
    },
    {
      title: "My Membership",
      subtitle: "View my membership details.",
      link: "https://www.evertonfc.com/membersarea"
    },
    {
      title: "My Shop",
      subtitle: "Visit Everton official online store.",
      link: "https://evertondirect.evertonfc.com/en/?_s=bm-FI-PSC-EV-NAV-LINK---&_gl=1*1yn2qkj*_ga*ODI4MTY2Nzk1LjE2ODcyNTI3NDE.*_ga_4H186ENHQ4*MTY4NzUxNDUwOS41LjEuMTY4NzUxNDc0NS40Ny4wLjA."
    },
    {
      title: "Payments",
      subtitle: "Tap your key fob anywhere contactless payment is accepted.",
      link: ""
    }
  ]
};

const BelfastGiantsPromo = () => {
  const [searchParams] = useSearchParams();
  const serialNumber = searchParams.get("serialNumber");
  const dispatch = useDispatch();

  const { balanceAndPin, isLoading } = useSelector(
    (state) => state.balanceAndPin
  );

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!balanceAndPin && serialNumber) {
      dispatch(getBalanceAndPin(serialNumber));
    }
  }, [balanceAndPin, serialNumber, dispatch]);

  const formattedBalance = (balanceDetails) => {
    const { availableBalance, currency } = balanceDetails;
    let iconPrefixed = true;
    let icon = "";

    switch (currency) {
      case "GBP":
        icon = "£";
        break;
      case "EUR":
        icon = "€";
        break;
      case "USD":
        icon = "$";
        break;
      default:
        icon = "";
    }

    if (iconPrefixed) {
      return icon + availableBalance;
    } else {
      return availableBalance + icon;
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <MainContainer>
      <NavBar>
        <img src={giantsLogo} alt="Giants logo" />

        <div>
          Balance:{" "}
          {balanceAndPin?.balanceDetails?.availableBalance
            ? formattedBalance(balanceAndPin?.balanceDetails)
            : "N/A"}
        </div>
      </NavBar>
      <Welcome>
        <h1>HI JOHN SMITH</h1>
        <ImageContainer>
          <img src={giantsPic} alt="giants player" />
        </ImageContainer>
      </Welcome>
      <ExpandingContainer title="Details">
        <Membership>
          {BELFAST_DATA.membership.map((item, i) => (
            <div className="item" key={i}>
              <p className="title">{item.title}</p>
              <p>{item.detail}</p>
            </div>
          ))}
        </Membership>
      </ExpandingContainer>
      <ExpandingContainer title="Hospitality">
          {BELFAST_DATA.hospitality.map((item, i) => (
            <HospitalityItem
              key={i}
              img={item.image}
              onClick={() => window.open(item.link, "_blank")}
            >
              <p className="title">{item.title}</p>
              <img src={chevronRight} alt="chevron right" />
            </HospitalityItem>
          ))}
      </ExpandingContainer>
      <ExpandingContainer title="TODAY’S SCHEDULE">
        <EventInformation>
          {BELFAST_DATA.todays_schedule.map((evt, i) => (
            <p key={i}>
              <span style={i % 2 === 0 ? {fontWeight: "bold" } : {}}>
                {evt.time}
                {` - ${evt.details}`}
              </span>
            </p>
          ))}
        </EventInformation>
      </ExpandingContainer>
      <ExpandingContainer title="MY KEY FOB">
        <MyKeyfob>
          <p>Check out the ways you can use your key fob</p>
          {BELFAST_DATA.my_keyfob.map((item, i) => (
            <div
              className="item"
              key={i}
              onClick={() =>
                item.link
                  ? window.open(item.link, "_blank")
                  : setShowAlert(true)
              }
            >
              <div className="details">
                <p className="title">{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
              <img src={chevronRightBlack} alt="chevron right" />
            </div>
          ))}
        </MyKeyfob>
      </ExpandingContainer>
      <ExpandingContainer title="HAVING TROUBLE?">
        <Help>
          <p>
            Feel free to contact our customer support team at{" "}
            <a
              href="https://www.evertonfcsupport.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>evertonfcsupport.co.uk</b>
            </a>{" "}
            or <a href="tel:+4479586394290"><b>079586 394290</b></a>.
          </p>
        </Help>
      </ExpandingContainer>
      <ExpandingContainer title="DOWNLOAD THE APP">
        <Download>
          <p>
            Enable contactless payments on your wearable and more by downloading the Manage-Mii app!{" "}
          </p>
          <ImagesContainer>
            <img src={appStore} 
            alt="app store badge" 
            onClick={() => window.open("https://apps.apple.com/us/app/manage-mii/id1436896422", "_blank")}/>

            <img src={playStore} 
            alt="play store badge"
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.managemii&hl=en_GB&gl=US&pli=1", "_blank")} />
          </ImagesContainer>
          <p className="app-link">
            Already have the app?{" "}
            <a
              href="https://www.manage-mii.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Open Manage-Mii</b>
            </a>
          </p>

        </Download>
      </ExpandingContainer>


      <Footer>
        <p>Powered by</p>
        <img
          src={digiseqLogo}
          alt="digiseq-logo"
          className="digiseq"
          onClick={() => window.open("https://www.digiseq.co.uk", "_blank")}
        />


      <ImageContainer>
        <img 
          src={globalPayments}
          alt="GlobalPayments Logo"
          onClick={() =>
            window.open(
              "https://www.globalpayments.com/en-gb",
              "_blank"
            ) 
          }
        />
      </ImageContainer>
      </Footer>
      {showAlert && (
        <InfoAlert>
          <div className="inner-container">
            <img
              className="close-button"
              src={infoCloseIcon}
              alt="info-close-icom"
              onClick={() => setShowAlert(false)}
            />
            <img className="top-icon" src={shoppingBasket} alt="icon" />
            <h2>{"Payments"}</h2>
            <p>
              {
                "We have pre-loaded your key fob with £20, so you can shop easily at our kiosk and also tap for your free drink and snack during half-time at our dedicated concession stands."
              }
            </p>
          </div>
        </InfoAlert>
      )}
    </MainContainer>
  );
};

export default BelfastGiantsPromo;
