import React from "react";
import { Box, Grid, Text, Image, Button } from "atoms";

export const BlogExactQuoteCard = ({ src, alt, width, height, body1, body2, get_quote_button }) => {
  return (
    <>
      <Grid
        mb={{ xs: "2rem", lg: "3rem" }}
        gridTemplateColumns={{ xs: "1fr", lg: "1fr 2fr" }}
        gridGap={{ xs: "5.4rem", lg: "3rem" }}
      >
        <Grid
          gridTemplateColumns="auto"
          border="1px solid rgba(83, 87, 101,0.4)"
          borderRadius="8px"
        >
          <Box
            pt={{ xs: "8rem", lg: "2rem" }}
            pb={{ xs: "8rem", lg: "5.4rem" }}
            mx={{ xs: "10.6rem", lg: "8.2rem" }}
          >
            <Image src={src} alt={alt} height={height} width={width} />
          </Box>
          <Button variant="primary" height="4rem" mt="6.9rem">
            {get_quote_button.name}
          </Button>
        </Grid>

        <Box>
          {" "}
          <Text
            fontWeight="300"
            color="darkblue.500"
            fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
            lineHeight={{ xs: "2.4rem", lg: "2.2rem" }}
          >
            {body1}
          </Text>
          <Box pt="2.5rem" display={{ xs: "block", lg: "none" }}>
            <Text
              fontWeight="300"
              color="darkblue.500"
              fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
              lineHeight={{ xs: "2.4rem", lg: "2.2rem" }}
            >
              {body2}{" "}
            </Text>
          </Box>
        </Box>
      </Grid>
    </>
  );
};
