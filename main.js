// let box = document.querySelector('.box')
// let active = false

// box.addEventListener('click' ,() => {
//     // active = !active
//     // if(active) {
//     //     box.classList.add('active')
//     // } else {
//     //     box.classList.remove('active')
//     // }
//     box.classList.toggle('active')
//     box.classList.contains('active')
//     console.log(box.classList.contains)
// })
let box = document.querySelector('.box')
let img = document.querySelector('img')
let src = 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
let src2 ='https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
let src3 = 'https://images.pexels.com/photos/876453/pexels-photo-876453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

box.addEventListener("click", () => {
    let rnd = Math.round(Math.random() * 3)

    if (rnd == 0) {
        img.setAttribute('src', src)
    } else if (rnd === 1) {
        img.setAttribute('src', src2)
    } else if (rnd === 2) {
        img.setAttribute('src', src3)
    }

})