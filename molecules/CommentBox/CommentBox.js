import React from "react";
import { Box, Text, Flex, Grid } from "atoms";
import LikeIcon from "public/assets/icons/LikeIcon";
import CommentIcon from "public/assets/icons/CommentIcon";
import MemoMore from "public/assets/icons/More";

export const CommentBox = ({ name, time, msg }) => {
  return (
    <>
      <Box pt="2rem" pb="0.7rem" borderBottom="0.2rem solid" borderColor="gray.500">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="1.8rem" lineHeight="2.7rem" color="darkblue.500">
            {name}
          </Text>
          <Box cursor="pointer">
            <MemoMore height="4px" width="1.6rem" fill="blue" />
          </Box>
        </Flex>
        <Text pt="2px" pb="1rem" color="gray.300" fontSize="1.5rem" lineHeight="2rem">
          {time} ago
        </Text>
        <Text py=".8rem" fontSize="1.5rem" lineHeight="2rem" color="darkblue.500">
          {msg}
        </Text>
      </Box>
      <Flex justifyContent="space-between" my="2.4rem">
        <Flex>
          <Flex cursor="pointer">
            <LikeIcon />
            <Text pl="0.7rem" fontSize="1.4rem" color="gray.300">
              41
            </Text>
          </Flex>
          <Flex ml="3.9rem" cursor="pointer">
            <CommentIcon />
            <Text whiteSpace="nowrap" pl="0.7rem" fontSize="1.4rem" color="gray.300">
              1 reply
            </Text>
          </Flex>
        </Flex>
        <Text cursor="pointer" color="primary.500" fontWeight="bold" fontSize="1.6rem">
          Reply
        </Text>
      </Flex>
    </>
  );
};
