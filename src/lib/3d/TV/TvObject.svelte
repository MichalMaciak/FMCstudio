<script lang="ts">
    import * as THR from '@threlte/core';
    import { HTML, Float } from '@threlte/extras'; 
    import { spring } from 'svelte/motion'
    import { onMount } from 'svelte';
    import * as Three from 'three';

    const oldWidth = 1990;
    const oldHeight = 600;

    let screenWidth = 0;

    let newWidth:Number, newHeight:Number;

    const resizeHandler = () => {
    screenWidth = window.innerWidth;
    if (screenWidth >= oldWidth) {
        newWidth = oldWidth;
        newHeight = oldHeight;
    } else {
        newWidth = screenWidth;
        newHeight = Math.round((screenWidth * oldHeight) / oldWidth);
    }
    };

    onMount(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    });
       
    let VideoRight = "https://www.youtube.com/embed/d6PpqxC3RAw"
    let VideoCenter = "https://www.youtube.com/embed/HmdRrXWIL_k"
    let VideoLeft = "https://www.youtube.com/embed/QgQLNkSt7ks"


    let colorTV = new Three.Color("rgb(38, 38, 38)");
    let colorTVlight = new Three.Color("rgb(4, 78, 176)")
    

    let isHoveringRight = false
    let isPointerDownRight = false

    let isHoveringCenter = false
    let isPointerDownCenter = false

    let isHoveringLeft = false
    let isPointerDownLeft = false


    let VideoRighthtmlPosX = spring(2)
    let VideoRighthtmlPosZ = spring(0)
    let VideoRighthtmlRotY = spring(-0.5)

    let VideoCenterhtmlPosZ = spring(0)

    let VideoLefthtmlPosX = spring(-2)
    let VideoLefthtmlPosZ = spring(0)
    let VideoLefthtmlRotY = spring(0.5)



    $: VideoRighthtmlPosX.set(isPointerDownRight ? 1 : isHoveringRight ? 1 : 2, {
    hard: isPointerDownRight
    })
    $: VideoRighthtmlPosZ.set(isPointerDownRight ? 1.5 : isHoveringRight ? 1.5 : 0, {
    hard: isPointerDownRight
    })
    $: VideoRighthtmlRotY.set(isPointerDownRight ? 0 : isHoveringRight ? 0 : -0.5, {
    hard: isPointerDownRight
    })

    $: VideoCenterhtmlPosZ.set(isPointerDownCenter ? 1.5 : isHoveringCenter ? 1.5 : 0, {
    hard: isPointerDownCenter
    })
    
    $: VideoLefthtmlPosX.set(isPointerDownLeft ? -1 : isHoveringLeft ? -1 : -2, {
    hard: isPointerDownLeft
    })
    $: VideoLefthtmlPosZ.set(isPointerDownLeft ? 1.5 : isHoveringLeft ? 1.5 : 0, {
    hard: isPointerDownLeft
    })
    $: VideoLefthtmlRotY.set(isPointerDownLeft ? 0 : isHoveringLeft ? 0 : 0.5, {
    hard: isPointerDownLeft
    })

    const intensityLight = spring(5, {
    stiffness: 0.01,
    damping: 0.1
        });
    const zoomIn = setInterval(() => {
        intensityLight.set(10);
    }, 2000);
    const zoomOut = setInterval(() => {
        intensityLight.set(8);
    }, 4000);

    const posXLight = spring(2, {
    stiffness: 0.01,
    damping: 0.1
        });
    const posX = setInterval(() => {
        posXLight.set(6);
    }, 2000);
    const posXin = setInterval(() => {
        posXLight.set(-6);
    }, 4000);

    
 
</script>

<div class="relative overflow-hidden">
    <div class="max-w-fit">
        <THR.Canvas
        dpr = {0.9}
        size = {{width:newWidth, height:newHeight}}
        frameloop = {'always'}
        shadowMapType = {Three.VSMShadowMap}
        shadows
        > 

            <THR.PerspectiveCamera 
            position={{ x:0, y: 0, z: 8 }}
            rotation = {{y: 0}}
            fov={25} 
            near={1}
            far={30}
            >

            </THR.PerspectiveCamera>


            <THR.SpotLight 
            dispose = {true}
            position={{ x: $posXLight, y: 0, z: 2}} 
            color = {colorTVlight}
            intensity = {$intensityLight}
            power ={15}
            distance = {12}
            angle = {65}
            penumbra = {0.6}
            />

               <Float>
                <HTML
                    dispose={true}
                    position = {{x:0, y:0, z:$VideoCenterhtmlPosZ}}
                    rotation = {{y:0}}
                    scale = {0.25}
                    transform = {true}
            
                    >
                <div
                    on:pointerenter={() => (isHoveringCenter = true)}
                    on:pointerleave={() => {
                    isPointerDownCenter = false
                    isHoveringCenter = false
                    }}
                    on:pointerdown={() => (isPointerDownCenter = true)}
                    on:pointerup={() => (isPointerDownCenter = false)}
                    on:pointercancel={() => {
                    isPointerDownCenter = false
                    isHoveringCenter = false
                    }}
                    >
                    <iframe width="560" height="315" src={VideoCenter} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </HTML>

                <HTML
                    dispose={true}
                    position = {{x:$VideoRighthtmlPosX, y:0, z:$VideoRighthtmlPosZ}}
                    rotation = {{y:$VideoRighthtmlRotY}}
                    scale = {0.25}
                    transform = {true}
                    >
                    
                    <div
                        on:pointerenter={() => (isHoveringRight = true)}
                        on:pointerleave={() => {
                        isPointerDownRight = false
                        isHoveringRight = false
                        }}
                        on:pointerdown={() => (isPointerDownRight = true)}
                        on:pointerup={() => (isPointerDownRight = false)}
                        on:pointercancel={() => {
                        isPointerDownRight = false
                        isHoveringRight = false
                        }}
                        > 
                        <iframe width="560" height="315" src={VideoLeft} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </HTML>

            

                <HTML
                    dispose={true}
                    position = {{x:$VideoLefthtmlPosX, y:0, z: $VideoLefthtmlPosZ}}
                    rotation = {{y:$VideoLefthtmlRotY}}
                    scale = {0.25}
                    transform = {true}
                    
                    >
                    <div
                        on:pointerenter={() => (isHoveringLeft = true)}
                        on:pointerleave={() => {
                        isPointerDownLeft = false
                        isHoveringLeft = false
                        }}
                        on:pointerdown={() => (isPointerDownLeft = true)}
                        on:pointerup={() => (isPointerDownLeft = false)}
                        on:pointercancel={() => {
                        isPointerDownLeft = false
                        isHoveringLeft = false
                        }}
                        >
                        <iframe width="560" height="315" src={VideoRight} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </HTML>
            </Float>
            <THR.Mesh
                dispose = {true}
                position = {{x:0, y:0, z: -5}}
                geometry = {new Three.BoxGeometry(25, 12, 0.1)}
                material = {new Three.MeshStandardMaterial({
                    color: colorTV,
                    roughness: 0.3,
                    metalness: 0.3
                })}
                receiveShadow
                castShadow
                />
                
        </THR.Canvas> 
    </div>
    
</div>
