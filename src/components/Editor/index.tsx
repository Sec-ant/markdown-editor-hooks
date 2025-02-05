import { type FC, type PropsWithChildren } from "react";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { history, redo, undo } from "prosemirror-history";
import { keymap } from "prosemirror-keymap";
import { GFMExtension, MarkdownExtension } from "prosemirror-remark";
import { ProseMirrorUnified } from "prosemirror-unified";
import { useEditor } from "#hooks/useEditor";
import "./style.css";

const pmu = new ProseMirrorUnified([
  new MarkdownExtension(),
  new GFMExtension(),
]);
const schema = pmu.schema();

const Editor: FC<PropsWithChildren> = ({ children }) => {
  const { editorState, handleDispatch } = useEditor({
    editorStateConfig: {
      schema,
      plugins: [
        history(),
        pmu.inputRulesPlugin(),
        pmu.keymapPlugin(),
        keymap({
          "Mod-z": undo,
          "Mod-y": redo,
        }),
      ],
    },
  });

  return (
    <ProseMirror state={editorState} dispatchTransaction={handleDispatch}>
      {children}
      <ProseMirrorDoc />
    </ProseMirror>
  );
};

export default Editor;
