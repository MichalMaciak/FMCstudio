<script>
	import Theatre from '$lib/3d/Theatre.svelte';
    import GalleryImage from '$lib/GalleryImage.svelte';
    import SvelteSeo from "svelte-seo";
    import RightImage from '$lib/RightImage.svelte';
    import * as THR from '@threlte/core';
    import * as Three from 'three'
    import { Vector2 } from 'three';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
    import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
    import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'
	import NaszeStudio from '$lib/NaszeStudio.svelte';
	import Onas from '$lib/Onas.svelte';
	import Projekty from '$lib/Projekty.svelte';
	import Cennik from '$lib/Cennik.svelte';
	import TvObject from '$lib/3d/TV/TvObject.svelte';
    
    function scrollToDiv() {
    const section = document.getElementById('text');
    section.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<SvelteSeo
  title="FMC Studio"
  description="Wyprodukujemy dla Ciebie program"
/>

<main class="bg-neutral-800">

    <button on:click={scrollToDiv} class="absolute z-50 top-0 text-slate-100 bg-slate-700 p-4">Przewiń na dół</button>

    <div class="h-screen w-full ">
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
 
 <section id="text" class="px-4 md:px-48 py-12 md:py-56 w-full">
     <h1 class="text-3xl md:text-6xl text-sky-300 text-center uppercase font-bold leading-relaxed"> Wyprodukujemy <br> dla Ciebie program</h1>
 </section>
 
 <div class="w-full">
     
     <GalleryImage />
 
 </div>

 <section class="px-4 md:px-48 py-14 w-full ">
     <p class="text-5xl text-sky-300 font-bold leading-normal"> Dzięki naszym usługom realizacja profesjonalnych materiałów w studio tv jest łatwa i przyjemna.</p> 
     <p class="text-3xl pt-6"> Potrzebujesz materiałów do celów marketingowych, reklamowych lub publicystycznych? Doskonale trafiłeś. Dysponujemy trzema nowocześnie wyposażonymi studiami telewizyjnymi, co pozwoli Ci na realizację każdego pomysłu. Z naszą pomocą możesz transmitować swoje produkcje na żywo we wskazanych kanałach online lub tworzyć materiały wideo do publikacji w dowolnych mediach.</p>
 </section>


 

 <div class="relative grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
     
     <NaszeStudio /> 
 
     <RightImage />
   
 </div>

 <div class="pt-8 pb-12">
    <Onas />
 </div>

 <div>
    <TvObject />
 </div>


 <div class="pt-8">
    <Projekty />
 </div>
 
 
 <div class="pt-8">
    <Cennik />
 </div>



</main>


