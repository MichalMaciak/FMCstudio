<script lang="ts">
  import { spring } from 'svelte/motion';
  import * as THR from '@threlte/core';
  import * as Three from 'three'
  import Scena from './Scena.svelte';
  import Wall from './Wall.svelte';
	import Tv from './Tv.svelte';
	import Studia from './Studia.svelte';

  

  const { pointer } = THR.useThrelte()
  
  const offsetX = spring($pointer.x * 10)
	$: offsetX.set($pointer.x * 5)
	const offsetY = spring($pointer.y * 10)
	$: offsetY.set($pointer.y * 5)
    
  
  const colorSpotLight = new Three.Color( "rgb(50, 119, 168)" )

  const colorLight = new Three.Color( "rgb(204, 240, 255)" )
  
 


    
</script>

<THR.DirectionalLight 
  dispose = {true}
  color = {colorLight} 
  intensity={2}
  position={{ x: -3, y: 4, z: 5 }} 
  target={{ x: 2 }}
  shadow = {{
    mapSize: [1024, 1024],
    camera: {left: -15, right: 25, top: 15, bottom: -5, near: 0.1, far: 30},
    radius: 1.5,
    bias: 0.0001
  }} 
  
/>

<THR.SpotLight 
  dispose = {true}
  color = {colorSpotLight} 
  position={{ x: -2, y: 4, z:2 }} 
  target={{x:$offsetX}}
  angle = {45}
  distance = {15}
  intensity = {3}
  penumbra = {1}
  shadow = {{
    mapSize: [256, 256],
    radius: 5
  }}
  

/>

<THR.SpotLight 
  dispose = {true}
  color = {colorSpotLight} 
  position={{ x: 4, y: 5, z:2 }} 
  target={{x:$offsetX, z:$offsetY}}
  angle = {45}
  distance = {15}
  intensity = {3}
  penumbra = {1}
  shadow = {{
    mapSize: [256, 256],
    radius: 5
  }}
 />


<THR.PerspectiveCamera 
  fov={25} 
  position={{ x: -7, y:4, z: 10}}
  lookAt={{}}
  far = {25}
>
<THR.OrbitControls 
    enableDamping 
    target = {{y:2, z:5}}
    enablePan = {false}
    enableZoom = {false}
   
    maxAzimuthAngle = {-0.5}
    maxPolarAngle = {1.4}
    minAzimuthAngle = {-1.4}
    minPolarAngle = {1}
  
    
  />
</THR.PerspectiveCamera>

<Wall />

<Scena />

<Studia />

<Tv />