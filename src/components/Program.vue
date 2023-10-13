<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
            <span  class="or">OR</span>
			<div class="run"></div>
			<div class="cadio"></div>
            
            <span class="program">เลือกโปรแกรม</span>
			<router-link to="/cadio">
				<button class="button cadios">คาร์ดิโอ</button>
			</router-link>
			<router-link to="/run">
				<button  class="button running">วิ่ง</button>
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
/* สร้างเอฟเฟกต์เมื่อ hover ในปุ่ม */
.button {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}
.button:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: red;
}
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
	top:100px;
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

@media only screen and (max-device-width: 844px) {
.button {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}
.button:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: red;
}
.running { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:370px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:30px;
	letter-spacing:0;
}
.cadios { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:720px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:30px;
	letter-spacing:0;
}
.or { 
	color:rgba(0, 0, 0, 1);
	width:300px;
	height:60px;
	position:absolute;
	left:50px;
	top:440px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:30px;
	letter-spacing:0;
}
.program { 
	color:rgba(0, 0, 0, 1);
	width:300px;
	height:60px;
	position:absolute;
	left:50px;
	top:100px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:30px;
	letter-spacing:0;
}
.run { 
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:150px;
	background-image:url(../img/image_4.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cadio { 
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:500px;
	background-image:url(../img/image_5.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
}
</style>