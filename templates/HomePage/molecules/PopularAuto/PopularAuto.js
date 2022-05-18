import React from "react";

import { Box, Text, Grid, Flex } from "atoms";
import { AutoCard } from "molecules/Cards";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import Link from "next/link";

const data = [
  { id: "1", title: "Seat" },
  { id: "2", title: "Volkswagen" },
  { id: "3", title: "Opel" },
  { id: "4", title: "Volvo" },
  { id: "5", title: "Audi" },
  { id: "6", title: "Skoda" },
  { id: "7", title: "Kia" },
];

const autoData = [
  {
    id: "1",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "2",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "3",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "4",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "5",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "6",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "7",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
  {
    id: "8",
    title: "Choose from 5 models",
    src: "/images/car-card.svg",
    alt: "car",
    speed: "269",
    message: "Ob.v 48 mnd. 10.000 km pj.",
  },
];

export const PopularAuto = () => {
  return (
    <>
      <Box px={{ xs: "unset", lg: "11rem" }} mt="3rem">
        <Text
          color="darkblue.500"
          fontWeight="800"
          fontSize={{ xs: "2.8rem", lg: "3.2rem" }}
          pb={{ xs: "1.6rem", lg: "3rem" }}
          px={{ xs: "2.5rem", lg: "unset" }}
        >
          Populaire autos
        </Text>

        <Grid
          gridTemplateColumns={{ xs: `repeat(${autoData.length},1fr)`, lg: "repeat(4,1fr)" }}
          gridGap={{ xs: "1.6rem", lg: "3.6rem" }}
          mb={{ xs: "1.6rem", lg: "3.6rem" }}
          overflowX={{ xs: "auto", lg: "unset" }}
          className="hide-scrollbar"
          py={{ xs: "2rem", lg: "unset" }}
          px={{ xs: "2.5rem", lg: "unset" }}
        >
          {autoData.map((items) => {
            return (
              <AutoCard
                key={items.id}
                title={items.title}
                src={items.src}
                alt={items.alt}
                speed={items.speed}
                message={items.message}
              />
            );
          })}
        </Grid>
        <Flex mt="3.3rem" justifyContent="center" alignItems="center" cursor="pointer">
          <Text pr="1rem" fontWeight="800" fontSize="1.6rem" color="blue.300">
            Show More
          </Text>
          <MemoArrowWhite fill="#403BCB" height="1.6rem" width="1.8rem" />
        </Flex>

        <Box my="8rem">
          <Text
            color="darkblue.500"
            fontWeight="800"
            fontSize={{ xs: "2.4rem", lg: "3.2rem" }}
            lineHeight={{ xs: "3.2rem", lg: "4.3rem" }}
            maxWidth={{ lg: "59rem" }}
            px={{ xs: "2.5rem", lg: "unset" }}
          >
            Autoverzekering zoeken op merk
          </Text>
          {/* <Text
            fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
            color="darkblue.500"
            fontWeight="400"
            lineHeight="2.5rem"
            pt="1rem"
          >
            Need to place some short description text here
          </Text> */}
          <Flex px={{ xs: "2.5rem", lg: "unset" }} mt="4rem" mb="8rem" flexWrap="wrap">
            {data.map((items) => (
              <Box
                key={items.id}
                border="2px solid"
                borderColor="blue.10"
                px="3rem"
                py="1rem"
                mr="1.5rem"
                mb="1.5rem"
                borderRadius="5rem"
                textAlign="center"
                _hover={{
                  bg: "blue.10",
                  h3: { color: "primary.500" },
                }}
                height="4.8rem"
                cursor="pointer"
                width="fit-content"
              >
                <Text
                  as="h3"
                  my={0}
                  pt="2px"
                  width="fit-content"
                  fontWeight={{ xs: "500", lg: "700" }}
                  fontSize={{ xs: "1.2rem", lg: "1.8rem" }}
                  lineHeight="2.2rem"
                  color="darkblue.500"
                >
                  {items.title}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
