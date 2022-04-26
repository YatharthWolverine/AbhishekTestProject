import React from "react";
import { Box, Text, Flex } from "atoms";
import { SelectBox } from "molecules";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <>
      <Box
        pt={{ xs: "10rem", md: "10rem" }}
        pb={{ xs: "20rem", md: "10rem" }}
        //height={{ xs: "77.4rem", lg: "unset" }}
        backgroundImage=" linear-gradient(88.84deg, rgba(255, 214, 237, 0.6) 0%, rgba(205, 209, 255, 0.6) 100%)"
      >
        <Flex alignItems="center" flexDirection="column">
          <Box height={{ xs: "18.4rem", md: "21.6rem" }} width={{ xs: "32.8rem", lg: "38.4rem" }}>
            <Image src="/images/home-logo.png" alt="logo" height={216} width={384} />
          </Box>
          <Text
            pt="4.8rem"
            as="h1"
            my="0rem"
            fontWeight="800"
            fontSize={{ xs: "3.8rem", md: "4.8rem" }}
            lineHeight={{ xs: "4.5rem", md: "5.7rem" }}
            color="darkblue.500"
            maxWidth={{ xs: "32.3rem", md: "100.8rem" }}
            textAlign="center"
          >
            Wij vergelijken voor jou de beste aanbiedingen
          </Text>
          <Text
            pt="3.4rem"
            as="h3"
            my="0rem"
            fontWeight="400"
            fontSize="2rem"
            lineHeight="2.8rem"
            color="gray.100"
            maxWidth={{ xs: "32.7rem", md: "100.8rem" }}
            textAlign="center"
          >
            Sum maakt complexe keuzes eenvoudig, zoals bijvoorbeeld het zoeken naar de beste
            verzekering of energiemaatschappij
          </Text>
        </Flex>
      </Box>
      <Flex
        px={{ xs: "2.4rem", lg: "21rem" }}
        mt={{ xs: "-15rem", lg: "-4rem" }}
        alignItems="center"
        flexDirection="column"
      >
        <SelectBox />
      </Flex>
    </>
  );
};
