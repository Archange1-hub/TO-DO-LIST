<template>
    <div class="page">  <br> <br>
    <div class="titre">
  <h1>Bienvenue sur notre application de gestion de tâches</h1>
</div> <br> <br>
<div class="liste">
    <h2>LISTES DES TÂCHES</h2>
    <table>
        <thead>
      <tr>
        <th>Nom</th>
        <th>Description</th>
        <th>Statut</th>
        <th>Personnes assignées</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in tasks" :key="task.id">
        <td>{{ task.nom }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.statut }}</td>
        <td>{{ task.personnes }}</td>
      </tr>
    </tbody>
    </table>
  
</div> <br>
<div class="buton">
    <button><router-link to="/add">Ajouter une tâche</router-link></button>
    <button><router-link :to="{ name: 'EditTask', params: { id: 1 } }">Modifier une tâche</router-link></button>
    <button>Suprimer</button>
</div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/tasks'
import { storeToRefs } from 'pinia'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
 }

.page{
    color: black;
}
.titre{
    text-align: center;
}
h1,h2{
    font-weight: bold;
    text-decoration: underline;
    color: rgb(251, 181, 95);
}
table {
  width: 60%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid black;
  padding: 12px;
  text-align: left;
}

th {
  background-color: white;
  font-weight: bold;
}
.buton{
    display: flex;
    gap: 20px;
    color: rgb(236, 162, 71);
}

</style>