<script>
</script>

<template>
    <div style="background-color: var(--services-bg);">
        <div id="services" class="container text-center">
            <div class="row">
                <div class="col-12 col-lg">
                    <a href="#" class="d-flex align-items-center"><i class="bi bi-phone service-icon"></i>MEDIA AND ENTERTAINMENT</a>
                </div>
                <div class="col-12 col-lg b-y">
                    <a href="#" class="d-flex align-items-center"><i class="bi bi-cup-straw service-icon"></i>FOOD AND DRINK</a>
                </div>
                <div class="col-12 col-lg b-y">
                    <a href="#" class="d-flex align-items-center"><i class="bi bi-coin service-icon"></i>MONEY AND SERVICES</a>
                </div>
                <div class="col-12 col-lg b-y">
                    <a href="#" class="d-flex align-items-center"><i class="bi bi-airplane service-icon" style="transform: rotate(45deg);"></i>TRAVEL AND TRANSPORT</a>
                </div>
                <div class="col-12 col-lg">
                    <a href="#" class="d-flex align-items-center"><i class="bi bi-bag service-icon"></i>FASHION AND HEALTH</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    i.bi {
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