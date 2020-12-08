(function() {
    const icons = [
        'fa-ship',
        'fa-plane',
        'fa-fighter-jet',
        'fa-space-shuttle',
        'fa-rocket',
    ];

    const getOneCard = (icon) => {
        const div = document.createElement('div');
        div.classList.add('cards-container');
        div.innerHTML = `<div class="front">
                <i class="fa ${icon}"></i>
            </div>
            <div class="back"></div>`;
            return div;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //Show cards and duplicate
    const iconArray = icons.concat(icons);
    shuffle(iconArray);
    const row1 = document.querySelector('.firstRow');
    const row2 = document.querySelector('.secondRow');
    let i = 0;
    for (const icon of iconArray) {
        i++;
        const card = getOneCard(icon);
        if (i < 6) {
            row1.appendChild(card);
            } else {
                row2.appendChild(card);
            }
    }

})();