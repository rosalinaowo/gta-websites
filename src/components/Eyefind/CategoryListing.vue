<script>
    import * as categories from '@/utils/scripts/categories.js'

    export default {
        data() {
            return {
                websites: []
            }
        },
        async created() {
            this.websites = await categories.fetchCategory(this.$route.fullPath.replace('/', ''));
        }
    }
</script>

<template>
    <div class="container">
        <router-link class="row" v-for="website in websites" :key="website.id" :to="{ name: website.name }">
            <div class="col-4 col-lg-3 col-xl-2">
                <img class="img-fluid" :src="'/src/assets/images/websites/' + website.name + '/logo.jpg'" :alt="website.name + ' logo'">
            </div>
            <div class="col">
                {{ website.name }}<br>
                <span class="description">{{ website.description }}</span>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
    a {
        color: black;
    }

    img {
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .row {
        border: 3px solid transparent;
        margin-bottom: 15px;
        background-color: #F2F2F2;
    }
    .row:hover {
        border: 3px solid var(--bg-blue);
    }
    
    .description {
        font-size: 0.9em;
        color: gray;
    }
</style>