/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function(){

  var spanTooltip = document.createElement('span');
  spanTooltip.classList.add('tooltipText');
  var tooltip = document.querySelectorAll('.tooltip');
  console.log(tooltip);

  for (let i = 0; i < tooltip.length; i++) {
    tooltip[i].addEventListener('mouseover', function(){
      // console.log('a');
      this.appendChild(spanTooltip);
      // console.log(tooltip[i].dataset.text);
      spanTooltip.innerText = tooltip[i].dataset.text;
    })
    tooltip[i].addEventListener('mouseout', function(){
      // console.log('s');
      spanTooltip.parentElement.removeChild(spanTooltip);
    })
  }

})
