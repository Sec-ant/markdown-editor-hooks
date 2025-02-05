import {
  useEditorEventCallback,
  useEditorState,
} from "@handlewithcare/react-prosemirror";
import { setBlockType } from "prosemirror-commands";
import { type Attrs } from "prosemirror-model";
import {
  type EditorState,
  type NodeSelection,
  type Selection,
} from "prosemirror-state";

export interface UseSetBlockNodeOptions {
  nodeName: string;
  attrs?: Attrs | null;
}

export interface UseSetBlockNodeReturn {
  run: () => void;
  canRun: boolean;
  isActive: boolean;
}

export const useSetBlockNode = ({
  nodeName,
  attrs,
}: UseSetBlockNodeOptions): UseSetBlockNodeReturn => {
  const editorState = useEditorState();
  const {
    schema: {
      nodes: { [nodeName]: nodeType },
    },
    selection: { $from, to, node },
  } = editorState as EditorState & {
    selection: (Selection & { node: undefined }) | NodeSelection;
  };

  const command = setBlockType(nodeType, attrs);

  const run = useEditorEventCallback((view) => {
    command(view.state, view.dispatch.bind(view), view);
    view.focus();
  });

  const canRun = command(editorState);

  const isActive =
    node ?
      node.hasMarkup(nodeType, attrs)
    : to <= $from.end() && $from.parent.hasMarkup(nodeType, attrs);

  return { run, canRun, isActive };
};
