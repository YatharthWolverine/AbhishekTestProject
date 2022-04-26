import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Image from "next/image";

export const RatingCard = () => {
  return (
    <>
      <Box
        bg="white"
        borderRadius="2.4rem"
        py="1.6rem"
        px="2rem"
        width={{ xs: "30.3rem", md: "unset" }}
        boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
      >
        <Flex>
          <Flex>
            {[0, 1, 2, 3, 4].map((index) => {
              return (
                <Box
                  mx="0.1rem"
                  key={index}
                  height={{ xs: "2rem", md: "3.2rem" }}
                  width={{ xs: "2rem", md: "3.2rem" }}
                >
                  <Image src="/images/star-rating.svg" alt="star" height={32} width={32} />
                </Box>
              );
            })}
          </Flex>
          <Text fontWeight="400" color="gray.300" fontSize="1.2rem" lineHeight="2.6rem" ml="auto">
            1 day ago
          </Text>
        </Flex>
        <Text mt="1.4rem" fontWeight="600" color="black" fontSize="1.8rem" lineHeight="2.6rem">
          Best on the market
        </Text>
        <Text mt="0.8rem" fontWeight="400" color="black" fontSize="1.4rem" lineHeight="2.2rem">
          Fantastic, I'm totally blown away by this product. The support is great and...
        </Text>
        <Box my="0.8rem" width="6rem" bg="gray.800" height={1} />
        <Text fontWeight="800" color="black" fontSize="1.4rem" lineHeight="2.2rem">
          David Narrator
        </Text>
      </Box>
    </>
  );
};
