const tasks = document.querySelector('#tasks');

// 拿到localstorage的資料
let localTasks = JSON.parse(localStorage.getItem('tasks'));
if (localTasks != null && localTasks.length != 0) {
  localTasks.forEach((task, index) => {
      if (task.content.checked){
        tasks.innerHTML += `<div class="to-do-task">
        <input type="checkbox" class="check-task" id="${task.id}" checked/>
        <p class="task-content">${task.content.content}</p>
        </div>`;
      } else {
        tasks.innerHTML += `<div class="to-do-task">
        <input type="checkbox" class="check-task" id="${task.id}"/>
        <p class="task-content">${task.content.content}</p>
        </div>`;
      }
  });

} else {
  // 保存資料到localstorage
  localStorage.setItem('tasks', '[]');
}

const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
   <span>${h}</span>
   <span>${m}</span>
   <span>${s}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);// 定時器(定時執行函數, 毫秒(1000毫秒=1秒))

const form = document.querySelector('.add-task');
const addTask = document.querySelector('#add-task');


form.addEventListener('submit', (e) => {
  e.preventDefault(); // 防止頁面重新刷新
  if(addTask.value !== null){

    let localTasks = JSON.parse(localStorage.getItem('tasks'));

    if (localTasks != null && localTasks.length !== 0){
      localTasks.push({
        'id': `task-${localTasks.length+1}`,
        'content': {
          'checked': false,
          'content': addTask.value
        },
      }) 
      tasks.innerHTML += `<div class="to-do-task">
      <input type="checkbox" class="check-task" id="task-${localTasks.length+1}"/>
      <p class="task-content">${addTask.value}</p>
      </div>`;
    } else {
      localTasks = [{
        'id': 'task-1',
        'content': {
          'checked': false,
          'content': addTask.value
        },
      }]
      tasks.innerHTML += `<div class="to-do-task">
      <input type="checkbox" class="check-task" id="task-1"/>
      <p class="task-content">${addTask.value}</p>
      </div>`;
    }

    // 保存資料到localstorage
    localStorage.setItem('tasks', JSON.stringify(localTasks));
    
  } else {
    alert('輸入框不得為空值')
  }
});

let checkTasks = document.querySelectorAll(".check-task");

checkTasks.forEach((checkTask, index) => {
  checkTask.addEventListener('change', function() {
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (this.checked) {
      // console.log("Checkbox is checked..");
      // console.log(this.id)
      localTasks.forEach((task, index)=>{
        if(task.id === this.id){
          task.content.checked = true
        }
      })
  
    } else {
      // console.log("Checkbox is not checked..");
      localTasks.forEach((task, index)=>{
        if(task.id === this.id){
          task.content.checked = false
        }
      })
    }
    // 保存資料到localstorage
    localStorage.setItem('tasks', JSON.stringify(localTasks));
  });
})
