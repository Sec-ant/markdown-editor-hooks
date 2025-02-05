import {
  useEditorEventCallback,
  useEditorState,
} from "@handlewithcare/react-prosemirror";
import { type Attrs } from "prosemirror-model";
import { wrapInList } from "prosemirror-schema-list";

export interface UseWrapInListOptions {
  nodeName: string;
  attrs?: Attrs | null;
}

export interface UseWrapInListReturn {
  run: () => void;
  canRun: boolean;
}

export const useWrapInList = ({
  nodeName,
  attrs,
}: UseWrapInListOptions): UseWrapInListReturn => {
  const editorState = useEditorState();
  const {
    schema: {
      nodes: { [nodeName]: nodeType },
    },
  } = editorState;

  const command = wrapInList(nodeType, attrs);

  const run = useEditorEventCallback((view) => {
    command(view.state, view.dispatch.bind(view), view);
    view.focus();
  });

  const canRun = command(editorState);

  return { run, canRun };
};
