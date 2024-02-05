function getDots(count) {
  let dotHtml = "";
  const dotPositions = [
    [],
    [5],
    [1, 9],
    [1, 5, 9],
    [1, 3, 7, 9],
    [1, 3, 5, 7, 9],
    [1, 3, 4, 6, 7, 9],
  ];

  const positions = dotPositions[count];

  for (let i = 1; i <= 9; i++) {
    dotHtml += `<div class="dynamic-dot ${
      positions.includes(i) ? "active-dot" : ""
    }"></div>`;
  }

  return dotHtml;
}
export default getDots;
