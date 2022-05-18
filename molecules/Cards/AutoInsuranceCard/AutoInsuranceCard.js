import React from "react";
import { Field, Form, Formik } from "formik";
import { Box, Text, Flex, Button, Grid } from "atoms";
import MemoArrowWhite from "public/assets/icons/ArrowWhite";
import Image from "next/image";
import * as Yup from "yup";

const validationSchema = Yup.object({
  postcode: Yup.string(),
  huisnr: Yup.string(),
  toev: Yup.string(),
  geboortedatum: Yup.string(),
});

export const AutoInsuranceCard = () => {
  const onSubmit = {};
  return (
    <>
      <Box
        backgroundImage="linear-gradient(88.84deg, rgba(255, 214, 237, 0.6) 0%, rgba(205, 209, 255, 0.6) 100%)"
        borderRadius="1.6rem"
        boxShadow="0px 19px 40px rgba(25, 20, 83, 0.1)"
        width={{ lg: "28rem" }}
        p="2.4rem"
      >
        <Text
          fontSize={{ xs: "2rem", lg: "1.7rem" }}
          color="darkblue.500"
          fontWeight="800"
          lineHeight={{ xs: "2.7rem", lg: "2rem" }}
        >
          Find Cheap Auto Insurance Quotes in your area
        </Text>
        <Formik
          initialValues={{
            huisnr: "",
            postcode: "",
            toev: "",
            geboortedatum: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid
                gridTemplateColumns={{ xs: "1fr", md: "1fr" }}
                gridColumnGap="3.2rem"
                gridRowGap="1.6rem"
                mt="2.9rem"
              >
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="darkblue.500">
                    Kenteken
                  </Text>
                  <Box width={{ xs: "100%", lg: "100%" }}>
                    <Image src="/images/license-plate.svg" alt="plate" height={40} width={232} />
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="darkblue.500">
                    Postcode
                  </Text>
                  <Box mt="1.2rem">
                    <Field
                      type="text"
                      id="postcode"
                      name="postcode"
                      placeholder=""
                      className="home-input"
                    />
                    {errors.postcode && touched.postcode ? (
                      <Box
                        top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                        left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                      >
                        <Text
                          fontSize={{
                            xs: "1rem",
                            md: "1.2rem",
                            lg: "1rem",
                          }}
                          fontWeight={{ xs: "medium", md: "medium" }}
                          color="red.500"
                        >
                          {errors.postcode}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="darkblue.500">
                    Huisnr.
                  </Text>
                  <Box mt="1.2rem">
                    <Field
                      type="text"
                      id="toev"
                      name="toev"
                      placeholder=""
                      className="home-input"
                    />
                    {errors.toev && touched.toev ? (
                      <Box
                        top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                        left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                      >
                        <Text
                          fontSize={{
                            xs: "1rem",
                            md: "1.2rem",
                            lg: "1rem",
                          }}
                          fontWeight={{ xs: "medium", md: "medium" }}
                          color="red.500"
                        >
                          {errors.toev}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="darkblue.500">
                    Toev.
                  </Text>
                  <Box mt="1.2rem">
                    <Field
                      type="text"
                      id="huisnr"
                      name="huisnr"
                      placeholder=""
                      className="home-input"
                    />
                    {errors.huisnr && touched.huisnr ? (
                      <Box
                        top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                        left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                      >
                        <Text
                          fontSize={{
                            xs: "1rem",
                            md: "1.2rem",
                            lg: "1rem",
                          }}
                          fontWeight={{ xs: "medium", md: "medium" }}
                          color="red.500"
                        >
                          {errors.huisnr}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <Text fontWeight="800" fontSize="1.6rem" color="darkblue.500">
                    Geboortedatum
                  </Text>
                  <Box mt="1.2rem">
                    <Field
                      type="text"
                      id="geboortedatum"
                      name="geboortedatum"
                      placeholder="DD/MM/YYYY"
                      className="home-input"
                    />
                    {errors.geboortedatum && touched.geboortedatum ? (
                      <Box
                        top={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                        left={{ xs: "0rem", md: "0rem", lg: "0rem" }}
                      >
                        <Text
                          fontSize={{
                            xs: "1rem",
                            md: "1.2rem",
                            lg: "1rem",
                          }}
                          fontWeight={{ xs: "medium", md: "medium" }}
                          color="red.500"
                        >
                          {errors.geboortedatum}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <Button
                    mt="1.4rem"
                    variant="landing"
                    backgroundImage="linear-gradient(74.28deg, #381BC5 -2.89%, #CC63C7 53.72%, #EFCE89 111.52%)"
                    height="4.8rem"
                    width={{ xs: "100%", lg: "100%" }}
                    type="submit"
                  >
                    <Flex justifyContent="center" alignItems="center" cursor="pointer">
                      <Text pr="1rem">Vergelijken</Text>
                      <MemoArrowWhite fill="white" height="1.6rem" width="1.8rem" />
                    </Flex>
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
