import React from "react";

import { Box, Grid, Text, Flex, Button } from "atoms";
import Image from "next/image";

const data = [
  {
    id: "0",
    title: "Moonshots",
    description: "We invest in our moonshot vision",
  },
  {
    id: "1",
    title: "India Safe notes",
    description: "Cut the hassle and complexity We let you focus on your growth",
  },
  {
    id: "2",
    title: "Network",
    description: "Helping founders get to the next round of funding and beyond",
  },
];

const data2 = [
  {
    id: "0",
    number: "200",
    text: "Founder",
  },
  {
    id: "1",
    number: "70",
    text: "Companies",
  },
  {
    id: "3",
    number: "$43mn",
    text: "Raised bt portfolio",
  },
  {
    id: "4",
    number: "6",
    text: "Classes",
  },
];

export const OurTeams = () => {
  return (
    <>
      <Box mx={{ lg: "2rem", xl: "auto" }} mb={{ lg: "6.6rem" }} maxWidth={{ xl: "144rem" }}>
        <Grid
          gridTemplateColumns={{ xs: "1fr", lg: "repeat(3, 1fr)" }}
          gridColumnGap={{ lg: "2.3rem" }}
          gridRowGap={{ xs: "0.5rem", lg: "unset" }}
          mt={{ lg: "-12.4rem" }}
          mb={{ lg: "5.8rem" }}
          justifyContent={{ xl: "center" }}
        >
          {data.map((item) => {
            return (
              <Box
                key={item.id}
                backgroundImage="url('/images/backTexture.png')"
                backgroundSize="cover"
                style={{ backgroundRepeat: "no-repeat" }}
                width="100%"
                height="29.6rem"
                borderRadius={{ lg: "0.4rem" }}
                backgroundColor="#ED1F24"
              >
                <Flex flexDirection="column" px="3.6rem" pt="5.5rem">
                  <Text
                    fontFamily="Teko"
                    fontSize="4.8rem"
                    fontWeight="bold"
                    color="white"
                    mb="2.6rem"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontFamily="Lato"
                    fontSize="2.2rem"
                    fontWeight="300"
                    lineHeight="4rem"
                    color="white"
                  >
                    {item.description}
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
      {/* -------------------------------------------------------------------------------- */}
      <Box mx={{ lg: "2rem", xl: "auto" }} mb={{ lg: "6.6rem" }} maxWidth={{ xl: "144rem" }}>
        <Grid gridTemplateColumns={{ xs: "1fr", lg: "repeat(2,1fr)" }}>
          <Box
            width={{ lg: "69.76rem", xs: "31rem" }}
            height={{ lg: "46.53rem", xs: "21rem" }}
            m={{ xs: "5rem" }}
          >
            <Image src="/images/back.png" layout="fill" />
          </Box>

          <Box pl={{ lg: "7rem" }} pt={{ lg: "8rem" }} m={{ xs: "3rem" }}>
            <Flex flexDirection="column" justifyContent="center" alignItem="center">
              <Text
                color="black"
                fontSize={{ lg: "6rem", xs: "5rem" }}
                fontStyle="normal"
                fontFamily="Teko"
                fontWeight="60 rem"
                lineHeight="8.59 rem"
              >
                The 100X team
              </Text>
              <Text
                color="black"
                fontSize={{ lg: "3rem", xs: "2.2rem" }}
                fontStyle="normal"
                fontFamily="Lato"
                fontWeight="40 rem"
                lineHeight="4 rem"
                pb="3rem"
                pt="3rem"
              >
                We&apos;re a Lean team ready to work 1-1 with you and help you shape your business
                for hyper growth
              </Text>
              <Button
                butonStyle={{ color: "red" }}
                width={{ lg: "25rem", xs: "20rem" }}
                height={{ lg: "6rem", xs: "5rem" }}
              >
                <Text
                  color="white"
                  fontSize={{ lg: "2.2rem", xs: "2rem" }}
                  fontStyle="normal"
                  fontFamily="Lato"
                  fontWeight={{ lg: "70rem", xs: "60rem" }}
                  lineHeight="2.64rem"
                  textAlign="center"
                >
                  Meet our team
                </Text>
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>

      {/* ----------------------------------------------------------------------------- */}

      <Flex
        flexDirection={{ xs: "column", lg: "unset" }}
        mt={{ xs: "5rem", lg: "unset" }}
        p={{ lg: "2rem", xs: "3rem" }}
      >
        <Box
          backgroundImage="url('/images/backTexture.png')"
          backgroundSize="cover"
          style={{ backgroundRepeat: "no-repeat" }}
          borderRadius="0.4rem"
          height="21.7rem"
          width={{ lg: "27.1rem" }}
          px="2.5rem"
          py="5.4rem"
          backgroundColor="red"
        >
          <Text
            fontSize="5rem"
            color="white"
            fontWeight="bold"
            fontFamily="Teko"
            lineHeight="7rem"
            maxWidth="27rem"
          >
            100X By the numbers
          </Text>
        </Box>
        <Grid
          gridTemplateColumns={{ xs: "1fr ", lg: "auto auto auto auto" }}
          gridColumnGap={{ xs: "5.5rem", lg: "8.3rem", xl: "15rem" }}
          gridRowGap={{ xs: "3.3rem", lg: "unset" }}
          ml={{ lg: "2.9rem" }}
          mt={{ xs: "1rem", lg: "unset" }}
        >
          {data2.map((item) => {
            return (
              <Box key={item.id} pt={{ xs: "1rem", lg: "6rem" }} mb={{ lg: "-0.6rem" }}>
                <Text
                  fontFamily="Teko"
                  fontSize={{ xs: "7rem", lg: "10rem" }}
                  fontWeight="bold"
                  color="grey.2"
                  lineHeight="8.8rem"
                >
                  {item.number}
                </Text>
                <Text
                  fontFamily="Teko"
                  fontSize={{ xs: "3rem", lg: "4rem" }}
                  fontWeight={{ xs: "bold", lg: "medium" }}
                  color="grey.2"
                  lineHeight={{ xs: "3.8rem", lg: "5.7rem" }}
                >
                  {item.text}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Flex>

      {/* -------------------------------------------------------------------------------------------------- */}
      <Box width="100vw" height={{ lg: "50rem" }}  mt="10rem" background="black">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={{ lg: "center" }}
          height="100%"
        >
          <Box
            width={{ lg: "50vw", xs: "95vw" }}
            height={{ lg: "16.4rem", xs: "28rem" }}
            pt={{ xs: "6.52rem", lg: "unset" }}
            pl={{ xs: "3rem" }}
          >
            <Text
              color="#ED1F24"
              fontSize={{ lg: "6rem", xs: "5rem" }}
              fontWeight="60rem"
              lineHeigth={{ lg: "8.6rem", xs: "7.16rem" }}
              textAlign={{ lg: "center" }}
              fontFamily="Teko"
            >
              Hear what Leading VCs think of 100X.VC
            </Text>
          </Box>
          <Box width="4.83rem" height="1.82rem" bg="white" m={{ xs: "3rem" }}/>
          <Box width="100%" height="7.63rem" pt="2rem" pl={{ xs: "3rem" }}>
            <Text
              color="white"
              fontSize={{ lg: "3rem", xs: "2.2rem" }}
              fontWeight="70rem"
              lineHeigth={{ lg: "4rem", xs: "3.6rem" }}
              textAlign={{ lg: "center" }}
              fontFamily="Lato"
            >
              Class 08 Application Open.Apply at pitch@100x.vc
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box width={{ lg: "100vw" , xs:"39.5rem"}} height={{ lg: "90rem" }} background="black">
        <Flex flexDirection={{ lg: "column" }}>
          <Grid
            gridTemplateColumns={{ lg: "repeat(4,2fr)" , xs:"0fr" }}
            gridColumnGap={{ lg: "9.6rem" }}
            gridRowGap={{ lg: "40px" }}
            pl={{ lg: "10rem" }}
            pr={{ lg: "10rem" }}
            height={{ lg: "700px" }}
          >
            {img.map((item) => {
              return <Image key={item.id} src={item.src} width="257px" height="35.94px" />;
            })}
          </Grid>
          {/* <Box height={{lg:"20rem" , xs:"20rem"}} width={{ lg: "100vw" , xs:"39.5rem"}} >
            <Button width={{lg:"25rem"}} height={{lg:"6rem"}} top="7rem" left="59.4rem">
              <Text fontWeight={{lg:"70rem"}} fontSize={{lg:"2.2rem"}} lineHeight={{lg:"2.6rem"}}>
                See all partners
              </Text>
            </Button>
          </Box> */}
        </Flex>
      </Box>
    </>
  );
};

const img = [
  {
    id: "0",
    src: "/images/brand-logo/logo1.svg",
  },
  {
    id: "1",
    src: "/images/brand-logo/logo2.svg",
  },
  {
    id: "2",
    src: "/images/brand-logo/logo3.svg",
  },
  {
    id: "3",
    src: "/images/brand-logo/logo4.svg",
  },
  {
    id: "4",
    src: "/images/brand-logo/logo5.svg",
  },
  {
    id: "5",
    src: "/images/brand-logo/logo6.svg",
  },
  {
    id: "6",
    src: "/images/brand-logo/logo7.svg",
  },
  {
    id: "7",
    src: "/images/brand-logo/logo8.svg",
  },
  {
    id: "8",
    src: "/images/brand-logo/logo9.svg",
  },
  {
    id: "9",
    src: "/images/brand-logo/logo10.svg",
  },
  {
    id: "10",
    src: "/images/brand-logo/logo11.svg",
  },
  {
    id: "11",
    src: "/images/brand-logo/logo12.svg",
  },
  {
    id: "12",
    src: "/images/brand-logo/logo13.svg",
  },
  {
    id: "13",
    src: "/images/brand-logo/logo14.svg",
  },
  {
    id: "14",
    src: "/images/brand-logo/logo15.svg",
  },
  {
    id: "15",
    src: "/images/brand-logo/logo16.svg",
  },
  {
    id: "16",
    src: "/images/brand-logo/logo17.svg",
  },
  {
    id: "17",
    src: "/images/brand-logo/logo18.svg",
  },
  {
    id: "18",
    src: "/images/brand-logo/logo19.svg",
  },
  {
    id: "19",
    src: "/images/brand-logo/logo20.svg",
  },
  {
    id: "20",
    src: "/images/brand-logo/logo21.svg",
  },
];
