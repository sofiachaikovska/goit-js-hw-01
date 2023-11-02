function getElementWidth(content, padding, border) {
  const contentSize = Number.parseFloat(content);
  const paddingSize = Number.parseFloat(padding);
  const borderSize = Number.parseFloat(border);
  const contentWidth = contentSize;
  const paddingWidth = paddingSize * 2;
  const borderWidth = borderSize * 2;
  const boxWidth = contentWidth + paddingWidth + borderWidth;
  return boxWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
