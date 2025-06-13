import React from "react";
import { getRandomProfile } from "./profile.actions";
import ProfileInfo from "./components/info/Info";

const ProfilePage = async () => {
  const res = await getRandomProfile();
  if (!res.ok) return "There was an error.";
  const { data } = res;
  return <ProfileInfo data={data!} />;
};

export default ProfilePage;
