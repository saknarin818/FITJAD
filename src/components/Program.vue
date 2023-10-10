<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
            <span  class="or">OR</span>
           
                
            
            <span class="program">เลือกโปรแกรม</span>
			<router-link to="/cadio">
				<span  class="cadios">คาร์ดิโอ</span>
				<div class="cadio"></div>
			</router-link>
			<router-link to="/run">
				<span  class="running">วิ่ง</span>
				<div class="run"></div>
			</router-link>
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
.running { 
	color:rgba(0, 0, 0, 1);
	width:500px;
	height:93px;
	position:absolute;
	left:180px;
	top:600px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}
.cadios { 
	color:rgba(0, 0, 0, 1);
	width:500px;
	height:93px;
	position:absolute;
	left:860px;
	top:600px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}
.or { 
	color:rgba(0, 0, 0, 1);
	width:91px;
	height:93px;
	position:absolute;
	left:725px;
	top:370px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:30px;
	letter-spacing:0;
}
.program { 
	color:rgba(0, 0, 0, 1);
	width:500px;
	height:93px;
	position:absolute;
	left:500px;
	top:120px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}
.run { 
	width:500px;
	height:350px;
	position:absolute;
	left:180px;
	top:210px;
	background-image:url(../img/image_4.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cadio { 
	width:500px;
	height:350px;
	position:absolute;
	left:860px;
	top:210px;
	background-image:url(../img/image_5.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>