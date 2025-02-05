import {
  useEditorEventCallback,
  useEditorState,
} from "@handlewithcare/react-prosemirror";
import { lift as command } from "prosemirror-commands";

export interface UseLiftOutOfNodeReturn {
  run: () => void;
  canRun: boolean;
}

export const useLiftOutOfNode = (): UseLiftOutOfNodeReturn => {
  const editorState = useEditorState();

  const run = useEditorEventCallback((view) => {
    command(view.state, view.dispatch.bind(view), view);
    view.focus();
  });

  const canRun = command(editorState);

  return { run, canRun };
};
