/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function(){

  var li = document.querySelectorAll('li');
  var body = document.querySelector('body')
  // console.log(li, body);
  for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function(){
    var newDiv = document.createElement('div');
    newDiv.classList.add('fullScreen');
    newDiv.innerHTML = '<img src="' + this.firstElementChild.src + '">'
    newDiv.innerHTML += '<button class ="close">Close</button>';
    body.appendChild(newDiv);
      console.log(this.firstElementChild.src);
      var btn = document.querySelector('button');
      btn.addEventListener('click', function(){
        newDiv.parentElement.removeChild(newDiv);
      })
    })
  }

})
