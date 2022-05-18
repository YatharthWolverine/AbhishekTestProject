import React, { useState } from "react";

import { Box, Button, Flex, Grid, Text } from "atoms";
import Link from "next/link";
import MenuIcon from "public/assets/icons/MenuIcon";
import CloseMenu from "public/assets/icons/CloseMenu";
import Image from "next/image";
import MemoDownArrow from "public/assets/icons/DownArrow";
import { MenuDropdownSection, DropDownMobile } from "molecules";

const pageData = [
  {
    id: "0",
    name: "Autoverzekering",
    url: "",
    inner_section: [
      {
        id: "0",
        name: "Section Title",
        innerPages: [
          { id: "0", name: "Menu page 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
      {
        id: "1",
        name: "Industries",
        innerPages: [
          { id: "0", name: "Menu item 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
      {
        id: "2",
        name: "Choose the suitable solution for",
        innerPages: [
          { id: "0", name: "Menu item 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Zorgverzekering",
    url: "",
    inner_section: [
      {
        id: "0",
        name: "Section Title",
        innerPages: [
          { id: "0", name: "Menu item 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
      {
        id: "1",
        name: "Industries",
        innerPages: [
          { id: "0", name: "Menu item 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
      {
        id: "2",
        name: "Choose the suitable solution for",
        innerPages: [
          { id: "0", name: "Menu item 1", url: "/" },
          { id: "1", name: "Menu item 1", url: "/" },
          { id: "2", name: "Menu item 1", url: "/" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Energie",
    url: "/",
    inner_section: [],
  },
  {
    id: "3",
    name: "Sim only",
    url: "/",
    inner_section: [],
  },
  {
    id: "4",
    name: "Internet",
    url: "/",
    inner_section: [],
  },
  {
    id: "5",
    name: "Niewuws",
    url: "/",
    inner_section: [],
  },
];

export const Header = () => {
  const [menu, setMenu] = useState("");
  const [active, setActive] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMenu = (id) => {
    if (active === id) {
      setActive("");
    } else {
      setActive(id);
    }
  };

  return (
    <>
      <Box position="sticky" top={0} zIndex={4} borderBottom="1px solid #F5F5F5">
        <Flex
          justifyContent="space-between"
          py="2rem"
          bg="white"
          px={{ xs: "2.5rem", lg: "11rem" }}
          alignItems="center"
        >
          <Link href="/" passHref>
            <Box cursor="pointer">
              <Image src="/images/logo.svg" alt="Book holder" width={102} height={26} />
            </Box>
          </Link>
          <Box display={{ xs: "none", lg: "block" }}>
            <Grid gridAutoFlow="column" gridGap="3rem">
              {pageData.map((pages) => {
                return (
                  <Box
                    key={pages.id}
                    _hover={{
                      ".dropdown": { display: "initial" },
                      ".title-text .bottom-arrow": {
                        fill: "purple.200",
                        transform: "rotate(180deg)",
                      },
                      ".title-text h3": { color: "purple.200" },
                    }}
                    onMouseOver={() => {
                      setIsHovered(true);
                      setMenu(pages.id);
                    }}
                  >
                    <Grid
                      gridAutoFlow="column"
                      gridGap="6px"
                      justifyContent="center"
                      alignItems="center"
                      className="title-text"
                    >
                      <Link href={pages.url} passHref>
                        <Text as="h3" fontWeight="bolder" color="black" cursor="pointer" py="1rem">
                          {pages.name}
                        </Text>
                      </Link>
                      {pages.inner_section.length > 0 && (
                        <MemoDownArrow
                          fill="darkblue.500"
                          width="1.1rem"
                          height=".7rem"
                          className="bottom-arrow"
                        />
                      )}
                      <Box
                        position="fixed"
                        top="8rem"
                        left="0rem"
                        display="none"
                        className="dropdown"
                        width="100vw"
                        id="sub-menu"
                        zIndex={2}
                      >
                        {menu === "0" && (
                          <Box
                            onMouseEnter={() => {
                              setIsHovered(true);
                            }}
                          >
                            <MenuDropdownSection data={pages.inner_section} />
                          </Box>
                        )}

                        {menu === "1" && (
                          <Box
                            onMouseEnter={() => {
                              setIsHovered(true);
                            }}
                          >
                            <MenuDropdownSection data={pages.inner_section} />
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                );
              })}
            </Grid>
          </Box>
          <Box display={{ xs: "none", lg: "block" }}>
            <Button variant="secondary" bg="primary.500" height="4.8rem" width="17.7rem">
              Autoverzekering
            </Button>
          </Box>
          <Box display={{ xs: "block", lg: "none" }} onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <CloseMenu /> : <MenuIcon />}
          </Box>
        </Flex>
        {mobileMenu && (
          <Box bg="white" display={{ xs: "block", lg: "none" }} pb="2.4rem" width="100%">
            <Grid gridTemplateColumns="1fr" gridRowGap="2.4rem">
              {pageData.map((pages) => {
                return (
                  <Box key={pages.id}>
                    <Flex
                      alignItems="center"
                      px={{ xs: "3.2rem", lg: "11rem" }}
                      onClick={() => handleMenu(pages.id)}
                    >
                      <Link href={pages.url} passHref>
                        <Text
                          fontSize="2rem"
                          fontWeight="600"
                          color={active === pages.id ? "purple.200" : "darkblue.500"}
                          cursor="pointer"
                        >
                          {pages.name}
                        </Text>
                      </Link>
                      {pages.inner_section.length > 0 && (
                        <Box ml="auto">
                          <MemoDownArrow
                            fill="darkblue.500"
                            width="1.1rem"
                            height=".7rem"
                            className={active === pages.id ? "arrow-invert" : "bottom-arrow"}
                          />
                        </Box>
                      )}
                    </Flex>
                    <Box px={{ xs: "3.2rem", lg: "11rem" }}>
                      {active === pages.id ? null : (
                        <Box mt="0.8rem" width="100%" height={1} bg="gray.800" />
                      )}
                    </Box>

                    {pages.inner_section.length > 0 && (
                      <Box>
                        {active === pages.id && <DropDownMobile data={pages.inner_section} />}
                      </Box>
                    )}
                  </Box>
                );
              })}
              <Box px={{ xs: "3.2rem", lg: "11rem" }}>
                <Button variant="secondary" bg="primary.500" height="4.8rem" width="100%">
                  Autoverzekering
                </Button>
              </Box>
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};
