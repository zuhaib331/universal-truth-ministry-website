/*
  CHILDREN WAITING FOR A SPONSOR
  ==============================
  This list fills the cards on the "Sponsor a Child" page (sponsor.html).
  While the list is empty, the page shows a "Stories coming soon" message.

  HOW TO ADD A CHILD
  1. Copy the example below, from {  to  },  and remove the // at the start of each line.
  2. Fill in each line. Leave a line as "" if you do not have it.
  3. Put a comma after the closing } if another child follows.

  SAFETY RULES (from our Child Safeguarding policy)
  - First name only, or a changed name. Never a surname, village, church, school or parents' names.
  - Only add a photo if a parent has signed written permission for this story AND photo.
    Put the photo in the images/children/ folder. Photos from behind or at a distance are safest.
  - Every photo also needs a tiny BLURRED copy (photoBlur). The card shows only the blurred copy
    until the visitor gives a name and email. Without a blurred copy, the card shows the child's
    first letter instead. Claude can make the blurred copy for you from the photo.
  - Remember: the photo files are still public on the internet. The email step tracks who is
    interested; it does not lock the photo. Only use photos that follow the policy.
  - Write with dignity: hopes and dreams, not pity.
  - When a child gets a sponsor, change  sponsored: false  to  sponsored: true .
  - Remove the child if they leave the Center or a parent asks.
*/
window.SPONSOR_CHILDREN = [

  // {
  //   name: "Ayesha",                          // first name or changed name
  //   age: 9,
  //   grade: "Class 4",
  //   photo: "images/children/ayesha.jpg",     // or "" for no photo
  //   photoBlur: "images/children/ayesha-blur.jpg", // tiny blurred copy of the photo
  //   story: "Two or three short sentences about the child and their family.",
  //   loves: "Mathematics and drawing",
  //   dream: "A teacher",
  //   bibleStory: "David and Goliath",
  //   quote: "One sentence in the child's own words.",
  //   sponsored: false
  // },

  {
    name: "Amanat",
    age: 14,
    grade: "Class 9",
    photo: "images/children/amanat.jpg",
    photoBlur: "images/children/amanat-blur.jpg",
    story: "Amanat has been coming to the Education Center for two years. His father works hard as a waste collector and never had the chance to go to school himself. At the Center, Amanat has found teachers who take time to understand him.",
    loves: "Urdu, his favourite subject",
    dream: "A priest who shares the love of God",
    bibleStory: "David and Goliath, because David stood up when Goliath mocked God",
    quote: "The teachers listen to me, understand my feelings, and love me.",
    sponsored: false
  },

  {
    name: "Anthony",
    age: 14,
    grade: "Class 9",
    photo: "images/children/anthony.jpg",
    photoBlur: "images/children/anthony-blur.jpg",
    story: "Anthony is one of three children in his family, and all three come to the Education Center. His father works as a cleaner at a hospital and is the only one earning for the family. Anthony loves his family and feels the pressure to leave school and start working to help them, but he wants to keep studying. He is happy at the Center, where his teacher helps him so well with Biology, his favourite subject. Helping these children now can change the future of their whole family.",
    loves: "Biology, his favourite subject",
    dream: "A police officer, to serve his country as a Christian",
    bibleStory: "Samson, because God made him strong, and he admires Samson's character",
    quote: "",
    sponsored: false
  },

  {
    name: "Mishal",
    age: 6,
    grade: "",
    photo: "images/children/mishal.jpg",
    photoBlur: "images/children/mishal-blur.jpg",
    photoPosition: "center top",
    story: "Mishal loves her parents, and she loves numbers. She is happy at the Education Center because her teachers are so kind to her. Her little brother Rohan comes to the Center too.",
    loves: "Math, her favourite subject",
    dream: "A teacher",
    bibleStory: "Moses",
    quote: "",
    sponsored: false
  },

  {
    name: "Rohan",
    age: 4,
    grade: "",
    photo: "images/children/rohan.jpg",
    photoBlur: "images/children/rohan-blur.jpg",
    photoPosition: "center top",
    story: "Rohan loves his family. He is happy at the Education Center because his friends learn there too. His big sister Mishal comes to the Center with him.",
    loves: "Counting, his favourite subject",
    dream: "A lawyer",
    bibleStory: "Zacchaeus, the man who climbed a tree to see Jesus",
    quote: "",
    sponsored: false
  }

];
