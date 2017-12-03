/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener('DOMContentLoaded', function(){

   var liMain = document.querySelectorAll('.nav>ul>li');
  //  console.log(liMain);
  for (let i = 0; i < liMain.length; i++) {
    liMain[i].addEventListener('mouseover', function(){
      // console.log('dziala');
      var liSub = this.firstElementChild;
      if (liSub != null) {
        liSub.style.display = 'inline-block';
        // console.log(liSub);
      }
    })
    liMain[i].addEventListener('mouseout', function(){
      // console.log('to tez');
      var liSub = this.firstElementChild;
      if (liSub != null) {
        liSub.style.display = 'none';
        // console.log(liSub);
      }
    })
  }

 })
