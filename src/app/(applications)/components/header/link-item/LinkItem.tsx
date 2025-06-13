"use client";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren } from "react";

const HeaderLinkItem: FC<
  PropsWithChildren<
    LinkProps & {
      className?: string;
    }
  >
> = ({ className = "", children, ...props }) => {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={classNames("nav-item", className, {
        "nav-item--active": pathname === props.href,
      })}
    >
      {children}
    </Link>
  );
};

export default HeaderLinkItem;
