<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
	import Studia from '$lib/3d/Studia.svelte';
	import Theatre from '$lib/3d/Theatre.svelte';
    import OpenTag from '$lib/OpenTag.svelte';
    import * as THR from '@threlte/core';
    import * as Three from 'three'


</script>



<section class="canvas-wrapper-theatre">
   	<THR.Canvas 
        frameloop = {'always'}
        shadows 
        rendererParameters = {{antialias: true}}
        shadowMapType = {Three.VSMShadowMap}
    >   
        <Theatre/> 
       
    </THR.Canvas>     
</section>

<section class="wrapper-OpenTag">
    <OpenTag /> 
</section>

<section class="wrapper-secend">
    <OpenTag /> 
</section>

<style>
    .canvas-wrapper-theatre {
        position: relative;
		height: 100vh;
        width: 100vw;
    }

    .wrapper-OpenTag {
        position: absolute;
        width: 25%;
        bottom: 0;
        right: 0;
        z-index: 9999;
        background-color: rgb(32, 32, 32);
        padding: 10rem;
    }
    
    .wrapper-secend {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: rgb(32, 32, 32)
    }

   
</style>