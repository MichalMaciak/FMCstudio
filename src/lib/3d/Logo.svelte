<script lang="ts">
	import { useGltf } from '@threlte/extras'; 
  import { spring } from 'svelte/motion';
  import { derived } from 'svelte/store';
  import * as THR from '@threlte/core';
  import * as Three from 'three'

  const { pointer } = THR.useThrelte()
  
  const offsetX = spring($pointer.x * 10)
	$: offsetX.set($pointer.x * 0.5)
	const offsetY = spring($pointer.y * 2)
	$: offsetY.set($pointer.y * 0.1)

  const offsetXLight = spring($pointer.x * 10)
	$: offsetXLight.set($pointer.x * 5)

  const { gltf } = useGltf('/3d/scena.gltf', {
    useDraco: true
  })
	const logoGeometry = derived(gltf, (gltf) => {
		if (!gltf) return
		return (gltf.nodes.STUDIO as Three.Mesh).geometry
	})

    
  let logo

</script>

<THR.DirectionalLight 
  color = {new Three.Color("rgb(189, 189, 189)")} 
  shadow = {{
    mapSize: [2048 ,2048],
  }}
  intensity={5}
  position={{ x: $offsetXLight, y: 1, z: 3 }} 
  frustumCulled = {true}

/>

<THR.AmbientLight 
  color = {new Three.Color("rgb(189, 189, 189)")}  
  intensity={0.1}
/>


<THR.PerspectiveCamera fov={15} position={{ x: -3, y: 2, z: 5}}>
  <THR.OrbitControls 
  enableDamping
  
  />
</THR.PerspectiveCamera>

{#if $gltf}
  <THR.Object3DInstance 
  object = {$gltf.nodes['sciana']} 
  position = {{x:8, y: 0, z: 0}}
  scale = {1}
  receiveShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['FMC']} 
  position = {{x:0, y: 0.3, z: 1}}
  scale = {1}
  castShadow
  receiveShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['kabel']} 
  position = {{x:0, y:0.17, z: 1.6}}
  scale = {1}
  castShadow
  receiveShadow
  />


{/if}