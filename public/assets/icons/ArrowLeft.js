import * as React from "react";

function ArrowLeft({ fill, width, height, opacity }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.206 5.428l-.076-.075a1.01 1.01 0 00-1.204-.067l-.086.067-6.388 5.598-.038.035-.05.054-.066.09-.049.09-.032.083-.026.119-.007.094.003.06.016.1.027.09.04.089.048.078.067.083.067.066L9.84 17.68c.356.312.934.312 1.29 0a.728.728 0 00.076-1.056l-.076-.075-4.828-4.233h14.221c.505 0 .913-.358.913-.8 0-.441-.409-.8-.913-.8H6.3l4.83-4.232a.728.728 0 00.076-1.056l-.076-.075.076.075z"
        fill={fill}
        opacity={opacity}
      />
    </svg>
  );
}

const MemoArrowLeft = React.memo(ArrowLeft);
export default MemoArrowLeft;
