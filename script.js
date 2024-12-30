//base on months
const Zodiac = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

// compliments based on date size 31
const compliments = [
    "You have an amazing smile that lights up the room!",
    "Your kindness is contagious and makes everyone around you feel better.",
    "You have such a great sense of humor!",
    "Your energy is so uplifting and positive.",
    "You are incredibly thoughtful and always think of others.",
    "You're a true inspiration to those around you.",
    "Your creativity knows no bounds!",
    "You have a wonderful way of making people feel special.",
    "You're so talented, and your hard work shows.",
    "You have a heart of gold.",
    "Your positive attitude is infectious.",
    "You're an amazing listener and make people feel heard.",
    "You're a ray of sunshine in a sometimes cloudy world.",
    "You bring out the best in everyone you meet.",
    "You're incredibly strong and resilient.",
    "Your laugh is absolutely contagious.",
    "You make everything you do look effortless.",
    "You're so thoughtful and always know how to brighten someone's day.",
    "You're one of the most caring people I know.",
    "You have such a beautiful soul.",
    "You're a true friend and always there when someone needs you.",
    "Your style is impeccable, and you always look amazing.",
    "Your intelligence is truly inspiring.",
    "You're an amazing problem-solver and always come up with the best solutions.",
    "You make every conversation more interesting.",
    "You're so dedicated to everything you do, and it shows.",
    "Your authenticity is truly refreshing.",
    "You're a beautiful person, inside and out.",
    "Your presence makes everything better.",
    "You’re so brave for tackling challenges head-on.",
    "You have the most amazing heart and spirit."
];

const victimCardCompliments = [
    "You always go out of your way to help others, even when no one notices.",
    "You do so much for everyone, but it often feels like your efforts are overlooked.",
    "You give so much of yourself, and yet people don’t always recognize your kindness.",
    "You have such a big heart, and sometimes it feels like no one appreciates it enough.",
    "You're always there for others, but it must be hard when the favor isn't returned.",
    "You do more for people than they realize, yet it seems like you rarely get anything back.",
    "You’re such a giving person, but sometimes it feels like you’re not getting what you deserve.",
    "Your generosity knows no bounds, but sometimes you don’t get the appreciation you deserve.",
    "You always put others first, but rarely does anyone return the favor when you need it.",
    "It must be difficult to give so much of yourself and feel like others don’t see it.",
    "You have the most selfless spirit, yet sometimes it seems like people take you for granted.",
    "You do things for people without expecting anything in return, but it’s not always reciprocated.",
    "You work so hard to make others happy, but it can feel like no one is there when you need them.",
    "You always think of others' needs before your own, but it feels like your kindness goes unnoticed.",
    "You put your heart into everything you do for others, yet it often seems like it’s not enough.",
    "You’re so thoughtful and caring, but sometimes it feels like people don't give back the same energy.",
    "You sacrifice so much for others, and yet it’s as if no one notices the effort you put in.",
    "Your kindness never goes unnoticed by the right people, but it’s tough when others don’t show the same.",
    "You’re always giving, but it must be exhausting when you don't get the same energy in return.",
    "You’re an incredible person who does so much for others, but sometimes you deserve more than you’re given."
];

const futurePredictions = [
    "You will soon achieve great success and wealth beyond your imagination.",
    "A big opportunity is heading your way that will change your life for the better.",
    "In the near future, you will achieve everything you've worked so hard for.",
    "You will become a true inspiration for many with your hard work and determination.",
    "Your financial situation is about to improve dramatically, and wealth will follow you.",
    "Great things are coming your way, and you will soon find yourself living your dreams.",
    "The universe has big plans for you, and prosperity is just around the corner.",
    "Soon, you will find yourself in the position you've always desired – successful and content.",
    "Your career is about to take a major turn for the better, bringing success and recognition.",
    "You are on the path to becoming a millionaire, and it's just a matter of time.",
    "The effort you’ve put into your work is about to pay off in ways you never expected.",
    "Wealth, happiness, and success are heading your way, and nothing can stop you now.",
    "In the future, you will achieve financial freedom and live the life you've always dreamed of.",
    "Your hard work will soon be rewarded, and you'll find yourself enjoying the fruits of your labor.",
    "You’re about to experience a financial breakthrough that will take you to new heights.",
    "The seeds you’ve planted are starting to grow, and wealth is now on your horizon.",
    "Your future is filled with abundance, and soon you will see the results of your dedication.",
    "You will soon be in the spotlight for your achievements and your financial success.",
    "Big things are coming your way, and you’ll soon be known as one of the most successful in your field.",
    "You will rise to the top and achieve financial greatness – your dreams are becoming a reality."
];


const astroform = document.getElementById('astroform');



astroform.addEventListener('submit', function(event) {
    event.preventDefault();

    const Name = document.getElementById('fname').value;
    const Surname = document.getElementById('lname').value;
    const Date = document.getElementById('date').value;
    const Month = document.getElementById('month').value;
    const Year = document.getElementById('year').value;
    
    const first_message = `Hello ${Name} ${Surname}!`;
    const second_message = `Your Zodiac sign is ${Zodiac[Month-1]}`;
    const third_message = compliments[Date-1];
    // let index = Math.floor(Math.random()*20);
    let index = (Name.length * Surname.length *Month)%20;
    const fourth_message = victimCardCompliments[index];

    let index1 = (Name.length * Surname.length *Year)%20;
    const fifth_message = futurePredictions[index1];

    const result = document.getElementById('res');
    result.textContent = `${first_message} ${second_message} ${third_message} ${fourth_message} Your Future Prediction is: ${fifth_message}`;

    result.style.display = 'block';
    result.style.backgroundColor = "lightblue";
})