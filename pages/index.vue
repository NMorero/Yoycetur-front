<template>
  <div class="row justify-content-center  mt-lg-4">
    <video v-if="url != null"  alt="" class="banner col-lg-9 col-12" autoplay muted loop>
      <source :src="url+'/images/banners/home.mp4'" type="video/mp4">
    </video>
    <div v-if="outs != null" class="row col-11 justify-content-around justify-content-center mt-5">
        <div v-for="(out, index) in outs" :key="'out'+index"  class="col-xl-3 col-lg-6 col-10 p-lg-5 p-3" >
          <Nuxt-link :to="'/'+out.title.replace(/ /g, '-')"><img :src="url+'/images/travel_outs/'+out.image" alt="" class="outs mb-5" /></Nuxt-link>
        </div>
    </div>
  </div>

</template>

<script>
export default{ 
  data(){
    return{
      url: null,
      outs: null,
      loaded: false
    }
  },
  mounted(){
    this.url = process.env.SERVER_URL;
    this.$axios.$get('/getTravelOuts')
    .then((res)=>{
      this.outs = res.travelOuts;
    })
  },
}
</script>


<style>
  .banner{
    width: 100%;
  }

*{
  overflow-x: hidden;
}

  .outs{
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
      0 2px 2px rgba(0,0,0,0.12), 
      0 4px 4px rgba(0,0,0,0.12), 
      0 8px 8px rgba(0,0,0,0.12),
      0 16px 16px rgba(0,0,0,0.12);
  }

  .outs:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
</style>