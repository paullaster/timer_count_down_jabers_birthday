/**
 * Count down timer to Baby
 * Synthia's birthday.
 */
const babyBirthDay = 'Apr, 22 2023';

//count down
const countDown = (bd) => {
    const birthday = Date.parse (bd);
    const days = Math.floor (birthday / (24 * 60 * 60 * 1000));
    const hours = Math.floor ((birthday / (260 * 60 * 1000)) % 24);
    //const milliseconds = birthday / 1000;
    console.log (days, hours);
};

countDown(babyBirthDay);