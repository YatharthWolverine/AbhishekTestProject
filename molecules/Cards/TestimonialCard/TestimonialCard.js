import React from "react";
import { Box, Text, Flex, Image } from "atoms";

export const TestimonialCard = () => {
  return (
    <>
      <Box
        backgroundImage="linear-gradient(88.84deg, #FFD6ED 0%, #CDD1FF 100%)"
        py={{ xs: "4.5rem", lg: "6rem" }}
        borderRadius="2.4rem"
      >
        {/* Target Image */}
        <Box
          position="absolute"
          top={{ xs: "-3rem", lg: "-8rem" }}
          right={{ xs: "2rem", lg: "10rem" }}
        >
          <Image
            src="/images/star-dynamic.png"
            alt="target"
            height={{ xs: "6.4rem", lg: "13.8rem" }}
            width={{ xs: "6.4rem", lg: "13.8rem" }}
          />
        </Box>
        {/* main section */}
        <Flex flexDirection="column" alignItems="center">
          <Box>
            <Image
              src="/images/quote.svg"
              alt="quotes"
              height={{ xs: "1.4rem", lg: "9rem" }}
              width={{ xs: "1.9rem", lg: "4.4rem" }}
            />
          </Box>
          <Text
            fontWeight="700"
            fontSize={{ xs: "1.6rem", lg: "3.3rem" }}
            color="darkblue.500"
            maxWidth={{ xs: "29.6rem", lg: "91.6rem" }}
            lineHeight={{ xs: "1.9rem", lg: "4rem" }}
            textAlign="center"
            mt={{ xs: "1.9rem", lg: "-3rem" }}
          >
            Quote text Lees één van de vele reviews waarom bedrijven kiezen voor de diensten van
            Sum.nl
          </Text>
          <Flex mt="3.8rem" alignItems="center">
            <Box>
              <Image
                src="/images/robert.svg"
                alt="teresa"
                height={{ xs: "4rem", lg: "6.4rem" }}
                width={{ xs: "4rem", lg: "6.4rem" }}
              />
            </Box>
            <Box ml={{ xs: "0.8rem", lg: "1.6rem" }}>
              <Text
                fontWeight="600"
                fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
                color="darkblue.500"
                lineHeight={{ xs: "1.7rem", lg: "1.9rem" }}
              >
                Teresa Williams
              </Text>
              <Text
                fontWeight="300"
                fontSize={{ xs: "1.4rem", lg: "1.6rem" }}
                color="darkblue.500"
                lineHeight={{ xs: "1.7rem", lg: "1.9rem" }}
              >
                CEO
              </Text>
            </Box>
          </Flex>
        </Flex>
        {/* target arrow */}
        <Box
          position="absolute"
          bottom={{ xs: "-3rem", lg: "-6rem" }}
          left={{ xs: "10%", lg: "5.3rem" }}
          display={{ xs: "block", lg: "block" }}
        >
          <Image
            src="/images/fire.svg"
            alt="target"
            height={{ xs: "8rem", lg: "16.5rem" }}
            width={{ xs: "8rem", lg: "16.5rem" }}
          />
        </Box>
      </Box>
    </>
  );
};
