import {
  useEditorEventCallback,
  useEditorState,
} from "@handlewithcare/react-prosemirror";
import { wrapIn } from "prosemirror-commands";
import { type Attrs } from "prosemirror-model";

export interface UseWrapInNodeOptions {
  nodeName: string;
  attrs?: Attrs | null;
}

export interface UseWrapInNodeReturn {
  run: () => void;
  canRun: boolean;
}

export const useWrapInNode = ({
  nodeName,
  attrs,
}: UseWrapInNodeOptions): UseWrapInNodeReturn => {
  const editorState = useEditorState();
  const {
    schema: {
      nodes: { [nodeName]: nodeType },
    },
  } = editorState;

  const command = wrapIn(nodeType, attrs);

  const run = useEditorEventCallback((view) => {
    command(view.state, view.dispatch.bind(view), view);
    view.focus();
  });

  const canRun = command(editorState);

  return { run, canRun };
};
