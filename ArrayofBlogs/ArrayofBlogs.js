const ArrayofBlogs = [
  {
    ID: "1",
    Author: "Rishab Shalla",
    Title:
      "Vidya Balan showers praise on Alia Bhatt’s Gangubai Kathiawadi: ‘How amazing that a female-led film rocked the box office’",
    Image:
      "https://images.indianexpress.com/2022/03/vidya-balan-alia-bhatt-1200.jpg?resize=450,250",
    Body: "Vidya Balan says she is elated that the Sanjay Leela Bhansali directorial Gangubai Kathiawadi, starring Alia Bhatt, emerged victorious at the ticket window.",
    Category: "Bollywood",
    Date: "Mrch 13, 2022",
    tags: ["Alia", "Vidya"],
    readtime: "2 mins read",
  },
  {
    ID: "2",
    Author: "News 18",
    Image:
      "https://images.indianexpress.com/2022/03/Kashmir-Files-1200.jpg?resize=450,250",
    Title:
      "Kangana Ranaut calls out Bollywood for its silence on The Kashmir Files’ box office performance: ‘Bullydawood aur unke chamche sadme mein chale gaye hai’",
    Body: "Kangana Ranaut said The Kashmir Files has broken every myth and preconceived notion about a film's box office",
    Category: "Bollywood",
    Date: "March 13, 2022",
    tags: ["Kangana", "Kashmir Files"],
    readtime: "1 mins read",
  },
  {
    ID: "3",
    Author: "Hindustan Times",
    Image:
      "https://images.indianexpress.com/2022/03/kriti-sanon-1200-1.jpg?resize=450,250",
    Title:
      "Kriti Sanon: ‘Big commercial entertainers will never go out of style’",
    Body: "According to Kriti Sanon, the perception that Hindi cinema has distanced it self from commercial potboilers became stronger in the last two years when Bollywood didn't witness any major theatrical release due to the pandemic",
    Date: "March 13, 2022",
    tags: ["Kriti", "cinema"],
    readtime: "1 mins read",
  },
  {
    ID: "4",
    Author: "ETIMES",
    Image:
      "https://images.indianexpress.com/2022/03/Anushka-Sharma-1200.jpg?resize=450,250",
    Title:
      "Anushka Sharma is a fan of good light, treats fans to gorgeous new photos",
    Body: "Anushka Sharma has taken some time out from her prep for Chakda Xpress. The actor recently shared a series of images on social media.",
    Category: "Bollywood",
    Date: "March 13, 2022",
    tags: ["Anushka", "Chakda"],
    readtime: "1 mins read",
  },
  {
    ID: "5",
    Author: "Hungama Music",
    Image:
      "https://images.indianexpress.com/2022/03/Karisma-Kapoor-1200.jpg?resize=450,250",
    Title:
      "Karisma Kapoor and Madhuri Dixit bump into each other, fans call it a perfect Dil Toh Pagal Hai moment",
    Body: "Karisma Kapoor and Madhuri Dixit bumped into each other during shooting for separate projects. Karisma will be seen in Holi special episode of India's Got Talent.",
    Category: "Bollywood",
    Date: "March 13, 2022",
    tags: ["Karisma", "Madhuri"],
    readtime: "2 mins read",
  },

  {
    ID: "1",
    Author: "THE IRISH TIMES",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/RTS5900Y_0_1200x768.png?6pCXKpUGGQKGZVcRHaFLKANafnDtOjvB&size=170:96",
    Title:
      "80 million people in Russia would lose access to Instagram on Monday ",
    Body: "The move to ban Instagram in the country comes a day after Facebook allowed posts that called for the death of Russian President Vladimir Putin.",
    Category: "Technology",
    Date: "January 1, 2022",
    tags: ["Putin", "Instagram"],
    readtime: "2 mins read",
  },
  {
    ID: "2",
    Author: "THE TIMES OF INDIA",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-12_at_1.47._1200x768.png?wKbR5AJLGsQjjyKOQMLy9TpWrZuyTI5P&size=170:96",
    Title:
      "Amazon Fab Phones Fest: Top deals on OnePlus, Redmi and other phones you should not miss",
    Body: "Amazon is offering up to 40 per cent discount on smartphones including from top brands, OnePlus, Xiaomi, Redmi, Samsung, Tecno, Kodak, OPPO, and Realme amongst others.",
    Category: "Technology",
    Date: "December 12, 2021",
    tags: ["Amazon", "Samsung"],
    readtime: "1 mins read",
  },
  {
    ID: "3",
    Author: "THE IRISH TIMES",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-12_at_11.18_1200x768.png?.DAxTsP8HjPbk5niFXpA7Icx5rtCDpQB&size=170:96",
    Title:
      "Realme C35 first sale today: Price, specifications and everything else you need to know",
    Body: "The Realme C35 features a design similar to the Realme GT 2 Pro, which is slated to release in India by the end of March. The smartphone will go on its first sale today.",
    Category: "Technology",
    Date: "September 31, 2021",
    tags: ["smartphone", "Realme"],
    readtime: "2 mins read",
  },
  {
    ID: "4",
    Author: "Local News",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-02-26_at_11.35_0_1200x768.png?2.BopfTa3EW_kHz8fe3Hxgv7pYdSAB6T&size=170:96",
    Title:
      "Flipkart Big Savings Day sale goes live: Offers on iPhone SE, Google Pixel 4a, Motorola Edge 20 Pro and others",
    Body: "Flipkart is offering tons of offers and discounts on smartphones, laptops, home appliances, fashion accessories, and more during the Big Saving Days sale.",
    Category: "Technology",
    Date: "February 2, 2022",
    tags: ["Flipkart", "iPhone"],
    readtime: "2 mins read",
  },
  {
    ID: "5",
    Author: "THE TIMES OF INDIA",
    Image:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/RTS67R56_1200x768.png?bawa9eE1XAiyzCFTpUv3EeY8QvOHytHw&size=170:96",
    Title:
      "Meta employees will now have to do their own laundry as company cuts on-site perks",
    Body: "Meta, the company which owns Facebook, informed its employees via an email that would soon cut down on various perks including free laundry, valet service and dry cleaning.",
    Category: "Technology",
    Date: "April 21, 2022",
    tags: ["Facebook", "Meta"],
    readtime: "5 mins read",
  },

  {
    ID: "1",
    Author: "CINEMABLEND",
    Image:
      "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
    Title:
      "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
    Body: "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
    Category: "Hollywood",
    Date: " April 03 2022",
    tags: ["CINEMABLEND", "Hollywood"],
    readtime: "5 mins read",
  },
  {
    ID: "2",
    Author: "James Bond",
    Image:
      "https://www.bollywoodhungama.com/wp-content/uploads/2021/09/No-Time-To-Die-to-be-the-FIRST-James-Bond-film-to-release-in-3D-expected-to-be-the-BIGGEST-Hollywood-release-post-pandemic-in-India.jpg",
    Title: "No Time To Die Released",
    Body: "James Bond is a fictional character created by novelist Ian Fleming in 1953. A British secret agent working for MI6 under the codename 007, he has been portrayed on film by actors Sean Connery, David Niven, George Lazenby, Roger Moore, Timothy Dalton, Pierce Brosnan, and Daniel Craig in twenty-seven productions.",
    Category: "Hollywood",
    Date: " August 21 2021",
    tags: ["007", "James Bond"],
    readtime: "10 mins read",
  },
  {
    ID: "3",
    Author: "Marvel Studio",
    Image: "https://i.ytimg.com/vi/1WfzGDKvwrw/maxresdefault.jpg",
    Title: "Who are the Eternals?",
    Body: "Who are Marvel’s Eternals? What are their powers? What is the role of the Eternals like Ikaris, Sersi, Makkari and Ajak in human evolution in the Marvel universe? What are the origins of the Eternals? How do the Eternals help keep the cosmic balance like Galactus? Why did the Celestials create the Deviant race in the first place? Could we see The Horde fight The Celestials soon in the MCU? MasterTainment explains the origins and cosmic role of Marvel’s Eternals!",
    Category: "Hollywood",
    Date: " November 11 2021",
    tags: ["Marvel", "Avengers"],
    readtime: "5 mins read",
  },
  {
    ID: "4",
    Author: "Rishab Shalla",
    Image:
      "https://wiwibloggs.com/wp-content/uploads/2022/02/Cornelia-Jakobs-Hold-Me-Closer-Sweden-Eurovision-2022.jpg",
    Title:
      "“I found the right one at the wrong time” — Cornelia Jakobs’ “Hold Me Closer” lyrics lament the turmoil of a breakup",
    Body: "In 2011 and 2012, she participated as part of girl group Love Generation, and in 2021 she returned as one of the songwriters behind Efraim Leo’s “Best of Me”. Cornelia is the daughter of The Poodles’ Jakob Samuels — who took on the Melfest challenge in 2006 and 2008 — and has been surrounded by music all her life. Since she was just seven years old, she found her forte on the stage and grew up playing in various rock bands throughout middle school. Cornelia’s discography already boasts nine singles, with her debut studio album set for release soon. “Hold Me Closer” is about the emotional turmoil of working through a difficult breakup. Cornelia Jakobs sings about wanting to hold on to her significant other for as long as possible, even though she knows their relationship is coming to an end. With lyrics such as “I found the right one at the wrong time” and “guess all the good things come to an end”, Cornelia laments the happenstance and spontaneity of love.",
    Category: "Hollywood",
    Date: " March 09 2022",
    tags: ["Hollywood", "Hollywood"],
    readtime: "5 mins read",
  },
  {
    ID: "5",
    Author: "CINEMABLEND",
    Image:
      "https://www.denofgeek.com/wp-content/uploads/2021/07/the-twilight-saga-movie-watch-order.jpeg?resize=768%2C432",
    Title:
      "Twilight’s Kellan Lutz Recalls Working With Nikki Reed And Filming Their ‘Sensual’ Kissing Scene In Breaking Dawn",
    Body: "Kellan Lutz and Nikki Reed played vampire couple Emmett Cullen and Rosalie Hale in all five Twilight movies. And apparently, the chemistry was as palpable on set as it looked on screen. As Lutz recently reflected: Kellan Lutz also revealed at one point he had a thing for Ashley Greene before she became “one of the guys” on set. Greene shared that she thinks the pair “pretty quickly” moved to being friends, which she’s totally fine with because she’s able to remain friends with each other and other castmates. By remaining more like friends or family with one another, Greene and Lutz bonded on being able to “be there” for one another and ask each other for advice during their mega stardom Of course, Kristen Stewart and Robert Pattinson, who shared an interesting audition experience, were the hottest couple on the Twilight franchise and dated throughout the movies. Unfortunately for them, that also meant there was an added spotlight on them, and they were constantly the object of paparazzi’s affection. After the franchise ended, Kristen Stewart has found love in Dylan Meyer, who she is engaged to be married to. Kellan Lutz is married as well and welcomed his first daughter a little over a year ago. Nikki Reed is married to Vampire Diaries actor Ian Somerhalder, and they have a daughter as well. Meanwhile, Ashley Greene has been married to Paul Khoury since 2018 and announced last week she is pregnant with her first child. As it turns out, there are a lot of happy endings for the Twilight cast, even if they weren't actually with each other. Sure, it's fun to relive their steamy moments on camera, but it's great knowing many of them have found that special someone. Those who want to revisit the films and those fictional relationships, though, can do so with a Hulu subscription now.",
    Category: "Hollywood",
    Date: " April 03 2022",
    tags: ["CINEMABLEND", "Hollywood"],
    readtime: "5 mins read",
  },

  {
    ID: "1",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/03/pull-ups.jpg?resize=450,250",
    Title: "How to master the pull-up",
    Body: "Pull-ups are also beautiful for their simplicity. They require nothing more than a bar, and engage at least a dozen muscles, from the lats all the way to the glutes. Experts say they improve upper body strength, shoulder mobility and core stability, while helping to hone coordination too.",
    Category: "Fitness",
    Date: "March 9, 2022",
    tags: ["Fitness", "India"],
    readtime: "5 mins read",
  },
  {
    ID: "2",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/02/stretching-2.jpg?resize=450,250",
    Title:
      "‘These will truly make you feel like a brand new person’: Simple stretches to ‘fix your posture’",
    Body: "Many people tend to spend hours on laptops, working from the bed, or the sofa, hunched over the phone, all of which contribute to bad posture in the long run.",
    Category: "Fitness",
    Date: "March 8, 2022",
    tags: ["Fitness", "India"],
    readtime: "5 mins read",
  },
  {
    ID: "3",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/03/pexels-the-lazy-artist-gallery-2247179.jpg?resize=450,250",
    Title: "Stronger muscles in 3 seconds a day",
    Body: "In the study, men and women who contracted their arm muscles as hard as possible for a total of three seconds a day increased their biceps strength by as much as 12 percent after a month.",
    Category: "Fitness",
    Date: "March 4, 2022",
    tags: ["Fitness", "India"],
    readtime: "5 mins read",
  },
  {
    ID: "4",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2021/10/GettyImages-exercises-and-skincare-1200.jpg?resize=450,250",
    Title: "Fitness alert: Effective tips to build muscle the right way",
    Body: "Building muscle has many immediate benefits, like better bone mineral density and protection against musculoskeletal injury.",
    Category: "Fitness",
    Date: "March 3, 2022",
    tags: ["Fitness", "India"],
    readtime: "5 mins read",
  },
  {
    ID: "5",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/02/weight-lifting_1200_getty.jpg?resize=450,250",
    Title:
      "Woman crushed to death while trying to lift 180kg barbell; important things keep in mind when working out with weights",
    Body: "'One must always begin with lighter weights and then gradually progress. You will have to take all the safety measures before lifting heavy weights,' said Dr Imraan",
    Category: "Fitness",
    Date: "February 24, 2022",
    tags: ["Fitness", "India"],
    readtime: "5 mins read",
  },

  {
    ID: "1",
    Author: "Delish",
    Image:
      "https://images.indianexpress.com/2021/12/Broccoli-IG.jpg?resize=450,250",
    Title:
      "Healthy eating: Find out how you can add Romanesco broccoli to your plate",
    Body: "Chef Vicky Ratnani took to Instagram to share details about this versatile green!.",
    Category: "Food",
    Date: "March 13, 2022",
    tags: ["Food", "India"],
    readtime: "6 mins read",
  },
  {
    ID: "2",
    Author: "Delish",
    Image:
      "https://images.indianexpress.com/2022/02/gulab-jamun-paratha_1200_insta.jpg?resize=450,250",
    Title: "Would you like to try gulab jamun paratha?",
    Body: "The dish drew mixed reactions from internet users",
    Category: "Food",
    Date: "March 13, 2022",
    tags: ["Food", "India"],
    readtime: "6 mins read",
  },
  {
    ID: "3",
    Author: "Delish",
    Image:
      "https://images.indianexpress.com/2022/03/DW_Michelin1200.jpg?resize=450,250",
    Title: "Germany has more Michelin-rated restaurants than ever before",
    Body: "Germany's chefs have been hard at work during the coronavirus pandemic, and there are now over 320 gourmet restaurants. A new 'three star' establishment was even added, the highest caliber Michelin awards.",
    Category: "Food",
    Date: "March 12, 2022",
    tags: ["Food", "India"],
    readtime: "6 mins read",
  },
  {
    ID: "4",
    Author: "Delish",
    Image:
      "https://images.indianexpress.com/2022/02/chicken-popcorn.jpg?resize=450,250",
    Title:
      "Satiate your evening hunger pangs with this spicy chicken popcorn recipe",
    Body: "If you’re looking for a delicious snack recipe that will be a hit amongst adults and children alike, you have come to the right place.",
    Category: "Food",
    Date: "March 12, 2022",
    tags: ["Food", "India"],
    readtime: "6 mins read",
  },
  {
    ID: "5",
    Author: "Delish",
    Image: "https://images.indianexpress.com/2022/03/Bambai-Nazariya-1200.jpg",
    Title:
      "‘Nazariya badlo, nazaara badlega’: Inside Bambai Nazariya, a socially-inclusive Mumbai café run by transgenders",
    Body: "Opened about two months back, the café employs only the transgender community, to give them the opportunities 'they rightfully deserve,'' shared Diego",
    Category: "Food",
    Date: "March 11, 2022",
    tags: ["Food", "India"],
    readtime: "6 mins read",
  },

  {
    ID: "1",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/02/TRAVEL-TRENDS.jpg?resize=450,250",
    Title: "Travel's theme for 2022? 'Go big'",
    Body: "The World Travel & Tourism Council, or WTTC, which represents the global travel and tourism industry, projects that travel and tourism in the United States will reach pre-pandemic levels in 2022, contributing nearly $2 trillion to the U.S. economy.",
    Category: "Tourism",
    Date: "February 21, 2022",
    tags: ["Rome", "India"],
    readtime: "5 mins read",
  },
  {
    ID: "2",
    Author: "Rishab Shalla",
    Image:
      "https://images.indianexpress.com/2022/02/Travel-1200.jpg?resize=450,250",
    Title:
      "Travel and tourism could grow to $8.6 trillion in 2022, says World Travel & Tourism Council",
    Body: "'Our sector could recover more than 58 million jobs and generate $8.6 trillion which would boost economic recovery around the world,' Julia Simpson, WTTC",
    Category: "Tourism",
    Date: "February 12, 2022",
    tags: ["Tourism", "India"],
    readtime: "4 mins read",
  },
  {
    ID: "3",
    Author: "NDTV",
    Image:
      "https://images.indianexpress.com/2022/02/Bhutan-trail-1200.jpeg?resize=450,250",
    Title:
      "Historic Trans Bhutan Trail set to reopen for the first time after six decades",
    Body: "The 250-mile-long trail runs from Haa in the west to Trashigang in the east, and is one of the most culturally rich and least explored trails in the world.",
    Category: "Tourism",
    Date: "February 1, 2022",
    tags: ["Tourism", "AirLines"],
    readtime: "6 mins read",
  },
  {
    ID: "4",
    Author: "NDTV",
    Image:
      "https://images.indianexpress.com/2022/01/VEGAN-TRAVELERS-2.jpg?resize=450,250",
    Title: "Vegan travel: Its not fringe anymore",
    Body: "While vegans and vegetarians are minorities in the United States, a growing number of people are more interested in reducing their meat consumption, often for environmental reasons, as livestock operations significantly produce climate-disruptive methane gas.",
    Category: "Tourism",
    Date: "January 26, 2022",
    tags: ["Tourism", "AirLines"],
    readtime: "6 mins read",
  },
  {
    ID: "5",
    Author: "NDTV",
    Image:
      "https://images.indianexpress.com/2022/01/hampi-1200.jpg?resize=450,250",
    Title:
      "National Tourism Day 2022: Know more about the history, theme and significance of the day",
    Body: "This year's theme, according to the Ministry of Tourism, is - 'Rural and Community Centric Tourism",
    Category: "Tourism",
    Date: "January 25, 2022",
    tags: ["Tourism", "AirLines"],
    readtime: "6 mins read",
  },
];

exports.ArrayofBlogs = ArrayofBlogs;
