import React from "react";
import hexToRgba from "hex-to-rgba";
import Image from "next/image";
import Link from "next/link";

import { Box, Flex, Grid, Text } from "atoms";
import { theme } from "styles/theme";
import MemoFinanceLabsLogo from "public/assets/icons/FinanceLabsLogo";
import MemoBoekhounderLogo from "public/assets/icons/BoekhounderLogo";

const footerData = [
  {
    id: "0",
    name: "Autoverzekering",
    url: "/",
    innerPage: [
      { id: "0", name: "Boekhoudprogramma's", url: "/" },
      { id: "1", name: "Comparison programs", url: "/" },
      { id: "2", name: "Automations", url: "/" },
    ],
  },
  {
    id: "1",
    name: "Zorgverzekering",
    url: "/",
    innerPage: [
      { id: "0", name: "Investment", url: "/" },
      { id: "1", name: "Crypto", url: "/" },
      { id: "2", name: "Health", url: "/" },
      { id: "3", name: "Technologies", url: "/" },
    ],
  },
  {
    id: "2",
    name: "Energie",
    url: "/",
    innerPage: [
      { id: "0", name: "Insurance", url: "/" },
      { id: "1", name: "Investments", url: "/" },
      { id: "2", name: "Loans", url: "/" },
      { id: "3", name: "Software", url: "/" },
      { id: "4", name: "Car Lease", url: "/" },
    ],
  },
  {
    id: "3",
    name: "Sim only",
    url: "/",
    innerPage: [
      { id: "0", name: "Insurance", url: "/" },
      { id: "1", name: "Investments", url: "/" },
      { id: "2", name: "Loans", url: "/" },
      { id: "3", name: "Software", url: "/" },
      { id: "4", name: "Car Lease", url: "/" },
    ],
  },
  {
    id: "4",
    name: "Internet",
    url: "/",
    innerPage: [
      { id: "0", name: "Insurance", url: "/" },
      { id: "1", name: "Investments", url: "/" },
      { id: "2", name: "Loans", url: "/" },
      { id: "3", name: "Software", url: "/" },
      { id: "4", name: "Car Lease", url: "/" },
    ],
  },
  {
    id: "5",
    name: "Internet",
    url: "/",
    innerPage: [
      { id: "0", name: "Insurance", url: "/" },
      { id: "1", name: "Investments", url: "/" },
      { id: "2", name: "Loans", url: "/" },
      { id: "3", name: "Software", url: "/" },
      { id: "4", name: "Car Lease", url: "/" },
    ],
  },
];

export const Footer = () => {
  return (
    <Box bg="white" px={{ xs: "2.3rem", lg: "11rem" }} borderTop="1px solid #E9E9E9">
      <Flex
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        py="2rem"
        borderBottom="1px solid"
        borderColor={hexToRgba(theme.colors.gray[400])}
      >
        <Grid gridAutoFlow="column" gridGap="2rem" justifyContent="start">
          <Link href="/about" passHref>
            <Text fontSize="1.4rem" fontWeight="700" color="black" opacity="0.8" cursor="pointer">
              About
            </Text>
          </Link>
          <Link href="/blog" passHref>
            <Text fontSize="1.4rem" fontWeight="700" color="black" opacity="0.8" cursor="pointer">
              Blog
            </Text>
          </Link>
          <Link href="/contact" passHref>
            <Text fontSize="1.4rem" fontWeight="700" color="black" opacity="0.8" cursor="pointer">
              Contact Us
            </Text>
          </Link>
        </Grid>
        <Flex justifyContent="space-between" pt={{ xs: "3rem", lg: "unset" }}>
          <Grid
            gridAutoFlow="column"
            justifyContent="flex-start"
            gridGap="3rem"
            borderLeft={{ xs: "none", lg: "1px solid #333C54" }}
            pl={{ lg: "3rem" }}
          >
            <Link href="/" passHref>
              <Box cursor="pointer">
                <Image src="/images/fb.svg" alt="facebook" width={24} height={24} />
              </Box>
            </Link>
            <Link href="/" passHref>
              <Box cursor="pointer">
                <Image src="/images/linkedin.svg" alt="linkedin" width={24} height={24} />
              </Box>
            </Link>
          </Grid>
          <Box display={{ xs: "block", lg: "none" }} pr="3rem">
            <MemoFinanceLabsLogo width="12.4rem" height="2.4rem" />
          </Box>
        </Flex>
      </Flex>
      <Grid
        pt="3rem"
        pb="2rem"
        gridTemplateColumns={{ xs: "1fr 1fr", lg: "1.8fr 1.3fr repeat(6, 1fr)" }}
        gridGap={{ xs: "3rem", lg: "2rem" }}
        borderBottom="1px solid"
        borderColor={hexToRgba(theme.colors.gray[400])}
      >
        {footerData.map((pages) => (
          <Box key={pages.id}>
            <Text fontSize="1.6rem" fontWeight="800" color="darkblue.500" mb="2.1rem">
              {pages.name}
            </Text>
            {pages.innerPage.map((page) => (
              <Link href={page.url} passHref key={page.id}>
                <Text
                  fontSize="1.4rem"
                  fontWeight="medium"
                  color="black"
                  opacity="0.8"
                  mb="1.6rem"
                  cursor="pointer"
                  _hover={{ opacity: 1 }}
                >
                  {page.name}
                </Text>
              </Link>
            ))}
          </Box>
        ))}
        <Box />
        <Box justifySelf="flex-end" display={{ xs: "none", lg: "block" }}>
          <Image src="/images/logo-clip.png" alt="logo" width={119} height={32} />
        </Box>
      </Grid>
      <Flex
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        pt="3rem"
        pb="3.7rem"
        alignItems={{ lg: "center" }}
      >
        <Link href="/" passHref>
          <Box cursor="pointer">
            <Image src="/images/logo.svg" alt="logo" width={102} height={26} />
          </Box>
        </Link>
        <Grid
          gridAutoFlow={{ xs: "row", lg: "column" }}
          gridColumnGap="3rem"
          alignItems="center"
          mt={{ xs: "3rem", md: "unset" }}
        >
          <Link href="/" passHref>
            <Text
              fontSize="1.4rem"
              fontWeight="bold"
              color="black"
              opacity="0.8"
              mb="1.6rem"
              cursor="pointer"
              _hover={{ opacity: 1 }}
            >
              Terms & Conditions
            </Text>
          </Link>
          <Link href="/" passHref>
            <Text
              fontSize="1.4rem"
              fontWeight="bold"
              color="black"
              opacity="0.8"
              mb="1.6rem"
              cursor="pointer"
              _hover={{ opacity: 1 }}
            >
              Privacy Policy
            </Text>
          </Link>
        </Grid>
      </Flex>
    </Box>
  );
};
