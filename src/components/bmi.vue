<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <PageMenu/>
        <span class="bmi">คำนวณค่า BMI</span>

        <div class="bmi1">
            <p>โปรดกรอกน้ำหนัก (กิโลกรัม) และส่วนสูง (เมตร) ของคุณ</p><br>
            <label for="weight">น้ำหนัก (กิโลกรัม):</label><br>
            <input type="text" id="weight" v-model="weight"><br><br>
            <label for="height">ส่วนสูง (เมตร):</label><br>
            <input type="text" id="height" v-model="height"><br><br>
            <button class="button" @click="calculateBMI">คำนวณ BMI</button><br><br>
            <p>ค่า BMI ของคุณคือ : <b> {{ bmi }} </b></p>

        </div>
        <div>
            <span class="bmi2"><p>คำนวณค่าดัชนีมวลกาย</p>น้อยกว่า 18.50	น้ำหนักน้อย / ผอม	มากกว่าคนปกติ<br><br>
              ระหว่าง 18.50 - 22.90	ปกติ (สุขภาพดี)	เท่าคนปกติ<br><br>
              ระหว่าง 23 - 24.90	ท้วม / โรคอ้วนระดับ 1	อันตรายระดับ 1<br><br>
              ระหว่าง 25 - 29.90	อ้วน / โรคอ้วนระดับ 2	อันตรายระดับ 2<br><br>
              มากกว่า 30	อ้วนมาก / โรคอ้วนระดับ 3	อันตรายระดับ 3</span>
        </div>

    </div>
</template>

<script>
import PageMenu from "./PageMenu.vue";

export default {
  components: { PageMenu },
  data() {
    return {
      weight: null,
      height: null,
      bmi: null,
    };
  },
  methods: {
    calculateBMI() {
      var weight = parseFloat(this.weight);
      var height = parseFloat(this.height);

      if (!isNaN(weight) && !isNaN(height)) {
        var bmi = weight / (height * height);
        this.bmi = bmi.toFixed(2);
      } else {
        this.bmi = "โปรดใส่น้ำหนักและส่วนสูงที่ถูกต้อง";
      }
    },
  },

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
.bmi1{
    color:rgba(0, 0, 0, 1);
    
    top:250px;
    left:120px;
    position:absolute;
    font-family: 'Mali', cursive;	text-align:center;
	  font-size:22px;
	  letter-spacing:0;
}
.bmi2{
    color:rgba(0, 0, 0, 1);
    width:600px;
	  height:120px;
    top:260px;
    left:720px;
    position:absolute;
    font-family: 'Mali', cursive;	text-align:center;
	  font-size:22px;
	  letter-spacing:0;
}
.bmi{
  color:rgba(0, 0, 0, 1);
	width:550px;
	height:93px;
	position:absolute;
	left:500px;
	top:120px;
  font-family: 'Mali', cursive;	text-align:center;
	font-size:50px;
	letter-spacing:0;
}
</style>