const allLiItem = document.querySelectorAll('.item');
console.log("Number of categories:",allLiItem.length);

allLiItem.forEach(item => {
    const itemH2 = item.querySelector(".item > h2");
    console.log("Category:", itemH2.textContent);
    const allLiInItem = item.querySelectorAll(".item > ul > li");
    console.log("Elements:",allLiInItem.length);
});
