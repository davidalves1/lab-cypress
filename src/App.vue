<template>
  <div>
    <h1>Hello Cypress!</h1>
    <input type="text" id="txtName" v-model="name" placeholder="name">
    <input type="text" id="txtSurname" v-model="surname" placeholder="surname">
    <h2 id="myName">{{ myName }}</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: '',
      surname: ''
    }
  },
  computed: {
    myName() {
      return `${this.name} ${this.surname}`;
    }
  }
}
</script>
