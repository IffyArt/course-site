// 定義一個叫做 navbar 的常數，並且用 document.querySelector 的函示，去尋找一個目標為 .navbar(類別名稱為 navbar) 的元素
const navbar = document.querySelector('.navbar');
// 定義一個叫做 navbarTrigger 的常數，並且用 document.querySelector 的函示，去尋找一個目標為 .navbar-trigger(類別名稱為 navbar-trigger) 的元素
const navbarTrigger = document.querySelector('.navbar-trigger');

// // 使用區塊上的 onclick 行為進行掛載
// navbarTrigger.onclick = function () {
//   // 操作 navbarTrigger 這個常數儲存的 html 元素(需要選擇到元素)，進行 class 列表上 active 的切換
//   navbarTrigger.classList.toggle('active');
//   // 操作 navbar 這個常數儲存的 html 元素(需要選擇到元素)，進行 class 列表上 active 的切換
//   navbar.classList.toggle('active');
// };

// 使用目標上的 addEventListener 新增一個監聽事件
navbarTrigger.addEventListener('click', function () {
  // 操作 navbarTrigger 這個常數儲存的 html 元素(需要選擇到元素)，進行 class 列表上 active 的切換
  navbarTrigger.classList.toggle('active');
  // 操作 navbar 這個常數儲存的 html 元素(需要選擇到元素)，進行 class 列表上 active 的切換
  navbar.classList.toggle('active');
});
