import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  // 🔁 Charger les tâches depuis localStorage au démarrage
  const saved = localStorage.getItem('tasks')
  if (saved) {
    tasks.value = JSON.parse(saved)
  }

  // 🧠 Sauvegarder automatiquement à chaque changement
  watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }, { deep: true })

  // Fonctions
  function addTask(task) {
    tasks.value.push({ id: Date.now(), ...task })
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  function updateTask(updatedTask) {
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)
    if (index !== -1) tasks.value[index] = updatedTask
  }

  function getTaskById(id) {
    return tasks.value.find(t => t.id === id)
  }

  return { tasks, addTask, deleteTask, updateTask, getTaskById }
})
