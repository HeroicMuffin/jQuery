const Header = $("#Header");
console.log(Header);

const image1 = $("#image1");
const button1 = $("#image1button");
button1.on("click", () => {
  image1.toggle();
});

const image2 = $("#image2");
const button2 = $("#image2button");
button2.on("click", () => {
  image2.toggle();
});

const image3 = $("#image3");
const button3 = $("#image3button");
button3.on("click", () => {
  image3.toggle();
});
