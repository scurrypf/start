// 统计页面的请求数量
// 统计请求数量的初始值为0
let requestCount = 0;

// 在每次请求发生时增加计数器
function onRequest(event) {
  requestCount++;
}

// 在文档加载完毕后开始监听网络请求
window.addEventListener("load", () => {
    // 获取加载页面时涉及的资源文件类型，例如CSS文件、JavaScript文件、图片、视频等
  performance.getEntriesByType("resource").forEach((request) => {
    onRequest(request);
  });
  // 在每次有网络请求时更新计数器
  window.addEventListener("fetch", onRequest);
});

// 输出计数器的值
console.log(`页面请求数量：${requestCount}`);