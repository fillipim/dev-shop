import {
  Flex,
  Heading,
  Link as ChakraLink,
  Menu,
  Portal,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { ColorModeButton } from "../ui/color-mode";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <Flex
      as="header"
      boxShadow="lg"
      justifyContent="space-between"
      p="1rem"
      align="center"
    >
      <Heading as="h1">Dev Shop</Heading>
      <Flex as="ul" gap="1rem" display={{ base: "none", sm: "flex" }}>
        <li>
          <Link href="/">Categorias</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Sobre Nós</Link>
        </li>
      </Flex>
      <Flex align="center" gap="1rem" display={{ base: "none", sm: "flex" }}>
        <ColorModeButton />
        <ChakraLink href="/login" as={Link}>
          Login
        </ChakraLink>
        <ChakraLink
          backgroundColor="#fff"
          p="0.5rem"
          color="#000"
          href="/register"
          as={Link}
        >
          Cadastrar
        </ChakraLink>
      </Flex>

      <Menu.Root>
        <Menu.Trigger display={{ base: "block", sm: "none" }}>
          <Center>
            <FaBars />
          </Center>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {menuItems.map((group, index) => {
                return (
                  <Menu.ItemGroup key={index}>
                    <Menu.ItemGroupLabel>{group.label}</Menu.ItemGroupLabel>

                    {group.links.map((link, index) => (
                      <Menu.Item key={index + link.label} value="">
                        <Link href={link.link}>{link.label}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.ItemGroup>
                );
              })}
              <ColorModeButton />
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default Header;

const menuItems = [
  {
    label: "Links",
    links: [
      {
        label: "Categorias",
        link: "/categories",
      },
      {
        label: "Home",
        link: "/",
      },
      {
        label: "Sobre Nós",
        link: "/about",
      },
    ],
  },
  {
    label: "Autenticação",
    links: [
      {
        label: "Login",
        link: "/login",
      },
      {
        label: "Cadastro",
        link: "/register",
      },
    ],
  },
];
