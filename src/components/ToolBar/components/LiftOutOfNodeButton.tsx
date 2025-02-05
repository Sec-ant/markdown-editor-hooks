import { type FC } from "react";
import LiftOutOfNodeIcon from "@mui/icons-material/FormatIndentDecrease";
import InnerLiftOutOfNodeButton from "./basics/LiftOutOfNodeButton";

const LiftOutOfNodeButton: FC = () => {
  return (
    <InnerLiftOutOfNodeButton
      value="liftout"
      ariaLabel="liftout"
      tooltip="Lift out"
    >
      <LiftOutOfNodeIcon />
    </InnerLiftOutOfNodeButton>
  );
};

export default LiftOutOfNodeButton;
