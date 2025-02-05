import { type FC, type PropsWithChildren } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import { type Attrs } from "prosemirror-model";
import { useWrapInList } from "#hooks/useWrapInList";

export interface WrapInListButtonProps {
  nodeName: string;
  attrs?: Attrs | null;
  value: string;
  ariaLabel?: string;
  tooltip?: string;
}

const WrapInListButton: FC<PropsWithChildren<WrapInListButtonProps>> = ({
  nodeName,
  attrs,
  value,
  ariaLabel = value,
  tooltip = value,
  children,
}) => {
  const { run, canRun } = useWrapInList({
    nodeName,
    attrs,
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
        >
          {children}
        </ToggleButton>
      </span>
    </Tooltip>
  );
};

export default WrapInListButton;
