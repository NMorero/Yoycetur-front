<template>
  <div v-if="travel != null" class="row justify-content-around mt-4 p-4 content align-middle" >   
    <div class="col-lg-5 col-xl-5 col-10 p-0 mb-lg-0 mb-xl-0 mb-5 img-content">
      <img :src="url+'/images/travels/'+travel.image" alt="" class="travelImg shadow align-self-middle">
    </div>
    <div class="col-lg-5 col-xl-5 col-10 shadow p-4 rounded travelInfo">
      <h2 class="py-4 border-bottom">{{travel.title}}</h2>
      <div class="p-0 m-0 py-4 border-bottom row">
        <div class="col-lg-3 col-xl-3 col-4 p-0 ">
          <p class="title">Precio</p>
          <p class="subtitle ">$ {{travel.price}}</p>
        </div>
        <div class="col-lg-8 col-xl-8 col-8 text-left row ">
          <p  class="col-12 title">Formas de pago</p>
          <img class="col-lg-3 col-xl-2 col-sm-2 col-4" alt="Icono de dinero en efectivo" src="https://www.turismozeta.com.ar/assets/templates/template_six/icons/credit-card/wallet-e87ba79b9e967c3a91d2983d045c9f08f296afbda0bf2ecd979c60bf70b236a0.svg">
          <img class="col-lg-3 col-xl-2 col-sm-2 col-4" alt="Icono tarjeta de credito mastercard" src="https://www.turismozeta.com.ar/assets/templates/template_six/icons/credit-card/mastercard-381a3455124485c692c0371db6a6df553f7eb74b86ec5cab6a38099700f469ee.svg">
          <img class="col-lg-3 col-xl-2 col-sm-2 col-4" alt="Icono tarjeta de credito visa" src="https://www.turismozeta.com.ar/assets/templates/template_six/icons/credit-card/visa-8f506479c2b830ee279d75c7be6b6094f61f2062c7b17af4a207d5dfdfad39ba.svg">
          <img class="col-lg-3 col-xl-2 col-sm-2 col-4" alt="Icono tarjeta de mercado pago" src="https://www.turismozeta.com.ar/assets/templates/template_six/icons/credit-card/mp-4f001804ffbb209adf268df475e7235b9cf772690f2aede3e3cb5f1f77f7b235.svg">
       </div>
      </div>
      <div class="col-12 text-left p-0 py-4  border-bottom">
        <p class="title">Salida</p>
        <p class="subtitle">{{travel.departures}}</p>
      </div>
      <div class="col-12 text-left p-0 py-4   row">
        <p class="col-12 title">Incluye</p>
        <font-awesome-icon :icon="['fas', 'bed']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Alojamiento" alt="Alojamiento" />
        <font-awesome-icon :icon="['fas', 'plane']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Aereo" alt="Aereo" />
        <font-awesome-icon :icon="['fas', 'shuttle-van']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Traslado" alt="Traslado" />
        <font-awesome-icon :icon="['fas', 'briefcase-medical']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Asistencia al viajero" alt="Asistencia al viajero" />
        <font-awesome-icon :icon="['fas', 'map']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Excursion" alt="Excursion" />
        <font-awesome-icon :icon="['fas', 'bus']" class="contentIcon col-lg-2 col-xl-1 col-2" title="Bus" alt="Bus" />
      </div>
    </div>
    

      <div class="col-11 shadow align-self-start mt-5 d-lg-block d-xl-block d-md-block d-none">
        <div class=" row justify-content-around align-middle travelContent px-1 pt-4 mb-3">
        <div class="col-2 text-center align-self-center ">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="contentIcon" />
        </div>

        <div class="col-2 text-center align-self-center">
            <font-awesome-icon :icon="['fas', 'calendar-alt']" class="contentIcon" />
        </div>

        <div class="col-2 text-center align-self-center">
            <font-awesome-icon :icon="['fas', 'route']" class="contentIcon" />
        </div>

        <div class="col-2 text-center align-self-center">
            <font-awesome-icon :icon="['fas', 'file-alt']" class="contentIcon" />
        </div>

        <div class="col-2 text-center align-self-center">
            <font-awesome-icon :icon="['fas', 'bus-alt']" class="contentIcon" />
        </div>
      </div>
      <div class=" row justify-content-around align-middle travelContent p-1">
         <div class="col-2 text-center align-self-center">
          
          <p> San Carlos de Bariloche</p>
        </div>

        <div class="col-2 text-center align-self-center">
           <p>
             15 noches, 16 dias
           </p>
        </div>

        <div class="col-2 text-center align-self-center">
           <p>
             Subida al cerro catedral 
           </p>
           <p>
             Paseo por la ciudad
           </p>
        </div>

        <div class="col-2 text-center align-self-center">
           <p>
             76457
           </p>
        </div>
        <div class="col-2 text-center align-self-center">
           <p>
             14 de Diciembre,Buenos Aires
           </p>
        </div>

      </div>
    </div>

    <div class="col-10 shadow align-self-start mt-5 d-lg-none d-xl-none d-md-none d-block p-3">
      <div class="col-12 mb-1 text-center align-self-center">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="contentIcon" />
      </div>
      <div class="col-12 text-center align-self-center">
          <p>San Carlos de Bariloche</p>
      </div>
    </div>

    <div class="col-10 shadow align-self-start mt-3 d-lg-none d-xl-none d-md-none d-block p-3">
      <div class="col-12 mb-1 text-center align-self-center">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="contentIcon" />
      </div>
      <div class="col-12 text-center align-self-center">
          <p>15 noches, 16 dias</p>
      </div>
    </div>

    <div class="col-10 shadow align-self-start mt-3 d-lg-none d-xl-none d-md-none d-block p-3">
      <div class="col-12 mb-1 text-center align-self-center">
          <font-awesome-icon :icon="['fas', 'route']" class="contentIcon" />
      </div>
      <div class="col-12 text-center align-self-center">
          <p>Subida cerro catedral</p>
          <p>Paseo por la ciudad</p>
      </div>
    </div>
    <div class="col-10 shadow align-self-start mt-3 d-lg-none d-xl-none d-md-none d-block p-3">
      <div class="col-12 mb-1 text-center align-self-center">
          <font-awesome-icon :icon="['fas', 'file-alt']" class="contentIcon" />
      </div>
      <div class="col-12 text-center align-self-center">
          <p>78398</p>
      </div>
    </div>
    <div class="col-10 shadow align-self-start mt-3 d-lg-none d-xl-none d-md-none d-block p-3">
      <div class="col-12 mb-1 text-center align-self-center">
          <font-awesome-icon :icon="['fas', 'bus-alt']" class="contentIcon" />
      </div>
      <div class="col-12 text-center align-self-center">
          <p>14 de Diciembre, Buenos Aires</p>
      </div>
    </div>

  </div>
</template>

<script>
export default{ 
    data(){
        return{
        url: '',
        travel:null
        }
    },
    async mounted(){
        this.url = process.env.SERVER_URL;
        const data = await this.$axios.$get('/getTravel/'+this.$route.params.travel);
        this.travel = data.travel;

    },
}
</script>


<style>
p{
  word-break: break-word;

}
  .banner{
    width: 100%;
  }
  .travelImg{
    width: 100%;
    border-radius: 10px;
  }
  .paymentTypeImg{
    width: 100%;
  }
  .travelInfo{
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .contentIcon{
    font-size: 1rem;
  }

  .title{
    font-size: 1rem;
  }
  .subtitle{
    font-size: 1.5rem;
  }

  .img-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 991px) {
    .title{
      font-size: 1rem;
    }
    .contentIcon{
      font-size: 1rem;
    }
    .subtitle{
    font-size: 1.3rem;
  }
  }

  @media only screen and (min-width: 1400px) {
    .title{
      font-size: 2rem;
    }
    .contentIcon{
      font-size: 2rem;
    }
  }
</style>