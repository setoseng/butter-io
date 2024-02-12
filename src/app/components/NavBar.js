"use client";
import { useState } from "react";
import { Text } from "./Text";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from "@nextui-org/react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Newstand", link: "/newstand" },
    { name: "Who We Are", link: "/whoweare" },
    { name: "Our Profile", link: "/ourprofile" },
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex sm:hidden text-black"
          />
          <NavbarBrand>
            <Link href="/">
              <Text variant="brand" fontType="serif" className="text-primary">
                Butter
              </Text>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex gap-5">
          <NavbarItem>
            <Link href="/">
              <Text className="text-lg">Newstand</Text>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/whoweare" aria-current="page">
              <Text className="text-lg">Who We Are</Text>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/">
              <Text className="text-lg">Our Profile</Text>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/predict"
              radius="sm"
              className="py-6 px-6"
            >
              <Text variant="primary" className="text-lg text-white">
                Predict
              </Text>
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobil View */}
        <NavbarContent justify="end" className="flex sm:hidden gap-5">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/predict"
              radius="none"
              className="py-4 px-4 rounded"
            >
              <Text variant="primary" className="text-lg text-white">
                Predict
              </Text>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="primary"
                className="w-full"
                href={`${item.link}`}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
