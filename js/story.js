// 애니메이션
AOS.init();

// 지도 탭
const tabItem = document.querySelectorAll(".agency_map_btn");
const tabInner = document.querySelectorAll(".agency_map_table_box");
console.log(tabItem);
tabItem.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner.forEach((inner) => {
      inner.classList.remove("active");
    });
    tabItem.forEach((item) => {
      item.classList.remove("active");
    });
    tabItem[idx].classList.add("active");
    tabInner[idx].classList.add("active");
  });
});
