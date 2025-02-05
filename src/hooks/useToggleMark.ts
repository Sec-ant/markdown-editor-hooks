import {
  useEditorEventCallback,
  useEditorState,
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { type Attrs } from "prosemirror-model";

export type ToggleMarkOptions = Omit<
  Exclude<Parameters<typeof toggleMark>[2], undefined>,
  // TODO: Remove this when is activated can be correctly determined
  "removeWhenPresent"
>;

export interface UseToggleMarkOptions extends ToggleMarkOptions {
  markName: string;
  attrs?: Attrs | null;
  supportEmptySelection?: boolean;
}

export interface UseToggleMarkReturn {
  run: () => void;
  canRun: boolean;
  isActive: boolean;
}

export const useToggleMark = ({
  markName,
  attrs,
  supportEmptySelection = true,
  ...toggleMarkOptions
}: UseToggleMarkOptions): UseToggleMarkReturn => {
  const editorState = useEditorState();
  const {
    schema: {
      marks: { [markName]: markType },
    },
    selection: { empty, from, $from, to },
    storedMarks,
    doc,
  } = editorState;

  const command = toggleMark(markType, attrs, toggleMarkOptions);

  const run = useEditorEventCallback((view) => {
    command(view.state, view.dispatch.bind(view), view);
    view.focus();
  });

  const canRun = empty && !supportEmptySelection ? false : command(editorState);

  const isActive =
    empty ?
      !!markType.isInSet(storedMarks || $from.marks())
    : doc.rangeHasMark(from, to, markType);

  return { run, canRun, isActive };
};
