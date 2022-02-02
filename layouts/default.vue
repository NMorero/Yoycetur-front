<template>
    <div>
        <header id="header" class=" row align-middle text-center text-lg-left pl-xl-3  ">
            <Nuxt-link to="/" class=" align-middle"><img src="~/assets/logo_banner.png" alt="" class="col-lg-5 col-xl-3 col-md-6 col-10 pt-3 m-auto text-center align-middle"></Nuxt-link>
        </header>
        <Nuxt/>
        <footer id="footer">

        </footer>
        <a v-if="!logedIn" href="https://api.whatsapp.com/send?phone=+5492213521200" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'whatsapp']" class="icon shadow" /></a>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logedIn: false
        }
    },
    mounted(){
        const cookieRes = this.$cookies.get('logedIn');
        if(cookieRes !== true){
            this.logedIn = true;
        }
    }
}
</script>
<style>
    #header{
        max-height: 100px;
        background-color: #00567d;
    }
    #header img{
        height: 80%;
        width: auto;
    }
    #footer{
        height: 10vh;
    }
    *{
        transition: all 0.2s ease-in-out;
        font-family: "Roboto";
        
    }

    .icon{
        position: fixed;
        bottom: 3vh;
        right: 2vw;
        font-size: 80px;
        background-color: rgb(4, 223, 88);
        color: white;
        border-radius: 50%;
        padding: 10px;
        width: 80px !important;
        height: 80px;
    }

    .icon:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .icon{
            position: fixed;
            bottom: 5vh;
            right: 5vw;
            font-size: 60px;
            background-color: rgb(4, 223, 88);
            color: white;
            border-radius: 50%;
            padding: 10px;
            width: 60px !important;
            height: 60px;
        }
        #header img{
            height: 80%;
            width: auto ;
        }
    }

    @media only landscape and (max-width: 800px) {
        #header img{
            height: 50%;
            width: auto ;
        }
    }

    @media only screen and (max-width: 991px) and (min-width: 601px){
        #header img{
            height: 80%;
        }
    }
</style>