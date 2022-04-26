import React, { useState } from "react";
import { Box, Text, Grid, Flex, Button } from "atoms";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import Accordion from "public/assets/icons/Accordion";
import Image from "next/image";
import { theme } from "styles";

export const DealGridCard = ({
  key,
  index,
  src,
  alt,
  dealsrc,
  dealalt,
  name,
  description,
  mnd,
  pj,
  price,
  mnd_range,
  pj_range,
}) => {
  const [menu, setMenu] = useState("");

  const [pjMenu, setPjMenu] = useState("");
  const [mndMenu, setMndMenu] = useState("");
  return (
    <>
      <Box
        bg="white"
        pt="2.4rem"
        borderRadius="2.4rem"
        boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
      >
        <Flex alignItems="center" px="2.4rem">
          <Box>
            <Image src={dealsrc} width={20} height={20} alt={dealalt} />
          </Box>
          <Text ml="0.6rem" fontWeight="800" color="darkblue.500" fontSize="2rem">
            {name}
          </Text>
        </Flex>
        <Box height="4.1rem" mt="0.4rem" px="2.4rem">
          <Text fontWeight="400" color="secondary.1000" fontSize="1.3rem">
            {description}
          </Text>
        </Box>
        <Box px="2.4rem">
          <Image src={src} alt={alt} height={176} width={336} />
        </Box>
        {/* desktop view */}
        <Box display={{ xs: "none", md: "block" }}>
          <Grid px="2.4rem" gridTemplateColumns="1fr 1.5fr 1fr" gridColumnGap="1rem">
            <Box>
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                Price (p/m)
              </Text>
              <Text fontWeight="800" fontSize="3.2rem" lineHeight="4.3rem" color="purple.300">
                {price}
              </Text>
            </Box>
            <Box>
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                Contractduur (mnd)
              </Text>
              <Text
                fontWeight="800"
                mt="1.3rem"
                fontSize="1.8rem"
                lineHeight="2.4rem"
                color="darkblue.500"
              >
                {mnd}
              </Text>
            </Box>
            <Box>
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                KM (p/j)
              </Text>
              <Text
                fontWeight="800"
                mt="1.3rem"
                fontSize="1.8rem"
                lineHeight="2.4rem"
                color="darkblue.500"
              >
                {pj}
              </Text>
            </Box>
          </Grid>
        </Box>
        {/* mobile view */}
        <Box display={{ xs: "block", md: "none" }}>
          <Grid px="2.4rem" gridTemplateColumns="1fr" gridColumnGap="1rem">
            <Flex alignItems="center">
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                KM (p/j)
              </Text>
              <Text
                ml="auto"
                fontWeight="800"
                fontSize="1.8rem"
                lineHeight="2.4rem"
                color="darkblue.500"
              >
                {pj}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                Contractduur (mnd)
              </Text>
              <Text
                ml="auto"
                fontWeight="800"
                fontSize="1.8rem"
                lineHeight="2.4rem"
                color="darkblue.500"
              >
                {mnd}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Text fontWeight="400" fontSize="1.5rem" lineHeight="2.0rem" color="gray.300">
                Price (p/m)
              </Text>
              <Text
                ml="auto"
                fontWeight="800"
                fontSize="2.4rem"
                lineHeight="3.2rem"
                color="purple.300"
              >
                {price}
              </Text>
            </Flex>
          </Grid>
        </Box>
        <Box px="2.4rem">
          <Button
            variant="landing"
            backgroundImage="linear-gradient(74.28deg, #381BC5 -2.89%, #CC63C7 53.72%, #EFCE89 111.52%)"
            height="4.8rem"
            mt="3.2rem"
            width={{ xs: "100%", lg: "100%" }}
          >
            <Flex justifyContent="center" alignItems="center" cursor="pointer">
              <Text pr="1rem">Aanbieder</Text>
              <MemoArrowWhite fill="white" height="1.6rem" width="1.8rem" />
            </Flex>
          </Button>
        </Box>

        <Box mt="2.4rem" height={1} bg="gray.400" width="100%" />
        <Flex
          pb="2.6rem"
          mt="1.6rem"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          onClick={() => {
            if (menu === key) setMenu("");
            else setMenu(key);
          }}
        >
          <Text fontWeight="400" fontSize="1.6rem" lineHeight="2.4rem" color="gray.300">
            Details
          </Text>
          <Box cursor="pointer" transform={menu === key ? "rotate(180deg)" : "rotate(0deg)"}>
            <Accordion />
          </Box>
        </Flex>
        {menu === key && (
          <Box
            position="absolute"
            bottom="-38rem"
            width="100%"
            zIndex={3}
            bg="background.50"
            py="2.4rem"
            px="2.4rem"
            mt="2.5rem"
            borderBottomLeftRadius="2.4rem"
            borderBottomRightRadius="2.4rem"
            boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
          >
            <Grid gridTemplateColumns="1fr" gridRowGap="2.4rem">
              <Box>
                <Text fontWeight="800" fontSize="1.8rem" lineHeight="2.4rem" color="secondary.1000">
                  Select Contractduur (mnd)
                </Text>
                <Grid gridTemplateColumns="repeat(5,4rem)" mt="1.6rem" gridColumnGap="0.8rem">
                  {mnd_range.map((mileage) => {
                    return (
                      <Box
                        bg={mndMenu === mileage.id ? "purple.300" : "white"}
                        key={mileage.id}
                        borderRadius="0.8rem"
                        boxShadow="0px 5px 20px rgba(25, 20, 83, 0.05)"
                        p="0.75rem"
                        width="fit-content"
                        cursor="pointer"
                        onClick={() => {
                          if (mndMenu === mileage.id) setMndMenu("");
                          else setMndMenu(mileage.id);
                        }}
                      >
                        <Text
                          fontWeight="400"
                          fontSize="1.8rem"
                          lineHeight="2.5rem"
                          color={mndMenu === mileage.id ? "white" : "darkblue.500"}
                        >
                          {mileage.value}
                        </Text>
                      </Box>
                    );
                  })}
                </Grid>
              </Box>
              <Box>
                <Text fontWeight="800" fontSize="1.8rem" lineHeight="2.4rem" color="secondary.1000">
                  Select KM quantity (p/j)
                </Text>
                <Grid gridTemplateColumns="repeat(4,7.5rem)" mt="1.6rem" gridGap="0.8rem">
                  {pj_range.map((mileage) => {
                    return (
                      <Box
                        bg={pjMenu === mileage.id ? "purple.300" : "white"}
                        key={mileage.id}
                        borderRadius="0.8rem"
                        boxShadow="0px 5px 20px rgba(25, 20, 83, 0.05)"
                        p="0.75rem"
                        width="fit-content"
                        cursor="pointer"
                        onClick={() => {
                          if (pjMenu === mileage.id) setPjMenu("");
                          else setPjMenu(mileage.id);
                        }}
                      >
                        <Text
                          fontWeight="400"
                          fontSize="1.8rem"
                          lineHeight="2.5rem"
                          color={pjMenu === mileage.id ? "white" : "darkblue.500"}
                        >
                          {mileage.value}
                        </Text>
                      </Box>
                    );
                  })}
                </Grid>
              </Box>
              <Text
                as="h2"
                my="0rem"
                color="purple.300"
                fontWeight="800"
                fontSize="4rem"
                lineHeight="5.4rem"
              >
                €269
              </Text>
              <Box>
                <Flex alignItems="center" cursor="pointer">
                  <Text
                    color="purple.300"
                    fontWeight="800"
                    fontSize="1.6rem"
                    lineHeight="2.1rem"
                    pr="1rem"
                  >
                    View 12 Private lease offers
                  </Text>
                  <MemoArrowWhite fill={theme.colors.purple[300]} />
                </Flex>
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};
