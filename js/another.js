let img = document.querySelector(".another_video_img>img");
let video = document.querySelector(".another_video>video");
let btn = document.querySelector(".video_btn");
let tri = document.querySelector(".another_video_img>i");
img.addEventListener("click", () => {
    img.src = "";
    btn.classList.add("dis");
    tri.classList.add("dis");
    if (video.paused == false) {
        video.pause();
    } else {
        video.play();
    }
});
btn.addEventListener("click", () => {
    img.src = "";
    btn.classList.add("dis");
    tri.classList.add("dis");
    if (video.paused == false) {
        video.pause();
    } else {
        video.play();
    }
});
tri.addEventListener("click", () => {
    img.src = "";
    btn.classList.add("dis");
    tri.classList.add("dis");
    if (video.paused == false) {
        video.pause();
    } else {
        video.play();
    }
});

console.log(img, video);
