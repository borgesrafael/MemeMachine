function enablePhotoUpload(){
    const imageInput = document.querySelector('#image-input')

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            changeNamePicture(uploadImage)
            // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "chapolin",
            "path": "imagens/chapolin.jpg"
        },
        {
            "name": "chloe",
            "path": "imagens/chloe.jpg"
        },
        {
            "name": "funny-cat1",
            "path": "imagens/funny-cat1.png"
        },
        {
            "name": "funny-cat2",
            "path": "imagens/funny-cat2.png"
        },
        {
            "name": "face1",
            "path": "imagens/face1.jpg"
        },
    ]
    return memesObject
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#memelist")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeNamePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()
    enablePhotoUpload
    await createGallery(memesImageList)
    await changeNamePicture(memesImageList[0].path)
}



main()