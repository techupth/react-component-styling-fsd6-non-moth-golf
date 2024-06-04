/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import warn from "../assets/alert-triangle.svg";
import circle from "../assets/alert-circle.svg";
import check from "../assets/check-circle.svg";

function Alert(props) {
  if (props.type === "error") {
    return (
      <button
        css={css`
          background-color: #f9c8c8;
          color: #444444;
          width: 650px;
          height: 76px;
          border-radius: 10px;
          padding: 0px 16px 0px 16px;
          display: flex;
          border: none;
          align-items: center;
          font-weight: 700;
          font-family: Kanit;
          font-size: 20px;
        `}
      >
        <img src={frown} />
        This is error alert box
      </button>
    );
  } else if (props.type === "warning") {
    return (
      <button
        css={css`
          background-color: #f9d9c8;
          color: #444444;
          width: 650px;
          height: 76px;
          border-radius: 10px;
          padding: 0px 16px 0px 16px;
          display: flex;
          border: none;
          align-items: center;
          font-weight: 700;
          font-family: Kanit;
          font-size: 20px;
        `}
      >
        <img src={warn} />
        This is warning alert box
      </button>
    );
  } else if (props.type === "info") {
    return (
      <button
        css={css`
          background-color: #f9ebc8;
          color: #444444;
          width: 650px;
          height: 76px;
          border-radius: 10px;
          padding: 0px 16px 0px 16px;
          display: flex;
          border: none;
          align-items: center;
          font-weight: 700;
          font-family: Kanit;
          font-size: 20px;
        `}
      >
        <img src={circle} />
        This is info alert box
      </button>
    );
  } else if (props.type === "success") {
    return (
      <button
        css={css`
          background-color: #cef7cd;
          color: #444444;
          width: 650px;
          height: 76px;
          border-radius: 10px;
          padding: 0px 16px 0px 16px;
          display: flex;
          border: none;
          align-items: center;
          font-weight: 700;
          font-family: Kanit;
          font-size: 20px;
        `}
      >
        <img src={check} />
        This is success alert box
      </button>
    );
  }
}

export default Alert;