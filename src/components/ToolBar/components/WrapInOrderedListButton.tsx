import { type FC } from "react";
import OrderedListIcon from "@mui/icons-material/FormatListNumbered";
import WrapInListButton from "./basics/WrapInListButton";

const WrapInOrderedListButton: FC = () => {
  return (
    <WrapInListButton
      nodeName="ordered_list"
      value="orderedlist"
      ariaLabel="orderedlist"
      tooltip="Ordered list"
    >
      <OrderedListIcon />
    </WrapInListButton>
  );
};

export default WrapInOrderedListButton;
