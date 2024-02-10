gdocument.addEventListener("DOMContentLoaded", function() {
    // Define an array of messages
    const messages = [
        "1. You are my sunshine on a cloudy day.",
        "2. Loving you is the best decision I've ever made.",
        "3. I love you more than words can express.",
        "4. You make my heart skip a beat every time I see you.",
        "5. Being with you makes every moment magical.",
        "6. You're the first thing on my mind when I wake up and the last thing before I sleep.",
        "7. My love for you grows stronger with each passing day.",
        "8. Your smile brightens up my darkest days.",
        "9. I cherish every moment spent with you.",
        "10. You complete me in every way possible.",
        "11. I fall for you more and more every day.",
        "12. Your love is my greatest treasure.",
        "13. I'm grateful for every second I get to spend with you.",
        "14. You're not just my love, you're my best friend.",
        "15. Your love fills my heart with endless joy.",
        "16. I love you more than yesterday but less than tomorrow.",
        "17. You make my heart sing with joy.",
        "18. With you, I've found my happily ever after.",
        "19. You're the missing piece to my puzzle.",
        "20. My love for you knows no bounds.",
        "21. You are the love of my life.",
        "22. You're the most beautiful person, inside and out.",
        "23. You're the reason I believe in love.",
        "24. Loving you is the easiest thing I've ever done.",
        "25. I can't imagine my life without you by my side.",
        "26. You're my everything.",
        "27. Every moment with you is a blessing.",
        "28. You're the one I've been searching for my whole life.",
        "29. I'm thankful for your love every single day.",
        "30. You're the answer to all my prayers.",
        "31. I love you to the moon and back.",
        "32. I'm lucky to have you in my life.",
        "33. You're my soulmate.",
        "34. You are the most incredible person I've ever met.",
        "35. I'm head over heels in love with you.",
        "36. Your love gives me strength and courage.",
        "37. I'm grateful for your love, kindness, and understanding.",
        "38. You are my rock, my anchor in the storm.",
        "39. My love for you will never fade.",
        "40. I love you more than words can express.",
        "41. You're the love of my life, my one and only.",
        "42. You're the best thing that's ever happened to me.",
        "43. Loving you is the highlight of my day.",
        "44. You are the epitome of beauty and grace.",
        "45. I love you more than all the stars in the sky.",
        "46. You're the reason I believe in happily ever after.",
        "47. You're my favorite person in the world.",
        "48. You're the one I want to spend the rest of my life with.",
        "49. I can't wait to grow old with you.",
        "50. You're my partner in crime, my confidant, my everything.",

        "51. I’d rather spend one moment holding you than a lifetime knowing I never could
        "52. I don’t want to be your favorite or your best. I want to be your only and forget the rest.
        "53. Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.
        "54. If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.
        "55. To love and be loved is to feel the sun from both sides.
        "56. You don’t love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear. 
        "57. I love you more than I have ever found a way to say to you.
        "58. I love you more today than yesterday, but not as much as tomorrow.
        "59. You smile, I smile. That’s how it works.
        "60. All of me loves all of you.
        "61. Love is so short, forgetting is so long. Thus, I know I can never forget you.
        "62. I'm much more me when I am with you.
        "63. Your smile conquers my heart.
        "64. I wish you can understand the depth of my love for you perhaps you will have shed the tears of passion to know that a heart like this still exists. I am so much addicted to love with you that I can no longer control how I feel for you, just want to say I love you!
        "65. Many times in life, we can end up taking the people who are closest to our hearts for granted. I am so used to all of the wonderful things that you do for me and I never want you to think that I do not appreciate everything that you do for me and our relationship. Every minute of every day, I am always so grateful to have you in my life and in my heart.
        "66. I hope you know that every time I tell you to get home safe, stay warm, have a good day, or sleep well what I am really saying is I love you. I love you so damn much that it is starting to steal other words’ meanings.
        "67. There aren’t many words that can describe how much I love you and how much you mean to me. There are no phrases that can encapsulate how you make every day of my life a reason for celebration. I Love You.
        "68. Ask me to define my love for you and I’ll say it’s captured in every beautiful memory of our past, detailed out in vivid visions of our dreams and future plans, but most of all it’s right now, in the moment where everything I’ve ever wanted in my life is standing right in front of me.
        "69. Baby I am truly, madly and deeply in love with you. I feel like shouting it out loud on the top of the mountain. We have been through so much together and we still have a really strong bond. I just want you to be by my side always. I have found my forever in you.
        "70. I love you, with no beginning, no end. I love you as you have become an extra necessary organ in my body. I love you as only a girl could love a boy. Without fear. Without expectations. Wanting nothing in return, except that you allow me to keep you here in my heart, that I may always know your strength, your eyes, and your spirit that gave me freedom and let me fly.
        "71. When I say I love you more, I don’t mean I love you more than you love me. I mean I love you more than the bad days ahead of us, I love you more than any fight we will ever have. I love you more than the distance between us, I love you more than any obstacle that could try and come between us. I love you the most.
        "72. I’m in love with you, and I’m not in the business of denying myself the simple pleasure of saying true things. I’m in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we’re all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we’ll ever have, and I am in love with you.
        "73. You’re gonna have to stop being so gorgeous because my heart is about to beat completely out of my chest.
        "74. I love you like how potbellied policemen are obsessed with donuts and how chubby kids love ice cream.
        "75. I see you lost your teddy, so at what time would you want me to come and sleep with you?
        "76. You wanna know who I’m in love with? Read the first word again.
        "77. Forget the butterflies. I feel the whole zoo when I am with you.
        "78. They told me that to make you fall in love, I had to make you laugh. But everytime she laughs, I'm the one who falls in love.
        "79. I may look like a thin potato, but one day I'll turn into fries and you'll want me then.
        "80. Do you know what would look good on you? Me!
        Love is sharing your popcorn. But I would get another flavour for you to have both of them and not worry about finishing them.
        A kiss is a lovely trick designed by nature to stop speech when words become superfluous.
        We go together like copy and paste, and obviously there's no Cut.
        The very next day I came home, I caught myself smiling for no reason, then I realized I was thinking of you.
        I love you like a dog likes its treat.
        If I had a flower for every time I thought of you, I could walk in my garden forever.
        You look super cute when you smile.
        You’re cute, can I keep you?
        Are you a camera? Because every time I look at you I want to smile.
        I’ve fallen in love many times… but always with you.
        Every time I see you I fall in love all over again.
        Sometimes my eyes get jealous of my heart. Because you always remain close to my heart and far from my eyes.
        I am absolutely, definitely, positively, unquestionably, beyond any doubt, in love with you.
        Your Lips? I kiss that. Your body? I hug that. My smile? You cause that. Your heart? I want that.
        I wish I could turn back the clock. I’d find you sooner and love you longer.
        In a sea of people, my eyes will always be searching for you.
        “I have died everyday waiting for you darling, don’t be afraid I have loved you for a thousand years, I’ll love you for a thousand more.“ 
        The heart wants what it wants. There’s no logic to these things. I met you and I fall in love with you and that’s that.
        The first thing I imagined when I saw the word ‘love’ is you.
        For once in my life, I don’t have to try to be happy. When I’m with you, it just happens.
        You are my life. You are the only thing it would hurt to lose.
        I can be annoying, weird, and sometimes overly emotional, but I’ll always love you like there’s no tomorrow.
        I’m sorry for being annoying when I want to talk, needy because I miss you, emotional when I care & insecure because I’m afraid to lose you.
        Baby, you don’t need to take care of yourself anymore, because I am here to take care of you forever, until the day I die. I love you!
        I’m never ever giving you up, I’m never ever leaving you. Instead, I’ll forever and ever love and cherish you.
        I am forever grateful for the happiness and joy you have brought into my life.
        Roses are red; violets are blue, I am truly, madly, deeply in love with you.
        If you can see yourself the way I see you, I bet you would also fall in love with yourself.
        I am in love with your smile, your voice, your body, your laugh, your eyes. But most of all, I am in love with you.
        People think that you fall in love only once. It`s not about me. I fall in love every time I see you.
        When you are with me, you make me perfect. I love you.
        I don’t believe in magic, I believe in true love for you.
        The first time I saw you, my heart whispered: “that’s the one.”
        I`ll never stop loving you. And no matter what is happening, my heart is always with you!
        I love you because I know no matter what happens, you’ll always love me back.
        Wake up my love. Flowers, smiles and laughter are waiting for you. Good morning Love.
        May you begin this day with a smile on your face, and with happiness for your soul to embrace. Good Morning my love.
        I would rather spend one lifetime with you, than face all the ages of this world alone. 
        Being in love with you makes every morning worth getting up for. Good morning my sweet heart.
        I love you more today than yesterday, but not as much as tomorrow.
        My wish for you this morning is that may all your sweet dreams of last night come true today. Good morning to you my dear.
        Every morning is a joy because it is another chance to see your lovely smile, your penetrating eyes, and your sweet lips. I cannot wait for this night to pass and to see you again in the morning.
        You woke up and it’s raining outside? Let every drop of rain that falls on you, will remind you of my love for you. Good morning Love.
        Every morning you make me feel something words just can’t express. Good morning, sweetheart!
        As I open my eyes each day, all I want to see is you. Good morning, my dear, I sent you hugs and kisses in my thoughts. Hope you feel it.
        Good morning, to the woman who makes me smile and warms my heart every day. I love you more than ever before.
        I love you in the morning, in the middle of the day, in the hours we are together, and the hours we are apart. Good morning love!
        In this huge world, among thousands of cities, millions of cars and houses, the hustle and bustle, lives a beautiful girl. The best girl. To her, I want to say: Good morning sweetheart.
        I can’t wait for the moment to have you here by my side, every morning I wake up. I miss you, honey. Have a great morning!
        I’m thinking about four things this morning. The obstacle is the path. Today is a good day. What comes is a gift. And I love you!
        You light up my life! Good Morning, my Love!
        I am always excited to wake up each day because I know there’s someone worth waking up for. Good morning to the sweetest person I’ve ever known.
        I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow. 
        Waking up every morning knowing that you are mine, light up my world brighter than the sun could ever be. Good morning to the love of my life.
        Sharing my life with you was the best decision I’ve ever made. 
        I am grateful for every moment.
        I wish that the shoulder you rest your head upon is always mine. 
        I wish the hand that supports you is mine. 
        I wish the ears that listen to you when you talk is mine. 
        I just want to be there for you always and forever. 






        // Add more messages as needed
    ];

    // Get the current date
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const formattedDate = `${month} ${dayOfMonth}, ${year}`;
    
    // Select a message based on the date
    const messageIndex = dayOfMonth % messages.length;
    const selectedMessage = messages[messageIndex];
    
    // Display the selected message and date
    const messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = `
        <p>${selectedMessage}</p>
        <p>This is a reminder for ${formattedDate}</p>
    `;
});
