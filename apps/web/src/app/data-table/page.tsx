import React from "react";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Table"
};

export default function DataTable() {
  return (
    <div>
      <Flex justifyContent='center'>
        Data Table
      </Flex>
    </div>
  );
}