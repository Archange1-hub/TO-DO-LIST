<template>
  <div>
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/add">Ajouter une tâche</router-link> |
      <router-link :to="{ name: 'EditTask', params: { id: 1 } }">Modifier une tâche</router-link>
      
    </nav>
    <router-view />
  </div>
</template>

<style scoped>

nav {
  background: rgb(251, 181, 95, 0.6);
  padding: 1rem;
  text-align: left;
  color: black; 
  transition: transform 0.4s;
}
nav a {
  margin: 0 1rem;
  text-decoration: none;
  margin-top: -20px;
  color: black;
  font-weight: bold;
    transform:  scale(1.5);
   
}
</style>


