import { type FC } from "react";
import StrongIcon from "@mui/icons-material/FormatBold";
import ToggleMarkButton from "./basics/ToggleMarkButton";

const ToggleStrongButton: FC = () => {
  return (
    <ToggleMarkButton
      markName="strong"
      value="bold"
      ariaLabel="bold"
      tooltip="Bold"
    >
      <StrongIcon />
    </ToggleMarkButton>
  );
};

export default ToggleStrongButton;
