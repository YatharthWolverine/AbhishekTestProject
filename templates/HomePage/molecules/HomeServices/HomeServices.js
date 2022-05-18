import React from "react";
import { Box, Text, Grid, Flex } from "atoms";
import Image from "next/image";
import { TestimonialCard } from "molecules/Cards";
import Link from "next/link";

const data = [
  {
    id: "1",
    title: "Vergelijk tools",
    child: [
      { id: "1", title: "Autoverzekering" },
      { id: "2", title: "Energie" },
      { id: "3", title: "Internet" },
      { id: "4", title: "Sim only" },
    ],
  },
  {
    id: "2",
    title: "Zakelijk",
    child: [{ id: "1", title: "Accountant" }],
  },
];

export const HomeServices = () => {
  return (
    <>
      <Box pb={{ xs: "10rem", lg: "10rem" }} pt={{ xs: "15rem", lg: "15rem" }} overflow="hidden">
        {/* main section */}
        <Box
          position="absolute"
          top={{ xs: "1rem", lg: "-3rem" }}
          left={{ xs: "0rem", lg: "5%" }}
          height={{ xs: "12.4rem", lg: "29.8rem" }}
          width={{ xs: "12.7rem", lg: "30.6rem" }}
        >
          <Image src="/images/truck.svg" alt="truck" height={298} width={306} />
        </Box>
        <Box position="absolute" top={{ xs: "42rem", lg: "48rem" }} left="80%">
          <Image src="/images/cube.svg" alt="cube" height={77} width={77} />
        </Box>
        <Flex alignItems="center" flexDirection="column">
          <Text
            fontSize={{ xs: "2rem", lg: "3.6rem" }}
            color="darkblue.500"
            fontWeight="800"
            maxWidth={{ xs: "32.7rem", lg: "57rem" }}
            textAlign="center"
            lineHeight={{ xs: "2.4rem", lg: "4.9rem" }}
          >
            Andere diensten van SUM
          </Text>
        </Flex>
        <Box display={{ xs: "none", lg: "block" }}>
          <Grid
            gridTemplateColumns="1fr"
            px={{ xs: "1.6rem", lg: "18.5rem" }}
            gridRowGap="3rem"
            justifyItems={{ xs: "center", lg: "unset" }}
            mt="8rem"
            mb="18rem"
          >
            {data.map((items) => {
              return (
                <Box key={items.id}>
                  <Box height={1} width="100%" bg="secondary.100" opacity="50%" />
                  <Box mt={{ xs: "2.4rem", lg: "4rem" }} px={{ lg: "12rem" }}>
                    <Text fontSize="2rem" color="darkblue.500" fontWeight="800" lineHeight="2.4rem">
                      {items.title}
                    </Text>
                    <Grid
                      gridTemplateColumns={{ xs: "1fr", lg: "repeat(3,1fr)" }}
                      gridColumnGap="12rem"
                      gridRowGap="1.8rem"
                      mt="2.4rem"
                    >
                      {items?.child?.map((value) => {
                        return (
                          <Box
                            fontSize="1.8rem"
                            className="gradient-heading"
                            width="fit-content"
                            fontWeight="500"
                            lineHeight="2.7rem"
                            key={value.id}
                            cursor="pointer"
                          >
                            {value.title}
                          </Box>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
        <Box display={{ xs: "block", lg: "none" }} mt="1.8rem">
          <Box px="1.6rem">
            <Grid gridTemplateColumns="1fr" gridRowGap="2.4rem">
              {data.map((items) => {
                return (
                  <Box key={items.id}>
                    <Box height={1} width="100%" bg="secondary.100" opacity="50%" />
                    <Text
                      fontSize="1.6rem"
                      color="darkblue.500"
                      textAlign="center"
                      fontWeight="600"
                      lineHeight="1.9rem"
                      py={{ xs: "2rem", lg: "unset" }}
                    >
                      {items.title}
                    </Text>
                    <Grid
                      gridTemplateColumns="1fr"
                      justifyItems="center"
                      gridRowGap="6.4rem"
                      mb="4rem"
                    >
                      {items?.child?.map((value, ind) => {
                        return (
                          <Box key={value.id}>
                            <Text
                              fontSize="1.6rem"
                              textAlign="center"
                              color="primary.500"
                              fontWeight="300"
                              lineHeight="1.9rem"
                              mt={
                                ind === 1 || ind === 4 || ind === 7
                                  ? "-4rem"
                                  : ind === 2 || ind === 5 || ind === 8
                                  ? "-6rem"
                                  : ind === 3 || ind === 6
                                  ? "-2.4rem"
                                  : "0rem"
                              }
                            >
                              {value.title}
                            </Text>
                          </Box>
                        );
                      })}
                    </Grid>
                  </Box>
                );
              })}
            </Grid>
          </Box>
        </Box>

        <Box px={{ xs: "2.4rem", lg: "10rem" }} pt={{ xs: "5rem", lg: "unset" }}>
          <TestimonialCard />
        </Box>
      </Box>
    </>
  );
};
