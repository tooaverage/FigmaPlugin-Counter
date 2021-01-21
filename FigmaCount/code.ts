figma.showUI(__html__);

const counter = figma.currentPage.selection.length

figma.showUI(`
  <span style="white-space:pre-wrap;">${counter}</span>
`, {width: 200, height: 200})


