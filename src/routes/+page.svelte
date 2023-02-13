<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
	import Logo from '$lib/3d/Logo.svelte';
	import Tv from '$lib/3d/Tv.svelte';
    import * as THR from '@threlte/core';
    import * as Three from 'three'

</script>


<div class="canvas-wrapper-logo">
	<THR.Canvas 
        rendererParameters = {{antialias: true}} 
        shadows
        dpr={1}
    >
        <Logo/>
    </THR.Canvas>     
</div>




<div class="canvas-wrapper-tv">
	<THR.Canvas 
        rendererParameters = {{antialias: true}} 
        shadows 
        dpr={1}
    >
        <Tv/>
    </THR.Canvas>     
</div>



<style>
   
    .canvas-wrapper-logo {
        position: relative;
		height: 350px;
        width: 100vw;
    }



	.canvas-wrapper-tv {
        position: relative;
		height: 50vh;
		width: 50vw;
	}
</style>