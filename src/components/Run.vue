<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
            <div class="run1"></div>
			<div class="run2"></div>
            <div class="run3"></div>
            <div class="run4"></div>

            <span class="run">RUNS</span>
        	<router-link to="/funrun">
				<button class="button funrun">Fun Run (5KM.)</button>
			</router-link>
			<router-link to="minirun">
				<button class="button mini">Mini Marathon(10KM.)</button>
			</router-link>
			<router-link to="halfrun">
				<button class="button Half">Half Marathon(21KM.)</button>
			</router-link>
			<router-link to="fullrun">
				<button class="button Full">Full Marathon(42KM.)</button>
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
.button {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}
.button:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: red;
}
.run1{
	width:300px;
	height:300px;
	position:absolute;
	left:65px;
	top:240px;
	background-image:url(../img/run4.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run2{
	width:300px;
	height:300px;
	position:absolute;
	left:440px;
	top:240px;
	background-image:url(../img/run2.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run3{
	width:300px;
	height:300px;
	position:absolute;
	left:810px;
	top:240px;
	background-image:url(../img/run3.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run4{
	width:300px;
	height:300px;
	position:absolute;
	left:1185px;
	top:240px;
	background-image:url(../img/run1.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run{
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
.funrun { 
	color:rgba(0, 0, 0, 1);
	width:341px;
	height:45px;
	position:absolute;
	left:40px;
	top:580px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:28px;
	letter-spacing:0;
}
.mini { 
	color:rgba(0, 0, 0, 1);
	width:341px;
	height:45px;
	position:absolute;
	left:420px;
	top:580px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:28px;
	letter-spacing:0;
}
.Half { 
	color:rgba(0, 0, 0, 1);
	width:341px;
	height:45px;
	position:absolute;
	left:795px;
	top:580px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:28px;
	letter-spacing:0;
}
.Full { 
	color:rgba(0, 0, 0, 1);
	width:341px;
	height:45px;
	position:absolute;
	left:1170px;
	top:580px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:28px;
	letter-spacing:0;
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
.run1{
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:150px;
	background-image:url(../img/run4.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run2{
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:450px;
	background-image:url(../img/run2.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run3{
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:750px;
	background-image:url(../img/run3.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run4{
	width:300px;
	height:200px;
	position:absolute;
	left:50px;
	top:1050px;
	background-image:url(../img/run1.png);
	background-repeat:no-repeat;
	background-size:cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.run{
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
.funrun { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:370px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:20px;
	letter-spacing:0;
}
.mini { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:670px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:20px;
	letter-spacing:0;
}
.Half { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:970px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:20px;
	letter-spacing:0;
}
.Full { 
	color:rgba(0, 0, 0, 1);
	width:200px;
	height:60px;
	position:absolute;
	left:100px;
	top:1270px;
    font-family: 'Mali', cursive;	text-align:center;
	font-size:20px;
	letter-spacing:0;
}
}
</style>