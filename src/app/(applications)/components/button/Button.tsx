"use client";
import classNames from "classnames";
import React, { FC } from "react";
import IconLoading from "../icons/Loading";
import "./Button.scss";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  background?: string;
  rounded?: "sm" | "md" | "lg";
};

const AppButton: FC<Props> = ({
  className = "",
  size = "md",
  rounded = "sm",
  loading = false,
  background = "aqua",
  color = "black",
  children,
  style,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{ background, color, ...style }}
      className={classNames("button", `button--${size}`, className, {
        "button--loading": loading,
      })}
    >
      {loading ? <IconLoading height={20} width={20} /> : children}
    </button>
  );
};

export default AppButton;
