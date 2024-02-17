import React, { useState } from "react";
import { SectionContainer } from "./styled/BelfastGiantsPromo";


import chevronDown from "./img/chevron-down.svg";
import chevronRight from "./img/chevron-right.svg";

const ExpandingContainer = ({ title, children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <SectionContainer>
      <div className="title-bar" onClick={() => setExpanded(!expanded)}>
        <h2>{title}</h2>
        <img
          src={expanded ? chevronDown : chevronRight}
          alt={`chevron ${expanded ? "up" : "down"}`}
        />
      </div>
      <div className="content">{expanded && children}</div>
    </SectionContainer>
  );
};

export default ExpandingContainer;
