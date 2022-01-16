<template>
    <div>
        <header id="header" class=" row align-middle text-center text-lg-left py-xl-4 py-lg-3 py-md-3 py-4">
            <Nuxt-link to="/" class=" align-middle"><img src="~/assets/logo_banner.png" alt="" class="col-lg-4 col-xl-2 col-md-6 col-7 m-auto"></Nuxt-link>
        </header>
        <Nuxt/>
        <footer id="footer">

        </footer>
        <a href="https://api.whatsapp.com/send?phone=+5492213521200" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'whatsapp']" class="icon shadow" /></a>
    </div>
</template>

<style>
    #header{
        height: 10vh;
        padding: 1%;
        max-height: 100px;
        background-color: #00567d;
    }
    #header img{
        height: 100%;
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
        }
    }

    @media only screen and (max-width: 991px) {
        #header img{
            height: 100%;
        }
    }
</style>