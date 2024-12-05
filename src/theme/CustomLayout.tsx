import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@theme/Layout"; // Standard Docusaurus Layout

interface CustomLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <ChakraProvider>
      <Layout title={title} description={description}>
        {children}
      </Layout>
    </ChakraProvider>
  );
};

export default CustomLayout;
