import { type FC } from "react";
import StrikeThroughIcon from "@mui/icons-material/FormatStrikethrough";
import ToggleMarkButton from "./basics/ToggleMarkButton";

const ToggleStrikeThroughButton: FC = () => {
  return (
    <ToggleMarkButton
      markName="strikethrough"
      value="strikethrough"
      ariaLabel="strikethrough"
      tooltip="Strike through"
    >
      <StrikeThroughIcon />
    </ToggleMarkButton>
  );
};

export default ToggleStrikeThroughButton;
