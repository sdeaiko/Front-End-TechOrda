uploadBtn = document.querySelector('.btn-upload')
modal = document.querySelector('.modal')
closeBtn = document.querySelector('#close')

uploadBtn.addEventListener('click', e => {
    setTimeout(() => {
        modal.classList.remove('display-none') 
    }, 300);
})

closeBtn.addEventListener('click', e => {
    setTimeout(() => {
        modal.classList.add('display-none') 
    }, 100);
})


const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true, file });
      }, 1000);
    });
};

const uploadFilesAlternately = (files) => {
    let uploadedFiles = [];
    let currentIndex = 0;

    const processNextFile = () => {
      if (currentIndex >= files.length) {
        return Promise.resolve(uploadedFiles);
      }

      return uploadFile(files[currentIndex++])
        .then(({ success, file }) => {
          if (success) {
            uploadedFiles.push(file);
          }
          return processNextFile();
        });
    };

    return processNextFile();
};

const handleFileUpload = () => {
    const input = document.getElementById("fileInput");
    const files = Array.from(input.files);

    const ok = document.querySelector('.ok')
    const notOk = document.querySelector('.notOk')


    if (files.length > 0) {
        ok.classList.remove('display-none')
        setTimeout(() => {
            ok.classList.add('display-none')
        }, 5000);
    } else {
        notOk.classList.remove('display-none')
        setTimeout(() => {
            notOk.classList.add('display-none')
        }, 5000);
    }

    uploadFilesAlternately(files).then((uploadedFiles) => {
      console.log("All files have been uploaded:", uploadedFiles);
    });



};

const uploadFileBtn = document.querySelector('.upload')

uploadFileBtn.addEventListener('click', handleFileUpload)







