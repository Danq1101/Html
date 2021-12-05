window.onload = () =>{
  let input = document.querySelector('#d1');
  input.oninput = function(){
    let value = this.value.trim();
    let list = document.querySelectorAll('.p');

    if(value != ''){
      list.forEach(elem => {
        if(elem.innerText.search(value) == 0){
          elem.classList.add('color');
        }
      });
    }else{
      list.forEach(elem => {
        elem.classList.remove('color');
      });
    }
  };
}