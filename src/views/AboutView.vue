<template>
  <section class="about">
    <!-- Particules lumineuses -->
    <div class="glow"></div>

    <div class="container">
      <!-- Hero -->
      <header class="hero">
        <h1>Notre Histoire</h1>
        <p>
          LoveConnect est né d’un rêve : créer un espace où les cœurs se
          rencontrent avec sincérité, élégance et authenticité.
        </p>
      </header>

      <!-- Section Mission -->
      <section class="section mission">
        <div class="text">
          <h2>Notre Mission</h2>
          <p>
            Nous croyons que chaque histoire d’amour mérite un début magique.
            Notre plateforme met en relation des personnes sincères, prêtes à
            vivre une relation vraie et durable.
          </p>
        </div>
        <div class="visual heart-shape"></div>
      </section>

      <!-- Section Valeurs -->
      <section class="section values">
        <div class="card" v-for="value in values" :key="value.id">
          <h3>{{ value.title }}</h3>
          <p>{{ value.text }}</p>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <h2>Prêt(e) à écrire votre histoire ?</h2>
        <button>Rejoindre LoveConnect</button>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const values = ref([
  {
    id: 1,
    title: "Authenticité",
    text: "Nous favorisons des connexions sincères et profondes."
  },
  {
    id: 2,
    title: "Respect",
    text: "Chaque utilisateur mérite sécurité et considération."
  },
  {
    id: 3,
    title: "Élégance",
    text: "Une expérience raffinée pour des rencontres de qualité."
  }
]);
</script>

<style scoped>
.about {
  min-height: 100vh;
  background: #1a0f14;
  color: white;
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
}

/* ✨ Glow background */
.glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 77, 109, 0.4), transparent 70%);
  top: -200px;
  right: -200px;
  filter: blur(120px);
  animation: pulse 6s infinite alternate;
}

/* Hero */
.hero {
  text-align: center;
  padding: 120px 20px 60px;
  animation: fadeIn 1.5s ease;
}

.hero h1 {
  font-size: 3rem;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3, #ffd6e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  max-width: 600px;
  margin: 20px auto;
  color: #f8cdda;
  font-size: 1.1rem;
}

/* Sections */
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 10%;
  gap: 40px;
  animation: fadeUp 1.2s ease;
}

.section h2 {
  color: #ff8fa3;
  margin-bottom: 15px;
}

.section p {
  color: #f1c0d6;
  line-height: 1.6;
}

.visual {
  width: 250px;
  height: 250px;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3);
  border-radius: 50%;
  box-shadow: 0 0 60px rgba(255, 77, 109, 0.4);
  animation: float 5s ease-in-out infinite;
}

/* Values cards */
.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 40px 10%;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: 0.4s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(255, 105, 135, 0.3);
}

.card h3 {
  color: #ff8fa3;
  margin-bottom: 10px;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 80px 20px;
}

.cta-section h2 {
  margin-bottom: 25px;
}

.cta-section button {
  padding: 14px 35px;
  border-radius: 40px;
  border: none;
  background: linear-gradient(45deg, #ff4d6d, #ff758f);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.4);
}

.cta-section button:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(255, 77, 109, 0.6);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  from { opacity: 0.5; }
  to { opacity: 0.8; }
}

/* Responsive */
@media (max-width: 900px) {
  .section {
    flex-direction: column;
    text-align: center;
  }
}
</style>
