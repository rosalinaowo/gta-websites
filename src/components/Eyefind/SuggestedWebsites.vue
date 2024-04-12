<script>
    import * as categories from '@/utils/scripts/categories.js'
    export default {
        data() {
            return {
                rows: 2,
                cols: 5,
                websites: []
            }
        },
        computed: {
            totalWebsites() {
                return this.rows * this.cols;
            }
        },
        async mounted() {
            await this.renderSuggestions();
        },
        methods: {
            async renderSuggestions() {
                try {
                    this.websites = await categories.getNRandomWebsites(this.totalWebsites);
                } catch (error) { console.error('Error fetching websites:', error); }
                
                const list = document.getElementById('websitesList');
                for (let r = 0; r < this.rows; r++) {
                    let row = document.createElement('div');
                    row.className = 'row d-flex justify-content-center text-center';

                    for(let c = 0; c < this.cols; c++) {
                        try {
                            let website = this.websites[r * this.cols + c];
                            let col = document.createElement('div');
                            col.className = 'col d-block mb-2';
                            col.innerHTML = `<a href="${website.name}"><img class="img-fluid" src="/src/assets/images/websites/${website.name}/logo.jpg" alt="${website.name} logo"></a>`
                            row.appendChild(col);
                        } catch (error) { console.error('Error rendering suggested websites: ' + r * this.cols + c, error); }
                    }
                    list.appendChild(row);
                }
            }
        }
    }
</script>

<template>
    <div id="websitesList" class="container">
    </div>
</template>

<style scoped>
    #websitesList :deep(.row .col img) {
        border: 3px solid transparent;
        margin-right: 10px;
    }
    #websitesList :deep(.row .col:last-child img) {
        margin-right: 0px;
    }
    #websitesList :deep(.row .col img:hover) {
        border: 3px solid var(--bg-blue);
    }
</style>