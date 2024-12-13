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
