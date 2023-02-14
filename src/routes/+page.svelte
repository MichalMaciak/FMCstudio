<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
	import Logo from '$lib/3d/Logo.svelte';
	import Tv from '$lib/3d/Tv.svelte';
    import * as THR from '@threlte/core';

</script>


<div class="canvas-wrapper-logo">
	<THR.Canvas 
        shadows
        rendererParameters = {{antialias: true}} 
    >   
        <Logo/>
        
    </THR.Canvas>     
</div>





<div class="canvas-wrapper-tv">
	<THR.Canvas 
        shadows
        rendererParameters = {{antialias: true}} 
    >
        <Tv/>
    </THR.Canvas>     
</div>



<style>
   
    .canvas-wrapper-logo {
        position: relative;
		height: 100vh;
        width: 100vw;
    }



	.canvas-wrapper-tv {
        position: relative;
		height: 50vh;
		width: 50vw;
	}
</style>