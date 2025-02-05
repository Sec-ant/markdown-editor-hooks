import { type FC, type PropsWithChildren } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import { type Attrs } from "prosemirror-model";
import { useWrapInNode } from "#hooks/useWrapInNode";

export interface WrapInNodeButtonProps {
  nodeName: string;
  attrs?: Attrs | null;
  value: string;
  ariaLabel?: string;
  tooltip?: string;
}

const WrapInNodeButton: FC<PropsWithChildren<WrapInNodeButtonProps>> = ({
  nodeName,
  attrs,
  value,
  ariaLabel = value,
  tooltip = value,
  children,
}) => {
  const { run, canRun } = useWrapInNode({
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

export default WrapInNodeButton;
