import { twMerge } from "tailwind-merge";

export function Section({
  className,
  variant = "default",
  as: Component = "section",
  children,
  ...props
}) {
  const baseClass = "";
  const variants = {
    default: `${baseClass} px-5 sm:px-20 mt-10`,
    narrow: `${baseClass} px-16 sm:px-60 mt-10`,
    // Add more variants here
  };
  const classes = twMerge(variants[variant], className);
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
