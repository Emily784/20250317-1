let iframe;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 建立 iframe 並設定網址
  iframe = createElement('iframe');
  iframe.attribute('src', 'https://www.et.tku.edu.tw/');
  iframe.attribute('frameborder', '0');
  iframe.style('position', 'absolute');
  iframe.style('top', '50%'); // 置中
  iframe.style('left', '50%'); // 置中
  iframe.style('transform', 'translate(-50%, -50%)'); // 將中心點對齊
  iframe.style('width', '80%'); // 寬度設為畫布的 80%
  iframe.style('height', '80%'); // 高度設為畫布的 80%
  iframe.style('z-index', '1'); // 將 iframe 放在畫布的前面
}

function draw() {
  background(220);

  // 畫海草
  for (let i = 0; i < 60; i++) {
    let x = (i + 0.5) * (width / 60); // 計算每根海草的 x 座標
    let y = height; // 海草的底部在畫布的底部
    let sway = sin(frameCount * 0.05 + i * 0.5) * 15; // 調整搖擺的頻率和幅度
    drawSeaweed(x, y, sway, i);
  }
}

// 繪製單根海草的函式
function drawSeaweed(x, y, sway, index) {
  // 設定海草的顏色為半透明的彩色
  let r = map(index, 0, 60, 50, 255); // 紅色分量隨 index 變化
  let g = map(index, 0, 60, 255, 50); // 綠色分量隨 index 變化
  let b = map(index, 0, 60, 100, 200); // 藍色分量隨 index 變化
  stroke(r, g, b, 150); // 設定顏色，透明度為 150
  strokeWeight(30); // 設定線條粗細
  noFill();

  beginShape();
  for (let i = 0; i <= 10; i++) {
    let px = x; // 預設 x 座標固定

    // 分段搖擺邏輯
    if (i === 0) {
      // 最底部的部分 (固定不動)
      px = x;
    } else {
      // 其餘部分左右搖擺
      let segmentSway = sway * (10 - i) / 10; // 搖擺幅度隨高度減小
      px = x + segmentSway;
    }

    let py = y - i * 20; // 每段的高度
    vertex(px, py);
  }
  endShape();
}
