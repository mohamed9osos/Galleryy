let images = document.querySelectorAll(".images img")
let imagesConteiner = document.querySelector(".images")

images.forEach((img)=>{
    img.addEventListener('click', (e)=>{
        e.target.parentElement.querySelectorAll('img').forEach((el)=>{
            el.classList.remove('active')
        })        
        e.target.classList.add('active')
        imagesConteiner.scrollBy({
            left:200,
            behavior:"smooth"
        })
    })

})
let global = document.querySelector('.global')

function imgs(src){
    global.style.backgroundImage = `url(${src})`
}