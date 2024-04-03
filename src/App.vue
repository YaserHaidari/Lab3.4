<template>
  <NavBar/>
  <router-view>

  </router-view>
</template>

<script>

// import RegisterScreen from './components/RegisterScreen.vue'
import NavBar from './components/NavBar.vue'
export default{
  name: 'App',
  components:{
    // RegisterScreen,
    NavBar,
  }
}

</script>