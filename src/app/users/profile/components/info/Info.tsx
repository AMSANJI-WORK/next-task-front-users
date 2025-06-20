import React, { FC, useEffect, useMemo } from "react";
import ProfileLebelValue from "../label/Label";
import "./Info.scss";
import Image from "next/image";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/(applications)/hooks/store.hooks";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/(applications)/components/toast/Toast";
import { getFlagImageUrl } from "@/app/users/(core)/helper/users.helper";
import AppButton from "@/app/(applications)/components/button/Button";
import { setUserState } from "@/app/users/(core)/store/user.slice";
import IconStarFill from "@/app/(applications)/components/icons/StarFill";
import IconStarOutline from "@/app/(applications)/components/icons/Star";
import { useUser } from "@/app/users/(core)/hooks/user.hook";

const ProfileInfo = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const { isInFavoriteItems, handleModifyFavorite } = useUser();
  const selected = useAppSelector((state) => state.user.data.selected);
  const data = useMemo(
    () => JSON.parse(localStorage?.selected) || selected || {},
    [selected]
  );

  const fullname = useMemo(
    () => `${data.name?.title} . ${data.name?.first} ${data.name?.last}`,
    [data]
  );
  const birthdate = useMemo(
    () => data.dob?.date.split("T")[0],
    [data.dob?.date]
  );
  const address = useMemo(
    () =>
      `${data.location?.city} , ${data.location?.street?.name} , ${data.location?.street?.number}`,
    [data.location]
  );
  const isSelectedEmpty = () =>
    ((JSON.stringify(selected) === "{}" || !selected) &&
      localStorage?.selected === "{}") ||
    !localStorage?.selected;
  useEffect(() => {
    if (isSelectedEmpty()) {
      router.replace("/users");
      addToast({ message: "No user exist !", type: "error" });
    }
  }, []);

  return (
    <div className="container profile__wrapper">
      <ProfileLebelValue label="" className="hidden hidden--lg" />
      <ProfileLebelValue label="" classNameValue="profile__image__container">
        <Image
          alt={fullname}
          className="profile__image"
          src={data.picture?.large || null}
          width={100}
          height={100}
        />
        <AppButton size="sm" onClick={() => handleModifyFavorite(data)}>
          {isInFavoriteItems(data) ? (
            <IconStarFill width={24} height={24} />
          ) : (
            <IconStarOutline width={24} height={24} />
          )}
        </AppButton>
      </ProfileLebelValue>
      <ProfileLebelValue label="" className="hidden hidden--sm" />
      <ProfileLebelValue label="full name">{fullname}</ProfileLebelValue>
      <ProfileLebelValue label="email">{data.email}</ProfileLebelValue>
      <ProfileLebelValue label="gender">{data.gender}</ProfileLebelValue>
      <ProfileLebelValue label="birth date">{birthdate}</ProfileLebelValue>
      <ProfileLebelValue label="age">{data.dob?.age}</ProfileLebelValue>
      <ProfileLebelValue label="cell">{data.cell}</ProfileLebelValue>
      <ProfileLebelValue label="phone">{data.phone}</ProfileLebelValue>
      <ProfileLebelValue label="country">
        <Image
          alt={data.location.country}
          src={getFlagImageUrl(data.nat)}
          width={20}
          height={12}
          loading="lazy"
        />{" "}
        {""}
        {data.location?.country}
      </ProfileLebelValue>
      <ProfileLebelValue label="state">
        {data.location?.state}
      </ProfileLebelValue>
      <ProfileLebelValue label="address">{address}</ProfileLebelValue>
      <ProfileLebelValue label="postcode">
        {data.location?.postcode}
      </ProfileLebelValue>
      <ProfileLebelValue label="timezone">
        {data.location?.timezone?.description}
      </ProfileLebelValue>
    </div>
  );
};

export default ProfileInfo;
