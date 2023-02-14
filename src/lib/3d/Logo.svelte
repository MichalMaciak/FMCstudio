<script lang="ts">
	import { useGltf, HTML } from '@threlte/extras'; 
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

  const video = document.createElement('video');
  video.src ='/video/Innovation.mp4';
  video.controls = true;
  video.muted = false;
  video.play()
  video.height = 240; // in px
  video.width = 320; // in px
  const VideoPolendWeekly = new Three.VideoTexture( video )
  
</script>

<THR.DirectionalLight 
  color = {new Three.Color("rgb(189, 189, 189)")} 
  shadow = {{
    mapSize: [2048 ,2048]
  }}
   intensity={4}
  position={{ x: 5, y: 2, z: 4 }} 
  


/>

<THR.DirectionalLight 
  color = {new Three.Color("rgb(189, 189, 189)")} 
  shadow = {{
    mapSize: [2048 ,2048],
  }}
  intensity={2.5}
  position={{ x: -3, y: 2, z: 4 }} 

/>


<THR.PerspectiveCamera 
  fov={25} 
  position={{ x: -10, y:4, z: 10}}
  lookAt={{}}
  castShadow
>
  <THR.OrbitControls 
    enableDamping 
    target={{x:20, y:-3, z:-5}}
    
  />
</THR.PerspectiveCamera>


<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 8.14}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>
<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 8.14}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
/>


{#if $gltf}

  <THR.Object3DInstance 
  object = {$gltf.nodes['sciana']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['FMC']} 
  scale = {1}
  castShadow
  
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['TV']} 
  scale = {1}
  castShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['TV2']} 
  scale = {1}
  castShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['krata']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['krata2']} 
  scale = {1}
  receiveShadow
  castShadow
  />

{/if}
 

