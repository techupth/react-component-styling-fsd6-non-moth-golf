// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button(props) {
  let color = undefined;
  if (props.color === "primary") {
    color = "#074EE8";
  } else if (props.color === "secondary") {
    color = "#07A4E8";
  } else if (props.color === "error") {
    color = "#DE5753";
  } else if (props.color === "success") {
    color = "#26B795";
  }

  return (
    <section
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: baseline;
        width: 330.97px;
      `}
    >
      <div>{props.color}</div>
      <div>
        <button
          css={css`
            width: 171.19px;
            height: 50px;
            border-radius: 4px;
            padding: 0px, 16px, 0px, 16px;
            margin-bottom: 24px;
            background-color: ${color};
          `}
        >
          <div
            css={css`
              color: white;
            `}
          >
            {props.message}
          </div>
        </button>
      </div>
    </section>
  );
}
