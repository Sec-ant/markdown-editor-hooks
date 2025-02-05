import { type FC } from "react";
import ParagraphIcon from "@mui/icons-material/Title";
import SetBlockNodeButton from "./basics/SetBlockNodeButton";

const SetParagraphButton: FC = () => {
  return (
    <SetBlockNodeButton
      nodeName="paragraph"
      value="normal"
      ariaLabel="normal"
      tooltip="Normal"
    >
      <ParagraphIcon />
    </SetBlockNodeButton>
  );
};

export default SetParagraphButton;
