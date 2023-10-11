<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <PageMenu/>
        <div>
          <span  class="mini">Mini Marathon(10KM.)</span>


        </div>

    </div>
</template>

<script>
import PageMenu from "./PageMenu.vue";

export default {
  components: { PageMenu },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,400;1,500&display=swap');

.mini{
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