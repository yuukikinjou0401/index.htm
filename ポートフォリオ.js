if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    //ここに書いた処理はスマホの時だけ有効
    const btn = document.querySelector('.btn-menu');
const btn = document.querySelector('.main-nav');
btn.addEventListener('click',() =>{
 nav.classList.toggle('open-menu');
});}