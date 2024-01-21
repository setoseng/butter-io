import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function Button({
  className,
  variant = "primary",
  as = "button",
  children,
  ...props
}) {
  const Component = props?.href ? Link : as;
  const baseClass =
    "inline-flex rounded text-center items-center py-3 px-6 rounded bg-primary";
  const variants = {
    primary: `${baseClass} bg-primary`,
    secondary: `${baseClass} bg-secondary`,
    // Add more variants here
  };

  const classes = twMerge(variants[variant], className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
