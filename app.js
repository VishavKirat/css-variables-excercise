
const input = document.querySelectorAll('.controls input');

function valueUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
  console.log(suffix);
}

input.forEach((i) =>{
  i.addEventListener('change',valueUpdate);
});
input.forEach((i) =>{
  i.addEventListener('mousemove',valueUpdate);
});
