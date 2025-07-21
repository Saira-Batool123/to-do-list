const username = localStorage.getItem("username");
if (!username) location.href = "index.html";
document.getElementById("user").innerText = username;
async function loadTasks(){
  const res = await fetch(`/tasks/${username}`);
  const tasks = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${t.text}</span>
      <button onclick="editTask(${t.id}, '${t.text}')">Edit</button>
      <button onclick="deleteTask(${t.id})">Delete</button>
    `;
    list.appendChild(li);
  });
}
async function addTask(){
  const txt = document.getElementById("taskInput").value;
  if (!txt.trim()) return;
  await fetch("/tasks", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({username, text: txt})
  });
  document.getElementById("taskInput").value = "";
  loadTasks();
}
async function editTask(id, oldText){
  const n = prompt("Edit task", oldText);
  if (n) {
    await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({text: n})
    });
    loadTasks();
  }
}
async function deleteTask(id){
  await fetch(`/tasks/${id}`, {method:"DELETE"});
  loadTasks();
}
function logout(){
  localStorage.removeItem("username");
  window.location.href = "index.html";
}
loadTasks();