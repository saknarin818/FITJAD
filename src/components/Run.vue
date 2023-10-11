<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
		<PageMenu/>
        <div>
            
            <span class="run">RUNS</span>
        	<router-link to="/funrun">
				<span class="funrun">Fun Run<br> (5KM.)</span>
			</router-link>
			<router-link to="minirun">
				<span class="mini">Mini Marathon<br>(10KM.)</span>
			</router-link>
			<router-link to="halfrun">
				<span class="Half">Half Marathon<br>(21KM.)</span>
			</router-link>
			<router-link to="fullrun">
				<span class="Full">Full Marathon<br>(42KM.)</span>
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
	left:30px;
	top:600px;
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
	top:600px;
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
	left:760px;
	top:600px;
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
	left:1150px;
	top:600px;
    font-family: 'Mali', cursive;	text-align:center;
	text-align:center;
	font-size:28px;
	letter-spacing:0;
}
</style>