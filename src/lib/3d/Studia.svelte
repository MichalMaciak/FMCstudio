<script lang="ts">

    import { Text } from '@threlte/extras'
    import * as THR from '@threlte/core';
    import * as Three from 'three';
   
    let rent = 'Wynajmij studio'
    let stduio1 = 'Studio 1 - 4m2'
    let stduio2 = 'Studio 2 - 25m2'
    let stduio3 = 'Studio 3 - 50m2'

    let fontColor =  new Three.Color( 0x0E0E0E)
    let linkFonColor = new Three.Color( 0x0E1C71)
    let bord = new Three.Color( 0x464646)

    let studioColor1 = fontColor
    let studioColor2 = fontColor
    let studioColor3 = fontColor

    let nullImage = "/img/studio_m1.jpg" 
    let studioImage1 = "/img/studio_m2.jpg"
    let studioImage2 = "/img/studio_s1.jpg"
    let studioImage3 = "/img/studio_s2.jpg"

    
    
    let studioImgTexture = new Three.TextureLoader().load( nullImage );  
    
    let  studioImg = new Three.MeshStandardMaterial({
      map: studioImgTexture,  
      roughness: 0    
    })

    const onStudio1 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor1 != linkFonColor) {
      studioColor1 = linkFonColor;
      studioImgTexture = new Three.TextureLoader().load( studioImage1 ); 
      studioImg = new Three.MeshStandardMaterial({
      map: studioImgTexture, 
           
      })
      studioImg.needsUpdate = true;
      };
      }

    const onStudio1leave = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor1 != fontColor) {
      studioColor1 = fontColor  
    }}

    const onStudio2 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor2 != linkFonColor) {
      studioColor2 = linkFonColor   
      studioImgTexture = new Three.TextureLoader().load( studioImage2 ); 
      studioImg = new Three.MeshStandardMaterial({
      map: studioImgTexture,      
      })
      studioImg.needsUpdate = true;
    }}

    const onStudio2leave = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor2 !=fontColor) {
      studioColor2 = fontColor   
      }}

    const onStudio3 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor3 != linkFonColor) {
      studioColor3 = linkFonColor  
      studioImgTexture = new Three.TextureLoader().load( studioImage3 ); 
      studioImg = new Three.MeshStandardMaterial({
      map: studioImgTexture,      
      })
      studioImg.needsUpdate = true;
    }}

    const onStudio3leave = (e: CustomEvent<THR.ThreltePointerEvent>) => {
    if (studioColor3 != fontColor) {
      studioColor3 = fontColor   
      }}
  


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
  position = {{x:-2.8, y:1.5, z: 0.2}}
  fontSize = {0.5}
  color = {fontColor}
  />

  <Text text={stduio1} 
      position = {{x:-2.8, y:0.6, z: 0.2}}
      fontSize = {0.3}
      color = {studioColor1}
      interactive on:pointerenter={onStudio1} on:pointerleave={onStudio1leave}
  />

  <Text text={stduio2} 
      position = {{x:-2.8, y:0, z: 0.2}}
      fontSize = {0.3}
      color = {studioColor2}
      interactive on:pointerenter={onStudio2} on:pointerleave={onStudio2leave}
  />

  <Text text={stduio3} 
      position = {{x:-2.8, y:-0.6, z: 0.2}}
      fontSize = {0.3}
      color = {studioColor3}
      interactive on:pointerenter={onStudio3} on:pointerleave={onStudio3leave}
  />

</THR.Mesh>

<THR.Mesh
  dispose = {true}
  position = {{x:3.6, y:2.3, z: 0.4}}
  geometry = {new Three.PlaneGeometry(2.8, 1.8)}
  material = {studioImg}
  
  >
</THR.Mesh>

