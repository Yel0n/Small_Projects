/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){

  var imgs = document.querySelectorAll('img');
  var btns = document.querySelectorAll('button');
  var input = document.querySelector('input');
  // console.log(imgs, btns, input);

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
      // console.log('click');
      console.log(input.value);
      var value = input.value
      // input.value = ''
      // for (var j = 0; j < imgs.length; j++) {
      //   console.log(imgs[j].dataset.tag);
      //   }
    });
  }
    btns[0].addEventListener('click', function(){
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('invisible');
        if (imgs[i].dataset.tag.indexOf(input.value) == -1){
          imgs[i].classList.add('invisible')
          console.log('dziala');
        }
      }
    })
    btns[1].addEventListener('click', function(){
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('invisible');
        if (imgs[i].dataset.tag.indexOf(input.value) !== -1){
          imgs[i].classList.add('invisible')
          console.log('dziala');
        }
      }
    })

  // btns[0].addEventListener('click', function(){
  //   // console.log('click');
  //   console.log(input.value);
  //   var value = input.value
  //   input.value = ''
  // });
  //
  // btns[1].addEventListener('click', function(){
  //   // console.log('click');
  //   console.log(input.value);
  //   var value = input.value
  //   input.value = ''
  // });

})
