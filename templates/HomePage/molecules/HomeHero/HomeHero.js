import React from "react";
import { Box, Grid, Text, Flex } from "atoms";
// import { SelectBox } from "molecules";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <>
      <Grid height="79.19rem" background="black">
        <Box
          position="absolute"
          backgroundImage={{
            lg: "url('/images/backg.png')",
            xs: "url('/images/backgg.png')",
          }}
          backgroundSize="cover"
          style={{ backgroundRepeat: "no-repeat" }}
          height="100%"
          width="100vw"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100%"
            width="100%"
          >
            <Box width={{ xs: "23.6rem", lg: "55.9rem" }} height={{ xs: "8rem", lg: "18.9rem" }}>
              <Image src="/images/home-logo.svg" alt="logo" layout="fill" />
            </Box>
            <Box>
              <Text
                fontFamily="Teko"
                fontSize={{ xs: "4rem", lg: "4.8rem" }}
                fontWeight="bold"
                color="white"
                textAlign="center"
                maxwidth={{ xs: "31.6rem", lg: "68.7rem" }}
                pt="5rem"
              >
                Funding Simplified.Mentoring Unlimited.
              </Text>
            </Box>
          </Flex>
        </Box>  
      </Grid>
    </>
  );
};
