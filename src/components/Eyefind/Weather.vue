<script>
    export default {
        data() {
            return {
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            }
        },
        methods: {
            updateDay() {
                document.getElementById('day').innerHTML = this.days[new Date().getDay()];
            }
        },
        mounted() {
            this.updateDay();
            setInterval(this.updateDay, 500);
        }
    }
</script>

<template>
    <div id="weather" class="d-flex justify-content-end">
        <div style="text-align: right; padding-right: 15px; border-right: 4px solid white;">
            <span>Grove Street</span><br>
            <span id="day"></span>
        </div>
        <i id="weatherIcon" class="bi bi-cloud-sun"></i>
    </div>
</template>

<style scoped>
    #weather {
        color: white;
    }

    #weatherIcon {
        margin-left: 30px;
        font-size: 3em;
        color: white;
    }
</style>