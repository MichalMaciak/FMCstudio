<script lang="ts">
  import * as THR from '@threlte/core';
  import * as Three from 'three';

  /* const videoSources = [
  { src: '/video/PW.mp4#t=5', id: 'video1' },
  { src: '/video/cheda.mp4#t=13', id: 'video2' },
  { src: '/video/kolek.mp4#t=5', id: 'video3' }
  { src: '/video/tomczyk.mp4#t=8', id: 'video4' },
  { src: '/video/wojciechowski.mp4#t=9', id: 'video5' },
  { src: '/video/ziobrowski.mp4#t=11', id: 'video6' }
];
  for (let i = 0; i < videoSources.length; i++) {
    const video = document.createElement('video');
    video.src = videoSources[i].src;
    video.id = videoSources[i].id;
    video.poster = '';
    video.controls = true;
    video.muted = false;
    video.height = 240;
    video.width = 320;
  }

  video.addEventListener('click', (event) => {
    event.stopPropagation(); // Stop event from bubbling up to parent elements
    const clickedVideo = event.target;
    if (clickedVideo.paused) {
      clickedVideo.play();
    } else {
      clickedVideo.pause();
    }
  });
 */


  let video1src = '/video/PW.mp4#t=5'
  let video2src = '/video/cheda.mp4#t=13'
  let video3src = '/video/kolek.mp4#t=5'
  let video4src = '/video/tomczyk.mp4#t=8'
  let video5src = '/video/wojciechowski.mp4#t=9'
  let video6src = '/video/ziobrowski.mp4#t=11'



  const video1 = document.createElement('video');
  video1.src = video1src;
  video1.poster =''
  video1.controls = true;
  video1.muted = false;
  video1.height = 240; 
  video1.width = 320; 

  const video1Texture = new Three.VideoTexture( video1 ) 

  const video2 = document.createElement('video');
  video2.src = video2src;
  video2.poster =''
  video2.controls = true;
  video2.muted = false;
  video2.height = 240; 
  video2.width = 320; 

  const video2Texture = new Three.VideoTexture( video2 ) 

  const video3 = document.createElement('video');
  video3.src = video3src;
  video3.poster =''
  video3.controls = true;
  video3.muted = false;
  video3.height = 240;
  video3.width = 320; 

  const video3Texture = new Three.VideoTexture( video3 ) 

  const video4 = document.createElement('video');
  video4.src = video4src;
  video4.poster =''
  video4.controls = true;
  video4.muted = false;
  video4.height = 240; 
  video4.width = 320; 

  const video4Texture = new Three.VideoTexture( video4 ) 

  const video5 = document.createElement('video');
  video5.src = video5src;
  video5.poster =''
  video5.controls = true;
  video5.muted = false;
  video5.height = 240; 
  video5.width = 320; 

  const video5Texture = new Three.VideoTexture( video5 ) 

  const video6 = document.createElement('video');
  video6.src = video6src;
  video6.poster =''
  video6.controls = true;
  video6.muted = false;
  video6.height = 240; 
  video6.width = 320; 

  const video6Texture = new Three.VideoTexture( video6 ) 
 

  let ImageActionPlay = "/img/playAlpha.png" 
  let ImageActionPause = "/img/pauseAlpha.png" 

    
  let ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay );
    
    
  let  studioImgButon1 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })

  let  studioImgButon2 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })
  
  let  studioImgButon3 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })

  let  studioImgButon4 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })

  let  studioImgButon5 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })

  let  studioImgButon6 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,
    transparent: true })

  const width = 2.50;
  const height = 1.50;
  let intensity = 5;
  let tvLight = new Three.Color(0xfffefa)

  const rectLight1 = new Three.RectAreaLight( tvLight, intensity,  width, height) ;
  rectLight1.position.set( 7.6, 0.5, 2.8 );
  rectLight1.lookAt( 3, 5, 2.9 );

  const rectLight2 = new Three.RectAreaLight( tvLight, intensity,  width, height );
  rectLight2.position.set( 7.6, 0.5, 5.5 );
  rectLight2.lookAt( 3, 4, 5.5);

  const rectLight3 = new Three.RectAreaLight( tvLight, intensity,  width, height );
  rectLight3.position.set( 7.6, 0.5, 8.14 );
  rectLight3.lookAt( 3, 5, 8.1 );

  const rectLight4 = new Three.RectAreaLight( tvLight, intensity,  width, height) ;
  rectLight4.position.set( 7.6, 2.2, 2.8 );
  rectLight4.lookAt( 3, 5, 2.8 );

  const rectLight5 = new Three.RectAreaLight( tvLight, intensity,  width, height );
  rectLight5.position.set( 7.6, 2.1, 5.5 );
  rectLight5.lookAt( 3, 4, 5.6);

  const rectLight6 = new Three.RectAreaLight( tvLight, intensity,  width, height );
  rectLight6.position.set( 7.6, 2.2, 8.14 );
  rectLight6.lookAt( 3, 5, 8.1 );


  const onPlay1 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video1.paused) {
    video1.play(); 
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon1 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true,    
    })
    studioImgButon1.needsUpdate = true;
    
    setTimeout(() => {
      studioImgButon1.opacity = 0;
    }, 3000)

    rectLight1.intensity = 15
    }
        
  else {
    video1.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon1 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true
    })
    studioImgButon1.needsUpdate = true;
    }
    rectLight1.intensity = 5
  }

  const onPlay2 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video2.paused) {
    video2.play(); 
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon2 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true 
    })
    studioImgButon2.needsUpdate = true;

    setTimeout(() => {
      studioImgButon2.opacity = 0;
    }, 3000)
    rectLight2.intensity = 15
    }   
  
  else {
    video2.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon2 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true    
    })
    studioImgButon2.needsUpdate = true;
    rectLight2.intensity = 5
  }}

  const onPlay3 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video3.paused) {
    video3.play();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon3 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true 
    })
    studioImgButon3.needsUpdate = true;
    setTimeout(() => {
      studioImgButon3.opacity = 0;
    }, 3000)
    rectLight3.intensity = 15
  }
  else {
    video3.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon3 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true    
    })
    studioImgButon3.needsUpdate = true;
    rectLight3.intensity = 5
  }}

  const onPlay4 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video4.paused) {
    video4.play();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon4 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true 
    })
    studioImgButon4.needsUpdate = true;
    setTimeout(() => {
      studioImgButon4.opacity = 0;
    }, 3000)
    rectLight4.intensity = 15
        
  }
  else {
    video4.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon4 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true    
    })
    studioImgButon4.needsUpdate = true;
    rectLight4.intensity = 5
  }}

  const onPlay5 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video5.paused) {
    video5.play();  
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon5 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true 
    })
    studioImgButon5.needsUpdate = true;
    setTimeout(() => {
      studioImgButon5.opacity = 0;
    }, 3000)
    rectLight5.intensity = 15
  }
  else {
    video5.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon5 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true    
    })
    studioImgButon5.needsUpdate = true;
    rectLight5.intensity = 5
  }}

  const onPlay6 = (e: CustomEvent<THR.ThreltePointerEvent>) => {
  if (video6.paused) {
    video6.play();  
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPause ); 
    studioImgButon6 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,  
    transparent: true 
    })
    studioImgButon6.needsUpdate = true;
    setTimeout(() => {
      studioImgButon6.opacity = 0;
    }, 3000)
    rectLight6.intensity = 15
  }
  else {
    video6.pause();
    ImageActionTexture = new Three.TextureLoader().load( ImageActionPlay ); 
    studioImgButon6 = new Three.MeshStandardMaterial({
    map: ImageActionTexture,   
    transparent: true    
    })
    studioImgButon6.needsUpdate = true;
    rectLight6.intensity = 5
  }}

  
</script>


<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.6, z: 2.8}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon1}
  interactive on:click={onPlay1}
  />

<THR.Mesh
  
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video1Texture
  })}
  receiveShadow
  interactive on:click={onPlay1}
/>
<THR.DisposableObject dispose object={rectLight1}>
  <THR.Three type={rectLight1} />
</THR.DisposableObject>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.6, z: 5.46}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon2}
  interactive on:click={onPlay2}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video2Texture
  })}
  receiveShadow
  interactive on:click={onPlay2}
/>

<THR.DisposableObject dispose object={rectLight2}>
  <THR.Three type={rectLight2} />
</THR.DisposableObject>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:1.6, z: 8.10}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon3}
  interactive on:click={onPlay3}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:1.6, z: 8.10}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video3Texture
  })}
  receiveShadow
  interactive on:click={onPlay3}
/>

<THR.DisposableObject dispose object={rectLight3}>
  <THR.Three type={rectLight3} />
</THR.DisposableObject>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:3.15, z: 2.8}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon4}
  interactive on:click={onPlay4}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 2.8}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video4Texture
  })}
  receiveShadow
  interactive on:click={onPlay4}
/>

<THR.DisposableObject dispose object={rectLight4}>
  <THR.Three type={rectLight4} />
</THR.DisposableObject>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:3.15, z: 5.46}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon5}
  interactive on:click={onPlay5}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 5.46}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video5Texture
  })}
  receiveShadow
  interactive on:click={onPlay5}
/>

<THR.DisposableObject dispose object={rectLight5}>
  <THR.Three type={rectLight5} />
</THR.DisposableObject>

<THR.Mesh
  dispose = {true}
  position = {{x:7.5, y:3.15, z: 8.10}}
  rotation = {{y: -Math.PI / 2}}
  geometry = {new Three.PlaneGeometry(0.5, 0.5)}
  material = {studioImgButon6}
  interactive on:click={onPlay6}
  />

<THR.Mesh
  dispose = {true}
  rotation = {{y: -Math.PI / 2}}
  position = {{x:7.7, y:3.15, z: 8.10}}
  geometry = {new Three.PlaneGeometry(2.50,1.50)}
  material = {new Three.MeshStandardMaterial({
    map: video6Texture
  })}
  receiveShadow
  interactive on:click={onPlay6}
  />

  <THR.DisposableObject dispose object={rectLight6}>
    <THR.Three type={rectLight6} />
  </THR.DisposableObject>
