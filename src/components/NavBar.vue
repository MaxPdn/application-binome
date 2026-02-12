<script setup>
import { ref } from "vue";

const tab = ref([
  { name: "Home", to: "/" },
  { name: "Blog", to: "/BlogView" },
  { name: "About", to: "/About" },
]);
</script>

<template>
  <nav class="navbar">
    <router-link
      v-for="x in tab"
      :key="x.to"
      :to="x.to"
      class="nav-link"
      active-class="active"
    >
      {{ x.name }}
    </router-link>
  </nav>
</template>



<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 18px 40px;
  display: flex;
  justify-content: center;
  gap: 35px;

  background: rgba(26, 15, 20, 0.75);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 143, 163, 0.15);
  z-index: 1000;
  font-family: "Poppins", sans-serif;
}

/* 🔗 Liens */
.nav-link {
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #f8cdda;
  padding: 6px 0;
  transition: 0.3s ease;
}

/* Ligne animée */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3);
  transition: width 0.3s ease;
}

/* Hover */
.nav-link:hover {
  color: #ff8fa3;
}

.nav-link:hover::after {
  width: 100%;
}

/* Lien actif */
.active {
  color: #ff8fa3;
  font-weight: 600;
}

.active::after {
  width: 100%;
}
</style>
