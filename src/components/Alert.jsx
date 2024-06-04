// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import error from "../assets/error.svg";
import warning from "../assets/warning.svg";
import info from "../assets/info.svg";
import success from "../assets/success.svg";

export default function Alert(props) {
  let color = undefined;
  let icon = undefined;
  if (props.type === "error") {
    color = "#F9C8C8";
    icon = error;
  } else if (props.type === "warning") {
    color = "#F9D9C8";
    icon = warning;
  } else if (props.type === "info") {
    color = "#F9EBC8";
    icon = info;
  } else if (props.type === "success") {
    color = "#CEF7CD";
    icon = success;
  }
  return (
    <>
      <section>
        <button
          css={css`
            width: 650px;
            height: 76px;
            background-color: ${color};
            margin-bottom: 16px;
            border-radius: 10px;
            display: flex;
            align-items: center;
          `}
        >
          <img src={icon} />
          <div
            css={css`
              color: #444444;
              font-family: "Kanit";
              font-weight: 700;
              margin-left: 10px;
            `}
          >
            {props.message}
          </div>
        </button>
      </section>
    </>
  );
}
