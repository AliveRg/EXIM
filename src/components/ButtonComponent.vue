<script setup></script>

<template>
  <div>
    <button class="animated-button">Отправить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.animated-button {
  position: relative;
  overflow: hidden;
  background-color: #2700c5;
  color: white;
  padding: 18px 210px;
  font-weight: 800;
  font-family: 'Mulish', sans-serif;
  font-size: 15px;
  border-radius: 10px;
  transition: color 0.4s ease-in-out;
  z-index: 1;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(197, 0, 0, 1) 0%,
    rgba(197, 0, 0, 0.8) 70%,
    rgba(197, 0, 0, 0.5) 85%,
    rgba(197, 0, 0, 0.2) 100%
  );
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;

  transition: all 0.6s ease-in;
}

.animated-button:hover::before {
  transform: scaleX(1);
  background-color: rgba(197, 0, 0, 1);
}

.animated-button:hover {
  color: white; /* Keep the text color the same on hover */
}
</style>
