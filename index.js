/**
 * Count down timer to Baby
 * Synthia's birthday.
 */
const babyBirthDay = 'Apr, 22 2023';

//count down
const countDown = (bd) => {
    const birthday = Date.parse (bd);
    const year = birthday.getYears ();
    console.log (year);
};

countDown(babyBirthDay);