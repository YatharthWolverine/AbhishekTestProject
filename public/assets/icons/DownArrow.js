import * as React from "react";

function DownArrow(props, { fill }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 8" fill="none" {...props}>
      <path
        d="M2.125 1l3.88 3.88L9.885 1a.996.996 0 111.41 1.41L6.705 7a.996.996 0 01-1.41 0L.705 2.41a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z"
        // fill="#050E29"
        fill={fill}
      />
    </svg>
  );
}

const MemoDownArrow = React.memo(DownArrow);
export default MemoDownArrow;
