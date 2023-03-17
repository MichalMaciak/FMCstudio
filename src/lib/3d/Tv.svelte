<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  let video1src = '/video/1.mp4#t=10'
  let video2src = '/video/2.mp4#t=13'
  let video3src = '/video/3.mp4#t=12'
  let video4src = '/video/4.mp4#t=30'
  let video5src = '/video/5.mp4#t=15'
  let video6src = '/video/6.mp4#t=18'
  let video7src = '/video/7.mp4#t=15'
  let video8src = '/video/8.mp4#t=13'
  let video9src = '/video/9.mp4#t=2'
  let video10src = '/video/10.mp4#t=8'
  let video11src = '/video/11.mp4#t=60'
  let video12src = '/video/12.mp4#t=20'

 
  function embedVideo(vid:any, link: string){
      vid.src = link;
      vid.poster =''
      vid.controls = true;
      vid.muted = false;
      vid.height = 240; 
      vid.width = 320; 
  }

  const video1 = document.createElement('video');
  embedVideo(video1, video1src)
  const video1Texture = new Three.VideoTexture( video1 ) 

  const video2 = document.createElement('video');
  embedVideo(video2, video2src)
  const video2Texture = new Three.VideoTexture( video2 ) 

  const video3 = document.createElement('video');
  embedVideo(video3, video3src)
  const video3Texture = new Three.VideoTexture( video3 ) 

  const video4 = document.createElement('video');
  embedVideo(video4, video4src)
  const video4Texture = new Three.VideoTexture( video4 ) 

  const video5 = document.createElement('video');
  embedVideo(video5, video5src)
  const video5Texture = new Three.VideoTexture( video5 ) 

  const video6 = document.createElement('video');
  embedVideo(video6, video6src)
  const video6Texture = new Three.VideoTexture( video6 ) 

  const video7 = document.createElement('video');
  embedVideo(video7, video7src)
  const video7Texture = new Three.VideoTexture( video7 ) 

  const video8 = document.createElement('video');
  embedVideo(video8, video8src)
  const video8Texture = new Three.VideoTexture( video8 ) 

  const video9 = document.createElement('video');
  embedVideo(video9, video9src)
  const video9Texture = new Three.VideoTexture( video9 ) 

  const video10 = document.createElement('video');
  embedVideo(video10, video10src)
  const video10Texture = new Three.VideoTexture( video10 ) 

  const video11 = document.createElement('video');
  embedVideo(video11, video11src)
  const video11Texture = new Three.VideoTexture( video11 ) 

  const video12 = document.createElement('video');
  embedVideo(video12, video12src)
  const video12Texture = new Three.VideoTexture( video12 ) 


 
  let ImageActionPlay = "/img/playAlpha.png" 
  let ImageActionPause = "/img/pauseAlpha.png" 
    
  let ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay );
        
  let  studioImgButon1 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon1.needsUpdate = true;

  let  studioImgButon2 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon2.needsUpdate = true;
  
  let  studioImgButon3 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon3.needsUpdate = true;

  let  studioImgButon4 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon4.needsUpdate = true;

  let  studioImgButon5 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon5.needsUpdate = true;

  let  studioImgButon6 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon6.needsUpdate = true;

  let  studioImgButon7 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon7.needsUpdate = true;

  let  studioImgButon8 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon8.needsUpdate = true;
  
  let  studioImgButon9 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon9.needsUpdate = true;

  let  studioImgButon10 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon10.needsUpdate = true;

  let  studioImgButon11 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon11.needsUpdate = true;

  let  studioImgButon12 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
    studioImgButon12.needsUpdate = true;


    function onPlayStandard(vid:any, but:any, icon:any) {
      if (vid.paused) {
        vid.play(); 
        icon = new Three.TextureLoader().load( ImageActionPause ); 
        but.map = icon; // Update the map property of the material
        but.map.needsUpdate = true; // Set needsUpdate property to true
        setTimeout(() => {
          but.opacity = 0;
        }, 3000)
      } else {
        vid.pause();
        icon = new Three.TextureLoader().load( ImageActionPlay ); 
        but.map = icon; // Update the map property of the material
        but.map.needsUpdate = true; // Set needsUpdate property to true
      }
    }

    const onPlay1 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video1, studioImgButon1, ImageActionTexture)
    const onPlay2 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video2, studioImgButon2, ImageActionTexture)
    const onPlay3 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video3, studioImgButon3, ImageActionTexture)
    const onPlay4 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video4, studioImgButon4, ImageActionTexture)
    const onPlay5 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video5, studioImgButon5, ImageActionTexture)
    const onPlay6 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video6, studioImgButon6, ImageActionTexture)
    const onPlay7 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video7, studioImgButon7, ImageActionTexture)
    const onPlay8 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video8, studioImgButon8, ImageActionTexture)
    const onPlay9 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video9, studioImgButon9, ImageActionTexture)
    const onPlay10 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video10, studioImgButon10, ImageActionTexture)
    const onPlay11 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video11, studioImgButon11, ImageActionTexture)
    const onPlay12 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video12, studioImgButon12, ImageActionTexture)
  
</script>


<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.4, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon1}
  interactive on:click={onPlay1}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.4, z: 2.2}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video1Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay1}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.4, z: 4.3}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon2}
  interactive on:click={onPlay2}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.4, z: 4.3}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video2Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay2}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.4, z: 6.4}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon3}
  interactive on:click={onPlay3}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.4, z: 6.4}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video3Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay3}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.4, z: 8.5}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon4}
  interactive on:click={onPlay4}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.4, z: 8.5}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video4Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay4}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:2.7, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon5}
  interactive on:click={onPlay5}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 2.2}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video5Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay5}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:2.7, z: 4.3}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon6}
  interactive on:click={onPlay6}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 4.3}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video6Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay6}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:2.7, z: 6.4}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon7}
  interactive on:click={onPlay7}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 6.4}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video7Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay7}
  />

  <THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:2.7, z: 8.5}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon8}
  interactive on:click={onPlay8}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 8.5}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video8Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay8}
/>

 <THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:4, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon9}
  interactive on:click={onPlay9}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 2.2}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video9Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay9}
/>


<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:4, z: 4.3}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon10}
  interactive on:click={onPlay10}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 4.3}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video10Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay10}
/>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:4, z: 6.4}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon11}
  interactive on:click={onPlay11}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 6.4}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video11Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay11}
  />

  <THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:4, z: 8.5}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.3, 0.3)}
  material = {studioImgButon12}
  interactive on:click={onPlay12}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 8.5}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video12Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay12}
/>