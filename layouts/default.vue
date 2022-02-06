<template>
    <div class="bodyDefault">
        <header id="header" class=" row align-middle text-center text-lg-left pl-xl-3  ">
            <Nuxt-link to="/" class=" align-middle"><img src="~/assets/logo_banner.png" alt="" class="col-lg-5 col-xl-3 col-md-6 col-10 pt-3 m-auto text-center align-middle"></Nuxt-link>
        </header>
        <Nuxt/>
        <footer id="footer">

        </footer>
        <a v-if="!logedIn" href="https://api.whatsapp.com/send?phone=+5492213521200" target="_blank" rel="noopener noreferrer"><font-awesome-icon :icon="['fab', 'whatsapp']" class="icon shadow" /></a>
        <div v-else @click="modalAdd = true"><font-awesome-icon :icon="['fas', 'plus']" class="icon2 shadow" /></div>

        <div v-if="modalAdd" id="bgModalAdd" class="bgModal" @click="clickedModalAdd($event)">
            <div id="modalAdd">
                <button id="openAddOut" class="btnModalAdd" >Agregar salida</button>
                <button id="openAddTravel" class="btnModalAdd">Agregar viaje</button>
            </div>
        </div>
        <div v-if="modalAddOut" id="bgModalAddOut" class="bgModal" @click="clickedModalAdd($event)">
            <div id="modalAddOut">
                <input v-model="newOut.title" type="text" class="input" name="title" placeholder="Titulo">
                <input type="file" name="" class="inputFile" @change="onTravelOutImageChange">
                <input type="file" name="" class="inputFile" @change="onTravelOutBannerChange">
                <button class="btnModalAdd" @click="uploadOut">Agregar salida</button>
            </div>
        </div>

        <div v-if="modalAddTravel" id="bgModalAddTravel" class="bgModal" @click="clickedModalAdd($event)">
            <div id="modalAddTravel">
                <input v-model="newTravel.title" type="text" class="input" placeholder="Titulo">
                <input v-model="newTravel.price" type="text" class="input" placeholder="Precio">
                <select v-model="newTravel.travelOutId">
                    <option v-for="(out, index) in outs" :key="index+'outOption'" :value="out.travelOutId">{{out.title}}</option>
                </select>
                <input v-model="newTravel.departure" type="text" class="input" placeholder="Fecha y lugar de salida">
                <input v-model="newTravel.destination" type="text" class="input" placeholder="Destino">
                <input v-model="newTravel.stay" type="text" class="input" placeholder="Estadía">
                <input v-model="newTravel.excursions" type="text" class="input" placeholder="Excursiones">
                <input v-model="newTravel.file" type="text" class="input" placeholder="File">
                
                <input type="file" name="" class="inputFile" @change="onTravelImageChange">
                <button class="btnModalAdd" @click="uploadTravel">Agregar viaje</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logedIn: false,
            modalAdd: false,
            modalAddOut: false,
            modalAddTravel: false,
            newOut:{
                title: "",
                banner: null,
                image: null
            },
            newTravel:{
                title: "",
                price: "",
                image: null,
                travelOutId: null,
                departure: "",
                destination: "",
                excursions: "",
                file: "",
                stay: ""
            },
            outs: []
        }
    },
    mounted(){
        const cookieRes = this.$cookies.get('logedIn');
        this.logedIn = cookieRes;
        this.url = process.env.SERVER_URL;
        this.$axios.$get('/getTravelOuts')
        .then((res)=>{
            this.outs = res.travelOuts;
        })
    },
    methods: {
        clickedModalAdd(event){
            if(event.target.id === "bgModalAdd"){
                this.modalAdd = false;
            }else if(event.target.id === "bgModalAddOut"){
                this.modalAddOut = false;
            }else if(event.target.id === "openAddOut"){
                this.modalAddOut = true;
            }else if(event.target.id === "openAddTravel"){
                this.modalAddTravel = true;
            }
            else if(event.target.id === "bgModalAddTravel"){
                this.modalAddTravel = false;
            }
        },
        onTravelOutBannerChange(e){
            this.newOut.banner = e.target.files[0];
        },
        onTravelOutImageChange(e){
            this.newOut.image = e.target.files[0];
        },
        onTravelImageChange(e){
            this.newTravel.image = e.target.files[0];
        },
        uploadOut(){
            const fd = new FormData();
            fd.append('title', this.newOut.title)
            fd.append('image', this.newOut.image)
            fd.append('banner', this.newOut.banner)
            
            this.$axios.$post('/addTravelOut', fd)
                .then((res)=>{
                    this.$router.go()
                })
        },
        uploadTravel(){
            const fd = new FormData();
            fd.append('title', this.newTravel.title)
            fd.append('price', this.newTravel.price)
            fd.append('image', this.newTravel.image)
            fd.append('travelOutId', this.newTravel.travelOutId)
            fd.append('departure', this.newTravel.departure)
            fd.append('destination', this.newTravel.destination)
            fd.append('excursions', this.newTravel.excursions)
            fd.append('file', this.newTravel.file)
            fd.append('stay', this.newTravel.stay)
            
            this.$axios.$post('/addTravel', fd)
                .then((res)=>{
                    this.$router.go()
                })
        }
    }
}
</script>
<style>
.bodyDefault{
    background-color: white !important;
}
.bgModal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0,0.5);
}

#modalAdd{
    display:grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 35vh;
    left: 40vw;
    width: 20vw;
    height: 30vh;
    padding: 2%;
    border-radius: 10px;
    background-color: white;
}
#modalAddOut{
    display:grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 25vh;
    left: 40vw;
    width: 20vw;
    height: 50vh;
    border-radius: 10px;
    background-color: white;
    text-align: center;
}

#modalAddTravel{
    display:grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10vh;
    left: 40vw;
    width: 20vw;
    height: 80vh;
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    text-align: center;
    overflow: hidden;
}

.input{
    border: none;
    border-bottom: 1px solid gray;
    width: 15vw;
    margin: auto;
}

.inputFile{
    width: 15vw;
    text-align: center;
    margin: auto;
}
.btnModalAdd{
    width: 10vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: #00567d;
    color: #fff;
    margin: auto;
}




    #header{
        max-height: 100px;
        background-color: #00567d;
    }
    .blue{
        background-color: #00567d !important;
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

    .icon2{
        position: fixed;
        bottom: 3vh;
        right: 2vw;
        font-size: 80px;
        background-color: #00567d;
        color: white;
        border-radius: 50%;
        padding: 25px;
        width: 80px !important;
        height: 80px;
    }

    .icon2:hover{
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
        .icon2{
            position: fixed;
            bottom: 5vh;
            right: 5vw;
            font-size: 60px;
            background-color: #00567d;
            color: white;
            border-radius: 50%;
            padding: 20px;
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