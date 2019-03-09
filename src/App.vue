<template>
<div class="app">
        <Header/>
        <List/>
        <Footer/> 
</div>
    
</template>
<script>
import Header from './components/Header'
import List from './components/List';
import Footer from './components/Footer'
export default {
    name: 'App',
    
    components:{
        Header,
        List,
        Footer
    },
    
}
</script>
<style >
.app {
    width: 400px;
    margin: 50px auto;
    border: 1px solid #bcbcbc;
}
</style>

