import { useState } from "react";
import Search from "./Search";
import AddTaskModal from "./Task-Action.jsx/AddTaskModal";
import TaskAction from "./Task-Action.jsx/TaskAction";
import TaskList from "./TaskList";
import Empty from "./EmptyTask";
let defaulttasks = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  tags: ["web", "react", "js"],
  priority: "High",
  isfavourite: true,
};

export default function TaskBoard() {
  let [tasks, setTasks] = useState([defaulttasks]);
  let [showModal, setShowModal] = useState(false);
  let [taskToUpdate, settaskToUpdate] = useState(null);
  let handleAddTask = (newtask, isAddtask) => {
    // console.log("handle task",newtask)

    if (isAddtask) {
      setTasks([...tasks, newtask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id == newtask.id) {
            return newtask;
          } else {
            return task;
          }
        })
      );
    }
    setShowModal(false);
  };
  let handleUpdateTask = (task) => {
    settaskToUpdate(task);
    setShowModal(true);
  };
  let handleClose = () => {
    setShowModal(false);
    settaskToUpdate(null);
  };
  let handleDelete = (task) => {
    console.log("delete");
    let taskToDelete = tasks.filter((tsk) => tsk.id != task.id);
    setTasks(taskToDelete);
  };
  let handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  let handleSearch = (searchTerm) => {
    console.log(searchTerm);
    let filttered = tasks.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setTasks([...filttered]);
  };
  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          handleAddTask={handleAddTask}
          handleClose={handleClose}
        ></AddTaskModal>
      )}
      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <Search handleSearch={handleSearch}></Search>
        </div>
        {/* <!-- Search Box Ends --> */}
        <div
          className="rounded-xl border border-[rgba(206,206,206,0.12)]
         bg-[#1D212B] px-6 py-8 md:px-9 md:py-16"
        >
          <TaskAction
            haldleAddTask={() => {
              setShowModal(true);
            }}
            handleDeleteAll={handleDeleteAll}
          ></TaskAction>
         {
          tasks.length>0?(
            <TaskList
            tasks={tasks}
            handleUpdateTask={handleUpdateTask}
            handleDelete={handleDelete}
          ></TaskList>
          ):(
            <Empty></Empty>
          )
         }
        </div>
      </div>
    </section>
  );
}
