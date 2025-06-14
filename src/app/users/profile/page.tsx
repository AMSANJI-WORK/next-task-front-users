"use client";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { setUserState } from "../(core)/store/user.slice";
const ProfileInfo = dynamic(() => import("./components/info/Info"), {
  ssr: false,
});

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(setUserState({ selected: {} }));
    };
  }, []);

  return <ProfileInfo />;
};

export default ProfilePage;
