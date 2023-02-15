<script lang="ts">
	import { useGltf, Environment, ContactShadows, Float } from '@threlte/extras'; 
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

  const colorStudio = new Three.Color( 0x07214f )
  const colorLight = new Three.Color( 0xb5b5b5 )

  const video = document.createElement('video');
  video.src ='/video/Innovation.mp4';
  video.controls = true;
  video.muted = false;
  video.height = 240; // in px
  video.width = 320; // in px
  const VideoPolendWeekly = new Three.VideoTexture( video )

  const onClick = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();
    }
  }


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
    maxAzimuthAngle = {-0.5}
    maxPolarAngle = {1.4}
    minAzimuthAngle = {-1.4}
    minPolarAngle = {1}
    
  />
</THR.PerspectiveCamera>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onClick}
/>


<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: VideoPolendWeekly
  })}
  interactive on:click={onClick}
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

<THR.Mesh
  position = {{x:1.7, y:2.5, z: 0.1}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  rotation = {{y: -Math.PI / 2}}
  position = {{x:8.05, y:2.5, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.5,5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>

<THR.Mesh
  rotation = {{x: -Math.PI / 2, }}
  position = {{x:1.84, y:0.04, z: 6.2}}
  geometry = {new Three.BoxGeometry(12.8,12.5,0.3)}
  material = {new Three.MeshStandardMaterial({
    color: colorStudio
  })}
  receiveShadow
  castShadow
/>


{#if $gltf}

  <THR.Object3DInstance 
  object = {$gltf.nodes['FMC']} 
  scale = {0.8}
  castShadow
  position = {{x:-2, y:0.5, z:3}}
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['TV']} 
  scale = {1}
  />

  <THR.Object3DInstance 
  object = {$gltf.nodes['TV2']} 
  scale = {1}
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

  <THR.Object3DInstance 
  object = {$gltf.nodes['kabel01']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  object = {$gltf.nodes['kabel02']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  object = {$gltf.nodes['kabel03']} 
  scale = {1}
  receiveShadow
  castShadow
  />
  <THR.Object3DInstance 
  object = {$gltf.nodes['kabel04']} 
  scale = {1}
  receiveShadow
  castShadow
  />

  
  
{/if}


