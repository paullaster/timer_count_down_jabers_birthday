/**
 * Count down timer to Baby
 * Synthia's birthday.
 */
const babyBirthDay = 'Apr, 22 2023';

//count down
const countDown = (bd) => {
    const birthday = Date.parse (bd) - Date.now ();
    const days = Math.floor (birthday / (24 * 60 * 60 * 1000));
    const hours = Math.floor ((birthday / (60 * 60 * 1000)) % 24);
    const minutes = Math.floor ((birthday / 1000 / 60) %  60 );
    const seconds = Math.floor ((birthday / 1000 ) % 60 );
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

const update = (cb, dt) => {
    let temp = cb (dt);

    let countingOutput = '';
    for ( let prop in temp){
        countingOutput += ` ${temp[prop]} : ${prop}  `;
    }
    console.log (countingOutput);
    setTimeout ( () => {
        update (countDown, babyBirthDay);
    }, 1000);
};

update (countDown, babyBirthDay);
