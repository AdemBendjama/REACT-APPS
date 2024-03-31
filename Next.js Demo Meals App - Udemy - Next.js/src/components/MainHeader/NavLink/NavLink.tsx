"use client";

import Link from "next/link";

import classes from "./NavLink.module.css";
import { usePathname } from "next/navigation";

function NavLink(props: { children: React.ReactNode; href: string }) {
  const path = usePathname();
  return (
    <Link
      href={props.href}
      className={
        path === props.href ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      {props.children}
    </Link>
  );
}

export default NavLink;
