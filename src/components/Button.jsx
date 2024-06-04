import "../App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          color: white;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          padding: 0px 16px 0px 16px;
          border: none;
          font-size: 16px;
          font-family: Kanit;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          color: white;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          padding: 0px 16px 0px 16px;
          border: none;
          font-size: 16px;
          font-family: Kanit;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "error") {
    return (
      <button
        css={css`
          background-color: #de5753;
          color: white;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          padding: 0px 16px 0px 16px;
          border: none;
          font-size: 16px;
          font-family: Kanit;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "success") {
    return (
      <button
        css={css`
          background-color: #26b795;
          color: white;
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          padding: 0px 16px 0px 16px;
          border: none;
          font-size: 16px;
          font-family: Kanit;
        `}
      >
        Button
      </button>
    );
  }
}

export default Button;
