/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){

  var btns = document.querySelectorAll('button')
  var btnAdd = document.querySelector('#addTaskButton');
  var btnRemove = document.querySelector('#removeFinishedTasksButton')
  var ul = document.querySelector('#taskList');
  var input = document.querySelector('input')
  var counter = 0;
  var taskCounter = document.createElement('div');
  // console.log(btns, ul);
  // console.log(btnRemove);

  taskCounter.style.display = 'none'
  ul.insertBefore(taskCounter, ul.firstChildElement)

  btnAdd.addEventListener('click', function(){
    var task = document.createElement('li');
    task.innerHTML = '<h2>Task - ' + input.value + '</h2><button class="complete">Complete</button><button class="delete">Delete</button>';
    if(input.value.length > 5 && input.value.length < 100 ){
    counter++;
    ul.appendChild(task);
  }else{
    console.log('Task has too less than 5 or more than 100 characters');
  }
    var deleteBtn = task.querySelector('.delete');

    deleteBtn.addEventListener('click', function(){
        this.parentElement.parentElement.removeChild(this.parentElement)
        counter--;
        if(counter > 0){
          taskCounter.style.display = 'inline-block'
          console.log(counter);
          taskCounter.innerText = counter + ' tasks to do left';
        }
        return counter;
      })

    var completeBtn = task.querySelector('.complete');
    completeBtn.addEventListener('click', function(){
        this.previousElementSibling.classList.toggle('completed');
        counter--;
        console.log(this.previousElementSibling);

        btnRemove.addEventListener('click', function(){
          var taskToDel = document.querySelector('.completed');
          console.log(taskToDel.parentElement);
          taskToDel.parentElement.parentElement.removeChild(taskToDel.parentElement)
        })
    })
    input.value = '';

  });

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
      if(counter > 0){
        taskCounter.style.display = 'inline-block'
        console.log(counter);
        taskCounter.innerText = counter + ' tasks to do left';
      }
    })
  }
})







// <!--<li>
//     <h1>Task 1</h1>
//     <button>Delete</button>
//     <button>Complete</button>
// </li>
// <li class="done">
//     <h1>Task 2</h1>
//     <button>Delete</button>
//     <button>Complete</button>
// </li>-->
