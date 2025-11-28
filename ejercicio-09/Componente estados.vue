<template>
  <div class="user-list">
    <h2>Lista de Usuarios</h2>

    <!-- Input para filtrar usuarios por nombre -->
    <input 
      type="text" 
      v-model="filtro" 
      placeholder="Filtrar usuarios por nombre..."
    />

    <!-- Mostrar lista filtrada -->
    <div class="usuarios-grid">
      <div 
        class="card" 
        v-for="usuario in usuariosFiltrados" 
        :key="usuario.id"
      >
        <h3>{{ usuario.nombre }}</h3>
        <p>{{ usuario.email }}</p>
      </div>
    </div>

    <!-- Mensaje cuando no hay usuarios -->
    <p v-if="usuariosFiltrados.length === 0" class="no-usuarios">
      No se encontraron usuarios.
    </p>
  </div>
</template>

<script>
export default {
  name: "UserList",
  
  props: {
    usuarios: {
      type: Array,
      required: true
    }
  },
  
  data() {
    return {
      filtro: ""
    };
  },

  computed: {
    usuariosFiltrados() {
      return this.usuarios.filter(u =>
        u.nombre.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Contenedor principal */
.user-list {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  background-color: #F7F7FA;
  font-family: system-ui, sans-serif;
}

/* Título */
.user-list h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
}

/* Input de filtro */
.user-list input {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 30px;
}

/* Grid de tarjetas */
.usuarios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 0 10px;
}

/* Tarjetas */
.card {
  background: white;
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.12);
}

/* Título dentro de la tarjeta */
.card h3 {
  font-size: 20px;
  color: #000;
  margin-bottom: 10px;
}

/* Texto de correo dentro de la tarjeta */
.card p {
  font-size: 15px;
  opacity: 0.7;
  margin: 0;
}

/* Mensaje si no hay usuarios */
.no-usuarios {
  margin-top: 20px;
  font-size: 16px;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 900px) {
  .usuarios-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .usuarios-grid {
    grid-template-columns: 1fr;
  }

  .user-list h2 {
    font-size: 28px;
  }
}
</style>
