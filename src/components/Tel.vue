<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <PageMenu/>
        <div>
            <span class="Telephone">Contact Us</span>
        </div>
        <div>
            <img src="img/tel.png" alt="" class="iconphone"><br>
            <span class="phone">By Phone</span>
            <img src="img/face.png" alt="" class="iconfb"><br>
            <span class="pagefb">Page Facebook</span>
            <img src="img/line.png" alt="" class="iconline"><br>
            <span class="line">By Line</span>
            <div class="ttphone">
                <div>Monday to Friday, 9am to 6pm</div>
                <div>Thailand Toll-Free</div>
                <div>xxx-xxx-xxxx</div>
            </div>
            <div class="ttpagefb">
                <div>
                    <div>Please Click Me</div><br>
                    <a :href="facebookLink" class="buttonpage">Go To Page</a>
                </div> 
            </div>
            <div class="ttline">
                <div>
                    <div>@FITJAD</div>
                    <div>xxx-xxx-xxxx</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import PageMenu from "./PageMenu.vue";

export default {
  components: { PageMenu },
  data() {
    return {
        facebookLink: 'https://www.facebook.com/',
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



.Telephone{
    font-family: 'Mali', cursive;	
    text-align: center;
    color: black;
    position: relative;
    bottom: -50px;
    left: 200px;
    font-size: 50px;
    
}

.phone{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: -80px;
    bottom: -100px;
    font-size: 30px;
}

.iconphone{
    width: 100px;
    height: 100px;
    position: relative;
    left: -70px;
    bottom: -100px;
}

.pagefb{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: 220px;
    bottom: 0;
    font-size: 30px;
}

.iconfb{
    width: 100px;
    height: 100px;
    position: relative;
    left: 150px;
    bottom: -5px;
}

.iconline{
    width: 100px;
    height: 100px;
    position: relative;
    left: 400px;
    bottom: 90px;
}

.line{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: 625px;
    bottom: 80px;
    font-size: 30px;
}

.ttphone{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: -180px;
    bottom: 80px;
    font-size: 15px;
}

.ttpagefb{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: 170px;
    bottom: 150px;
    font-size: 15px;
}

.buttonpage {
  background-color: #000; 
  color: #fff; 
  padding: 10px 20px;
  text-decoration: none; 
  border: none; 
  border-radius: 5px; 
}

.ttline{
    font-family: 'Mali', cursive;
    color: black;
    position: relative;
    text-align: center;
    left: 515px;
    bottom: 220px;
    font-size: 15px;
}
</style>