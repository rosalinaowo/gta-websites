<script>
    import * as categories from '@/utils/scripts/categories.js'
    import Weather from './Weather.vue'
    export default {
        components: { Weather },
        methods: {
            async randomRedirect() {
                window.location.href = (await categories.getRandomWebsite()).name;
            },
            search(query) {
                alert(query);
            }
        },
        mounted() {
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('keydown', event => {
                if (event.key === 'Enter') {
                    this.search(searchInput.value);
                    event.preventDefault();
                }
            })
        }
    }
</script>

<template>
    <div id="heading">
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <router-link to="/">
                        <img id="logoImg" src="/src/assets/images/websites/Eyefind.png" alt="Eyefind Logo" class="d-inline-block align-text-top">
                    </router-link>
                </div>
                <div class="col" style="margin: auto;">
                    <Weather />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-9">
                    <form class="input-group d-flex" role="search">
                        <i class="input-group-text bi bi-search" id="addon-wrapping" style="color: var(--bg-blue);"></i>
                        <input id="searchInput" class="form-control me-2" type="search" placeholder="Search Eyefind" aria-label="Search Eyefind">
                    </form>
                </div>
                <div class="col">
                    <button id="randomBtn" class="btn" @click="randomRedirect()">RANDOM</button>
                </div>
            </div>
        </div>
    </div>
    <div id="categories" style="background-color: var(--services-bg);">
        <div id="services" class="container text-center">
            <div class="row">
                <div class="col-12 col-lg">
                    <router-link :to="{ name: 'Media and Entertainment' }" class="d-flex align-items-center"><i class="bi bi-phone service-icon"></i>MEDIA AND ENTERTAINMENT</router-link>
                </div>
                <div class="col-12 col-lg b-y">
                    <router-link :to="{ name: 'Food and Drink' }" class="d-flex align-items-center"><i class="bi bi-cup-straw service-icon"></i>FOOD AND DRINK</router-link>
                </div>
                <div class="col-12 col-lg b-y">
                    <router-link :to="{ name: 'Money and Services' }" class="d-flex align-items-center"><i class="bi bi-coin service-icon"></i>MONEY AND SERVICES</router-link>
                </div>
                <div class="col-12 col-lg b-y">
                    <router-link :to="{ name: 'Travel and Transport' }" class="d-flex align-items-center"><i class="bi bi-airplane service-icon" style="transform: rotate(45deg);"></i>TRAVEL AND TRANSPORT</router-link>
                </div>
                <div class="col-12 col-lg">
                    <router-link :to="{ name: 'Fashion and Health' }" class="d-flex align-items-center"><i class="bi bi-bag service-icon"></i>FASHION AND HEALTH</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #heading {
        background-color: var(--bg-blue);
        border-bottom: 10px solid orange;
        padding-bottom: 15px;
        padding-top: 15px;
    }

    #randomBtn {
        width: 100%;
        color: white;
        background-color: var(--btn-blue);
    }

    #addon-wrapping {
        font-size: large;
    }

    #categories i.bi {
        color: var(--bg-blue);
        font-size: 2em;
    }

    a {
        color: black;
    }

    a:hover {
        color: var(--btn-blue);
    }

    .b-y {
        border-left: 1px solid gray;
        border-right: 1px solid gray;
    }

    .b-y + .b-y {
        border-left: 0px;
    }

    .service-icon {
        float: left;
        margin-right: 20px;
    }
</style>