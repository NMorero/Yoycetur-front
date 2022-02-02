<template>
    <div class="row pt-5 px-5 justify-content-around">
        <div class="col-xl-3 col-lg-3 text-center p-5 actionBox align-center m-lg-0 mb-4">
            <span class="text-center">Agregar salida</span>
        </div>

        <div class="col-xl-3 col-lg-3 text-center p-5 actionBox align-center m-lg-0 mb-4">
            <span class="text-center">Agregar viaje</span>
        </div>

        <div class="col-xl-3 col-lg-3 text-center p-5 actionBox align-center m-lg-0 mb-4">
            <span class="text-center">Estadisticas</span>
        </div>
        
        
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    
}
</script>
<style>
body{
    background-color: white;
}

.actionBox{
    background-color: #00567d;
}
.actionBox span{
    font-size: 30px;
    color: white;
    border-radius: 10px;
}

</style>