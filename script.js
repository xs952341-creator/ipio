const canvas = document.getElementById("apple-canvas");
const context = canvas.getContext("2d");

const frameCount = 121;
const currentFrame = index => (
  `./frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];

for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

images[0].onload = () => {
  canvas.width = images[0].width;
  canvas.height = images[0].height;
  context.drawImage(images[0], 0, 0);
};

window.addEventListener("scroll", () => {
  const html = document.documentElement;
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  
  const frameIndex = Math.min(
    frameCount - 1,
    Math.max(0, Math.floor(scrollFraction * frameCount))
  );
  
  requestAnimationFrame(() => {
    context.drawImage(images[frameIndex], 0, 0);
  });
});
