import { configure } from "@storybook/react";

function allRequire(context) {
  context.keys().forEach(context);
}

function loadStories() {
  allRequire(require.context("../src", true, /\.stories\.[jt]sx?$/));
}

configure(loadStories, module);
