import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("Button", module).add(
  "Button",
  withNotes(`こんな感じでコンポーネントに備考を追加できます`)(() => (
    <Button onClick={action("クリック!")}>hello</Button>
  ))
);
