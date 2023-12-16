const bottles = document.querySelectorAll('.bottles');
const usedPercentage = document.querySelector('.used-percentage');
const currentLevel = document.querySelector('.current-level');

bottles.forEach(item => {
    item.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    const classCheck = event.target.classList;
    currentLevel.style = 'border-bottom-right-radius: 0; border-bottom-left-radius: 0'

    if(classCheck.contains('1')){
        usedPercentage.style.height = `${12*0.125}rem`;
        currentLevel.style.height= `${12*(1-0.125)}rem`
        usedPercentage.textContent = '12.5%';

    }

    else if(classCheck.contains('2')){
        usedPercentage.style.height = `${12*0.25}rem`;
        currentLevel.style.height= `${12*(1-0.25)}rem`
        usedPercentage.textContent = '25%';

    }

    if(classCheck.contains('3')){
        usedPercentage.style.height = `${12*0.375}rem`;
        currentLevel.style.height= `${12*(1-0.375)}rem`
        usedPercentage.textContent = '37.5%';

    }

    if(classCheck.contains('4')){
        usedPercentage.style.height = `${12*0.5}rem`;
        currentLevel.style.height= `${12*(1-0.5)}rem`
        usedPercentage.textContent = '50%';

    }

    if(classCheck.contains('5')){
        usedPercentage.style.height = `${12*0.625}rem`;
        currentLevel.style.height= `${12*(1-0.625)}rem`
        usedPercentage.textContent = '62.5%';

    }

    if(classCheck.contains('6')){
        usedPercentage.style.height = `${12*0.75}rem`;
        currentLevel.style.height= `${12*(1-0.75)}rem`
        usedPercentage.textContent = '75%';

    }

    if(classCheck.contains('7')){
        usedPercentage.style.height = `${12*0.875}rem`;
        currentLevel.style.height= `${12*(1-0.875)}rem`
        usedPercentage.textContent = '87.5%';

    }

    if(classCheck.contains('8')){
        usedPercentage.style.height = `${12}rem`;
        currentLevel.style.height= `${12*(0)}rem`;
        usedPercentage.textContent = '100%';
        
    }
}