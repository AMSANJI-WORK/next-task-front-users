import React, { FC, useMemo } from "react";
import { User, UserSecure } from "../../model/users.model";
import Image from "next/image";
import {
  useAppDispatch,
  useAppSelector,
} from "@/app/(applications)/hooks/store.hooks";
import { useRouter } from "next/navigation";
import { setUserState } from "../../store/user.slice";
import { getFlagImageUrl } from "../../helper/users.helper";
import AppButton from "@/app/(applications)/components/button/Button";
import IconStarOutline from "@/app/(applications)/components/icons/Star";
import IconStarFill from "@/app/(applications)/components/icons/StarFill";

type Props = {
  item: UserSecure;
};

const ListItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state) => state.user.data.favorite);
  const router = useRouter();
  const handleClick = () => {
    dispatch(setUserState({ selected: item }));
    localStorage.selected = JSON.stringify(item);
    router.push("/users/profile");
  };
  const handleModifyFavorite = () => {
    const newFavorites = favorite.filter(
      (user) => user.login.uuid !== item.login.uuid
    );
    localStorage.favorite = JSON.stringify(newFavorites);
    dispatch(
      setUserState({
        favorite: isInFavoriteItems ? newFavorites : [item, ...favorite],
      })
    );
  };
  const isInFavoriteItems = useMemo(
    () => favorite.find((user) => user.login.uuid === item.login.uuid),
    [favorite.length, item]
  );
  return (
    <li className="list__item" key={item.login.uuid}>
      <AppButton
        size="sm"
        onClick={handleModifyFavorite}
        className="list__item__favorite"
      >
        {isInFavoriteItems ? (
          <IconStarFill width={24} height={24} />
        ) : (
          <IconStarOutline width={24} height={24} />
        )}
      </AppButton>
      <div className="list__item__container" onClick={handleClick}>
        <div className="list__item__image__wrapper">
          <Image
            width={80}
            height={80}
            src={item.picture.medium}
            blurDataURL={item.picture.thumbnail}
            loading="lazy"
            alt={`${item.name.title} . ${item.name.first} ${item.name.last}`}
          />
          <div className="list__item__info">
            <p>
              {item.name.first} {item.name.last}
            </p>
            <span>
              {item.login.username} / {item.gender}
            </span>
          </div>
        </div>
        <div className="list__item__contact" onClick={handleClick}>
          <div className="list__item__contact__cell">{item.cell}</div>
          <div className="list__item__contact__email">{item.email}</div>
          <div>
            {item.location.city} , {item.location.street.name} ,{" "}
            {item.location.street.name} {item.location.state}, {item.nat} ,{" "}
            {item.location.postcode} , {item.location.country}
          </div>
        </div>
        <div className="list__item__country" onClick={handleClick}>
          <Image
            alt={item.location.country}
            src={getFlagImageUrl(item.nat)}
            width={20}
            height={12}
            loading="lazy"
          />
        </div>
      </div>
    </li>
  );
};

export default ListItem;
