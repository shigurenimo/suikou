import { FC } from "react";
import { toPublicPath } from "@/app/utils/toPublicPath";

type Props = {
  alt: string;
  src: string;
};

export const BoxImage: FC<Props> = (props) => {
  return (
    <div>
      <img
        className={"h-auto w-full max-w-md"}
        alt={props.alt}
        src={toPublicPath(props.src)}
        loading="lazy"
      />
    </div>
  );
};
