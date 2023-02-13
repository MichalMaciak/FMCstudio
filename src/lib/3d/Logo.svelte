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

  const { gltf } = useGltf('/3d/logo.gltf', {
    useDraco: true
  })
	const logoGeometry = derived(gltf, (gltf) => {
		if (!gltf) return
		return (gltf.nodes.STUDIO as Three.Mesh).geometry
	})

  const concreatColor = new Three.TextureLoader().load( "/texture/CityStreet/CityStreetAsphaltGenericCracked002_COL_1K.jpg" );
  concreatColor.wrapS = Three.RepeatWrapping;
  concreatColor.wrapT = Three.RepeatWrapping;
  concreatColor.repeat.set( 2, 1 );

  const concreatDisp = new Three.TextureLoader().load( "/texture/CityStreet/CityStreetAsphaltGenericCracked002_DISP_1K.jpg" );
  concreatDisp.wrapS = Three.RepeatWrapping;
  concreatDisp.wrapT = Three.RepeatWrapping;
  concreatDisp.repeat.set( 2, 1 );

  const concreatEmissive = new Three.TextureLoader().load( "/texture/CityStreet/CityStreetAsphaltGenericCracked002_GLOSS_1K.jpg" );
  concreatEmissive.wrapS = Three.RepeatWrapping;
  concreatEmissive.wrapT = Three.RepeatWrapping;
  concreatEmissive.repeat.set( 2, 1 );

  const concreatNormals = new Three.TextureLoader().load( "/texture/CityStreet/CityStreetAsphaltGenericCracked002_NRM_1K.jpg" );
  concreatNormals.wrapS = Three.RepeatWrapping;
  concreatNormals.wrapT = Three.RepeatWrapping;
  concreatNormals.repeat.set( 2, 1 );
  
  let logo

</script>

<THR.DirectionalLight 
  color = {new Three.Color("rgb(189, 189, 189)")} 
  shadow = {{
    mapSize: [2048 ,2048],
    bias: 0.1,
    radius: 1
  }}
  intensity={3}
  position={{ x: $offsetXLight, y: 1.5, z: 2 }} 
/>

<THR.AmbientLight 
  color = {new Three.Color("rgb(189, 189, 189)")}  
  intensity={0.1}
/>


<THR.PerspectiveCamera fov={35} position={{ x: 0, y: 1, z: 5}}>
  <THR.OrbitControls 
  enableDamping
  
  />
</THR.PerspectiveCamera>

{#if $gltf}
  <THR.Object3DInstance 
  object = {$gltf.nodes['Scene']} 
  position = {{x:0, y: 0, z: 0}}
  scale = {1.5}
  castShadow
  receiveShadow
  
  />
  <!-- 
  <THR.Mesh 
    receiveShadow
    geometry={new Three.PlaneGeometry(20, 3)}
    material={new Three.MeshStandardMaterial({
      map: concreatColor,
      displacementMap : concreatDisp,
      displacementScale : 0.5,
      emissiveMap: concreatEmissive,
      normalMap: concreatNormals,
      roughness: 6,
      metalness: 0,
      side: Three.DoubleSide
    })}
    
    
    position = {{x:0, y:0.5, z:-1}}
  />
  <THR.Mesh 
    receiveShadow
    geometry={new Three.PlaneGeometry(20, 3)}
    material={new Three.MeshStandardMaterial({
      map: concreatColor,
      displacementMap : concreatDisp,
      displacementScale : 0.5,
      emissiveMap: concreatEmissive,
      normalMap: concreatNormals,
      roughness: 6,
      metalness: 0,
      side: Three.DoubleSide
      
    })
    }
    position = {{x:0, y:-0.5, z:-1}}
    rotation ={{x: 90}}
  />

 -->


{/if}