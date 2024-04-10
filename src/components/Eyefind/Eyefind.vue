<script>
    import Navbar from './Navbar.vue'
    export default {
        components: { Navbar }
    }
</script>

<template>
    <header class="mb-4">
        <Navbar />
    </header>
    <main>
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