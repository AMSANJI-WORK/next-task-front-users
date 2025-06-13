import React, { FC, PropsWithChildren } from "react";
import "./label.scss";
type Props = {
  label: string;
};

const ProfileLebelValue: FC<PropsWithChildren<Props>> = ({
  label,
  children,
}) => {
  return (
    <div className="label--container">
      <div className="label--title">{label}</div>
      <div className="label--value">{children}</div>
    </div>
  );
};

export default ProfileLebelValue;
