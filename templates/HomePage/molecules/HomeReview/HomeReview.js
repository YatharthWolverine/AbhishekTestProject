import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import { ReviewCard } from "molecules/Cards";
import Image from "next/image";

const data = [
  {
    id: "1",
    title: "TOP 3% boekhouders",
    description: "Kies uit de beste boekhouders en accountants van Nederland.",
  },
  {
    id: "2",
    title: "Populairste onder ZZP en MKB",
    description:
      "Al duizenden ondernemers gingen jou voor en hebben gekozen voor een boekhouder via boekhouder.nl.",
  },
  {
    id: "3",
    title: "Onafhankelijk in software keuze",
    description:
      "Zoek een boekhoudprogramma die past bij jouw onderneming via de boekhoudprogramma vergelijker.",
  },
  {
    id: "4",
    title: "Persoonlijk contact voor de matching",
    description: "Altijd de beste match via een persoonlijke (gratis) intake met een adviseur.",
  },
];

export const HomeReview = () => {
  return (
    <>
      <Box py={{ xs: "6rem", lg: "8rem" }} px={{ xs: "2.4rem", lg: "10rem" }}>
        <Box
          position="absolute"
          height={{ xs: "8.4rem", lg: "16.3rem" }}
          width={{ xs: "8.4rem", lg: "16.3rem" }}
          left={{ xs: "75%", lg: "80%" }}
          top={{ xs: "0rem", lg: "4rem" }}
        >
          <Image src="/images/home-thumbsup.svg" alt="thumbsup" height={163} width={163} />
        </Box>
        <Grid gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr" }} gridColumnGap="3rem">
          <Box>
            <Text
              fontSize={{ xs: "2.8rem", lg: "4rem" }}
              color="darkblue.500"
              fontWeight="800"
              maxWidth={{ xs: "26rem", lg: "57rem" }}
              lineHeight={{ xs: "3.3rem", lg: "5.4rem" }}
              zIndex={3}
            >
              Daarom kiezen ondernemers voor{" "}
              <Box
                fontSize={{ xs: "2.8rem", lg: "4rem" }}
                className="gradient-heading"
                as="span"
                fontWeight="800"
              >
                Sum.nl
              </Box>
            </Text>
            <Box mt={{ xs: "2.4rem", lg: "1rem" }}>
              {data.map((items) => {
                return (
                  <Flex
                    bg="white"
                    borderRadius="1.6rem"
                    boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
                    alignItems="center"
                    p="2.4rem"
                    height={{ md: "11rem" }}
                    mb={{ xs: "2.6rem", lg: "1.4rem" }}
                    key={items.id}
                  >
                    <Box
                      height={{ xs: "1.8rem", lg: "2.4rem" }}
                      width={{ xs: "1.8rem", lg: "2.4rem" }}
                      borderRadius="50%"
                      _hover={{ backgroundColor: "#403BCB" }}
                      cursor="pointer"
                      border="1px solid #204ECF"
                    />

                    <Box ml="2rem">
                      <Text
                        fontWeight="600"
                        fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
                        lineHeight={{ xs: "1.9rem", lg: "2.1rem" }}
                        maxWidth={{ xs: "26.3rem", lg: "unset" }}
                        color="darkblue.500"
                      >
                        {items.title}
                      </Text>
                      <Text
                        fontWeight="300"
                        fontSize="1.6rem"
                        color="darkblue.500"
                        maxWidth={{ xs: "26.3rem", lg: "44rem" }}
                        lineHeight={{ xs: "2.4rem", lg: "1.9rem" }}
                        mt="0.8rem"
                      >
                        {items.description}
                      </Text>
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </Box>
          <Box ml={{ xs: "1rem", lg: "unset" }} mt={{ xs: "4.1rem", lg: "15rem" }}>
            <Box transform="rotate(6deg)" zIndex={2}>
              <ReviewCard
                src="/images/robert.svg"
                alt="robert"
                bg="#FFD5C8"
                name="Robert Berkins"
                post="CEO MyWay Company"
                body="Boekhunder creates a new level of collaboration that never really existed before. "
              />
            </Box>
            <Box
              mt={{ xs: "3rem", lg: "6rem" }}
              ml={{ xs: "8rem", lg: "10rem" }}
              transform="rotate(-8deg)"
              zIndex={2}
            >
              <ReviewCard
                src="/images/robert.svg"
                alt="robert"
                bg="#E9E9F7"
                name="Robert Berkins"
                post="CEO MyWay Company"
                body="Boekhunder creates a new level of collaboration that never really existed before. "
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
