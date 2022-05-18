import React from "react";
import { Box, Grid, Text, Flex } from "atoms";
// import { SelectBox } from "molecules";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <>
      <Grid height="791.96px" width="100vw" background="black" >
        <Box
          position="absolute"
          backgroundImage="url('/images/back.png')"
          backgroundSize= "cover"
          style={{ backgroundRepeat: "no-repeat" }}
          height="100%"
          width="100%"
        >
          <Flex 
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100%"
              width="100%"
          >
            <Box
              height="50%"
              width="392.04"
              pt={208}
            >
                <Image src="/images/home-logo.svg" alt="logo" height="187.29" width="392.04" />
            </Box>
            <Box height="50%">
              <Text
                pt="4.8rem"
                as="h2"
                my="0rem"
                fontWeight="800"
                fontSize={{ xs: "3.8rem", md: "4.8rem" }}
                lineHeight={{ xs: "4.5rem", md: "5.7rem" }}
                color="white"
                maxWidth={{ xs: "32.3rem", md: "100.8rem" }}
                textAlign="center"
              >
                Funding Simplified.Mentoring Unlimited.
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* <Flex
          px={{ xs: "2.4rem", lg: "21rem" }}
          mt={{ xs: "-50rem", lg: "-50rem" }}
          alignItems="center"
          flexDirection="row"
          justifyContent="center"

        >
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.svg')"
            height="296.58"
            width="397.76"
          >
            <Flex
              flexDirection="column"
            >
              <Text fontSize={48}>Moonshot</Text>
              <Text fontSize={22}>We invest in your moonshot vision</Text>
            </Flex>
          </Box>
        
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.svg')"
            height="296.58"
            width="397.76"
          >
            <Flex
              flexDirection="column"
            >
              <Text fontSize={48}>Moonshot</Text>
              <Text fontSize={22}>We invest in your moonshot vision</Text>
            </Flex>
          </Box>
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.svg')"
            height="296.58"
            width="397.76"
          >
            <Flex
              flexDirection="column"

            >
              <Text fontSize={48}>Moonshot</Text>
              <Text fontSize={22}>We invest in your moonshot vision</Text>
            </Flex>
          </Box>
        </Flex> */}
      </Grid>
    </>
  );
};
