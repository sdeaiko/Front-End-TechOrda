// const video = document.querySelector('.webcam')
// const videoCanvas = document.querySelector('.video')
// const faceCanvas = document.querySelector('.face')

// const faceDetector = new FaceDetector()


// async function populate() {
//     const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//             width: 1280,
//             height: 720
//         }
//     });

//     videoCanvas.width = 1280
//     videoCanvas.height = 720

//     faceCanvas.width = 1280
//     faceCanvas.height = 720



//     video.srcObject = stream
//     video.play()

// }

// function detect() {
//     const faces = faceDetector.detect(video);
//     console.log(faces);
// }

// populate().then(detect)