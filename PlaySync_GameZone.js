let nextButton = document.querySelector(".next_btn");
let videos = document.querySelector(".hero_video");

const vid_list = ["hero-1.mp4","hero-2.mp4","hero-3.mp4","hero-4.mp4"];

let index = 0;

nextButton.addEventListener("click",function(){
    index += 1;
    videos.src = vid_list[index];

    if(index === 3){
        index = -1;
    }
})

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
