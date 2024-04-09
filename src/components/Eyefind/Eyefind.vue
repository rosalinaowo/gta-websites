<script>
    import Weather from './Weather.vue'
    import Navbar from './Navbar.vue'
    import Ads from './Ads.vue'
    import WebsitesList from './WebsitesList.vue'
    export default {
        components: { Weather, Navbar, Ads, WebsitesList }
    }
</script>

<template>
    <header class="mb-4">
        <div id="heading">
            <div class="container">
                <div class="row">
                    <div class="col-9">
                        <a href="#">
                            <img id="logoImg" src="/src/assets/images/websites/Eyefind.png" alt="Eyefind Logo" class="d-inline-block align-text-top">
                        </a>
                    </div>
                    <div class="col" style="margin: auto;">
                        <Weather />
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-9">
                        <form class="input-group d-flex" role="search">
                            <i class="input-group-text bi bi-search" id="addon-wrapping"></i>
                            <input class="form-control me-2" type="search" placeholder="Search Eyefind" aria-label="Search Eyefind">
                        </form>
                    </div>
                    <div class="col">
                        <button id="randomBtn" class="btn">RANDOM</button>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </header>
    <main>
        <Ads style="margin-bottom: 30px;"/>
        <WebsitesList />
    </main>
</template>

<style>
    * {
        font-size: large;
    }

    a {
        text-decoration: none;
    }

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
</style>