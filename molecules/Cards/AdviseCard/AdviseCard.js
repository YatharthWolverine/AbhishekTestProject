import React from "react";
import Image from "next/image";

import { Box, Text } from "atoms";
import styled from "styled-components";

const BoxStyle = styled(Box)`
  .advise-card:hover {
    background-color: #edf5fe;
    h3 {
      color: #204ecf !important;
    }
    cursor: pointer;
  }
`; // add hover bg/text

export const AdviseCard = ({ src, alt, title, content }) => {
  return (
    <BoxStyle>
      <Box
        className="advise-card"
        pt="2rem"
        height={{ xs: "20.8rem", md: "25.1rem" }}
        width={{ xs: "24rem", md: "unset" }}
        borderRadius="0rem 2.4rem 2.4rem 2.4rem"
        backgroundImage="linear-gradient(88.84deg, rgba(255, 214, 237, 0.5) 0%, rgba(205, 209, 255, 0.5) 100%)"
        pl="1.7rem"
        pb="3rem"
      >
        <Box>
          <Image src={src} alt={alt} height={72} width={72} />
        </Box>
        <Text
          pt="1rem"
          fontSize={{ xs: "1.6rem", md: "1.8rem" }}
          lineHeight="2.2rem"
          color="darkblue.500"
          fontWeight="700"
        >
          {title}
        </Text>
        <Text
          pt="1rem"
          fontWeight="300"
          maxWidth={{ xs: "20.1rem", lg: "unset" }}
          lineHeight="2rem"
          fontSize="1.5rem"
        >
          {content}
        </Text>
      </Box>
    </BoxStyle>
  );
};
