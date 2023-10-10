<template>

    <div v-if="showContent" class="container d-flex justify-content-between">
    <a class="navbar-brand" href="#">
      
    </a>

    <div>
        <router-link to="/">
            <div class="LOGO"></div>
        </router-link>
		<router-link to="/" >
			<div class="home">หน้าหลัก</div>
		</router-link>
		<router-link to="/acti" >
			<div class="acti">กิจกรรม</div>
		</router-link>
		 <router-link to="/tel" >
			<div class="tel">ติดต่อ</div>
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
	left:950px;
	top:35px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
}
.acti { 
	color:rgba(0, 0, 0, 1);
	width:166px;
	height:69px;
	position:absolute;
	left:1150px;
	top:35px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
}
.tel { 
	color:rgba(0, 0, 0, 1);
	width:167px;
	height:69px;
	position:absolute;
	left:1300px;
	top:35px;
	font-family: 'Mali', cursive;	text-align:center;
	font-size:32px;
	letter-spacing:0;
	
}

</style>