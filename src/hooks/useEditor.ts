import { useCallback, useState } from "react";
import { reactKeys } from "@handlewithcare/react-prosemirror";
import {
  EditorState,
  type EditorStateConfig,
  type Transaction,
} from "prosemirror-state";

interface useEditorOptions {
  editorStateConfig: EditorStateConfig;
}

export const useEditor = ({
  editorStateConfig: { plugins, ...restConfig },
}: useEditorOptions) => {
  const [editorState, setEditorState] = useState(
    EditorState.create({
      ...restConfig,
      plugins: [...(plugins ?? []), reactKeys()],
    }),
  );

  const handleDispatch = useCallback(
    (tr: Transaction) => {
      setEditorState((s) => s.apply(tr));
    },
    [setEditorState],
  );

  return {
    editorState,
    handleDispatch,
  };
};
