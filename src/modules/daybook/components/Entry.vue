<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: {id: 10} })">

        <!-- Title -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">24</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ducimus ad error tempore deleniti, tempora incidunt debitis ullam voluptate velit odio rem assumenda, maxime perferendis repellendus libero labore modi. Amet.
        </div>

    </div>
</template>

<script>


export default {


}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #123b50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 54);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}



</style>