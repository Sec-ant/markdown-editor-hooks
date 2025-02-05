import { type FC, type PropsWithChildren } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import { useLiftOutOfNode } from "#hooks/useLiftOutOfNode";

export interface LiftOutOfNodeButtonProps {
  value: string;
  ariaLabel?: string;
  tooltip?: string;
}

const LiftOutOfNodeButton: FC<PropsWithChildren<LiftOutOfNodeButtonProps>> = ({
  value,
  ariaLabel = value,
  tooltip = value,
  children,
}) => {
  const { run, canRun } = useLiftOutOfNode();

  return (
    <Tooltip title={tooltip} arrow>
      <span>
        <ToggleButton
          value={value}
          aria-label={ariaLabel}
          onClick={run}
          disabled={!canRun}
          aria-disabled={!canRun}
        >
          {children}
        </ToggleButton>
      </span>
    </Tooltip>
  );
};

export default LiftOutOfNodeButton;
