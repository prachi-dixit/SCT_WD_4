function addTask() {
    const taskText = document.getElementById("taskInput").value;
    const date = document.getElementById("dateInput").value;
    const time = document.getElementById("timeInput").value;

    if (taskText === "") return;

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.innerHTML = `<strong>${taskText}</strong><br>${date} ${time}`;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = () => li.classList.toggle("completed");

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.onclick = () => {
        const newTask = prompt("Edit task", taskText);
        if (newTask) taskInfo.innerHTML = `<strong>${newTask}</strong><br>${date} ${time}`;
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}
