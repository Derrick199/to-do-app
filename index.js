// pages/index.js
import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import { db } from '../firebase';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('tasks').onSnapshot((snapshot) => {
      const fetchedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
    });

    return () => unsubscribe();
  }, []);

  const toggleTask = (taskId) => {
    db.collection('tasks')
      .doc(taskId)
      .update({ completed: !tasks.find((task) => task.id === taskId).completed });
  };

  const deleteTask = (taskId) => {
    db.collection('tasks').doc(taskId).delete();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;
