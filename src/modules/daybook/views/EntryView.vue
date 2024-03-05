<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">1</span>
            <span class="mx-1 fs-3">Marzo</span>
            <span class="mx-2 fs-4 fw-ligth">2024</span>
        </div>


        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn btn-primary">
                Subir Foto
                <i class="fa-solid fa-file-arrow-up"></i>
            </button>
        </div>

    </div>

    <hr/>

    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué sucedió hoy ?"
        >
        </textarea>
    </div>


    <Fab
     icon="fa-floppy-disk" 
    />

    <div>
        <img src="https://s32625.pcdn.co/wp-content/uploads/2019/01/370.jpg.webp" 
            alt="Entry - picture"
            class="img-thumbnail"
        >
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .2);
}
</style>