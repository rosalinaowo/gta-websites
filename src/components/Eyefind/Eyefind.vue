<script>
    import Navbar from './Navbar.vue'
    export default {
        components: { Navbar }
    }
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="pt-4">
        <router-view :key="$route.path" />
    </main>
</template>

<style>
    * {
        font-size: large;
    }

    a {
        text-decoration: none;
    }
</style>