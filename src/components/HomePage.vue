<template>
  <div >
  <PageMenu/>
    <div class="menu">
		<div class="gb"></div>
		
		<div class="e66_10"></div>
      	<div class="e50_156"></div>
		
        <div class="e50_160"></div>
		<router-link to="/Program" >
			<div class="e50_161">START</div>
		</router-link>
        <span class="e50_162">แนะนำโปรแกรมการวิ่งและคาดิโอ</span>
    	<div class="e62_6"></div>
    	<div class="e62_4"></div>
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

.gb{ 
	width:330px;
	height:410px;
	position:absolute;
	left:0px;
	top:314px;
	background-image:url(../img/image_15.png);
	background-repeat:no-repeat;
	background-size:cover;
}

.LOGO { 
	transform: rotate(-90deg);
	width:150px;
	height:150px;
	position:absolute;
	left:73px;
	top:0px;
	background-image:url(../img/image_3.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.e66_10 { 
	width:557px;
	height:349px;
	background-image:url(../img/image_14.png);
	background-repeat:no-repeat;
	background-size:cover;
	position:absolute;
	left:915px;
	top:366px;
}


.e50_162{
	color:rgb(237, 25, 25);
	width:980px;
	height:100px;
	position:absolute;
	left:305px;
	top:200px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}

.e50_161{
	color:rgb(236, 29, 29);
	width:484px;
	height:138px;
	position:absolute;
	left:503px;
	top:390px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:125px;
	letter-spacing:0;
}


</style>