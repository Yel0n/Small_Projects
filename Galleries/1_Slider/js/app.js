/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){

  var btns = document.querySelectorAll('button');
  var li = document.querySelectorAll('li');
  console.log(btns, li);
  var counter = 0;
  li[counter].classList.add('visible');
  btns[0].addEventListener('click', function(){
    li[counter].classList.remove('visible');
    counter++;
    if (counter >= li.length){
      counter = li.length - 1;
    }
    console.log(counter);
    li[counter].classList.add('visible');
    return counter;
  })
  btns[1].addEventListener('click', function(){
    li[counter].classList.remove('visible');
    counter--;
    if (counter < 0){
      counter = 0;
    }
    li[counter].classList.add('visible');
    return counter;
    console.log('click');
  })



})
