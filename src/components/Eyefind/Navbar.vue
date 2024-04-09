<script>
</script>

<template>
    <div style="background-color: var(--services-bg);">
        <div id="services" class="container text-center">
            <div class="row">
                <div class="col-12 col-lg d-flex align-items-center">
                    <i class="bi bi-phone service-icon"></i><a href="#">MEDIA AND ENTERTAINMENT</a>
                </div>
                <div class="col-12 col-lg b-y d-flex align-items-center">
                    <i class="bi bi-cup-straw service-icon"></i><a href="#">FOOD AND DRINK</a>
                </div>
                <div class="col-12 col-lg b-y d-flex align-items-center">
                    <i class="bi bi-coin service-icon"></i><a href="#">MONEY AND SERVICES</a>
                </div>
                <div class="col-12 col-lg b-y d-flex align-items-center">
                    <i class="bi bi-airplane service-icon" style="transform: rotate(45deg);"></i><a href="#">TRAVEL AND TRANSPORT</a>
                </div>
                <div class="col-12 col-lg d-flex align-items-center">
                    <i class="bi bi-bag service-icon"></i><a href="#">FASHION AND HEALTH</a>
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