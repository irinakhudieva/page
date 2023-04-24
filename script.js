const closeButton = document.querySelectorAll('.close');
const modalWindow = document.querySelector('.modal');

function showModal() {
    if (localStorage.getItem("closeButton")) {
        setTimeout(()=> {
            modalWindow.style.display = "block";
        }, 1000);
        localStorage.setItem("closeButton", 1);
    }
};
showModal();

closeButton.forEach(close =>
    close.addEventListener('click', function() {
        modalWindow.style.display = "none";
}));

const imagesUrl = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg"
];

let currentIndex = 0;

const imageElement = document.querySelector('.image');
imageElement.src = imagesUrl[currentIndex];

function nextImage() {
    currentIndex++;

    if (currentIndex >= imagesUrl.length) {
        currentIndex = 0;
    }

    imageElement.src = imagesUrl[currentIndex];
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagesUrl.length - 1;
    }

    imageElement.src = imagesUrl[currentIndex];
}

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', nextImage);

const previousButton = document.querySelector('.previous');
previousButton.addEventListener('click', previousImage);

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

const options = {threshold: [0.2, 0.5]};
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up-hide');
    },
    hide() {
        this.el.classList.add('btn-up-hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 1000 ? this.show() :this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
 }
 btnUp.addEventListener();

