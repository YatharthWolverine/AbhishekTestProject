import React from "react";
import Link from "next/link";

import { Box, Flex, Grid, Text } from "atoms";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import Image from "next/image";
import { theme } from "styles";

export const MenuDropdownSection = ({ data }) => {
  return (
    <Box bg="white" pt="3rem" mt="3rem">
      <Grid
        gridTemplateColumns={{ lg: "repeat(4, 1fr)" }}
        px={{ lg: "11rem" }}
        py="3rem"
        boxShadow=" rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
        borderTop="1px solid"
        borderColor="gray.500"
      >
        {data.map((page) => {
          return (
            <Box>
              <Text fontWeight="bolder" color="black" py="1.5rem">
                {page.name}
              </Text>
              {page.innerPages.map((item) => {
                return (
                  <Link href={item.url} key={item.id} passHref>
                    <Text fontWeight="300" color="black" cursor="pointer" py="1rem">
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </Box>
          );
        })}
        <Box justifySelf="end">
          <Box position="absolute" left="-5rem">
            <Box height="10rem" width="10rem" borderRadius="10rem" bg="secondary.100" ml="2rem" />
            {/* target arrow */}
            <Box position="absolute" top="3rem" left={0}>
              <Image src="/images/target-arrow.svg" alt="target" height={68} width={56} />
            </Box>
          </Box>
          <Text fontWeight="bolder" color="black" py="1.5rem">
            What is Boekhounder.nl?
          </Text>
          <Text fontWeight="300" color="black">
            Overview how Boekhunder works
          </Text>
          <Flex alignItems="center" mt="5rem" cursor="pointer" width="fit-content">
            <Text fontWeight="700" color="purple.200" pr="1rem">
              Learn More
            </Text>
            <MemoArrowWhite fill={theme.colors.purple[200]} height="1.2rem" width="1.8rem" />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};
