import { css } from "@emotion/react";

export const globalStyles = css({
  code: {
    fontFamily: "'Monaco', 'Courier New'",
  },
  blockquote: {
    padding: "0 1em",
    borderLeft: "0.25em solid #dfe2e5",
    p: {
      color: "#6a737d !important",
    },
  },

  "li ul": {
    marginLeft: "20px",
  },
});
