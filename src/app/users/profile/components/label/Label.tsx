import React, { FC, PropsWithChildren } from "react";
import "./label.scss";
import classNames from "classnames";
type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  className?: string;
  classNameValue?: string;
};

const ProfileLebelValue: FC<PropsWithChildren<Props>> = ({
  label,
  children,
  classNameValue = "",
  className = "",
  ...props
}) => {
  return (
    <div {...props} className={classNames("label__container", className)}>
      <div className="label__title">{label}</div>
      <div className={classNames("label__value", classNameValue)}>
        {children}
      </div>
    </div>
  );
};

export default ProfileLebelValue;
