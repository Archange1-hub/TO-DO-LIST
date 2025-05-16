<template>
 <div class="page2">
    <div class="etete">
        <h2>AJOUTER UNE TÂCHE</h2>
    </div>
    <div class="form">
        <form action="tasks.ts">
           <div class="put">
             <label>Nom de la tâche:</label>
            <input type="text" name="nom" id="nom" placeholder="Ex: reorganisation du bureaut de travail, etc..." required>
           </div> <br> 
           <div class="put">
             <label>Description:</label>
            <input type="textarea" name="description" id="description" required>
           </div> <br> 
           <div class="put">
             <label>Statut:</label> <br>
            <span>A venir:</span><input type="checkbox" name="avenir" id="statut" required> |
            <span>En cours:</span><input type="checkbox" name="encours" id="statut" required> |
            <span>Terminé:</span><input type="checkbox" name="termine" id="statut" required>
           </div> <br> 
           <div class="put">
             <label>Personnes assignées:</label>
            <input type="text" name="personne" id="personne" placeholder="Ex: Monsieur le directeur..." required>
           </div> <br>
            <div class="buton">
            <button><router-link to="/">Ajouter</router-link></button>
        </div>
         </form> 
    </div>
       
       
 </div>
</template>
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
