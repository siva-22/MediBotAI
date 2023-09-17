// Possible user inputs:
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "i need help", "can you help me"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["Sir/Maam"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"],
  ["cold", " shivering", "cold and shivering"],
  ["running nose", "throat pain", " throat pain and running nose"],
  ["loose stools", "stomach ache and loose stools"],
  [" headache", " pain in head"],
  ["my eyes turned red", "itchiness in my eyes", "red eyes", "tearing in eyes"],
  ["shortness of breath", "soar throat", "aching muscles"],
  ["seizure", "loss of consciousness", "temporary confusion"],
  ["joint pain", "pain in joint"],
  ["spots appeared on my face", "pimples", "spots", "pimples on my face"],
  ["lower abdominal pain", "pain in lower abdomin"],
  ["chest pain", "breathlessness", "breathlessness and chest pain", "breathless"],
  ["a presistant cough," ,"presistant cough"],
  ["red rashes appeared on my skin", "red rashes and itchy spots", "red rashes with spots"],
  ["loss of appetie, nausea and itchy skin", "loss of appetite nausea itchy skin", "loss of appetite", "itchy skin"],
  ["hopelessness", "tearful", "anxiety"],
  ["what should i eat", "which fruit should i eat"],
  ["which drink", "what should i drink"],
  ["im fat", "fat", "obese", "im obese"],
  ["nausea", " vometing"],
  [" abdominal pain", " stomach ache"],
  ["dengue", "malaria"],
  ["give me a health tip"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello Client good morning!", "Hello! How can I help."],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Looking forward to assist you",
    "On my work to help you",
    "Can you guess?",
    "Im doing my job. I can help you regarding your medical problems."
  ],
  ["I am young as you are! Hope we stay healthy"],
  ["I am your medical assistant", "Im Medibot, here to help you regarding your medical problems."],
  ["Pawan and Garvit created me to help you."],
  ["I am Medibot", "You can call me Medibot AI "],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["Sure. Tell me your symptoms.", "Im always here to help!"],
  ["OK sir/maam. Anything else you need help with?", "Hmm", "yes sir/maam"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Sir/Ma`am"],
  ["Great question"],
  ["That's ok","I understand","You have any symptom? Tell me! i can help you"],
  ["Please say something :("],
  ["Haha!","Good one!"],
  ["This is common fever. if the symptoms are bearable, use some cold ice on head. You can take some medicines like Paracetamol, Aspirin or Advil. if your symptoms still presist, visit a nearby doctor. get well soon!"],
  ["Ohh! you have caught a viral cold. Dont worry. Regularly wash your hands. Cover and clear your cough as much as possible. i will recommend you to use a nasal spray. if your symptoms still presist, visit a nearby doctor. get well soon!"],
  ["Loose stools is a common disease. If you feel like its not chronic, You can treat it at home. Taking too much magnesium can be a problem. Taking too many laxatives can also affect your bowel movements. Take as many fluids as possible. ORS could be helpful. If you suffer from chronic one, do visit a doctor."],
  ["relax! you need to relax. headache comes majorly from tension or stress. Take a break from you smartphone and computer. Take some fresh air and preferably take a walk!"],
  ["Seems like you have Conjunctivitis. Im sorry but you need to visit a doctor. If you wear glasses, get rid of them. dont be too late to visit a doctor."],
  ["This is most probably influenza or flu. if any of these symptoms are at low scale, you dont need to worry. It will go away itslef. Otherwise, you need to rush to doctor."],
  ["You just experienced a seizure. If it was an instant experience, its ok. if it felt for longer than five minutes or hits you again, i recommend you to go to visit a doctor. Stay safe!"],
  ["Joint pain is common if your aged but if your not, its possible that you tried something wrong or have a joint injury. It could also be due to some other serious medical condition. i would recommend you to do oil massage in affected joint or visit a nearby doctor."],
  ["Pimple is a common disease. if your a teenager, its very common for you. you should identify the type of pimple. It can be a red head, black head or white head. Don`t try to squeez it. Just use mild soap on it. Dont wash too often. It will go away on its own."],
  ["Im worried as this symptom leads to appendicites. If your pain isnt going or is gradually increasing, call an ambulance or rush to a hospital. You probably need it to be removed if this is the case. Be well."],
  ["I would straight ahead recommend you to go to a chest doctor. This is a sign of asthama. its better if you do as earliest as possible. Your symptoms could gradually increas so dont wait."],
  ["This is a sign of bronchiectasis, meaning your lung airways could be widened. It`s a serious issue. I recommend you to visit a doctor and get assistance."],
  ["This is a clear sign of chickenpox. Stay away from public areas, avoid going to school until its cured. You may also experience fever. Take rest as much as possible. There is no medication for this."],
  ["Sounds like cirrhosis. if you feel loss of appetite, itchy skin or nausea altogether, this is the disease.This disease has no cure as of now. You need to go to a doctor. They might help"],
  ["Your suffering from depression. you may experience some pysical symtoms too. Majorly, it will affect your mental status. A doctor is preferable in this case. If you experience mild mental illness, try to divert your mind by doing some refreshing activity or just be with someone else who can make you happy. Im also here to listen to you!"],
  ["a fruit! aah! you should eat a apple. high on iron to improve your health!", "you can eat a banana if your low on magnesium or vitamin C!", "A papaya maybe?"],
  ["Depends on your mood. If you feel thirsty and its summer, drink a lemonade. If its cold outside, drink a coffee or tea!", "how about a green lemon tea?", "i think a hot tea!"],
  ["Dont worry. You can control your fat. First, avoid fatty foods. try apple cider vinager with lemon juice. Green tea can also help you break down fat. Veggies like tomatoes, carrors are also very helpful to reduce your fat."],
  ["So you feel like vometing. Usually, vomiting is harmless, but it can be a sign of a more serious illness. Drink gradually larger amounts of clear liquids, avoid solid food until the vomiting episode has passed. Take some medicine if you have it. Stay healthy please."],
  ["Stomach ache or Abdominal pain is generally caused by Gas. It could also mean food poisoning or abdominal muscle pull. If its gastric issue, take some antacids. Probiotics can also help you. Going for a walk can also help you pass gas and reduce pain."],
  ["If you think you may have dengue, malaria fever, you should use pain relievers with acetaminophen and avoid medicines with aspirin, which could worsen bleeding. You should also rest, drink plenty of fluids, and see your doctor."],
  ["You should limit sugary drinks. Findings from several studies point to sugar-sweetened beverages increasing risk of heart disease and type 2 diabetes, even in people who are not carrying excess body fat.", "Eat nuts and seeds! Some people avoid nuts because they are high in fat. However, nuts and seeds are incredibly nutritious. They are packed with protein, fiber, and a variety of vitamins and minerals.", "Avoid ultra-processed foods. Ultra-processed foods are foods containing ingredients that are significantly modified from their original form. They often contain additives like added sugar, highly refined oil, salt, preservatives, artificial sweeteners, colors, and flavors as well."]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Sir/Maam..Try again",
  "Try again",
  "I'm listening...",
  "I don't understand."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]