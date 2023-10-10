<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
            
            <span class="Telephone">ติดต่อเรา</span>
           
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



.Telephone{
    color:rgba(0, 0, 0, 1);
	max-width: auto;
	position: absolute;
	left: 630px;
	top:100px;
    font-family: 'Mali', cursive;	text-align: center;
	font-size:60px;
	letter-spacing:0;
}
</style>