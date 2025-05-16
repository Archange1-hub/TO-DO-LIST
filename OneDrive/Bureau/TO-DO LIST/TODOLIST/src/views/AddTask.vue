<template>
 <div class="page2">
   
  <div>
    <h2>Ajouter une tâche</h2>

    <form @submit.prevent="ajouterTache">
      <label>Nom :</label>
      <input v-model="nom" required /> <br> <br>

      <label>Description :</label>
      <textarea v-model="description" required></textarea> <br> <br>

      <label>Statut :</label>
      <select v-model="statut" required>
        <option value="à venir">À venir</option>
        <option value="en cours">En cours</option>
        <option value="terminé">Terminé</option>
      </select> <br> <br>

      <label>Personnes assignées :</label>
      <input v-model="personnes" required /> <br> <br>

      <button type="submit">Ajouter</button>
    </form>
  </div>  
 </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/tasks'
import { useRouter } from 'vue-router'

// Références des champs
const nom = ref('')
const description = ref('')
const statut = ref('à venir')
const personnes = ref('')

// Accès au store
const taskStore = useTaskStore()

// Router pour rediriger après ajout
const router = useRouter()

// Fonction d'ajout
function ajouterTache() {
  if (!nom.value || !description.value || !personnes.value) {
    alert('Veuillez remplir tous les champs')
    return
  }

  // Création d'une tâche
  const nouvelleTache = {
    id: Date.now(),
    nom: nom.value,
    description: description.value,
    statut: statut.value,
    personnes: personnes.value,
  }

  // Envoi au store
  taskStore.addTask(nouvelleTache)

  // Nettoyer le formulaire
  nom.value = ''
  description.value = ''
  statut.value = 'à venir'
  personnes.value = ''

  // Rediriger vers l'accueil
  router.push('/home')
}
</script>
<style scoped>
.page2{
    color: black;
}
label{
    font-weight: bold;
}
input{
     border: 1px solid black;
     width: 250px;
}
#statut{
    width: 50px;
    border: 1px solid  black;
}
h2{
    font-weight: bold;
    text-decoration: underline;
    color: rgb(251, 181, 95);
    text-align: center;
    margin-top: 10px;
}

.form{
    margin-top: 20px;
}
</style>
