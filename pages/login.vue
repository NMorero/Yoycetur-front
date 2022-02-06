<template>
    <div id="content" class="justify-content-center d-flex align-middle m-auto">
        <div id="loginBox" class="m-auto text-center py-3 ">
            <img class="logo mt-3" src="~/assets/logo_banner.png" alt="">
            <div class="form text-center px-5 mt-5">
                <b-form-input  v-model="user" class="mt-3 input" :class="showErr && userEmpty ? 'err' : 'l'" placeholder="Usuario"></b-form-input>
                <b-form-input  v-model="pass" class="mt-3 input" :class="showErr && passEmpty ? 'err' : 'l'" placeholder="Contraseña"></b-form-input>
                <b-button class="mt-4 btnLogin" @click="submit">Iniciar sesion</b-button>
                <span v-if="showErr" class="err" >Complete los campos vacios</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login',
    data() {
        return {
            user: '',
            pass: '',
            showErr: false
        }
    },
    computed: {
        passEmpty() {
            if(this.pass === ''){
                return true;
            }
            return false;
        },
        userEmpty(){
            if(this.user === ''){
                return true;
            }
            return false;
        }
    },
    methods: {
        submit(e){
            if(this.passEmpty || this.userEmpty){
                this.showErr = true;
            }else{
                this.showErr = false;
                this.$axios.$post('/login', {user: this.user, pass: this.pass})
                .then((res)=>{
                    if(res.status === 0){
                        this.$cookies.set('logedIn', true);
                        this.$router.push('/')
                    }
                })
            }
        }
    },
    
}
</script>

<style>
.err{
    color: rgb(241, 46, 46) !important;
    border-color: rgb(241, 46, 46) !important;
}
    
    .btnLogin{
        width: 100%;
        background-color: #00567d;
        border: none;
        height: 40px;
    }
    #content{
        height: 100vh;
    }
    .input{
        border: none;
        border-radius: 0;
        border-bottom: 1px solid gainsboro;
        outline: none;
    }
   .form-control:focus {
        border: none;
        border-bottom: 1px solid #00567d;
        box-shadow: none;
    }
    #loginBox{
        max-width: 350px;
        width: 90vw;
        height: 350px;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
    }
    .logo{
        width: 250px;
        height: 50px;
        filter: invert(75%) sepia(45%) saturate(2128%) hue-rotate(180deg) brightness(97%) contrast(102%);
}
</style>