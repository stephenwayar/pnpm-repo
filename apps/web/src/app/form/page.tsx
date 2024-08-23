import React from "react";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form"
};

export default function Form() {
  return (
    <div>
      <Flex justifyContent='center'>
        Form Page
      </Flex>
    </div>
  );
}