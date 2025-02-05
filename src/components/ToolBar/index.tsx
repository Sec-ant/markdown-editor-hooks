import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import LiftOutOfNodeButton from "./components/LiftOutOfNodeButton";
import SetHeadingButton from "./components/SetHeadingButton";
import SetParagraphButton from "./components/SetParagraphButton";
import ToggleEmphasisButton from "./components/ToggleEmphasisButton";
import ToggleInlineCodeButton from "./components/ToggleInlineCodeButton";
import ToggleStrikeThroughButton from "./components/ToggleStrikeThroughButton";
import ToggleStrongButton from "./components/ToggleStrongButton";
import WrapInBlockQuoteButton from "./components/WrapInBlockQuoteButton";
import WrapInBulletListButton from "./components/WrapInBulletListButton";
import WrapInOrderedListButton from "./components/WrapInOrderedListButton";

export default function ToggleButtonsMultiple() {
  return (
    <ToggleButtonGroup size="small" aria-label="text formatting">
      <ToggleStrongButton />
      <ToggleEmphasisButton />
      <ToggleStrikeThroughButton />
      <ToggleInlineCodeButton />
      <WrapInBlockQuoteButton />
      <WrapInBulletListButton />
      <WrapInOrderedListButton />
      <LiftOutOfNodeButton />
      <SetParagraphButton />
      {[...new Array(6).keys()].map((num) => (
        <SetHeadingButton key={num + 1} level={num + 1} />
      ))}
    </ToggleButtonGroup>
  );
}
