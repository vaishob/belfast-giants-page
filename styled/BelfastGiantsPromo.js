import styled from "styled-components";

const B1 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: "#FFFFFF"
};

const B2 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.25px",
  color: "#D8D9D9"
};

const B3 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  color: "#202020"
};

const B4 = {
  //button
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "32px",
  color: "#FFFFFF"
};

const H1 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "57px",
  lineHeight: "64px",
  color: "#FFFFFF",
  leadingTrim: "both",
  textEdge: "cap"
};

const H2 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "44px",
  color: "#FFFFFF"
};

const H3 = {
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "#FFFFFF",
  letterSpacing: "0.15px"
};

export const NavBar = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #004D58;    // Changed
  border-bottom: 1px solid #004D58;
  ${H3} img {
    height: 40px;
  }

  .view-balance {
    cursor: pointer;
  }
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  margin: auto;
  min-height: 100vh;
  background-color: #004D58;

  .or {
    ${B1}
    text-align: center;
    margin-bottom: 16px;
  }
`;

export const SectionContainer = styled.section`
  background-color: #004D58;    // Changed
  margin-bottom: 1px;
  display: block;

  p {
    ${B1}
  }

  .title-bar {
    padding: 16px;
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    h2 {
      ${H2}
      color: white;
    }

    img {
      cursor: pointer;
      display: block;
      margin-bottom: 10px;
    }
  }
  .content {
    background-color: #212121;
  }
`;

export const Welcome = styled.div`

  border-bottom: 1px solid #000000;
  text-align: left;

  h1 {
    ${H2}
    padding: 10px;
    color:#FFFFFF;
  }
  p {
    ${B1}
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  padding-top: 0px; /* adjust the desired vertical padding */
  padding-bottom: 0px; /* adjust the desired vertical padding */
  margin: 0; /* remove any default margins to prevent additional spacing */

  img {
    display: block; /* ensures the image takes up the full width of the container */
    max-width: 100%; /* prevents the image from overflowing its container */
    height: auto; /* maintains the aspect ratio of the image */
  }
`;

export const ImagesContainer = styled.div`
  padding-top: 20px; /* Adjust the value to increase or decrease the padding above the <div> */
  padding-bottom: 20px; /* Adjust the value to increase or decrease the padding below the <div> */
`;

export const Membership = styled.div`
  display: flex;
  flex-direction: column;

  .item {
    padding: 16px;
    border-bottom: 1px solid #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title {
      ${B4}
    }

    p {
      ${B1}
    }

    color: #212121; 
  }
`;

export const Hospitality = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px 0px;
`;

export const HospitalityItem = styled.div`
  border-radius: 4px;
  overflow: hidden;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    ${B4}
    color: white;
  }
`;

export const EventInformation = styled.div`
  padding: 24px;
  span {
    color: #FFFFFF;   // Changed
  }
`;

export const MyKeyfob = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .item {
    cursor: pointer;
    padding: 16px 0px;
    border-radius: 4px;
    box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 0px 6px -2px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0px 0px;

    .details {
      display: flex;
      flex-direction: column;
      gap: 0px 0px;
    }

    .title {
      ${B4}
    }
  }
`;

export const Help = styled.div`
  padding: 16px;
  a {
    ${B1}
    color: #FFFFFF;   // Changed
  }

  img {
      cursor: pointer;
      display: block;
      margin-bottom: 10px;
    }

  .enable-contactless {
      padding-bottom: 20px; /* Adjust the value to increase or decrease the padding */
  }
`;

export const Download = styled.div`
  padding: 16px;
  a {
    ${B1}
    color: #FFFFFF;   // Changed
  }

  img {
      cursor: pointer;
      display: block;
      margin-bottom: 10px;
    }
  
.Download p:first-child {
  padding-bottom: 60px; /* Adjust the value to increase or decrease the padding below the first <p> element */
}

.Download p:last-child {
  padding-top: 20px; /* Adjust the value to increase or decrease the padding above the last <p> element */
  padding-bottom: 20px;
}

.enable-contactless {
      padding-bottom: 20px; /* Adjust the value to increase or decrease the padding */
}

p.app-link {
  padding-bottom: 40px; /* Adjust the value to increase or decrease the padding */
}
`;

export const Footer = styled.div`
  background: #004D58;    // Changed
  border-top: 1px solid #D8D8D9;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;

  p {
    ${B4}
    margin-bottom: 8px;
    color: white;
  }

  img {
    height: px;
    margin-bottom: 8px;
    cursor: pointer;
    width: auto;
  }

  .digiseq {
    height: 24px;
  }
`;

export const InfoAlert = styled.div`
  max-width: 480px;
  position: absolute;
  background: rgba(9, 10, 15, 0.64);
  height: 100%;
  width: 100%;
  text-align: center;

  .inner-container {
    position: fixed;
    max-width: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 24px;
    background-color: white;
    border-radius: 8px;
    width: 90%;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .close-button {
      width: 32px;
      height: 32px;
      align-self: flex-end;
      cursor: pointer;
    }

    h2 {
      ${H2};
      color: #202020;
      margin-bottom: 8px;
    }

    p {
      ${B1}
      color: #202020;
      margin-bottom: 24px;
    }

    .top-icon {
      width: 75px;
      height: 75px;
      object-fit: contain;
      margin: auto;
    }
  }
`;
