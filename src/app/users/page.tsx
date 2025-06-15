"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import { useToast } from "../(applications)/components/toast/Toast";
import { useAppSelector } from "../(applications)/hooks/store.hooks";

const UserContianer = dynamic(
  () => import("@/app/users/(core)/components/container/Container"),
  { ssr: false }
);
const UserPage = () => {
  const { addToast } = useToast();
  const error = useAppSelector((state) => state.user.data.error);
  useEffect(() => {
    if (error) addToast({ message: error, type: "error" });
  }, [error]);

  return (
    <Suspense>
      <UserContianer />
    </Suspense>
  );
};

export default UserPage;
