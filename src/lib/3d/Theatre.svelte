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
    
  const colorLight = new Three.Color( "rgb(204, 240, 255)" )
  const colorSpotLight = new Three.Color( "rgb(138, 187, 255)" )

    
</script>

<THR.DirectionalLight 
  color = {colorLight} 
  intensity={2}
  position={{ x: 5, y: 3, z: 6 }} 
  target={{ x: 1 }}
  shadow = {{
    mapSize: [1024, 1024],
    camera: {left: 10, right: -10, top: 10, bottom: -5, near: 0.5, far: 20}
  }}
  
/>

<THR.DirectionalLight 
  color = {colorLight}  
  intensity={2}
  position={{ x: -10, y: 3, z: 5}} 
  target={{ x: 1 }}
  shadow = {{
    mapSize: [1024, 1024],
    camera: {left: 10, right: -10, top: 10, bottom: -5, near: 0.5, far: 20}
  }}
/>

<THR.SpotLight 
  color = {colorSpotLight} 
  position={{ x: -2, y: 5, z:2 }} 
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
  position={{ x: -11, y:4, z: 10}}
  lookAt={{}}
  castShadow
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



