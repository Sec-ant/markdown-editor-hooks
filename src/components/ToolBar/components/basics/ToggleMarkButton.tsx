import { type FC, type PropsWithChildren } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import { type Attrs } from "prosemirror-model";
import { useToggleMark } from "#hooks/useToggleMark";

export interface ToggleMarkButtonProps {
  markName: string;
  attrs?: Attrs | null;
  supportEmptySelection?: boolean;
  value: string;
  ariaLabel?: string;
  tooltip?: string;
}

const ToggleMarkButton: FC<PropsWithChildren<ToggleMarkButtonProps>> = ({
  markName,
  attrs,
  supportEmptySelection = true,
  value,
  ariaLabel = value,
  tooltip = value,
  children,
}) => {
  const { run, canRun, isActive } = useToggleMark({
    markName,
    attrs,
    supportEmptySelection,
  });

  return (
    <Tooltip title={tooltip} arrow>
      <span>
        <ToggleButton
          value={value}
          aria-label={ariaLabel}
          onClick={run}
          disabled={!canRun}
          aria-disabled={!canRun}
          selected={isActive}
        >
          {children}
        </ToggleButton>
      </span>
    </Tooltip>
  );
};

export default ToggleMarkButton;
