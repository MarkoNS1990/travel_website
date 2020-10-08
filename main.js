const subsBtn = document.querySelector("#subsBtn");
const input = document.querySelector("#input");
const allBlogs = document.querySelector("#allBlogs");
const blogSerbia = document.querySelector("#blogSerbia");
const readBtn = document.querySelector("#readBtn");
const goBackBtn = document.querySelector("#goBackBtn");
const commentBtn = document.querySelector("#commentBtn");
const textarea = document.querySelector("#textarea");
const comment = document.querySelector("#comment");
const tips = document.querySelectorAll("#tips");
const dest = document.querySelectorAll("#dest");
const linkTips = document.querySelector("#linkTips");
const linkDest = document.querySelector("#linkDest");
const listBlogs = document.querySelectorAll(".blog-serbia");
const linkAll = document.querySelector("#linkAll");

const tipsArr = Array.from(tips);
const destArr = Array.from(dest);

linkTips.innerText = `Travel tips(${tipsArr.length})`;
linkDest.innerText = `Destinations(${destArr.length})`;
linkAll.innerText = `Show all(${tipsArr.length + destArr.length})`;

const subscribe = () => {
  if (input.value == "") {
    alert("Unesite email");
  } else if (!input.value.includes("@")) {
    alert("Neispravan unos emaila.");
  } else {
    alert(`Hvala na subscribe. ${input.value}`);
  }
  input.value = "";
};

const showBlog = () => {
  allBlogs.style.display = "none";
  blogSerbia.style.display = "block";
};
const goBack = () => {
  allBlogs.style.display = "block";
  blogSerbia.style.display = "none";
};
const postComment = () => {
  const date = new Date();
  comment.innerHTML += `<div class='mb-1 p-1' style='border:1px dotted orange;background-color:#ddd'>${
    textarea.value
  }
  <span style='float:right'>posted on ${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${
    date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  }:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }</span></div>`;
  textarea.value = "";
};

const blogsArray = Array.from(listBlogs);

const filterTips = () => {
  showAll();
  const filtered = blogsArray.filter((item) => item.classList.contains("dest"));
  filtered.forEach((filter) => (filter.style.display = "none"));
};
const filterDest = () => {
  showAll();
  const filtered = blogsArray.filter((item) => item.classList.contains("tips"));
  filtered.forEach((filter) => (filter.style.display = "none"));
};
const showAll = () => {
  listBlogs.forEach((blog) => (blog.style.display = "flex"));
};

subsBtn.addEventListener("click", subscribe);
readBtn.addEventListener("click", showBlog);
goBackBtn.addEventListener("click", goBack);
commentBtn.addEventListener("click", postComment);
linkTips.addEventListener("click", filterTips);
linkDest.addEventListener("click", filterDest);
linkAll.addEventListener("click", showAll);
