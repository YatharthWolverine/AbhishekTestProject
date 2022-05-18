import React from "react";

import { Box, Text, Flex } from "atoms";
import { CommentBox } from "molecules";

import MemoCross from "public/assets/icons/Cross";
import MemoDownArrow from "public/assets/icons/DownArrow";

export const CommentSection = ({ setShowComment }) => {
  return (
    <>
      <Box
        zIndex={5}
        position="fixed"
        bg="white"
        top={0}
        right={0}
        height="100vh"
        width={{ xs: "100vw", lg: "25vw" }}
        px="2.4rem"
      >
        <Box>
          <Flex
            py="2.4rem"
            borderBottom="0.1rem solid"
            borderColor="gray.500"
            justifyContent="space-between"
          >
            <Text fontWeight="bold" fontSize="1.8rem" lineHeight="2.178rem">
              Responces(12)
            </Text>
            <Box cursor="pointer" onClick={() => setShowComment(false)}>
              {" "}
              <MemoCross />
            </Box>
          </Flex>
          <Box pt="2.4rem" pb="1.9rem">
            <Box
              border="1px solid"
              borderRadius="0.4rem"
              borderColor="gray.50"
              color="gray.300"
              fontSize="1.5rem"
              lineHeight="2rem"
              p="2.4rem"
              mb="4rem"
            >
              What are your thoughts?
            </Box>

            <Flex alignItems="center" cursor="pointer" width="fit-content">
              <Text fontWeight="bold" fontSize="1.5rem" lineHeight="1.8rem" mr="1rem">
                All Comments
              </Text>
              <MemoDownArrow fill="black" />
            </Flex>
          </Box>
        </Box>

        <Box height="60vh" overflowY="auto" className="hide-scrollbar">
          <CommentBox
            name="Brent Tunney"
            time="one month"
            msg="Thanks for the stimulating article Michael. Got me thinking.
                I think of UX as a subset of Design.
                Design is not merely decoration. Design always solves a specific problem for a specific person. A more elegant (good looking?) solution provides a more…..."
          />
          <CommentBox
            name="Alicia Hrenger"
            time="one month"
            msg="Thanks for the stimulating article Michael. Got me thinking."
          />
          <CommentBox
            name="Tomas Ferris"
            time="one month"
            msg="Thanks for the stimulating article Michael. Got me thinking."
          />
        </Box>
      </Box>
    </>
  );
};
