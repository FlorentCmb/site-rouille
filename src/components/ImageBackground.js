import React from 'react'

const ImageBackground = () =>{
    return (
<imagebackground
                    source={{ uri: "https://i.pinimg.com/originals/fc/d5/eb/fcd5eb28bb45c94dc0b3cfeb9ace217f.jpg" }}
                    style={{
                    height: 100,
                    width: 100,
                    position: 'relative', // because it's parent
                    top: 2,
                    left: 2
                    }}
    >
 <text
   style={{
     fontWeight: 'bold',
     color: 'white',
     position: 'absolute', // child
     bottom: 0, // position where you want
     left: 0
   }}
 >
   Hello World
 </text>
</imagebackground>
)
}

export default ImageBackground