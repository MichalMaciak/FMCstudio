<script>
	import Theatre from '$lib/3d/Theatre.svelte';
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
	import NaszeUslugi from '$lib/NaszeUslugi.svelte';
  import { useProgress } from '@threlte/extras'
	import { tweened } from 'svelte/motion'
  import { fade } from 'svelte/transition'

    
    function scrollToDiv() {
    const section = document.getElementById('text');
    if (section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
    }

    function scrollToContact() {
    const sectionContact = document.getElementById('cennik');
    if (sectionContact){
    sectionContact.scrollIntoView({ behavior: 'smooth' });
    }
    }

    const { progress } = useProgress()

    const tweenedProgress = tweened($progress, {
      duration: 800
    })
    $: tweenedProgress.set($progress)

</script>

<SvelteSeo
  title="FMC Studio"
  description="Wyprodukujemy dla Ciebie program"
  canonical="https://fmcstudio.pl/"
  keywords="produkcja, studio, wynajem, tv, debaty, spotkania, podcast"
  openGraph={{
    title: 'FMC Studio',
    description: 'Wyprodukujemy dla Ciebie program',
    url: 'https://fmcstudio.pl/',
    type: 'website',
    images: [
      {
        url: 'https://fmcstduio.pl/s1.jpg',
        width: 800,
        height: 600,
        alt: 'Squatting'
      },
    ],
    site_name: 'FMC Studio'

  }}
/>


{#if $tweenedProgress < 1}
	<div
		transition:fade|local={{
			duration: 200
		}}
		class="wrapper"
	>
		<p class="loading">Ładowanie</p>
		<div class="bar-wrapper">
			<div class="bar" style="width: {$tweenedProgress * 100}%" />
		</div>
	</div>
{/if}

<main class="bg-neutral-800 w-full">

    <button on:click={scrollToDiv} class="absolute z-50 top-0 text-slate-100 bg-slate-700 p-4">Przewiń na dół</button>
    <button on:click={scrollToContact} class="absolute z-50 top-0, right-0 text-slate-100 bg-red-500 p-4">Napisz lub zadzwoń</button>

    <div class="h-screen w-full ">
        <THR.Canvas 
         dpr = {0.9}
         frameloop = {'always'}
         shadowMapType = {Three.VSMShadowMap}
         shadows
         >
         <THR.Pass pass={new UnrealBloomPass(new Vector2(2048, 2048), 1, 0.5, 0.95)} /> 
         <THR.Pass pass={new SAOPass(new Three.Scene, new Three.Camera, false, false, new Vector2(256, 256))} /> 
         <THR.Pass pass={new SMAAPass(256, 256)} /> 
         <Theatre/> 
        
     </THR.Canvas>  

    </div>
 
 <section id="text" class="px-4 md:px-24 py-12 md:py-32 w-full">
     <h1 class="text-3xl md:text-6xl text-sky-300 text-center font-bold leading-relaxed"> -- Wyprodukujemy dla Ciebie program -- </h1>
 </section>
 
<!--  <div class="w-full">
     
     <GalleryImage />
 
 </div>
 -->

 <div class="relative grid grid-cols-1 md:grid-cols-2 gap-0 w-full">

    <div>
        <NaszeUslugi />
        
        <NaszeStudio /> 

        <Onas />
        
        <Projekty />

        <Cennik />

    </div>
    <div>
        <RightImage />

    </div>
    
 </div>

 <div class="overflow-hidden">
    <TvObject />
 </div>

</main>

<style>
	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgb(38 38 38);
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.loading {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.bar-wrapper {
		width: 33.333333%;
		height: 10px;
		border: 1px solid white;
		position: relative;
	}

	.bar {
		height: 100%;
		background-color: white;
	}
</style>