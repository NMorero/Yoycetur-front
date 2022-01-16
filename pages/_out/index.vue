<template>
  <div class="row justify-content-center mt-4">
    <img :src="url+'/images/banners/'+banner" alt="" class="banner col-lg-9 col-xl-9 col-11">
    <div class="row col-lg-11 col-xl-11 col- col-10 justify-content-around my-5 p-5">
        <Nuxt-link  v-for="(travel, index) in travels" :key="'travel'+index" :to="'/'+$route.params.out+'/'+travel.title.replaceAll(/ /g, '-')" class="travels">
          <b-card
          :title="travel.title"
          :img-src="url+'/images/travels/'+travel.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="travelCard"
          footer-tag="footer"
          >

          <template #footer >
              <div class="justify-content-between row">
                  <span class="col-6 text-left">DESDE</span>
                  <span class="col-6 text-right">${{travel.price}}</span>
              </div>
          </template>
              
          </b-card>
        </Nuxt-link>
    </div>
  </div>
</template>

<script>
export default{ 
    data(){
        return{
        url: '',
        banner:'',
        travels: []
        }
    },
    async mounted(){
        this.url = process.env.SERVER_URL;
        const bannerRes = await this.$axios.$get('/getTravelOutBanner/'+this.$route.params.out);
        this.banner = bannerRes.banner.banner;
        const data = await this.$axios.$get('/getTravels/'+this.$route.params.out);
        this.travels = data.travels;

    },
}
</script>


<style>
  .banner{
    width: 100%;
  }

  .travels h4{
    color: black;
  }
  .travels{
    border: none !important;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  }

  .travelCard{
    border: none;
  }

  .travels:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

  *{
    text-decoration: none !important;
  }

  .travels footer{
      background-color: white;
      border: none;
  }
  .travels footer span{
      font-size: 1.5rem;
      color: rgb(156, 156, 156);
  }

  .travels button{
      background-color: rgb(47, 120, 189);
      border: none;
  }

  @media only screen and (max-width: 600px) {
        .banner{
          width: 100%;
        }

        .travels footer span{
      font-size: 1rem;
      color: rgb(156, 156, 156);
  }
    }
</style>