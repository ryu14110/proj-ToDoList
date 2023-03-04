const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// // document.body.appendChild(bgImage);
// document.body.style.backgroundImage=bgImage;

const chosenImage = images[Math.floor(Math.random() * images.length)];


// 배경 이미지 넣는 형식 url('img주소')
const bgImage = `url(img/${chosenImage})`

// body에 추가
document.body.style.backgroundImage = bgImage