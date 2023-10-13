<template>

    <div v-if="showContent" class="container d-flex justify-content-between">
    <a class="navbar-brand" href="#">
      
    </a>

    <div>
        <router-link to="/">
            <div class="LOGO"></div>
        </router-link>
		<router-link to="/" >
			<div class="menu-item home">หน้าหลัก</div>
		</router-link>
		<router-link to="/acti" >
			<div class="menu-item acti">กิจกรรม</div>
		</router-link>
		 <router-link to="/tel" >
			<div class="menu-item tel">ติดต่อ</div>
		</router-link>
		<router-link to="/bmi">
			<div class="menu-item bmi">BMI</div>
		</router-link>

    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
  mounted() {
    // ตั้งค่า showContent เป็น true เมื่อคอนเทนต์เริ่มแสดง
    setTimeout(() => {
      this.showContent = true;
    }, 100); // ตรงนี้คือเวลาที่จะให้แสดง 
  },
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
  color: gray 
}
.LOGO { 
	transform: rotate(-90deg);
	width:120px;
	height:120px;
	position:absolute;
	left:73px;
	top:0px;
	background-image:url(../img/image_3.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home { 
	color:rgba(0, 0, 0, 1);
	width:213px;
	height:69px;
	position:absolute;
	left:920px;
	top:37px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
}
.bmi { 
	color:rgba(0, 0, 0, 1);
	width:150px;
	height:69px;
	position:absolute;
	left:1250px;
	top:37px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
}
.acti { 
	color:rgba(0, 0, 0, 1);
	width:166px;
	height:69px;
	position:absolute;
	left:1110px;
	top:37px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
}
.tel { 
	color:rgba(0, 0, 0, 1);
	width:167px;
	height:69px;
	position:absolute;
	left:1350px;
	top:37px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
	
}
@media only screen and (max-device-width: 844px) {
	.menu-item {
  transition: transform 0.2s ease; /* กำหนดความเร็วและโค้งการแสดงเอฟเฟกต์ */
  transform: scale(1); /* ค่าเริ่มต้น */
  cursor: pointer; /* แสดงเครื่องมือตัวชี้เมื่อ hover */
}
.menu-item:hover {
  transform: scale(1.1); /* ค่าขนาดที่กำหนดในการ hover */
  color: gray 
}
.LOGO { 
	transform: rotate(-90deg);
	width:70px;
	height:70px;
	position:absolute;
	left:40px;
	top:0px;
	background-image:url(../img/image_3.png);
	background-repeat:no-repeat;
	background-size:cover;
}
.home { 
	color:rgba(0, 0, 0, 1);
	width:70px;
	height:70px;
	position:absolute;
	left:155px;
	top:27px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:14px;
	letter-spacing:0;
}
.bmi { 
	color:rgba(0, 0, 0, 1);
	width:70px;
	height:70px;
	position:absolute;
	left:208px;
	top:27px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:14px;
	letter-spacing:0;
}
.acti { 
	color:rgba(0, 0, 0, 1);
	width:70px;
	height:70px;
	position:absolute;
	left:260px;
	top:27px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:14px;
	letter-spacing:0;
}
.tel { 
	color:rgba(0, 0, 0, 1);
	width:70px;
	height:70px;
	position:absolute;
	left:320px;
	top:27px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:14px;
	letter-spacing:0;
	
}
}

</style>