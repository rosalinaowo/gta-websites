<script>
    import * as categories from '@/utils/scripts/categories.js'
</script>

<template>
    <div id="ads" class="container">
        <div class="row d-flex justify-content-between align-items-center text-center">
            <div class="col d-block">
                <router-link :to="{ name: 'Legendary Motorsport' }">
                    <div>SPONSORED ADVERTISEMENT</div>
                    <img src="/src/assets/images/websites/LegendaryMotorsport.png" class="img-fluid" alt="Advertisement">
                </router-link>
            </div>
            <div class="col d-block">
                <router-link :to="{ name: 'Maze Bank' }">
                    <div>SPONSORED ADVERTISEMENT</div>
                    <img src="/src/assets/images/websites/LegendaryMotorsport.png" class="img-fluid" alt="Advertisement">
                </router-link>
            </div>
            <div class="col d-block">
                <router-link :to="{ name: 'The Diamond Casino & Resort' }">
                    <div>SPONSORED ADVERTISEMENT</div>
                    <img src="/src/assets/images/websites/LegendaryMotorsport.png" class="img-fluid" alt="Advertisement">
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #ads .row .col {
        border-top: 5px solid orange;
        background-color: var(--btn-blue);
        margin-right: 2rem;
    }
    #ads .row .col:last-child {
        margin-right: 0px;
    }
    #ads a {
        color: white;
    }
    #ads a div {
        margin-top: 5px;
    }
</style>