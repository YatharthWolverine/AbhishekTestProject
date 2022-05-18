import { Box, Button, Flex, Grid, Text } from "atoms";
import Markdown from "markdown-to-jsx";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { NewsCard } from "molecules";
import Image from "next/image";
import { theme } from "styles";

const BoxStyle = styled(Box)`
  .secondary-btn button:hover {
    svg {
      fill: white !important;
    }
  }
`;

const BoxStyle2 = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div {
      color: #ffffff !important;
    }
  }
`;

const data = [
  {
    id: "1",
    title: "Gemiddelde uurtarief als zzp’er? Wat is dat en tips voor het ideale uurtarief",
    description:
      "Het gemiddelde uurtarief van een zzp’er uit jouw branche zal ongetwijfeld een leidraad vormen ",
    tags: [
      { id: "1", title: "#accountant", slug: "" },
      { id: "2", title: "#ZZP", slug: "" },
    ],
  },
  {
    id: "2",
    title: "Gemiddelde uurtarief als zzp’er? Wat is dat en tips voor het ideale uurtarief",
    description:
      "Het gemiddelde uurtarief van een zzp’er uit jouw branche zal ongetwijfeld een leidraad vormen ",
    tags: [
      { id: "1", title: "#accountant", slug: "" },
      { id: "2", title: "#ZZP", slug: "" },
    ],
  },
  {
    id: "3",
    title: "Gemiddelde uurtarief als zzp’er? Wat is dat en tips voor het ideale uurtarief",
    description:
      "Het gemiddelde uurtarief van een zzp’er uit jouw branche zal ongetwijfeld een leidraad vormen ",
    tags: [
      { id: "1", title: "#accountant", slug: "" },
      { id: "2", title: "#ZZP", slug: "" },
    ],
  },
];

export const LatestNews = () => {
  return (
    <div>
      <BoxStyle
        py={{ xs: "4rem", lg: "8rem" }}
        pl={{ xs: "2.5rem", lg: "11rem" }}
        pr={{ xs: 0, lg: "11rem" }}
        bg="gray.500"
      >
        {/* <Box
          position="absolute"
          height={{ lg: "24rem" }}
          width={{ lg: "16rem" }}
          top="-10rem"
          left="80%"
        >
          <Image src="/images/latest-news-clipart.svg" alt="clipart" height={240} width={160} />
        </Box> */}
        <Text
          fontWeight="800"
          fontSize={{ xs: "2rem", lg: "3.2rem" }}
          lineHeight={{ xs: "2.4rem", lg: "4.3rem" }}
          color="darkblue.500"
        >
          Laatste{" "}
          <Box
            className="gradient-heading"
            fontWeight="800"
            fontSize={{ xs: "2rem", lg: "3.2rem" }}
            lineHeight={{ xs: "2.4rem", lg: "4.3rem" }}
            as="span"
            width="fit-content"
          >
            Nieuws
          </Box>
        </Text>

        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridGap={{ xs: "2rem", lg: "3.2rem" }}
          overflowX="auto"
          className="hide-scrollbar"
          pr={{ xs: "2rem", lg: "unset" }}
          mt={{ xs: "1.9rem", lg: "1rem" }}
        >
          {data.map((items) => (
            <Grid
              key={items.id}
              alignContent="space-between"
              p={{ xs: "2.4rem", lg: "3.2rem 2.4rem" }}
              bg="white"
              mt={{ xs: "1.9rem", lg: "3rem" }}
              width={{ xs: "24.6rem", lg: "unset" }}
              minHeight="35.5rem"
              borderRadius="2.4rem"
            >
              <Box>
                <Flex flexWrap="wrap">
                  {items.tags.slice(0, 2).map((values) => (
                    <BoxStyle2
                      width="fit-content"
                      p="0.3rem 1.2rem"
                      mr="1rem"
                      fontWeight="600"
                      borderRadius="5px"
                      bg="blue.10"
                      mb="0.5rem"
                    >
                      <Text
                        fontWeight="600"
                        fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
                        lineHeight="1.9rem"
                        color="darkblue.500"
                      >
                        {values?.title?.slice(0, 12)}
                      </Text>
                    </BoxStyle2>
                  ))}
                </Flex>

                <Text
                  pt="2.4rem"
                  fontSize={{ xs: "1.6rem", lg: "2rem" }}
                  lineHeight={{ xs: "1.9rem", lg: "2.4rem" }}
                  fontWeight="bold"
                  style={{ wordBreak: "break-all" }}
                >
                  {items.title}
                </Text>
                {items?.description && (
                  <Text
                    pt="1.6rem"
                    fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
                    lineHeight="2.7rem"
                    fontWeight="300"
                    maxWidth={{ xs: "21.6rem", lg: "unset" }}
                  >
                    {`${items?.description?.replace(/<[^>]+>/g, "").slice(0, 95)}...`}
                  </Text>
                )}
              </Box>

              <Flex alignItems="center" cursor="pointer" width="fit-content">
                <Box className="gradient-heading" fontSize="1.6rem" fontWeight="700" pr="1rem">
                  Learn More
                </Box>
                <MemoArrowWhite fill={theme.colors.purple[200]} height="1.2rem" width="1.8rem" />
              </Flex>
            </Grid>
          ))}
        </Grid>
      </BoxStyle>

      <Box bg="white" px={{ xs: "2.5rem", lg: "11rem" }} py={{ xs: "4rem", lg: "10rem" }}>
        <Grid
          gridAutoFlow={{ lg: "column" }}
          gridGap={{ xs: "1.7rem", lg: "5rem" }}
          bg="background.300"
          borderRadius="3.2rem"
          alignItems="center"
          justifyContent="space-between"
          p={{ xs: "3.2rem", lg: "6.5rem 8rem" }}
          backgroundImage={{
            xs: "url(/images/blur-frame-mobile.svg)",
            md: "url(/images/blur-frame.svg)",
          }}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Text
            fontWeight="800"
            fontSize={{ xs: "2.4rem", lg: "4.8rem" }}
            lineHeight={{ xs: "3.2rem", lg: "5.8rem" }}
            color="white"
            maxWidth={{ xs: "26.4rem", lg: "52.2rem" }}
          >
            Ready to get started? Try it now
          </Text>

          <Button variant="landing" bg="white" height="4.8rem" width={{ xs: "100%", lg: "unset" }}>
            <Flex justifyContent="center" alignItems="center" cursor="pointer" px="4rem">
              <Box className="gradient-heading" pr="1rem">
                Let’s Talk
              </Box>
              <MemoArrowWhite fill={theme.colors.purple[200]} height="1.6rem" width="1.8rem" />
            </Flex>
          </Button>
        </Grid>
        <Box
          position="absolute"
          height={{ xs: "8.2rem", lg: "20rem" }}
          width={{ xs: "8.2rem", lg: "20rem" }}
          bottom={{ xs: "12rem", lg: "-1rem" }}
          left={{ xs: "82%", lg: "50%" }}
        >
          <Image src="/images/rocket.svg" alt="clipart" height={202} width={202} />
        </Box>
      </Box>
    </div>
  );
};

export default LatestNews;
