import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Image from "next/image";

export const FeedbackCard = ({ title, status, pointers }) => {
  return (
    <>
      <Box
        p="2.4rem"
        bg="white"
        width={{ xs: "100%", md: "unset" }}
        borderRadius="2.4rem"
        boxShadow="0px 19px 40px rgba(24, 96, 74, 0.08)"
      >
        <Box>
          <Image
            src={status === "like" ? "/images/thumb-up.svg" : "/images/thumb-down.svg"}
            alt="thumb up"
            height={72}
            width={72}
          />
        </Box>
        <Text mt="1.6rem" fontWeight="800" fontSize="2rem" lineHeight="2.7rem" color="darkblue.500">
          {title}
        </Text>
        <Box mt="1.7rem">
          <Grid gridTemplateColumns="1fr" gridRowGap="1.9rem">
            {pointers.map((items) => {
              return (
                <Flex alignItems="flex-start" key={items.id}>
                  <Flex
                    backgroundImage={
                      status === "like"
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
                      src={status === "like" ? "/images/tick.svg" : "/images/cross.svg"}
                      alt="tick"
                      height={status === "like" ? 9 : 14}
                      width={status === "like" ? 9 : 14}
                    />
                  </Flex>
                  <Text
                    ml="1.6rem"
                    fontWeight="400"
                    color="darkblue.500"
                    fontSize="1.5rem"
                    maxWidth="26rem"
                    lineHeight="2.1rem"
                  >
                    {items.title}
                  </Text>
                </Flex>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
