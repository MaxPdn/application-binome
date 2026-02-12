<script setup></script>

<template>
  <section class="home">
    <!-- Cœurs flottants -->
    <div class="hearts">
      <span v-for="n in 10" :key="n"></span>
    </div>

    <!-- HERO -->
    <header class="hero">
      <h1>L’amour commence par <span>une vraie connexion</span></h1>
      <p>
        LoveConnect est une application de rencontre moderne conçue pour créer
        des relations sincères, durables et basées sur le respect.
      </p>

      <div class="actions">
        <button class="cta-primary">Commencer maintenant</button>
        <button class="cta-secondary">Comment ça marche</button>
      </div>
    </header>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature-card">
        <h3>❤️ Connexions authentiques</h3>
        <p>
          Des profils complets pour favoriser de vraies conversations, pas de
          simples likes.
        </p>
      </div>

      <div class="feature-card">
        <h3>🔒 Sécurité & confiance</h3>
        <p>
          Vos données sont protégées et chaque profil est modéré pour garantir
          un environnement sain.
        </p>
      </div>

      <div class="feature-card">
        <h3>🤝 Compatibilité intelligente</h3>
        <p>
          Nos suggestions sont basées sur vos valeurs, vos objectifs et votre
          personnalité.
        </p>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="steps">
      <h2>Comment fonctionne LoveConnect ?</h2>

      <div class="step-list">
        <div class="step">
          <span>1</span>
          <p>Créez votre profil et décrivez qui vous êtes vraiment</p>
        </div>

        <div class="step">
          <span>2</span>
          <p>Découvrez des profils compatibles avec vos attentes</p>
        </div>

        <div class="step">
          <span>3</span>
          <p>Discutez librement et créez une connexion sincère</p>
        </div>

        <div class="step">
          <span>4</span>
          <p>Vivez une histoire authentique</p>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="final-cta">
      <h2>Prêt(e) à vivre une vraie histoire ?</h2>
      <p>
        Rejoignez une communauté bienveillante qui croit encore à l’amour
        authentique.
      </p>
      <button class="cta-primary">Rejoindre LoveConnect</button>
    </section>
  </section>
</template>

<style scoped>


.home {
  position: relative;
  min-height: 100vh;
  background: #1a0f14;
  color: white;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

/* HERO */
.hero {
  text-align: center;
  padding: 140px 20px 100px;
  animation: fadeIn 1.5s ease;
}

.hero h1 {
  font-size: 3.2rem;
  line-height: 1.2;
}

.hero h1 span {
   background: linear-gradient(45deg, #ff4d6d, #ff8fa3, #ffd6e0);

  background-clip: text;          /* standard */
  -webkit-background-clip: text;  /* Chrome / Safari */

  color: transparent;             /* standard */
  -webkit-text-fill-color: transparent;
}

.hero p {
  max-width: 650px;
  margin: 25px auto;
  font-size: 1.15rem;
  color: #f8cdda;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.cta-primary {
  padding: 14px 36px;
  border-radius: 40px;
  border: none;
  background: linear-gradient(45deg, #ff4d6d, #ff758f);
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.4);
  transition: 0.4s;
}

.cta-primary:hover {
  transform: translateY(-4px);
}

.cta-secondary {
  padding: 14px 32px;
  border-radius: 40px;
  background: transparent;
  border: 1px solid #ff8fa3;
  color: #ff8fa3;
  cursor: pointer;
  transition: 0.3s;
}

.cta-secondary:hover {
  background: #ff8fa3;
  color: #1a0f14;
}

/* FEATURES */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  padding: 80px 40px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  transition: 0.4s;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(255, 105, 135, 0.25);
}

.feature-card h3 {
  color: #ff8fa3;
  margin-bottom: 10px;
}

/* STEPS */
.steps {
  text-align: center;
  padding: 80px 20px;
}

.steps h2 {
  margin-bottom: 40px;
  font-size: 2.2rem;
}

.step-list {
  display: grid;
  gap: 25px;
  max-width: 700px;
  margin: auto;
}

.step {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.04);
  padding: 20px;
  border-radius: 16px;
}

.step span {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff4d6d, #ff8fa3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* CTA FINAL */
.final-cta {
  text-align: center;
  padding: 100px 20px;
  background: radial-gradient(
    circle,
    rgba(255, 77, 109, 0.15),
    transparent
  );
}

.final-cta h2 {
  font-size: 2.4rem;
  margin-bottom: 15px;
}

.final-cta p {
  color: #f8cdda;
  margin-bottom: 30px;
}

/* ❤️ Hearts */
.hearts span {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #ff4d6d;
  transform: rotate(45deg);
  animation: float 12s linear infinite;
  opacity: 0.5;
}

.hearts span::before,
.hearts span::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background: #ff4d6d;
  border-radius: 50%;
}

.hearts span::before {
  top: -7px;
}

.hearts span::after {
  left: -7px;
}

@keyframes float {
  from {
    bottom: -10%;
    opacity: 0;
  }
  to {
    bottom: 110%;
    opacity: 0.8;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

