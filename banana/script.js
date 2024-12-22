function showSection(sectionId) {
  // 隱藏所有區塊
  document.querySelectorAll('.container').forEach(section => {
    section.classList.remove('active');
  });
  // 顯示選中的區塊
  document.getElementById(sectionId).classList.add('active');
  // 更新導航列的選中狀態
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
}


// 定義圖片列表
const images = [
  "/banana/Image/Anim/1.jpg", "/banana/Image/Anim/3.jpg", "/banana/Image/Anim/5.jpg",
  "/banana/Image/Anim/7.jpg", "/banana/Image/Anim/9.jpg", "/banana/Image/Anim/11.jpg",
  "/banana/Image/Anim/13.jpg", "/banana/Image/Anim/15.jpg"
];

// 當前圖片索引
let currentIndex = 0;

// 獲取圖片元素
const imageElement = document.getElementById("current-image");

// 創建 IntersectionObserver 用來檢測圖片是否進入視窗
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 當圖片進入視窗時才會觸發滾動事件
    if (entry.isIntersecting) {
      // 開啟滾動事件監聽
      enableWheelEvent();
    } else {
      // 當圖片離開視窗時停止滾動事件監聽
      disableWheelEvent();
    }
  });
}, { threshold: 0.5 });  // threshold 0.5 表示圖片有 50% 進入視窗時才觸發

// 開始監視圖片元素
observer.observe(imageElement);

// 停止滾動監聽
function disableWheelEvent() {
  document.removeEventListener("wheel", handleWheel);
}

// 啟動滾動監聽
function enableWheelEvent() {
  document.addEventListener("wheel", handleWheel);
}

// 處理滾輪事件
function handleWheel(event) {
  // 如果圖片還沒到最後一張，阻止頁面滾動
  if (currentIndex < images.length - 1) {
    event.preventDefault(); // 阻止頁面滾動
  }

  // 判斷滾輪方向
  if (event.deltaY > 0) {
    // 向下滾動 -> 下一張圖片
    if (currentIndex < images.length - 1) {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    }
  } else {
    // 向上滾動 -> 上一張圖片
    if (currentIndex > 0) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      imageElement.src = images[currentIndex];
    }
  }

  // 如果切換到最後一張圖片，允許頁面滾動
  if (currentIndex === images.length - 1) {
    // 在這裡可以做任何操作來通知用戶圖片已經是最後一張
    console.log("已到達最後一張圖片，可以繼續頁面滾動");
  }
}
