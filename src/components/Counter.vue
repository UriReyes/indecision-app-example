<template>
  <h2>{{ showTitle }}</h2>
  <p>
    <span data-testId="counter">{{ counter }}</span> <sup>2</sup> =
    {{ squareCounter }}
  </p>
  <p>
    <button id="decreaseBtn" @click.prevent="decrease">-1</button>
    <button id="increaseBtn" @click.prevent="increase">+1</button>
  </p>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      validator(value) {
        return value >= 0;
      },
      //   required: true,
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter;
    },
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      return Math.pow(this.counter, 2);
    },
    showTitle() {
      return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: rgb(33, 240, 84);
  border-radius: 5px;
  border: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 5px 10px;
  transition: 0.5s;
}
button:not(:first-child) {
  margin-left: 5px;
}
button:hover {
  background-color: rgb(7, 190, 16);
  transition: 0.5s;
}
</style>
