import * as React from "react";

function DislikeIcon({ fill }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.66667 0.500085H13.1667C13.8583 0.500085 14.45 0.91675 14.7 1.51675L17.2167 7.39175C17.2917 7.58342 17.3333 7.78342 17.3333 8.00008V9.66675C17.3333 10.5834 16.5833 11.3334 15.6667 11.3334H10.4083L11.2 15.1417L11.225 15.4084C11.225 15.7501 11.0833 16.0667 10.8583 16.2917L9.975 17.1667L4.48333 11.6751C4.18333 11.3751 4 10.9584 4 10.5001V2.16675C4 1.25008 4.75 0.500085 5.66667 0.500085ZM5.66667 10.5001L9.28333 14.1167L8.47868 10.9101C8.32025 10.2788 8.79767 9.66675 9.44861 9.66675H15.6667V8.00008L13.1667 2.16675H5.66667V10.5001Z"
        fill={fill}
      />
      <rect
        width="1.75"
        height="10.4167"
        rx="0.4"
        transform="matrix(1 0 0 -1 0.75 10.9167)"
        fill={fill}
      />
    </svg>
  );
}

export default DislikeIcon;
