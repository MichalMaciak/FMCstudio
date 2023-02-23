<svelte:head>
	<link rel="stylesheet" href='src/lib/style.css'>
</svelte:head>


<script>
	import Theatre from '$lib/3d/Theatre.svelte';
    import OpenTag from '$lib/OpenTag.svelte';
    import * as THR from '@threlte/core';
    import * as Three from 'three'
    import { Vector2 } from 'three';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
    import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
    import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'
   
   

</script>



<section class="canvas-wrapper-theatre">
   	<THR.Canvas 
        dpr = {0.9}
        frameloop = {'always'}
        shadowMapType = {Three.VSMShadowMap}
        shadows
        >
        <THR.Pass pass={new UnrealBloomPass(new Vector2(2048, 2048), 0.90, 0.35, 1)} /> 
        <THR.Pass pass={new SAOPass(new Three.Scene, new Three.Camera, false, false, new Vector2(256, 256))} /> 
        <THR.Pass pass={new SMAAPass(256, 256)} /> 
        <Theatre/> 
       
    </THR.Canvas>     
</section>

<!-- <section class="wrapper-OpenTag">
    <OpenTag /> 
</section> -->

<section class="wrapper-secend">
    <OpenTag /> 
</section>

<style>
    .canvas-wrapper-theatre {
        position: relative;
		height: 100vh;
        width: 100vw;
    }

 /*    .wrapper-OpenTag {
        position: absolute;
        width: 25%;
        bottom: 0;
        right: 0;
        z-index: 9999;
        background-color: rgb(32, 32, 32);
        padding: 10rem;
    } */
    
    .wrapper-secend {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: rgb(32, 32, 32)
    }

   
</style>