<script lang="ts">  
	import * as THR from '@threlte/core';
  import type * as Three from 'three';

	import { GLTF, HTML, useGltf} from '@threlte/extras';
  import { derived } from 'svelte/store';
  import { spring } from 'svelte/motion';

  const { pointer } = THR.useThrelte()
  let tv = {
    position: { x:0, y:0, z:0}
  }
  const offsetX = spring($pointer.x * 10)
	$: offsetX.set($pointer.x * 0.5)
	const offsetY = spring($pointer.y * 10)
	$: offsetY.set($pointer.y * 0.5)

  const { gltf } = useGltf('/3d/tv.gltf', {
    useDraco: true
  })

	const tvGeometry = derived(gltf, (gltf) => {
		if (!gltf) return
		return (gltf.nodes.body as Three.Mesh).geometry,(gltf.nodes.screen as Three.Mesh).geometry
	})

</script>
    

<THR.DirectionalLight shadow intensity={0.6} position={{ x: 3, y: 5, z: 3 }} target={{ x: 1 }} />

<THR.AmbientLight />

<THR.PerspectiveCamera fov={50} position={{ x: $offsetX, y: -$offsetY, z: 2}}>
  <THR.OrbitControls 
  enableDamping
  enableZoom = {false}
  maxAzimuthAngle = {0.5}
  maxPolarAngle = {6/Math.PI}
  minAzimuthAngle = {-0.5}
  minPolarAngle = {4/Math.PI}
  />
</THR.PerspectiveCamera>


{#if $gltf}
  <THR.Object3DInstance 
  object={$gltf.nodes['body']} 
  {... tv}
  />

  <THR.Object3DInstance 
  object={$gltf.nodes['screen']} 
  {... tv}
  />
 
{/if}
<!-- <GLTF 
  url="/3d/tv3.gltf" 
  interactive
  castShadow 
  receiveShadow
  {... tv}
  />

 -->
