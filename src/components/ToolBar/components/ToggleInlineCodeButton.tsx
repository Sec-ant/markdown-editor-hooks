import { type FC } from "react";
import InlineCodeIcon from "@mui/icons-material/Code";
import ToggleMarkButton from "./basics/ToggleMarkButton";

const ToggleInlineCodeButton: FC = () => {
  return (
    <ToggleMarkButton
      markName="code"
      supportEmptySelection={false}
      value="inlinecode"
      ariaLabel="inlinecode"
      tooltip="Inline code"
    >
      <InlineCodeIcon />
    </ToggleMarkButton>
  );
};

export default ToggleInlineCodeButton;
