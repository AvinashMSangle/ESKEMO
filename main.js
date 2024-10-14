// https://dog.ceo/api/breeds/list/all
// https://dog.ceo/api/breed/affenpinscher/images/random


 async function getImage(){
    const res = await fetch(
        `https://dog.ceo/api/breed/affenpinscher/images/random`
    );
    const data = await res.json();
    console.log(data.message);

    imageEl.src = data.message;
    
}

getImage();