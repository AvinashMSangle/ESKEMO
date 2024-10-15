import Option from "./components/Option";

// https://dog.ceo/api/breeds/list/all
// https://dog.ceo/api/breed/affenpinscher/images/random

const BASE_URL = `https://dog.ceo/api/`;

const imageEl = document.querySelector("img");
const breedListEl = document.querySelector("#data-breed-list");

//  async function getImage(){
//     const res = await fetch(
//         `https://dog.ceo/api/breed/affenpinscher/images/random`
//     );
//     const data = await res.json();
//     console.log(data.message);

//     imageEl.src = data.message;

// }

// getImage();

// === Fetch Functions

function getDogList() {
 return fetch(`${BASE_URL}breeds/list/all`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.error("error agayi", err));
}

// TODO: Implement this
function getDogImage(breed) {
    fetch(`${BASE_URL}breed/${breed}/image/random`)
}

// === MARK : Render
function renderSelect() {
    getDogList().then((breedList) =>{
        for (let breed in breedList){
            breedListEl.appendChild(Option(breed));
            // const option = document.createElement("option");
            // option.textContent = "breed";
            // option.value = "breed";
            // breedListEl.appendChild(option);
        }
    })

}
renderSelect();

function renderImage() {}
