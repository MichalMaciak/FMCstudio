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
    
  const colorLight = new Three.Color( 0xb5b5b5 )

    
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
  intensity={1}
  position={{ x: -10, y: 3, z: 5}} 
  target={{ x: 1 }}
  shadow = {{
    mapSize: [1024, 1024],
    camera: {left: 10, right: -10, top: 10, bottom: -5, near: 0.5, far: 20}
  }}
/>

<THR.SpotLight 
  position={{ x: -2, y: 5, z:2 }} 
  target={{x:$offsetX}}
  angle = {45}
  distance = {15}
  intensity = {3}
  penumbra = {1}
  

/>

<THR.SpotLight 
  position={{ x: 4, y: 5, z:2 }} 
  target={{x:$offsetX, z:$offsetY}}
  angle = {45}
  distance = {15}
  intensity = {3}
  penumbra = {1}
 
/>


<THR.PerspectiveCamera 
  fov={25} 
  position={{ x: -10, y:4, z: 10}}
  lookAt={{}}
  castShadow
>
<THR.OrbitControls 
    enableDamping 
    target = {{y:2, z:5}}
    enableZoom = {false}
    enablePan = {false}
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



