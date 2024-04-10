<script>
    export default {
        data() {
            return {
                rows: 2,
                cols: 5
            }
        },
        computed: {
            totalWebsites() {
                return this.rows * this.cols;
            }
        },
        created() {
            this.websites = this.getNRandomWebsites(this.totalWebsites);
        },
        methods: {
            getRandomWebsite() {
                return {
                    name: 'Maze Bank Foreclosures',
                    imgPath: '/src/assets/images/websites/MazeBankForeclosure.png',
                    url: '#'
                }
            },
            getNRandomWebsites(n) {
                let objs = [];
                for (let i = 0; i < n; i++) {
                    objs[i] = this.getRandomWebsite();
                }
                return objs;
            }
        }
    }
</script>

<template>
    <div id="websitesList" class="container">
        <div class="row d-flex justify-content-center text-center" v-for="row in rows" :key="row">
            <div class="col d-block mb-2" v-for="col in cols" :key="col" style="background-color: aquamarine;">
                <a :href="websites[row * (col - 1)].url">
                    <img :src="websites[row * (col - 1)].imgPath" class="img-fluid" :alt="websites[row * (col - 1)].name">
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #websitesList .row .col {
        border: 3px solid transparent;
        margin-right: 10px;
    }
    #websitesList .row .col:last-child {
        margin-right: 0px;
    }
    #websitesList .row .col:hover {
        border: 3px solid var(--bg-blue);
    }
</style>