<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    
   
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader'
import AppFooter from '@/components/AppFooter/AppFooter'
export default {
  name: 'App',
  components:{AppHeader,AppFooter}
}
</script>

<style lang="scss">
#app{
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

</style>
