const scrollText = 'fj/c cds 4 sale @@@ salemrecords.bandcamp.com !!!';

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('.scrollText').innerText = scrollText;
});

var names = [
    "LOVE EACH OTHER & BE IN LOVE WITH EVERYONE",
    "SELFLESSNESS.ONLINE",
    "BY LOVING YOU ARE OBTAINING FREEDOM, LIBERTY & HAPPINESS",
    "SELFLESSNESS.ONLINE",
    "DEAR PEOPLE TRY TO BE RESCUED",
    "SELFLESSNESS.ONLINE",
    "BECOME FREE BEINGS",
    "SELFLESSNESS.ONLINE",
    "BY RADIATING LOVE",
    "SELFLESSNESS.ONLINE",
    "& HARMONY",
    "SELFLESSNESS.ONLINE",
    "RADIATE LOVE",
    "SELFLESSNESS.ONLINE",
    "RECOGNIZE YOUR INTERNAL POWER & JOY,",
    "SELFLESSNESS.ONLINE",
    "SPRINGING FROM CREATING OF FREE WILL",
    "SELFLESSNESS.ONLINE",
    "-THE COSMIC PEOPLE",
    "SELFLESSNESS.ONLINE",
    "CONVERSATIONS  WITH  GOD",
    "SELFLESSNESS.ONLINE",
    "THE  NEW  REVELATION",
    "SELFLESSNESS.ONLINE",
    "UNIVERSAL  LIFE",
    "SELFLESSNESS.ONLINE",
    "THE SPIRITUAL PATH",
    "SELFLESSNESS.ONLINE",
    "ASCENTION OF HEART",
    "SELFLESSNESS.ONLINE",
    "HEAVEN - THE TRUE CREATION",
    "SELFLESSNESS.ONLINE",

];

document.title = "SELFLESSNESS.ONLINE"

function changeTitle() {
    var index = 0;

    setInterval(function () {
        document.title = names[index];
        index = (index + 1) % names.length;
    }, 1500);
}
  changeTitle();


