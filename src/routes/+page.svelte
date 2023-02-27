<script>
	import Theatre from '$lib/3d/Theatre.svelte';
    import OpenTag from '$lib/OpenTag.svelte';
    import GalleryImage from '$lib/GalleryImage.svelte';
    import SvelteSeo from "svelte-seo";
    
    import * as THR from '@threlte/core';
    import * as Three from 'three'
    import { Vector2 } from 'three';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
    import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
    import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'

    let img1 = "/img/studio_m1.jpg"
    let img2 = "/img/studio_m2.jpg"

    let x = false
    let y = true
    
    

</script>

<SvelteSeo
  title="FMC Studio"
  description="Wyprodukujemy dla Ciebie program"
/>




<div class="relative h-screen w-screen bg-neutral-800">
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
</div>

<div class="bg-neutral-800">
    <GalleryImage />
</div>

<div class = "grid grid-cols-2 gap-0 bg-neutral-800 w-screen">
    <section class="w-full pl-16 pr-16">
        <OpenTag /> 
    </section> 

    {#if x}
        <img class="w-full h-screen object-cover pt-16" src={img1} alt="Studio średnie"/>
    {/if}

    {#if y}
        <img class="w-full h-screen object-cover pt-16" src={img2} alt="Studio średnie"/>
    {/if}
</div>

