import { User } from "@prisma/client";
import React from "react";
import { Avatar } from "./ui/avatar";
import Image from "next/image";
import { AvatarFallback } from "@radix-ui/react-avatar";

type Props = {
  user: Pick<User, "image">;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user?.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image fill src={user.image} alt="profile imange" />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
