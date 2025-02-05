import { type FC, useMemo } from "react";
import Heading1Icon from "@material-symbols/svg-400/outlined/format_h1.svg?react";
import Heading2Icon from "@material-symbols/svg-400/outlined/format_h2.svg?react";
import Heading3Icon from "@material-symbols/svg-400/outlined/format_h3.svg?react";
import Heading4Icon from "@material-symbols/svg-400/outlined/format_h4.svg?react";
import Heading5Icon from "@material-symbols/svg-400/outlined/format_h5.svg?react";
import Heading6Icon from "@material-symbols/svg-400/outlined/format_h6.svg?react";
import SetBlockNodeButton from "./basics/SetBlockNodeButton";

interface SetHeadingButtonProps {
  level?: number;
}

const SetHeadingButton: FC<SetHeadingButtonProps> = ({ level = 1 }) => {
  const attrs = useMemo(() => ({ level }), [level]);

  const icon = useMemo(
    () =>
      level === 1 ? <Heading1Icon width={24} height={24} />
      : level === 2 ? <Heading2Icon width={24} height={24} />
      : level === 3 ? <Heading3Icon width={24} height={24} />
      : level === 4 ? <Heading4Icon width={24} height={24} />
      : level === 5 ? <Heading5Icon width={24} height={24} />
      : level === 6 ? <Heading6Icon width={24} height={24} />
      : null,
    [level],
  );

  return (
    <SetBlockNodeButton
      nodeName="heading"
      attrs={attrs}
      value={`heading${level}`}
      ariaLabel={`heading${level}`}
      tooltip={`Heading ${level}`}
    >
      {icon}
    </SetBlockNodeButton>
  );
};

export default SetHeadingButton;
