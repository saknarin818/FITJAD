<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
          <h1 class="acti">กิจกรรม</h1>
          <div class="card-group mt-3">
            <div class="card">
                <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-1/327247648_843373956728815_5703833683296330532_n.png?stp=dst-png_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFe2X4Ky4XnbcrZwATVf8V2Djw_h7NJxHMOPD-Hs0nEcyzO9GbyVmAr1OgvhEsCcwmvT4VzqUy-IaUK-MVlc5Lx&_nc_ohc=FFaB-rIQehYAX9fEA00&_nc_ht=scontent.fcnx2-1.fna&oh=00_AfBH6FN28l-O-CeXJizUayKYpmiEYc-md-F8_amBoQmBxw&oe=652ACD1C" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">กิจกรรมวิ่งและออกกำลังกายจาก thaifit</h5>
                    <p class="card-text"></p>
                    <p class="card-text"><small class="text-body-secondary"> Thaifit</small></p>
                    <a href="https://thai.fit/" target="_blank"><button class="btn btn-dark">ดูเพิ่มเติม</button></a>
                </div>
              </div>
           </div>
            
        </div>

    </div>
</template>

<script>
import PageMenu from "./PageMenu.vue";

export default {
  components: { PageMenu },
};
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;1,500&display=swap');
.card{
  left: 140px;
  top: 50px;
  
}
.acti { 
	color:rgba(0, 0, 0, 1);
	width:500px;
	height:93px;
	position:absolute;
	left:500px;
	top:100px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}
</style>