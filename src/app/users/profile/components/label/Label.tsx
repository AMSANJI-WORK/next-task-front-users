import React, { FC, PropsWithChildren } from "react";
import "./label.scss";
import classNames from "classnames";
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  className?: string;
};

const ProfileLebelValue: FC<PropsWithChildren<Props>> = ({
  label,
  children,
  className = "",
  ...props
}) => {
  return (
    <div {...props} className={classNames("label__container", className)}>
      <div className="label__title">{label}</div>
      <div className="label__value">{children}</div>
    </div>
  );
};

export default ProfileLebelValue;
