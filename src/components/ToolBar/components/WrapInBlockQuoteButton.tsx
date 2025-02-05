import { type FC } from "react";
import BlockQuoteIcon from "@mui/icons-material/FormatQuote";
import WrapInNodeButton from "./basics/WrapInNodeButton";

const WrapInBlockQuoteButton: FC = () => {
  return (
    <WrapInNodeButton
      nodeName="blockquote"
      value="blockquote"
      ariaLabel="blockquote"
      tooltip="Block quote"
    >
      <BlockQuoteIcon />
    </WrapInNodeButton>
  );
};

export default WrapInBlockQuoteButton;
