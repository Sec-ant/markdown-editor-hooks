import { type FC, type PropsWithChildren } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";
import { type Attrs } from "prosemirror-model";
import { useSetBlockNode } from "#hooks/useSetBlockNode";

export interface SetBlockNodeButtonProps {
  nodeName: string;
  attrs?: Attrs | null;
  value: string;
  ariaLabel?: string;
  tooltip?: string;
}

const SetBlockNodeButton: FC<PropsWithChildren<SetBlockNodeButtonProps>> = ({
  nodeName,
  attrs,
  value,
  ariaLabel = value,
  tooltip = value,
  children,
}) => {
  const { run, canRun, isActive } = useSetBlockNode({
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
          selected={isActive}
        >
          {children}
        </ToggleButton>
      </span>
    </Tooltip>
  );
};

export default SetBlockNodeButton;
