const socialMediaCount = document.querySelectorAll('h1');

function displayNum() {
    socialMediaCount.forEach((item) => {
        let count = 0;
        const interval = setInterval(() => {
            count += 100;
            item.textContent = count;
            if(count == Number(item.getAttribute('data')))
                clearInterval(interval);
        }, 0);
    });
};

