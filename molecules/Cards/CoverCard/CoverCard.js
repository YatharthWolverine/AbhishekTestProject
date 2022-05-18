import React from "react";
import { Box, Text, Flex, Grid, Button } from "atoms";
import Image from "next/image";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";

export const CoverCard = ({ title, description, pointers }) => {
  return (
    <>
      <Box
        p="2.4rem"
        bg="white"
        borderRadius="2.4rem"
        boxShadow="0px 19px 40px rgba(24, 96, 74, 0.08)"
      >
        <Text fontWeight="800" color="darkblue.500" fontSize="2rem" lineHeight="2.7rem">
          {title}
        </Text>
        <Text mt="1.6rem" fontWeight="400" color="gray.300" fontSize="1.5rem" lineHeight="2.1rem">
          {description}
        </Text>
        <Box mt="1.7rem">
          <Grid gridTemplateColumns="1fr" gridRowGap="1.9rem">
            {pointers.map((items) => {
              return (
                <Flex alignItems="center" key={items.id}>
                  <Flex
                    backgroundImage={
                      items.status
                        ? "linear-gradient(135deg, #867BFF 2.88%, #9727D3 98.14%)"
                        : "linear-gradient(135deg, #BBBBBB 2.88%, #616161 98.14%)"
                    }
                    borderRadius="50%"
                    height="2.4rem"
                    width="2.4rem"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={items.status ? "/images/tick.svg" : "/images/cross.svg"}
                      alt="tick"
                      height={items.status ? 9 : 14}
                      width={items.status ? 9 : 14}
                    />
                  </Flex>
                  <Text
                    ml="1.6rem"
                    fontWeight="400"
                    color="darkblue.500"
                    fontSize="1.5rem"
                    lineHeight="2.1rem"
                  >
                    {items.title}
                  </Text>
                </Flex>
              );
            })}
          </Grid>
        </Box>
        <Button
          mt="3.3rem"
          variant="landing"
          backgroundImage="linear-gradient(74.28deg, #381BC5 -2.89%, #CC63C7 53.72%, #EFCE89 111.52%)"
          height="4.8rem"
          width={{ xs: "100%", lg: "100%" }}
        >
          <Flex justifyContent="center" alignItems="center" cursor="pointer">
            <Text pr="1rem">Vergelijken</Text>
            <MemoArrowWhite fill="white" height="1.6rem" width="1.8rem" />
          </Flex>
        </Button>
      </Box>
    </>
  );
};
