console.log('%c HI', 'color: firebrick')
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener('DOMContentLoaded', (e) => {


    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        const imgArray = data.message
        const dogImageCont = document.querySelector('#dog-image-container')

        imgArray.forEach( (e) => {
            let newImg = document.createElement('img')
            newImg.src = e
            newImg.width = 100
            newImg.height = 100
            dogImageCont.append(newImg)
        })
    })

    const ul = document.querySelector('#dog-breeds')

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {

        const breedObj = data.message

        for (const breed in breedObj) {
            let li = document.createElement('li')
            li.innerHTML = breed
            li.className = 'dog'
            li.style.display = 'list'
            ul.append(li)
            li.addEventListener('click', (e) => {
                e.target.style.color = 'pink'
            })
        }

    })

    const sortDogs = document.querySelector('#breed-dropdown')
    sortDogs.addEventListener('change', (e) => {

        let letterPicked = e.target.value
        let listOfDogs = document.querySelectorAll('#dog-breeds li')

        listOfDogs.forEach(dog => {
            if (dog.textContent.startsWith(letterPicked)) {
                dog.style.display = 'list'
            } else {
                dog.style.display = 'none'
            }
        })
       
    })

})