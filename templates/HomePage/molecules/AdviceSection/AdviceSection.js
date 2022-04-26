import React from "react";

import { Box, Grid, Text } from "atoms";
import { AdviseCard } from "molecules/Cards";

import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: "1",
    src: "/images/advice-card.svg",
    alt: "advice-card",
    title: "Car Insurance",
    description: "Alles over online boekhouden en boekhoudprogramma's",
  },
  {
    id: "2",
    src: "/images/advice-card.svg",
    alt: "advice-card",
    title: "Car Insurance",
    description: "Alles over online boekhouden en boekhoudprogramma's",
  },
  {
    id: "3",
    src: "/images/advice-card.svg",
    alt: "advice-card",
    title: "Car Insurance",
    description: "Alles over online boekhouden en boekhoudprogramma's",
  },
];

export const AdviceSection = () => {
  return (
    <>
      <Box mt={{ xs: "5rem", lg: "12rem" }} mb={{ lg: "15rem" }} px={{ xs: "unset", lg: "11rem" }}>
        <Box>
          <Text
            color="darkblue.500"
            fontWeight="800"
            fontSize={{ xs: "2.8rem", lg: "3.2rem" }}
            lineHeight={{ xs: "3.3rem", lg: "3.8rem" }}
            maxWidth="50rem"
            px={{ xs: "2.5rem", lg: "unset" }}
          >
            Besparen is makkelijk, Sum
          </Text>

          <Grid
            gridTemplateColumns="repeat(3,1fr)"
            gridColumnGap={{ xs: "1.6rem", md: "3.2rem" }}
            mt="2.4rem"
            overflowX={{ xs: "auto", md: "unset" }}
            className="hide-scrollbar"
            px={{ xs: "2.5rem", lg: "unset" }}
          >
            {data.map((item) => (
              <AdviseCard
                key={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                content={item.description}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
