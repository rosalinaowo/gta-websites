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
                    imgPath: '/src/assets/images/websites/MazeBankForeclosures.png',
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
        <div class="row d-flex justify-content-between align-items-center text-center" v-for="row in rows" :key="row">
            <div class="col d-block" v-for="col in cols" :key="col">
                <a :href="websites[row * (col - 1)].url">
                    <img :src="websites[row * (col - 1)].imgPath" class="img-fluid" :alt="websites[row * (col - 1)].name" style="background-color: aquamarine;">
                </a>
            </div>
        </div>
    </div>
</template>