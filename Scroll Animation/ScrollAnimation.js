const contents = document.querySelectorAll('.content');

const hideContents = () => {
    for(let i = 3; i < contents.length; i++){
        if(i % 2 === 0)
            contents[i].classList.add('hidden-left');
        else
            contents[i].classList.add('hidden-right');
    }
}

const getContents = () => {
    contents.forEach((content) => {
        let top = content.getBoundingClientRect().top;
        if(top < window.innerHeight - 150) {
            if(content.classList.contains('hidden-left')) {
                content.classList.remove('hidden-left');
                content.classList.add('unhide-left');
            }

            if(content.classList.contains('hidden-right')) {
                content.classList.remove('hidden-right');
                content.classList.add('unhide-right');
            }
        }
    });
}