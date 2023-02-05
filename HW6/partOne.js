const turnOn = document.querySelector('.turnOn')
const turnOff = document.querySelector('.turnOff')

const videoElement = document.getElementsByClassName('video')[0];
const canvasElement = document.getElementsByClassName('canvas')[0];
const canvasContext = canvasElement.getContext('2d');

function onResults(results) {

    canvasContext.save();

    canvasContext.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    canvasContext.globalCompositeOperation = 'destination-atop';
    canvasContext.drawImage(results.segmentationMask, 0, 0, canvasElement.width, canvasElement.height);

    
    canvasContext.filter = 'blur(10px)';
    canvasContext.globalCompositeOperation = 'destination-over';
    canvasContext.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    canvasContext.restore();
}

const selfieSegmentation = new SelfieSegmentation({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
}});
selfieSegmentation.setOptions({
    modelSelection: 1,
});
selfieSegmentation.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
      await selfieSegmentation.send({image: videoElement});
    },
    width: 800,
    height: 600
});


let isRunning = false

function toggleCamera() {
    if (isRunning) {
        canvasElement.classList.add('display-none');
        isRunning = false
    } else {
        camera.start();
        canvasElement.classList.remove('display-none');
        isRunning = true
    }
}

turnOn.addEventListener('click', toggleCamera)

turnOff.addEventListener('click', toggleCamera)

