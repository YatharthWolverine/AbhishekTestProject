import * as React from "react";

function Star(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M9 14.52l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.88l-4.83.41C.48 6.36.12 7.46.79 8.04l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.52z"
        fill="#92ECD6"
      />
    </svg>
  );
}

const MemoStar = React.memo(Star);
export default MemoStar;
