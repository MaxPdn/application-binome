 

<template>
  <section class="blog">
    <!-- Effet coeurs flottants -->
    <div class="hearts">
      <span v-for="n in 12" :key="n"></span>
    </div>

    <div class="container">
      <header class="hero">
        <h1>LoveConnect</h1>
        <p>
          Trouvez l’amour authentique, créez des connexions sincères et vivez
          une histoire unique.
        </p>
        <button class="cta">Commencer l’aventure</button>
      </header>

      <section class="articles">
        <article class="card" v-for="post in posts" :key="post.id">
          <div class="image"></div>
          <div class="content">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
            <button>Lire plus</button>
          </div>
        </article>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    title: "Comment créer une connexion authentique",
    description:
      "Découvrez les clés pour construire une relation sincère et durable."
  },
  {
    id: 2,
    title: "Les 5 secrets d’un premier rendez-vous réussi",
    description:
      "Faites une première impression mémorable et romantique."
  },
  {
    id: 3,
    title: "L’amour à l’ère digitale",
    description:
      "Comment trouver la bonne personne dans un monde connecté."
  }
]);
</script>

<style scoped>
.blog {
  position: relative;
  min-height: 100vh;
  background: #1a0f14;
  color: white;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

/* 🌹 Hero */
.hero {
  text-align: center;
  padding: 120px 20px 80px;
  animation: fadeIn 1.5s ease;
}

.hero h1 {
  font-size: 3.5rem;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3, #ffd6e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
}

.hero p {
  max-width: 600px;
  margin: 20px auto;
  font-size: 1.2rem;
  color: #f8cdda;
}

.cta {
  margin-top: 25px;
  padding: 14px 35px;
  border: none;
  border-radius: 40px;
  background: linear-gradient(45deg, #ff4d6d, #ff758f);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.4);
}

.cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(255, 77, 109, 0.6);
}

/* 💎 Cards */
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 40px;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: 0.4s;
  animation: fadeUp 1.2s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(255, 105, 135, 0.3);
}

.image {
  height: 200px;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3);
}

.content {
  padding: 20px;
}

.content h3 {
  margin-bottom: 10px;
  color: #ff8fa3;
}

.content p {
  font-size: 0.95rem;
  color: #f1c0d6;
}

.content button {
  margin-top: 15px;
  background: transparent;
  border: 1px solid #ff8fa3;
  color: #ff8fa3;
  padding: 8px 18px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.content button:hover {
  background: #ff8fa3;
  color: #1a0f14;
}

/* ❤️ Floating Hearts */
.hearts span {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ff4d6d;
  transform: rotate(45deg);
  animation: float 12s linear infinite;
  opacity: 0.6;
}

.hearts span::before,
.hearts span::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ff4d6d;
  border-radius: 50%;
}

.hearts span::before {
  top: -7px;
  left: 0;
}

.hearts span::after {
  left: -7px;
  top: 0;
}

.hearts span:nth-child(n) {
  left: calc(100% * var(--i));
}

/* Animation positions */
.hearts span {
  left: calc(100% * var(--i));
}

.hearts span:nth-child(1) { left: 10%; animation-duration: 8s; }
.hearts span:nth-child(2) { left: 20%; animation-duration: 12s; }
.hearts span:nth-child(3) { left: 30%; animation-duration: 10s; }
.hearts span:nth-child(4) { left: 40%; animation-duration: 14s; }
.hearts span:nth-child(5) { left: 50%; animation-duration: 9s; }
.hearts span:nth-child(6) { left: 60%; animation-duration: 13s; }
.hearts span:nth-child(7) { left: 70%; animation-duration: 11s; }
.hearts span:nth-child(8) { left: 80%; animation-duration: 15s; }
.hearts span:nth-child(9) { left: 90%; animation-duration: 7s; }

/* Animations */
@keyframes float {
  0% {
    bottom: -10%;
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    bottom: 110%;
    opacity: 0;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

 