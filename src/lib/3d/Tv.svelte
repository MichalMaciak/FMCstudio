<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  let video1src = '/video/PW.mp4#t=5'
  let video2src = '/video/cheda.mp4#t=13'
  let video3src = '/video/kolek.mp4#t=5'
  let video4src = '/video/tomczyk.mp4#t=8'
  let video5src = '/video/wojciechowski.mp4#t=9'
  let video6src = '/video/ziobrowski.mp4#t=11'

 
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


    function onPlayStandard(vid:any, but:any, icon:any) {
      if (vid.paused) {
        vid.play(); 
        icon = new Three.TextureLoader().load( ImageActionPause ); 
        but = new Three.MeshStandardMaterial({
        map: icon,  
        transparent: true,    
        })
        but.needsUpdate = true
        setTimeout(() => {
          but.opacity = 0;
        }, 3000)
        } else {
        vid.pause();
        icon = new Three.TextureLoader().load( ImageActionPlay ); 
        but = new Three.MeshStandardMaterial({
        map: icon,   
        transparent: true
        })
        but.needsUpdate = true;
        }
      }
    const onPlay1 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video1, studioImgButon1, ImageActionTexture)
    const onPlay2 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video2, studioImgButon2, ImageActionTexture)
    const onPlay3 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video3, studioImgButon3, ImageActionTexture)
    const onPlay4 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video4, studioImgButon4, ImageActionTexture)
    const onPlay5 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video5, studioImgButon5, ImageActionTexture)
    const onPlay6 = (e: CustomEvent<THR.ThreltePointerEvent>) => onPlayStandard(video6, studioImgButon6, ImageActionTexture)
  
</script>


<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.4, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
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
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
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
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
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
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon3}
  interactive on:click={onPlay3}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.4, z: 8.5}}
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
  position = {{x:7.5, y:2.7, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon4}
  interactive on:click={onPlay4}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 2.2}}
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
  position = {{x:7.5, y:2.7, z: 4.3}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon5}
  interactive on:click={onPlay5}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 4.3}}
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
  position = {{x:7.5, y:2.7, z: 6.4}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon6}
  interactive on:click={onPlay6}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 6.4}}
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
  position = {{x:7.5, y:2.7, z: 8.5}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon3}
  interactive on:click={onPlay3}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:2.7, z: 8.5}}
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
  position = {{x:7.5, y:4, z: 2.2}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon4}
  interactive on:click={onPlay4}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 2.2}}
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
  position = {{x:7.5, y:4, z: 4.3}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon5}
  interactive on:click={onPlay5}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 4.3}}
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
  position = {{x:7.5, y:4, z: 6.4}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon6}
  interactive on:click={onPlay6}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 6.4}}
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
  position = {{x:7.5, y:4, z: 8.5}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon3}
  interactive on:click={onPlay3}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:4, z: 8.5}}
  geometry = {new Three.PlaneGeometry(2.00,1.20)}
  material = {new Three.MeshStandardMaterial({
    map: video3Texture,
    metalness: 1,
    roughness: 1,
  })}
  receiveShadow
  interactive on:click={onPlay3}
/>