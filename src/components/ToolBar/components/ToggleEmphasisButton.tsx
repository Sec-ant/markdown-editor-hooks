import { type FC } from "react";
import EmphasisIcon from "@mui/icons-material/FormatItalic";
import ToggleMarkButton from "./basics/ToggleMarkButton";

const ToggleEmphasisButton: FC = () => {
  return (
    <ToggleMarkButton
      markName="em"
      value="italic"
      ariaLabel="italic"
      tooltip="Italic"
    >
      <EmphasisIcon />
    </ToggleMarkButton>
  );
};

export default ToggleEmphasisButton;
