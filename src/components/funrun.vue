<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <PageMenu/>
        <div>
            <span  class="funrun">Fun Run (5km.)</span>

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
.funrun{
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
</style>