import { twMerge } from "tailwind-merge";
import { inter, newsreader } from "../fonts";
import React from "react";

export function Text({
  as: Component = "span",
  className,
  variant = "primary",
  fontType = "sans",
  children,
  ...props
}) {
  const baseClass = `tracking-widest leading-10`;
  // Define your text variants
  const variants = {
    primary: `${baseClass} text-md `,
    brand: `${baseClass} text-4xl`,
  };
  const fontTypes = {
    sans: inter.className,
    serif: newsreader.className,
  };

  // Merge the base and variant classes using twmerge
  const classes = twMerge(
    "text",
    variants[variant],
    fontTypes[fontType],
    className
  );

  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );
}
