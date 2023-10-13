<template>
	<div>
  		<PageMenu/>
		<div>
			<hr>
			<h1 class="tthome1">WELCOME TO FIDJAD </h1>
			<span>
				<h4 class="tthome2">The site will make you happy with lean muscle </h4>
			</span>
			<span>
				<h4 class="tthome2">and weight loss.</h4>
			</span><br><hr>
		</div>
		<div>
			<a :href="components" class="menu-item btstart">START</a>
		</div>
  	</div>
	<span><img src="/img/bg.jpg" class="imgbg"></span>
	
</template>

<script>
import PageMenu from "./PageMenu.vue";

export default {
  components: { PageMenu },
  data() {
    return {
		components: '/Program',
		title: 'START',
        };
    },
    methods: {
    handleClick() {
        // การทำงานเมื่อปุ่มถูกคลิก
        }
    }
};
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;1,500&display=swap');

.menu-item {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}

.menu-item:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: rgb(123, 142, 115) 
}

hr{
	border-style: solid;
	border-width: 2px;
	position: relative;
	top: 180px;
	right: 60px;
}

.tthome1{
	font-family: 'Mali', cursive;	
  	text-align: left;
	color: black;
	position: relative;
	top: 200px;
	right: 40px;
	font-size: 40px;
}

.tthome2{
	font-family: 'Mali', cursive;	
  	text-align: left;
	color: black;
	position: relative;
	top: 200px;
	right: 40px;
	font-size: 20px;
}

.btstart {
	width: 100px;
  	font-family: 'Mali', cursive;	
  	text-align: center;
  	background-color: black; 
  	color: white; 
  	border: none; 
  	border-radius: 5px;
	padding: 10px 20px;
	text-decoration: none;
	font-size: 30px; 
	position: relative;
	top: 200px;
	right: 40px;
}

.imgbg{
	text-align: center;
	width: 700px;
	height: 600px;
	left: 70px;
	position: relative;
	top: 50px;
	border-radius: 10px;
}

@media only screen and (max-device-width: 844px) {
.menu-item {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}

.menu-item:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: rgb(123, 142, 115) 
}

hr{
	border-style: solid;
	border-width: 2px;
	position: relative;
	top: 300px;
	right: 5px;
}

.tthome1{
	font-family: 'Mali', cursive;	
  	text-align: left;
	color: black;
	position: relative;
	top:310px;
	right: 5px;
	font-size: 30px;
}

.tthome2{
	font-family: 'Mali', cursive;	
  	text-align: left;
	color: black;
	position: relative;
	top: 310px;
	right: 5px;
	font-size: 20px;
}

.btstart {
	width: 100px;
  	font-family: 'Mali', cursive;	
  	text-align: center;
  	background-color: black; 
  	color: white; 
  	border: none; 
  	border-radius: 5px;
	padding: 10px 20px;
	text-decoration: none;
	font-size: 30px; 
	position: relative;
	top: 300px;
	right: 5px;
}

.imgbg{
	text-align: center;
	width: 300px;
	height: 200px;
	left: 10px;
	position: relative;
	top: -200px;
	border-radius: 10px;
}
}


</style>