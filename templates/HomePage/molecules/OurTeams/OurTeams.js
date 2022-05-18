import React from "react";

import { Box, Grid, Text, Flex, Button } from "atoms";
import Image from "next/image";

export const OurTeams = () => {
  return (
    <>
      <Box>
        <Grid
          gridTemplateColumns="repeat(3,1fr)"
          gridColumnGap={{ xs: "1.6rem", md: "3.2rem" }}
          overflowX={{ xs: "auto", md: "unset" }}
          className="hide-scrollbar"
          px="15px"
          borderRadius="48px"
          mt="-145px"
        >
          <Box backgroundImage="url('/images/backTexture.png')" height="296.58px" width="397.76px">
            <Text
              fontSize="48px"
              height="50%"
              pt="55px"
              pl="34.59px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="600"
            >
              Moonshot
            </Text>
            <Text
              fontSize="22px"
              height="50%"
              pl="39.59px"
              pt="40px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="700"
            >
              We invest in your moonshot vision
            </Text>
          </Box>
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.png')"
            height="296.58px"
            width="397.76px"
          >
            <Text
              fontSize="48px"
              height="50%"
              pt="55px"
              pl="34.59px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="600"
            >
              India safe notes
            </Text>
            <Text
              fontSize="22px"
              height="50%"
              pl="39.59px"
              pt="40px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="700"
            >
              Cut the hassle and complexity. We let you focus on your growth
            </Text>
          </Box>
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.png')"
            height="296.58px"
            width="397.76px"
          >
            <Text
              fontSize="48px"
              height="50%"
              pt="55px"
              pl="34.59px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="600"
            >
              Network
            </Text>
            <Text
              fontSize="22px"
              height="50%"
              pl="39.59px"
              pt="40px"
              color="white"
              fontFamily="Teko"
              font-style="normal"
              font-weight="700"
            >
              Helping founders get to the next round of funding and beyond
            </Text>
          </Box>
        </Grid>
      </Box>

      <Box m="99px">
        <Grid gridTemplateColumns="repeat(2,1fr)">
          <Image src="/images/back.png" width="697.96px" height="465.36px" />
          <Box pl="70px" pt="20px">
            <Flex flexDirection="column" justifyContent="center" alignItem="center">
              <Text
                color="black"
                fontSize="60px"
                fontStyle="normal"
                fontFamily="Teko"
                fontWeight="600"
                lineHeight="85.98px"
              >
                The 100X team
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
                We&apos;re a Lean team ready to work 1-1 with you and help you shape your business
                for hyper growth
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
                  Meet our team
                </Text>
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>

      <Box pl="50px" pr="0px">
        <Grid gridTemplateColumns="repeat(5,2fr)" gridColumnGap="40px">
          <Box
            background="red"
            backgroundImage="url('/images/backTexture.png')"
            width="271px"
            height="217.95px"
          >
            <Text
              color="white"
              fontFamily="Teko"
              fontSize="45px"
              fontWeight="600"
              lineHeight="70px"
              letterSpacing="0em"
              textAlign="left"
              pl="20px"
              pt="54px"
            >
              100X By the numbers
            </Text>
          </Box>
          <Flex flexDirection="column" width="134px" height="143px" pt="30px">
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="600"
              fontSize="90px"
              lineHeight="143px"
            >
              200
            </Text>
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="500"
              fontSize="30px"
              lineHeight="57.32px"
            >
              Founders
            </Text>
          </Flex>
          <Flex flexDirection="column" width="134px" height="143px" pt="30px">
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="600"
              fontSize="90px"
              lineHeight="143px"
            >
              70
            </Text>
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="500"
              fontSize="30px"
              lineHeight="57.32px"
            >
              Companies
            </Text>
          </Flex>
          <Flex flexDirection="column" width="134px" height="143px" pt="30px">
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="600"
              fontSize="90px"
              lineHeight="143px"
            >
              $43
              <Text
                as="span"
                fontFamily="Teko"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="143px"
              >
                nm
              </Text>
            </Text>
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="500"
              fontSize="30px"
              lineHeight="57.32px"
            >
              Raised by Portfolio
            </Text>
          </Flex>
          <Flex flexDirection="column" width="134px" height="143px" pt="30px">
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="600"
              fontSize="90px"
              lineHeight="143px"
            >
              6
            </Text>
            <Text
              fontFamily="Teko"
              fontStyle="normal"
              fontWeight="500"
              fontSize="30px"
              lineHeight="57.32px"
            >
              Classes
            </Text>
          </Flex>
        </Grid>
      </Box>

      <Box width="100vw" height="500px" mt="100px" background="black">
        <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
          <Box width="700px" height="px" pb="40px">
            <Text
              color="#ED1F24"
              fontSize="60px"
              fontWeight="600"
              lineHeigth="86px"
              textAlign="center"
              fontFamily="Teko"
            >
              Hear what Leading VCs think of 100X.VC
            </Text>
          </Box>
          <Box width="48.36px" height="18.26px" bg="white" />
          <Box width="429px" height="76.3px" pt="40px">
            <Text
              color="white"
              fontSize="30px"
              fontWeight="700"
              lineHeigth="40px"
              textAlign="center"
              fontFamily="Lato"
            >
              Class 08 Application Open.Apply at pitch@100x.vc
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box width="100vw" height="900px" background="black">
        <Flex flexDirection="column">
          <Grid
            gridTemplateColumns="repeat(4,2fr)"
            gridColumnGap="96px"
            gridRowGap="40px"
            pl="100px"
            pr="100px"
            height="700px"
          >
            <Image src="/images/brand-logo/logo1.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo2.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo3.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo4.svg" width="400px" height="35.94px" />
            <Image src="/images/brand-logo/logo5.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo6.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo7.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo8.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo9.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo10.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo11.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo12.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo13.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo14.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo15.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo16.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo17.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo18.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo19.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo20.svg" width="257px" height="35.94px" />
            <Image src="/images/brand-logo/logo21.svg" width="257px" height="35.94px" />
          </Grid>
          <Box height="200px">
            <Button width="250px" height="60px" top={70} left={594} >
              <Text fontWeight="700" fontSize="22px" lineHeight="26px">See all partners</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
