<script lang="ts">

    import { Text } from '@threlte/extras'
    import * as THR from '@threlte/core';
    import * as Three from 'three';
   
    let rent = 'Wynajmij studio'


    let fontColor =  new Three.Color( 0xffffff)
    let bord = new Three.Color( 0x0A0A0A)
    let textback = new Three.Color( 0x0A0A0A)

    let nullImage = "/texture/ekran.jpg" 
     
    let studioImgTexture = new Three.TextureLoader().load( nullImage );  
    
    let  studioImg = new Three.MeshStandardMaterial({
      map: studioImgTexture,  
      metalness: 1,
      roughness: 0.9,    
    })

   
</script>



<THR.Mesh
  dispose = {true}
  position = {{x:2.3, y:2.5, z: 0.3}}
  geometry = {new Three.PlaneGeometry(6,3.5)}
  material = {new Three.MeshStandardMaterial({
    color: bord,
    roughness: 0  
  })}
  receiveShadow 
  >   
  <Text text={rent} 
  position = {{x:-2.8, y:1, z: 0.3}}
  fontSize = {0.7}
  color = {fontColor}
  />

</THR.Mesh>

<THR.Mesh
  dispose = {true}
  position = {{x:2.3, y:3, z: 0.4}}
  geometry = {new Three.PlaneGeometry(6,0.8)}
  material = {new Three.MeshStandardMaterial({
    color: textback,
    opacity: 0.5,
    transparent: true,
    roughness: 0,
    
  })}
  receiveShadow 
  >   
</THR.Mesh>


<THR.Mesh
  dispose = {true}
  position = {{x:2.28, y:2.5, z: 0.35}}
  geometry = {new Three.PlaneGeometry(5.8, 3.2)}
  material = {studioImg}
  
  >
</THR.Mesh>

