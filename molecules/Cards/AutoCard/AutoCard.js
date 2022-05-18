import React from "react";
import { Box, Text, Flex, Grid, Button } from "atoms";
import Image from "next/image";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";

export const AutoCard = ({ title, src, alt, speed, message }) => {
  return (
    <>
      <Box
        bg="white"
        borderRadius="2.4rem"
        boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
        p="2.4rem"
        width={{ xs: "24.1rem", lg: "unset" }}
      >
        <Flex alignItems="center">
          <Box>
            <Image src="/images/seat.svg" width={25} height={25} alt="seat" />
          </Box>
          <Text ml="0.6rem" mt="-0.8rem" fontWeight="800" color="darkblue.500" fontSize="2rem">
            Seat
          </Text>
        </Flex>
        <Box height="4.1rem" mt="0.8rem">
          <Text fontWeight="400" color="secondary.1000" fontSize="1.5rem">
            {title}
          </Text>
        </Box>
        <Box mt="1.6rem">
          <Image src={src} alt={alt} height={176} width={232} />
        </Box>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="2rem">
          <Box>
            <Text fontWeight="400" color="secondary.1000" fontSize="1.5rem">
              Nu vanaf
            </Text>
            <Text fontWeight="800" color="darkblue.500" fontSize="3.2rem">
              {speed}
              <Text as="span" fontWeight="400" color="secondary.1000" fontSize="1.5rem">
                p/m
              </Text>
            </Text>
          </Box>
          <Box>
            <Text fontWeight="400" color="secondary.1000" fontSize="1.5rem">
              {message}
            </Text>
          </Box>
        </Grid>
        <Button
          mt="2.4rem"
          variant="landing"
          // bg="primary.500"
          backgroundImage="linear-gradient(74.28deg, #381BC5 -2.89%, #CC63C7 53.72%, #EFCE89 111.52%)"
          height="4.8rem"
          width={{ xs: "100%", lg: "100%" }}
          type="submit"
        >
          <Flex justifyContent="center" alignItems="center" cursor="pointer">
            <Text pr="1rem">Bekijk hier</Text>
            <MemoArrowWhite fill="white" height="1.6rem" width="1.8rem" />
          </Flex>
        </Button>
      </Box>
    </>
  );
};
