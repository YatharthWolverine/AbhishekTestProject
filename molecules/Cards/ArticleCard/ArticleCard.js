import React from "react";
import { Box, Text, Image, Flex, Grid } from "atoms";
import Link from "next/link";
import styled from "styled-components";
import MemoArrowRight from "public/assets/icons/ArrowRight";
import { theme } from "styles";

const BoxStyle = styled(Box)`
  &:hover {
    cursor: pointer;
    background: #403bcb;
    > div {
      color: #ffffff !important;
    }
  }
`;

export const ArticleCard = ({ src, alt, title, tag1, tag2, body, tags, url }) => {
  return (
    <>
      <Box width={{ xs: "24.6rem", lg: "unset" }} borderRadius="2.4rem">
        <Link href={url} passHref>
          <a>
            <Box height={{ md: "20.8rem" }} display={{ xs: "none", md: "block" }}>
              {src ? (
                <Image src={src} height="20.8rem" width="100%" alt={alt} layout="fill" />
              ) : (
                <Image
                  src="/images/default-image.svg"
                  height="20.8rem"
                  width="100%"
                  alt="default-image"
                  layout="fill"
                />
              )}
            </Box>
          </a>
        </Link>

        <Box
          bg="white"
          px={{ xs: "1.6rem", lg: "2.4rem" }}
          mt={{ xs: "0rem", lg: "-2rem" }}
          py="3.5rem"
          borderBottomLeftRadius="2.4rem"
          borderBottomRightRadius="2.4rem"
          borderTopRightRadius="2.4rem"
          borderTopLeftRadius="2.4rem"
        >
          <Flex mt={{ xs: "-1.5rem", lg: "unset" }} flexWrap="wrap">
            {tags &&
              tags?.slice(0, 2)?.map((item) => {
                return (
                  <Link key={item.id} href={`/${item?.slug}`} passHref>
                    <a>
                      <BoxStyle
                        bg="secondary.100"
                        px="1.2rem"
                        py="0.5rem"
                        cursor="pointer"
                        borderRadius="0.5rem"
                        mr="0.8rem"
                        mb="0.8rem"
                      >
                        <Text
                          fontWeight="500"
                          fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                          lineHeight="1.9rem"
                          color="darkblue.500"
                        >
                          #{item?.name.slice(0, 12)}
                        </Text>
                      </BoxStyle>
                    </a>
                  </Link>
                );
              })}
            {tag1 && (
              <Box bg="secondary.100" px="1.2rem" py="0.5rem" borderRadius="0.5rem">
                <Text
                  fontWeight="500"
                  fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                  lineHeight="1.9rem"
                  color="darkblue.500"
                >
                  {tag1}
                </Text>
              </Box>
            )}
            {tag2 && (
              <Box ml="0.8rem" bg="secondary.100" px="1.2rem" py="0.5rem" borderRadius="0.5rem">
                <Text
                  fontWeight="500"
                  fontSize={{ xs: "1.2rem", lg: "1.6rem" }}
                  lineHeight="1.9rem"
                  color="darkblue.500"
                >
                  {tag2}
                </Text>
              </Box>
            )}
          </Flex>

          <Text
            fontWeight="600"
            fontSize={{ xs: "1.6rem", lg: "2rem" }}
            color="darkblue.500"
            mt={{ xs: "1.7rem", lg: "2.5rem" }}
            lineHeight={{ xs: "1.9rem", lg: "2.4rem" }}
            height={{ xs: "6.6rem", md: "8rem" }}
            style={{ wordBreak: "break-all" }}
          >
            {title?.slice(0, 50)}
          </Text>

          {body && (
            <Text
              fontWeight="300"
              fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
              color="darkblue.500"
              mt="1.6rem"
              lineHeight={{ xs: "2rem", lg: "2.7rem" }}
            >
              {body?.slice(0, 100)}...
            </Text>
          )}
          <Link href={url} passHref>
            <a>
              <Flex mt={{ xs: "2.1rem", md: "4.2rem" }} alignItems="center" cursor="pointer">
                <Box
                  fontWeight="700"
                  fontSize="1.6rem"
                  className="gradient-heading"
                  mt="1.6rem"
                  lineHeight="1.9rem"
                >
                  Lees verder
                </Box>
                <Box ml="1rem" mt="1.5rem" width="1.8rem" height="1.2rem">
                  <MemoArrowRight fill="#204ECF" height="1.6rem" width="1.8rem" />
                </Box>
              </Flex>
            </a>
          </Link>
        </Box>
      </Box>
    </>
  );
};
