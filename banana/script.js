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
  "/banana/Image/Anim/1.jpg", "/banana/Image/Anim/2.jpg", "/banana/Image/Anim/3.jpg",
  "/banana/Image/Anim/4.jpg", "/banana/Image/Anim/5.jpg", "/banana/Image/Anim/6.jpg",
  "/banana/Image/Anim/7.jpg", "/banana/Image/Anim/8.jpg", "/banana/Image/Anim/9.jpg",
  "/banana/Image/Anim/10.jpg", "/banana/Image/Anim/11.jpg", "/banana/Image/Anim/12.jpg",
  "/banana/Image/Anim/13.jpg", "/banana/Image/Anim/14.jpg", "/banana/Image/Anim/15.jpg",
  "/banana/Image/Anim/16.jpg"
];

// 當前圖片索引
let currentIndex = 0;

// 獲取圖片元素
const imageElement = document.getElementById("current-image");

// 監聽滾輪事件
document.addEventListener("wheel", (event) => {
  // 當前圖片是最後一張
  if (currentIndex === images.length - 1) {
    // 阻止滾動，直到到達最後一張圖片後才允許頁面滾動
    if (event.deltaY > 0) {
      event.preventDefault();
      return;  // 阻止頁面滾動
    }
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
});
