import { User } from "@/app/users/(core)/model/users.model";
import React, { FC } from "react";
import "./Info.scss";
import ProfileLebelValue from "../label/Label";
type Props = {
  data: User;
};

const ProfileInfo: FC<Props> = ({ data }) => {
  return (
    <div className="container profile--wrapper">
      <ProfileLebelValue label="email">{data.email}</ProfileLebelValue>
    </div>
  );
};

export default ProfileInfo;
