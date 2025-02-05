import { type FC } from "react";
import BulletListIcon from "@mui/icons-material/FormatListBulleted";
import WrapInListButton from "./basics/WrapInListButton";

const WrapInBulletListButton: FC = () => {
  return (
    <WrapInListButton
      nodeName="bullet_list"
      value="bulletlist"
      ariaLabel="bulletlist"
      tooltip="Bullet list"
    >
      <BulletListIcon />
    </WrapInListButton>
  );
};

export default WrapInBulletListButton;
