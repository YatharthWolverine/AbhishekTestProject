import React from "react";

import { Flex, Box, Grid, Text, Button } from "atoms";
import Image from "next/image";

import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: "1",
    src: "/images/people/1.svg",
    alt: "advice-card",
    title: "Car Insurance",
    subtitle: "Co-founder and CEO",
    description: "Haptic",
    link: "Learn more ->",
  },
  {
    id: "2",
    src: "/images/people/2.png",
    alt: "advice-card",
    title: "Bhairav kothari",
    subtitle: "Founder and CEO",
    description: "SuperCFO",
    link: "Learn more ->",
  },
  {
    id: "3",
    src: "/images/people/3.png",
    alt: "advice-card",
    title: "Ajay Ramasubramanium",
    subtitle: "Co-founder and CEO",
    description: "SuperCFO",
    link: "Learn more ->",
  },
];
const data2 = [
  {
    id: "4",
    src: "/images/people/4.png",
    alt: "advice-card",
    title: "Abhishek Agarwal",
    subtitle: "Managing partner",
    description: "Rockstud capital",
    link: "100xVC does  not solve the early stage companies fundamental problem of the availability of the funds at the earliest",
  },
  {
    id: "5",
    src: "/images/people/5.png",
    alt: "advice-card",
    title: "Aditya pittie",
    subtitle: "Managing director ",
    description: "Pittie group",
    link: "100xVC are enablers for the enterpreneurs aspirations to take flight. The team has helped budding enterpreneurswith...",
  },
  {
    id: "6",
    src: "/images/people/6.png",
    alt: "advice-card",
    title: "Amey Mashelkar",
    subtitle: "Head",
    description: "JioGenNext",
    link: "100xVC vision to provide launchpad for aspiring enterpreneursto build, test and grow their startups is truely admirable...",
  },
];

export const AdviceSection = () => {
  return (
    <>
      <Box mt="150px" px="50px">
        <Text
          fontSize="50px"
          fontWeight="600"
          lineHeight="70px"
          textAlign="center"
          fontFamily="Teko"
          width="100vw"
        >
          Connect with 100+ mentors- VCs,
        </Text>
        <Text
          fontSize="50px"
          fontWeight="600"
          lineHeight="70px"
          textAlign="center"
          fontFamily="Teko"
          width="100vw"
        >
          Founders and Operators
        </Text>

        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          gridColumnGap="50px"
          mt="50px"
          className="hide-scrollbar"
          px="50px "
        >
          {data.map((item) => (
            <Flex flexDirection="column">
              <Image src={item.src} width="354.25px" height="325.77px" />
              <Box background="black" backgroundImage="url('/images/backTexture.svg')" pl="26px">
                <Text
                  color="white"
                  fontWeight="400"
                  fontSize="30px"
                  lineHeight="70px"
                  fontFamily="Teko"
                >
                  {item.title}
                </Text>
                <Text
                  color="white"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="10px"
                  fontFamily="Teko"
                >
                  {item.subtitle}
                </Text>
                <Text
                  color="white"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="50px"
                  fontFamily="Teko"
                  pt="50px"
                >
                  {item.description}
                </Text>
                <Text
                  color="#ED1F24"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="50px"
                  fontFamily="Teko"
                >
                  <a href="https://www.figma.com/file/1WjouN1EjaFyZLPdNWnYlb/100x.vc?node-id=0%3A1">
                    {item.link}
                  </a>
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
        <Box height="150px" left={500} top={70}>
          <Button height="60px" width="250px">
            <Text>See all partners</Text>
          </Button>
        </Box>
      </Box>

      <Box
        mt="100px"
        background="black"
        pt="67.5px"
        backgroundImage="url('/images/backTexture.svg ')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        pb="100px"
      >
        <Text
          fontSize="60px"
          fontWeight="600"
          lineHeight="85.98px"
          fontFamily="Teko"
          textAlign="center"
          color="#ED1F24"
        >
          Portfolio success
        </Text>
        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          gridColumnGap="50px"
          mt="150px"
          className="hide-scrollbar"
          px="100px "
        >
          {data2.map((item) => (
            <Flex flexDirection="column">
              <Image src={item.src} width="354.25px" height="325.77px" />
              <Box background="red" pl="26px">
                <Text
                  color="white"
                  fontWeight="400"
                  fontSize="30px"
                  lineHeight="70px"
                  fontFamily="Teko"
                >
                  {item.title}
                </Text>
                <Text
                  color="white"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="10px"
                  fontFamily="Teko"
                >
                  {item.subtitle}
                </Text>
                <Text
                  color="white"
                  fontWeight="300"
                  fontSize="20px"
                  lineHeight="50px"
                  fontFamily="Teko"
                  pt="50px"
                >
                  {item.description}
                </Text>
                <Text color="white" fontWeight="300" fontSize="20px" pb="50px" fontFamily="Teko">
                  <a href="https://www.figma.com/file/1WjouN1EjaFyZLPdNWnYlb/100x.vc?node-id=0%3A1">
                    {item.link}
                  </a>
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Box>

      <Box m="99px">
        <Grid gridTemplateColumns="repeat(2,1fr)">
          <Image src="/images/founders.png" width="697.96px" height="465.36px" />
          <Box pl="70px" pt="20px">
            <Flex flexDirection="column" justifyContent="center" alignItem="center">
              <Text
                color="black"
                fontSize="50px"
                fontStyle="normal"
                fontFamily="Teko"
                fontWeight="600"
                lineHeight="85.98px"
              >
                Connect,Learn and
              </Text>
              <Text
                color="black"
                fontSize="50px"
                fontStyle="normal"
                fontFamily="Teko"
                fontWeight="600"
                lineHeight="85.98px"
                as="span"
              >
                Create value together
              </Text>
              <Text
                color="black"
                fontSize="30px"
                fontStyle="normal"
                fontFamily="Lato"
                fontWeight="400"
                lineHeight="40px"
                pb="30px"
                pt="30px"
              >
                Join the most ambitious set of founders in the 100X community
              </Text>
              <Button style={{ color: "red" }} width="250px" height="60px">
                <Text
                  color="white"
                  fontSize="22px"
                  fontStyle="normal"
                  fontFamily="Lato"
                  fontWeight="700"
                  lineHeight="26.4px"
                  textAlign="center"
                >
                  View portfolio
                </Text>
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>
      {/* last section */}
      <Box
        height="426.14px"
        background="red"
        backgroundImage="url('/images/backTexture.png')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid gridTemplateColumns="repeat(2,1fr)" height="100%">
          <Flex
            pl="101px"
            flexDirection="column"
            textAlign="left"
            justifyContent="center"
            height="100%"
          >
            <Box>
              <Text
                color="white"
                fontFamily="Teko"
                fontWeight="600"
                fontSize="60px"
                lineHeight="70px"
              >
                Straight from our
              </Text>
              <Text
                color="white"
                fontFamily="Teko"
                fontWeight="600"
                fontSize="60px"
                lineHeight="70px"
              >
                desk, to your imbox
              </Text>
            </Box>
            <Text
              color="white"
              fontFamily="Lato"
              fontWeight="400"
              fontSize="22px"
              lineHeight="36px"
              pt="20px"
            >
              Subscribe to 100X.VC News and Views
            </Text>
          </Flex>
          <Flex flexDirection="column" textAlign="left" justifyContent="center" height="100%">
            hi
          </Flex>
        </Grid>
      </Box>
      <Box height="235.92px" background="black">
        <Grid gridTemplateColumns="2fr 1fr 1fr" width="100%" height="50%">
          <Box pl="100px" height="100%" pt="50px">
            <Flex flexDirection="column" height="100%" justifyContent="center">
              <Box>
                <Image src="/images/logo.png" width="96.01px" height="32.47px" />
              </Box>
              <Box pt="10px">
                <Text
                  color="white"
                  fontSize="22px"
                  fontWeight="400"
                  lineHeight="30px"
                  fontFamily="Lato"
                >
                  We are a lorem ipsumdolor sit amet consectetur
                </Text>
                <Text
                  color="white"
                  fontSize="22px"
                  fontWeight="400"
                  lineHeight="30px"
                  fontFamily="Lato"
                >
                  consectetur adipiscing elit, sed do eiuscing
                </Text>
                <Text
                  color="white"
                  fontSize="22px"
                  fontWeight="400"
                  lineHeight="30px"
                  fontFamily="Lato"
                >
                  tempor incididun
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Grid gridTemplateColumns="2fr 8fr" width="100%" pt="107.09px">
              <Image src="/images/icon.png" height="56px" width="56px" position="absolute" />
              <Box>
                <Text
                  color="white"
                  fontFamily="Lato"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="19.2px"
                >
                  Send you pitches to us at
                </Text>
                <Text
                  color="white"
                  fontFamily="Lato"
                  fontWeight="500"
                  fontSize="22px"
                  lineHeight="19.2px"
                  pt="5px"
                >
                  pitch@100x.vc
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Grid gridTemplateColumns="2fr 8fr" width="100%" pt="107.09px">
              <Image src="/images/icon.png" height="56px" width="56px" position="absolute" />
              <Box>
                <Text
                  color="white"
                  fontFamily="Lato"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="19.2px"
                >
                  For other queries , please contact us at:
                </Text>
                <Text
                  color="white"
                  fontFamily="Lato"
                  fontWeight="500"
                  fontSize="22px"
                  lineHeight="19.2px"
                  pt="5px"
                >
                  hello@100x.vc
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <Box height="235.92px" background="black">
        <Grid
          gridTemplateColumns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "
          width="100%"
          pl="100px"
          pr="100px"
          pt="40px"
        >
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            About us
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Jobs
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Blog
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Press
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            FAQ
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Careers
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Contact
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Privacy policy
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Sitemap
          </Text>
          <Text
            color="white"
            fontSize="22px"
            fontWeight="400"
            lineHeight="26.4px"
            fontFamily="Lato"
          >
            Terms of Use
          </Text>
        </Grid>
        <Flex pl="100px" pr="100px" pt="40px" justifyContent="space-between">
          <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridColumnGap="8px" width="50%" height="100%">
            <Box height="55px" width="55px">
              <Image src="/images/icon1.png" height="55px" width="55px" />
            </Box>
            <Box height="55px" width="55px">
              <Image src="/images/icon1.png" height="55px" width="55px" />
            </Box>
            <Box height="55px" width="55px">
              <Image src="/images/icon1.png" height="55px" width="55px" />
            </Box>
            <Box height="55px" width="55px">
              <Image src="/images/icon1.png" height="55px" width="55px" />
            </Box>
          </Grid>
          <Text color="white" pt="30px">
            2000-2021,All Rights Reserved
          </Text>
        </Flex>
      </Box>
    </>
  );
};
