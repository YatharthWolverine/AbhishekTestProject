import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import Link from "next/link";
import Image from "next/image";

export const DropDownMobile = ({ data }) => {
  console.log(data);
  return (
    <>
      <Box width="100%" bg="gray.500" mt="0.8rem" py="1.6rem" px={{ xs: "3.2rem", lg: "11rem" }}>
        <Grid gridTemplateColumns="1fr" gridRowGap="3.2rem">
          {data.map((item) => {
            return (
              <Box key={item.id}>
                <Text fontSize="1.6rem" fontWeight="600" color="darkblue.500" lineHeight="1.9rem">
                  {item.name}
                </Text>
                <Grid gridTemplateColumns="1fr" gridRowGap="1rem" mt="0.8rem">
                  {item.innerPages.map((value) => {
                    return (
                      <Link href={value.url} passHref key={value.id}>
                        <Text
                          fontSize="1.5rem"
                          fontWeight="400"
                          color="darkblue.500"
                          lineHeight="2.4rem"
                        >
                          {value.name}
                        </Text>
                      </Link>
                    );
                  })}
                </Grid>
              </Box>
            );
          })}

          <Box>
            <Text fontSize="1.6rem" fontWeight="600" color="darkblue.500" lineHeight="1.9rem">
              What is Boekhounder.nl?
            </Text>
            <Text
              fontSize="1.5rem"
              fontWeight="400"
              color="darkblue.500"
              lineHeight="2.4rem"
              mt="0.8rem"
            >
              Overview how Boekhunder works
            </Text>
            <Flex mt="1.4rem" alignItems="center" cursor="pointer">
              <Text fontWeight="600" fontSize="1.4rem" color="purple.200" lineHeight="1.6rem">
                Learn More
              </Text>
              <Box ml="1rem" width="1.8rem" height="1.2rem">
                <Image
                  src="/images/learn-more.svg"
                  alt="learn-more"
                  width={18}
                  height={12}
                  layout="fill"
                />
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
