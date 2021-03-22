console.log('%c HI', 'color: firebrick')

function fetchImage() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => addImage(json)); 
}

function fetchBreed() {
  return fetch("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(json => addUl(json)); 
}


function addImage(images) {
  const div = document.getElementById("dog-image-container");
  images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    div.appendChild(img);
  });
}

function addUl(breeds) { 
  const ul = document.getElementById("dog-breeds")
  Object.keys(breeds['message']).forEach(breed => { 
    const li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', () => { 
      li.classList.add("blue")
    })
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImage();
});


document.addEventListener('DOMContentLoaded', function() {
  fetchBreed();
});

const li = document.getElementsByTagName('li')
li.addEventListener('click', () => { 
  li.classList.add("blue")
})