import * as React from "react";

function ArrowRight() {
  return (
    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8372 0.927864L10.9131 0.852523C11.2421 0.564231 11.7598 0.542055 12.1178 0.785994L12.2037 0.852523L18.5918 6.45066L18.6296 6.48582L18.6799 6.54007L18.7453 6.62904L18.7941 6.71919L18.8264 6.80344L18.8528 6.92172L18.8591 7.01616L18.8566 7.07633L18.8406 7.17669L18.8137 7.26579L18.7736 7.35463L18.7259 7.43259L18.6586 7.51635L18.5918 7.58166L12.2037 13.1798C11.8473 13.4921 11.2695 13.4921 10.9131 13.1798C10.5842 12.8915 10.5589 12.4379 10.8372 12.1241L10.9131 12.0488L15.7417 7.8159H1.52001C1.016 7.8159 0.607422 7.45784 0.607422 7.01616C0.607422 6.57448 1.016 6.21643 1.52001 6.21643H15.7435L10.9131 1.98352C10.5842 1.69523 10.5589 1.24159 10.8372 0.927864L10.9131 0.852523L10.8372 0.927864Z"
        fill="url(#paint0_linear_634_8000)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_634_8000"
          x1="-7.56033"
          y1="7.0818"
          x2="3.89907"
          y2="23.4273"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#867BFF" />
          <stop offset="1" stopColor="#9727D3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const MemoArrowRight = React.memo(ArrowRight);
export default MemoArrowRight;
