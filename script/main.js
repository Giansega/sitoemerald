
const cursorLight = document.getElementById('cursorLight');

if(cursorLight && window.innerWidth > 992){

  document.addEventListener('mousemove', (e) => {
    cursorLight.style.left = e.clientX + 'px';
    cursorLight.style.top = e.clientY + 'px';
  });

}
