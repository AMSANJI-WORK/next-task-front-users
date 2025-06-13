import React, { FC } from "react";
import { User } from "../../model/users.model";
import Image from "next/image";
import { useAppDispatch } from "@/app/(applications)/hooks/store.hooks";
import { useRouter } from "next/navigation";
import { setUserState } from "../../store/user.slice";

type Props = {
  item: User;
};

const ListItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClick = () => {
    dispatch(setUserState({ selected: item }));
    router.push("/users/profile");
  };
  return (
    <li className="list-item" onClick={handleClick} key={item.login.uuid}>
      <div className="list-item--image--wrapper">
        <Image
          width={80}
          height={80}
          src={item.picture.medium}
          blurDataURL={item.picture.thumbnail}
          loading="lazy"
          alt={`${item.name.title} . ${item.name.first} ${item.name.last}`}
        />
        <div>
          <p>
            {item.name.first} {item.name.last}
          </p>
          <span>
            {item.login.username} / {item.gender}
          </span>
        </div>
      </div>
      <div>
        <div>{item.cell}</div>
        <div>{item.email}</div>
        <div className="list-item--address">
          {item.location.city} , {item.location.street.name} ,{" "}
          {item.location.street.name} {item.location.state}, {item.nat} ,{" "}
          {item.location.postcode} , {item.location.country}
        </div>
      </div>
    </li>
  );
};

export default ListItem;
