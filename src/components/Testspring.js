import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Testspring() {
  return (
    <div style={style}>
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <h1>testing sub</h1>
            <h3>
              Luprearmeworew arlwemrfwerlw wemrl ewmtilwe mtwemtlwm iw, g,ear
              lhgaerh er h erh a,hbfd glmegiermgrae germgermogameogoea;rmgermg
            </h3>
          </div>
        )}
      </Spring>
    </div>
  );
}
const style = {
  height: "250px",
  width: "100%",
  backgroundColor: "black",
  color: "white",
};
