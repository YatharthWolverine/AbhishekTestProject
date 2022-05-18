import React from "react";
import { Box, Flex, Grid, Text } from "atoms";
import Image from "next/image";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import { theme } from "styles";

export const AboutSection = () => {
  return (
    <>
      <Box>
        <Box px={{ xs: "2.5rem", lg: "11rem" }} py="4rem">
          <Box
            left={{ xs: "80%", lg: "12%" }}
            height={{ xs: "9.8rem", md: "14.8rem" }}
            width={{ xs: "9.8rem", md: "14.8rem" }}
          >
            <Image src="/images/wallet.png" alt="clipart" height={158} width={158} />
          </Box>
          <Grid gridTemplateColumns={{ lg: "1.5fr 1fr" }} gridGap={{ lg: "14rem" }} pb="2rem">
            <Box mt={{ xs: "2rem", lg: "5rem" }} order={{ xs: 1, lg: 0 }}>
              <Text
                color="darkblue.500"
                mt="2rem"
                fontWeight="800"
                textTransform="uppercase"
                lineHeight={{ xs: "3.3rem", lg: "5.4rem" }}
                fontSize={{ xs: "2.8rem", lg: "4rem" }}
              >
                Compare car insurance premiums online
                {/* <Box
                  className="gradient-heading"
                  as="span"
                  width="fit-content"
                  fontWeight="800"
                  lineHeight={{ xs: "3.3rem", lg: "5.4rem" }}
                  fontSize={{ xs: "2.8rem", lg: "4rem" }}
                >
                  NL
                </Box> */}
              </Text>
              <Text
                color="darkblue.500"
                mt="1rem"
                fontWeight="400"
                lineHeight={{ xs: "2.5rem", lg: "2.8rem" }}
                fontSize={{ xs: "1.8rem", lg: "2rem" }}
              >
                Description text displayed here Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Fusce fringilla congue augue nec eleifend. In egestas tincidunt lacus. Aliquam
                nec orci blandit sed, placerat a nisi. Fusce maximus lacus eget elementum feugiat.
              </Text>

              <Flex
                alignItems="center"
                mt={{ xs: "2.5rem", lg: "5rem" }}
                cursor="pointer"
                width="fit-content"
              >
                <Box className="gradient-heading" fontSize="2rem" fontWeight="700" pr="0.6rem">
                  Learn More
                </Box>
                <MemoArrowWhite fill={theme.colors.purple[300]} height="1.6rem" width="1.8rem" />
              </Flex>
            </Box>

            <Box
              order={{ xs: 0, lg: 1 }}
              height={{ xs: "15.6rem", lg: "39rem" }}
              width={{ xs: "15.6rem", lg: "39rem" }}
              borderRadius="20rem"
            >
              <Image
                className="circular--square"
                src="/images/about-bg.png"
                alt="learn"
                width={393}
                height={393}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
