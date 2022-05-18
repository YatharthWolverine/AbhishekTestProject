import React from "react";
import { Box, Text, Button, Flex } from "atoms";
import Image from "next/image";

export const ComparisonCard = ({
  bg,
  type,
  src,
  alt,
  height,
  width,
  discount,
  title,
  description,
}) => {
  return (
    <>
      <Box width="100%" px={type === "pillar" ? 0 : { xs: "2.5rem", lg: "11rem" }} py="3rem">
        <Box
          bg={bg ? bg : "white"}
          pt={{ xs: "2rem", lg: "2.4rem" }}
          pb={{ xs: "1.6rem", lg: "3.5rem" }}
          px="3.6rem"
          borderRadius="0px 16px 16px 16px"
          boxShadow={type === "pillar" ? "unset" : "0 10px 25px rgba(25, 118, 210, 0.5)"}
          height={type === "pillar" ? "224px" : "unset"}
        >
          {src ? (
            <Flex flexDirection={{ xs: "column", lg: "row" }}>
              <Box>
                <Box display={{ xs: "none", lg: "block" }} ml={type === "pillar" ? "-1rem" : 0}>
                  <Image src={src} alt={alt} height={height} width={width} />
                </Box>
                <Box mt={type === "pillar" ? 0 : { lg: "2.0rem" }}>
                  <Flex alignItems="center">
                    <Flex
                      p={{ xs: "0.5rem", lg: "1rem" }}
                      bg={type === "pillar" ? "white" : "secondary.500"}
                      borderRadius="0px 8px 8px 8px"
                    >
                      <Text
                        fontWeight="600"
                        color="darkblue.500"
                        fontSize={{ xs: "1.2rem", lg: "1.4rem" }}
                        lineHeight={{ xs: "1.4rem", lg: "1.6rem" }}
                      >
                        {discount}
                      </Text>
                    </Flex>
                    <Text
                      ml="0.8rem"
                      fontWeight={type === "pillar" ? "700" : "600"}
                      color="darkblue.500"
                      fontSize={
                        type === "pillar"
                          ? { xs: "1.5rem", lg: "32px" }
                          : { xs: "1.5rem", lg: "1.8rem" }
                      }
                      lineHeight={{ xs: "1.8rem", lg: "2.1rem" }}
                    >
                      {title}
                    </Text>
                  </Flex>
                </Box>
                <Box mt="1.1rem">
                  <Text
                    fontWeight={type === "pillar" ? "normal" : "300"}
                    color="darkblue.500"
                    fontSize={
                      type === "pillar"
                        ? { xs: "1.3rem", lg: "20px" }
                        : { xs: "1.3rem", lg: "1.5rem" }
                    }
                    lineHeight={{ xs: "1.5rem", lg: "2rem" }}
                    ml="6rem"
                  >
                    {description}
                  </Text>
                </Box>
              </Box>
              <Box ml={{ lg: "auto" }}>
                <Button
                  variant="action"
                  bg="darkblue.500"
                  width="15.6rem"
                  mt={{ xs: "1.6rem", lg: "8rem" }}
                  height="4rem"
                >
                  Help mij
                </Button>
              </Box>
            </Flex>
          ) : (
            <Flex alignItems="center" flexDirection="column">
              <Box
                position="absolute"
                top={{ lg: "-14.4rem" }}
                left={{ lg: "45%" }}
                height={{ lg: "47.4rem" }}
                width={{ lg: "47.4rem" }}
                display={{ xs: "none", lg: "block" }}
              >
                <Image
                  src="/images/comparison-card.svg"
                  alt="card-image"
                  height={474}
                  width={474}
                  objectFit="contain"
                />
              </Box>

              <Text
                mt={{ lg: "4rem" }}
                fontWeight={type === "pillar" ? "700" : "600"}
                color="darkblue.500"
                fontSize={{ xs: "1.6rem", lg: "3.2rem" }}
                lineHeight={{ xs: "1.9rem", lg: "2.1rem" }}
                zIndex={3}
              >
                {title}
              </Text>
              <Text
                fontWeight={type === "pillar" ? "normal" : "300"}
                color="darkblue.500"
                fontSize={{ xs: "1.3rem", lg: "2rem" }}
                lineHeight={{ xs: "1.5rem", lg: "2rem" }}
                mt={{ xs: "0.8rem", lg: "2.2rem" }}
                zIndex={3}
              >
                {description}
              </Text>
              <Box
                position="absolute"
                mt="-4.2rem"
                display={{ xs: "block", lg: "none" }}
                zIndex={2}
              >
                <Image
                  src="/images/comparison-card.svg"
                  alt="card-image"
                  height={255}
                  width={255}
                />
              </Box>
              <Button
                zIndex={3}
                variant="action"
                bg="darkblue.500"
                width={{ xs: "100%", lg: "15.6rem" }}
                mt={{ xs: "7.5rem", lg: "3.2rem" }}
                height="4rem"
              >
                Help mij
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    </>
  );
};
