// ===============================
// REAL TALK
// ===============================

// ---------- DATA ----------

const missions = {

  restaurant: {
    title: "🍔 Restaurant",
    npc: "👩‍🍳",

    questions: [
      {
        text: "What would you like?",
        answers: [
          "I want a burger.",
          "I am going school.",
          "Yesterday was Monday."
        ],
        correct: 0
      },

      {
        text: "Would you like something to drink?",
        answers: [
          "Yes, please. Some water.",
          "I am 15 years old.",
          "Where is the hotel?"
        ],
        correct: 0
      },

      {
        text: "How much is the burger?",
        answers: [
          "It is $8.",
          "I like football.",
          "My name is Alex."
        ],
        correct: 0
      },

      {
        text: "Is that all?",
        answers: [
          "Yes, that's all.",
          "I live in Tashkent.",
          "This is my brother."
        ],
        correct: 0
      },

      {
        text: "Thank you!",
        answers: [
          "You're welcome!",
          "I need a taxi.",
          "I am from Uzbekistan."
        ],
        correct: 0
      }
    ]
  },

  airport: {
    title: "✈️ Airport",
    npc: "👨‍✈️",

    questions: [
      {
        text: "Where are you flying today?",
        answers: [
          "I'm flying to London.",
          "I want a burger.",
          "I am twelve years old."
        ],
        correct: 0
      },

      {
        text: "May I see your passport?",
        answers: [
          "Sure, here it is.",
          "I like pizza.",
          "Where is the restaurant?"
        ],
        correct: 0
      },

      {
        text: "Do you have any luggage?",
        answers: [
          "Yes, I have one suitcase.",
          "I'm hungry.",
          "It's Monday."
        ],
        correct: 0
      },

      {
        text: "What is your seat number?",
        answers: [
          "My seat is 24A.",
          "I am from Korea.",
          "I need some water."
        ],
        correct: 0
      },

      {
        text: "Have a nice flight!",
        answers: [
          "Thank you!",
          "How much is it?",
          "I want a room."
        ],
        correct: 0
      }
    ]
  },

  shopping: {
    title: "🛍️ Shopping",
    npc: "🧑‍💼",

    questions: [
      {
        text: "Can I help you?",
        answers: [
          "Yes, I'm looking for a shirt.",
          "I am going home.",
          "It is five o'clock."
        ],
        correct: 0
      },

      {
        text: "What size do you need?",
        answers: [
          "Medium, please.",
          "I am from Tashkent.",
          "I like English."
        ],
        correct: 0
      },

      {
        text: "Would you like to try it on?",
        answers: [
          "Yes, please.",
          "I have a dog.",
          "Tomorrow is Friday."
        ],
        correct: 0
      },

      {
        text: "How much is it?",
        answers: [
          "It's $25.",
          "I'm sixteen.",
          "I need a taxi."
        ],
        correct: 0
      },

      {
        text: "How would you like to pay?",
        answers: [
          "By card, please.",
          "I'm very hungry.",
          "It's near the hotel."
        ],
        correct: 0
      }
    ]
  },

  hotel: {
    title: "🏨 Hotel",
    npc: "🧑‍💼",

    questions: [
      {
        text: "Do you have a reservation?",
        answers: [
          "Yes, I have a reservation.",
          "I want some pizza.",
          "Where is the airport?"
        ],
        correct: 0
      },

      {
        text: "How many nights will you stay?",
        answers: [
          "Three nights.",
          "I'm from Uzbekistan.",
          "It's ten dollars."
        ],
        correct: 0
      },

      {
        text: "May I see your ID?",
        answers: [
          "Of course. Here you are.",
          "I need a burger.",
          "I like this city."
        ],
        correct: 0
      },

      {
        text: "Here is your room key.",
        answers: [
          "Thank you very much.",
          "Where is the restaurant?",
          "I'm seventeen."
        ],
        correct: 0
      },

      {
        text: "Enjoy your stay!",
        answers: [
          "Thank you!",
          "I want a ticket.",
          "It's Monday."
        ],
        correct: 0
      }
    ]
  },

  metro: {
    title: "🚇 Metro",
    npc: "👨‍🦱",

    questions: [
      {
        text: "Excuse me, where is the metro?",
        answers: [
          "It's over there.",
          "I want some food.",
          "I'm from Korea."
        ],
        correct: 0
      },

      {
        text: "Which line goes to the city center?",
        answers: [
          "The blue line.",
          "I am sixteen.",
          "I like music."
        ],
        correct: 0
      },

      {
        text: "How much is a ticket?",
        answers: [
          "It's two dollars.",
          "I need a hotel.",
          "My name is Alex."
        ],
        correct: 0
      },

      {
        text: "Where should I get off?",
        answers: [
          "At Central Station.",
          "I want a coffee.",
          "Tomorrow morning."
        ],
        correct: 0
      },

      {
        text: "Thank you for your help.",
        answers: [
          "You're welcome!",
          "I need a shirt.",
          "It's very expensive."
        ],
        correct: 0
      }
    ]
  }

};


// ---------- STATE ----------

let state = JSON.parse(
  localStorage.getItem("realTalkState")
) || {

  xp: 0,
  level: 1,
  streak: 1,
  coins: 0,
  language: "English",
  mistakes: [],
  achievements: []

};


// ---------- SAVE ----------

function saveState() {

  localStorage.setItem(
    "realTalkState",
    JSON.stringify(state)
  );

}


// ---------- ELEMENTS ----------

const xpEl = document.getElementById("xp");
const levelEl = document.getElementById("level");
const streakEl = document.getElementById("streak");
const globalCoinsEl = document.getElementById("globalCoins");

const sideProgress = document.getElementById("sideProgress");
const sideProgressBar = document.getElementById("sideProgressBar");

const profileXP = document.getElementById("profileXP");
const profileLevel = document.getElementById("profileLevel");
const profileStreak = document.getElementById("profileStreak");
const profileProgress = document.getElementById("profileProgress");
const levelProgressText = document.getElementById("levelProgressText");


// ---------- UPDATE UI ----------

function updateUI() {

  xpEl.textContent = state.xp;
  levelEl.textContent = state.level;
  streakEl.textContent = state.streak + " kun";
  if (globalCoinsEl) globalCoinsEl.textContent = Number(state.coins || 0);

  profileXP.textContent = state.xp;
  profileLevel.textContent = state.level;
  profileStreak.textContent = state.streak + " 🔥";

  document.getElementById("leaderXP").textContent =
    state.xp + " XP";

  const needed = state.level * 500;

  const current =
    state.xp % 500;

  const percentage =
    Math.min((current / 500) * 100, 100);

  sideProgress.textContent =
    Math.round(percentage) + "%";

  sideProgressBar.style.width =
    percentage + "%";

  profileProgress.style.width =
    percentage + "%";

  levelProgressText.textContent =
    current + " / 500 XP";

}


// ---------- NAVIGATION ----------

const navButtons =
  document.querySelectorAll(".nav-btn");

const pages =
  document.querySelectorAll(".page");

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    const page =
      button.dataset.page;

    navButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    pages.forEach(p =>
      p.classList.remove("active-page")
    );

    document
      .getElementById(page + "Page")
      .classList.add("active-page");

    if (page === "mistakes") {
      renderMistakes();
    }

  });

});


// ---------- LANGUAGE ----------

const languageCards =
  document.querySelectorAll(".language-card");

languageCards.forEach(card => {

  card.addEventListener("click", () => {

    languageCards.forEach(c =>
      c.classList.remove("selected")
    );

    card.classList.add("selected");

    state.language =
      card.dataset.language;

    saveState();

  });

});


// ---------- GAME: PLAY & LEARN ----------

const gameModal = document.getElementById("gameModal");
const closeGame = document.getElementById("closeGame");
const gameTitle = document.getElementById("gameTitle");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const questionNumber = document.getElementById("questionNumber");
const questionBar = document.getElementById("questionBar");
const questionXP = document.getElementById("questionXP");
const result = document.getElementById("result");
const scenarioName = document.getElementById("scenarioName");
const npc = document.querySelector(".npc");

const GAME_LANGS = {
  English: {
    restaurant: [
      ["What would you like?",["I want a burger.","I am going to school.","Yesterday was Monday."],0],
      ["Would you like something to drink?",["Yes, please. Some water.","I am fifteen years old.","Where is the hotel?"],0],
      ["How much is the burger?",["It is eight dollars.","I like football.","My name is Alex."],0],
      ["Is that all?",["Yes, that's all.","I live in Tashkent.","This is my brother."],0],
      ["Thank you!",["You're welcome!","I need a taxi.","I am from Uzbekistan."],0]
    ],
    airport: [
      ["Where are you flying today?",["I'm flying to London.","I want a burger.","I am twelve years old."],0],
      ["May I see your passport?",["Sure, here it is.","I like pizza.","Where is the restaurant?"],0],
      ["Do you have any luggage?",["Yes, I have one suitcase.","I'm hungry.","It's Monday."],0],
      ["What is your seat number?",["My seat is 24A.","I am from Korea.","I need some water."],0],
      ["Have a nice flight!",["Thank you!","How much is it?","I want a room."],0]
    ],
    shopping: [
      ["Can I help you?",["Yes, I'm looking for a shirt.","I am going home.","It is five o'clock."],0],
      ["What size do you need?",["Medium, please.","I am from Tashkent.","I like English."],0],
      ["Would you like to try it on?",["Yes, please.","I have a dog.","Tomorrow is Friday."],0],
      ["How much is it?",["It's twenty-five dollars.","I'm sixteen.","I need a taxi."],0],
      ["How would you like to pay?",["By card, please.","I'm very hungry.","It's near the hotel."],0]
    ],
    hotel: [
      ["Do you have a reservation?",["Yes, I have a reservation.","I want some pizza.","Where is the airport?"],0],
      ["How many nights will you stay?",["Three nights.","I'm from Uzbekistan.","It's ten dollars."],0],
      ["May I see your ID?",["Of course. Here you are.","I need a burger.","I like this city."],0],
      ["Here is your room key.",["Thank you very much.","Where is the restaurant?","I'm seventeen."],0],
      ["Enjoy your stay!",["Thank you!","I want a ticket.","It's Monday."],0]
    ],
    metro: [
      ["Excuse me, where is the metro?",["It's over there.","I want some food.","I'm from Korea."],0],
      ["Which line goes to the city center?",["The blue line.","I am sixteen.","I like music."],0],
      ["How much is a ticket?",["It's two dollars.","I need a hotel.","My name is Alex."],0],
      ["Where should I get off?",["At Central Station.","I want a coffee.","Tomorrow morning."],0],
      ["Thank you for your help.",["You're welcome!","I need a shirt.","It's very expensive."],0]
    ]
  },
  Russian: {
    restaurant: [["Что вы будете заказывать?",["Я хочу бургер.","Я иду в школу.","Вчера был понедельник."],0],["Хотите что-нибудь выпить?",["Да, пожалуйста. Воду.","Мне пятнадцать лет.","Где отель?"],0],["Сколько стоит бургер?",["Он стоит восемь долларов.","Я люблю футбол.","Меня зовут Алекс."],0],["Это всё?",["Да, это всё.","Я живу в Ташкенте.","Это мой брат."],0],["Спасибо!",["Пожалуйста!","Мне нужно такси.","Я из Узбекистана."],0]],
    airport: [["Куда вы сегодня летите?",["Я лечу в Лондон.","Я хочу бургер.","Мне двенадцать лет."],0],["Можно посмотреть ваш паспорт?",["Конечно, вот он.","Я люблю пиццу.","Где ресторан?"],0],["У вас есть багаж?",["Да, у меня один чемодан.","Я голоден.","Сегодня понедельник."],0],["Какой у вас номер места?",["Моё место 24A.","Я из Кореи.","Мне нужна вода."],0],["Хорошего полёта!",["Спасибо!","Сколько это стоит?","Я хочу номер."],0]],
    shopping: [["Я могу вам помочь?",["Да, я ищу рубашку.","Я иду домой.","Сейчас пять часов."],0],["Какой размер вам нужен?",["Средний, пожалуйста.","Я из Ташкента.","Я люблю английский."],0],["Хотите примерить?",["Да, пожалуйста.","У меня есть собака.","Завтра пятница."],0],["Сколько это стоит?",["Это стоит двадцать пять долларов.","Мне шестнадцать.","Мне нужно такси."],0],["Как вы будете платить?",["Картой, пожалуйста.","Я очень голоден.","Это рядом с отелем."],0]],
    hotel: [["У вас есть бронь?",["Да, у меня есть бронь.","Я хочу пиццу.","Где аэропорт?"],0],["На сколько ночей вы останетесь?",["На три ночи.","Я из Узбекистана.","Это десять долларов."],0],["Можно посмотреть ваш документ?",["Конечно. Вот, пожалуйста.","Мне нужен бургер.","Мне нравится этот город."],0],["Вот ключ от вашего номера.",["Большое спасибо.","Где ресторан?","Мне семнадцать."],0],["Желаю приятного проживания!",["Спасибо!","Мне нужен билет.","Сегодня понедельник."],0]],
    metro: [["Извините, где метро?",["Вон там.","Я хочу поесть.","Я из Кореи."],0],["Какая линия идёт в центр?",["Синяя линия.","Мне шестнадцать.","Я люблю музыку."],0],["Сколько стоит билет?",["Два доллара.","Мне нужен отель.","Меня зовут Алекс."],0],["Где мне выйти?",["На Центральной станции.","Я хочу кофе.","Завтра утром."],0],["Спасибо за помощь.",["Пожалуйста!","Мне нужна рубашка.","Это очень дорого."],0]]
  },
  Korean: {
    restaurant: [["무엇을 주문하시겠어요?",["버거를 주세요.","저는 학교에 가요.","어제는 월요일이었어요."],0],["음료수도 드릴까요?",["네, 물 주세요.","저는 열다섯 살이에요.","호텔이 어디예요?"],0],["버거는 얼마예요?",["8달러예요.","저는 축구를 좋아해요.","제 이름은 알렉스예요."],0],["더 필요한 것은 없나요?",["네, 이게 다예요.","저는 타슈켄트에 살아요.","이 사람은 제 동생이에요."],0],["감사합니다!",["천만에요!","택시가 필요해요.","저는 우즈베키스탄에서 왔어요."],0]],
    airport: [["오늘 어디로 비행기를 타세요?",["런던으로 가요.","버거를 먹고 싶어요.","저는 열두 살이에요."],0],["여권을 보여 주시겠어요?",["네, 여기 있어요.","피자를 좋아해요.","식당이 어디예요?"],0],["짐이 있나요?",["네, 여행 가방 하나가 있어요.","배고파요.","월요일이에요."],0],["좌석 번호가 어떻게 되세요?",["24A번이에요.","저는 한국에서 왔어요.","물이 필요해요."],0],["즐거운 비행 되세요!",["감사합니다!","얼마예요?","방을 원해요."],0]],
    shopping: [["도와드릴까요?",["네, 셔츠를 찾고 있어요.","집에 가요.","5시예요."],0],["어떤 사이즈가 필요하세요?",["중간 사이즈 주세요.","타슈켄트에서 왔어요.","영어를 좋아해요."],0],["입어 보시겠어요?",["네, 부탁해요.","강아지가 있어요.","내일은 금요일이에요."],0],["얼마예요?",["25달러예요.","저는 열여섯 살이에요.","택시가 필요해요."],0],["어떻게 계산하시겠어요?",["카드로 할게요.","너무 배고파요.","호텔 근처예요."],0]],
    hotel: [["예약하셨나요?",["네, 예약했어요.","피자를 먹고 싶어요.","공항이 어디예요?"],0],["몇 박 묵으실 건가요?",["3박이에요.","우즈베키스탄에서 왔어요.","10달러예요."],0],["신분증을 보여 주시겠어요?",["네, 여기 있습니다.","버거가 필요해요.","이 도시가 좋아요."],0],["방 열쇠입니다.",["정말 감사합니다.","식당이 어디예요?","저는 열일곱 살이에요."],0],["즐거운 숙박 되세요!",["감사합니다!","표가 필요해요.","월요일이에요."],0]],
    metro: [["실례합니다, 지하철이 어디예요?",["저쪽에 있어요.","음식을 먹고 싶어요.","한국에서 왔어요."],0],["시내로 가는 노선은 어느 노선이에요?",["파란색 노선이에요.","저는 열여섯 살이에요.","음악을 좋아해요."],0],["표가 얼마예요?",["2달러예요.","호텔이 필요해요.","제 이름은 알렉스예요."],0],["어디에서 내려야 해요?",["센트럴역에서 내려요.","커피를 원해요.","내일 아침이에요."],0],["도와줘서 고마워요.",["천만에요!","셔츠가 필요해요.","너무 비싸요."],0]]
  }
};

let currentMission=null,currentQuestion=0,missionScore=0,lives=3,combo=0,maxCombo=0,timeLeft=35,timer=null,answered=false;
let displayedAnswers=[];

function ensureGameHUD(){
  const box=document.querySelector('.game-box');
  if(!box || document.getElementById('gameHUD')) return;
  const hud=document.createElement('div'); hud.id='gameHUD'; hud.className='game-hud';
  hud.innerHTML='<div class="hud-item lives">❤️ <b id="gameLives">3</b></div><div class="hud-item combo">⚡ <b id="gameCombo">0</b> combo</div><div class="hud-item coins">🪙 <b id="gameCoins">0</b></div><div class="hud-timer">⏱ <b id="gameTimer">35</b>s</div>';
  box.querySelector('.question-progress').before(hud);
  const power=document.createElement('div'); power.className='powerups'; power.innerHTML='<button id="freezeBtn" class="power-btn">❄️ Freeze <small>5🪙</small></button><button id="hintBtn" class="power-btn">💡 Hint <small>3🪙</small></button>';
  box.appendChild(power);
  document.getElementById('freezeBtn').onclick=()=>{if(state.coins>=5 && timer){state.coins-=5;clearInterval(timer);setTimeout(startTimer,5000);updateUI();result.textContent='❄️ Vaqt 5 soniyaga muzlatildi!'}};
  document.getElementById('hintBtn').onclick=()=>{if(state.coins>=3){state.coins-=3;const q=currentMission.questions[currentQuestion];const btns=[...answers.children];btns.forEach((b,i)=>{if(i!==q.correct)b.style.opacity=i===1?'.35':'.35'});result.textContent='💡 Hint ishlatildi — yaxshiroq o‘yla!';updateUI()}};
}

function startTimer(){clearInterval(timer);timer=setInterval(()=>{timeLeft--;const el=document.getElementById('gameTimer');if(el)el.textContent=timeLeft;if(timeLeft<=0){clearInterval(timer);timeOut()}},1000)}
function timeOut(){if(answered)return;answered=true;lives--;combo=0;state.coins=Number(state.coins||0)+1;saveState();updateGameHUD();updateUI();result.style.color='var(--danger)';result.textContent='⏰ Vaqt tugadi! 🪙 +1 COIN. Keyingi savolga o‘tamiz.';setTimeout(nextQuestion,900)}
function updateGameHUD(){const l=document.getElementById('gameLives'),c=document.getElementById('gameCombo'),coin=document.getElementById('gameCoins'),t=document.getElementById('gameTimer');if(l)l.textContent='❤️'.repeat(Math.max(lives,0))||'💔';if(c)c.textContent=combo;if(coin)coin.textContent=state.coins;if(t)t.textContent=timeLeft}

function startMission(missionName){
  ensureGameHUD();
  currentMission=missions[missionName];
  const lang=GAME_LANGS[state.language]||GAME_LANGS.English;
  currentMission={...currentMission,questions:(lang[missionName]||GAME_LANGS.English[missionName]).map(x=>({text:x[0],answers:x[1],correct:x[2]}))};
  currentQuestion=0;missionScore=0;lives=3;combo=0;maxCombo=0;timeLeft=35;answered=false;
  gameModal.classList.add('show');gameTitle.textContent=currentMission.title;npc.textContent=currentMission.npc;startTimer();showQuestion();
}
function showQuestion(){
  answered=false;
  const q=currentMission.questions[currentQuestion];
  questionNumber.textContent=currentQuestion+1;
  questionBar.style.width=((currentQuestion+1)/currentMission.questions.length)*100+'%';
  questionXP.textContent=missionScore;
  scenarioName.textContent=state.language+' • LEARN & PLAY';
  questionText.textContent=q.text;
  result.textContent='';
  result.style.color='';
  answers.innerHTML='';
  updateGameHUD();

  // Javoblar har safar aralashtiriladi: to‘g‘ri javob doim A emas.
  displayedAnswers=q.answers.map((text,index)=>({text,index})).sort(()=>Math.random()-0.5);
  displayedAnswers.forEach((item,displayIndex)=>{
    const b=document.createElement('button');
    b.className='answer game-answer';
    b.innerHTML='<span class="answer-key">'+String.fromCharCode(65+displayIndex)+'</span><span>'+item.text+'</span>';
    b.onclick=()=>checkAnswer(item.index,b);
    answers.appendChild(b);
  });
}
function makeLessonTip(q){
  const answer=q.answers[q.correct];
  let tip='Gapni eslab qol: "'+answer+'".';
  if(/^What\b|^Where\b|^How much\b|^How many\b|^Which\b|^Why\b/i.test(q.text)) tip='Savolga mos to‘liq javob berishga harakat qil.';
  if(/^Would you like/i.test(q.text)) tip='Would you like ...? taklif qilish uchun ishlatiladi.';
  if(/^Can I/i.test(q.text)) tip='Can I ...? — ruxsat yoki yordam so‘rashda ishlatiladi.';
  if(/^May I/i.test(q.text)) tip='May I ...? — muloyim ruxsat so‘rash shakli.';
  return '📚 <b>Mini dars:</b> '+tip;
}
function checkAnswer(selected,clickedButton){
  if(answered)return;
  answered=true;
  clearInterval(timer);
  const q=currentMission.questions[currentQuestion];
  const btns=document.querySelectorAll('.game-answer');
  btns.forEach(b=>b.disabled=true);

  state.coins=Number(state.coins||0)+1;

  if(selected===q.correct){
    combo++;
    maxCombo=Math.max(maxCombo,combo);
    const bonus=20+Math.min(combo*5,25);
    const coinBonus=4+combo;
    state.coins+=coinBonus;
    missionScore+=bonus;
    addXP(bonus);
    clickedButton.classList.add('correct-answer');
    result.style.color='var(--green)';
    result.innerHTML='🎯 <b>To‘g‘ri!</b> +'+bonus+' XP &nbsp; 🪙 +'+(1+coinBonus)+' COIN &nbsp; ⚡ '+combo+' COMBO<br><span class="lesson-tip">'+makeLessonTip(q)+'</span>';
  } else {
    lives--;
    combo=0;
    const correctButton=[...btns].find(b=>b.textContent.includes(q.answers[q.correct]));
    if(correctButton)correctButton.classList.add('correct-answer');
    clickedButton.classList.add('wrong-answer');
    result.style.color='var(--danger)';
    result.innerHTML='❌ <b>Xato.</b> To‘g‘ri javob: <b>'+q.answers[q.correct]+'</b> &nbsp; 🪙 +1 COIN<br><span class="lesson-tip">'+makeLessonTip(q)+'</span>';
    saveMistake(q.text,q.answers[selected],q.answers[q.correct]);
  }

  saveState();
  updateGameHUD();
  updateUI();
  setTimeout(nextQuestion,1800);
}
function nextQuestion(){currentQuestion++;if(currentQuestion<currentMission.questions.length){timeLeft=35;showQuestion();startTimer()}else finishMission()}
function finishMission(){clearInterval(timer);const bonus=maxCombo>=4?50:25;state.coins=Number(state.coins||0)+bonus;addXP(bonus);if(!state.achievements)state.achievements=[];if(maxCombo>=5&&!state.achievements.includes('5x Combo'))state.achievements.push('5x Combo');if(missionScore>=100&&!state.achievements.includes('Mission Master'))state.achievements.push('Mission Master');saveState();updateUI();questionText.textContent='🏆 MISSION COMPLETE!';answers.innerHTML='<div class="victory-card"><div class="victory-emoji">🎉</div><h3>Sen missiyani yutding!</h3><p>'+missionScore+' XP + '+bonus+' bonus coins</p><div class="victory-stats"><span>⚡ '+maxCombo+' max combo</span><span>🪙 '+bonus+' bonus</span></div><button class="primary-btn" onclick="closeGame.click()">Yana o‘ynash →</button></div>';result.textContent='';questionBar.style.width='100%';}

ensureGameHUD();

// ---------- ADD XP ----------

function addXP(amount) {

  const oldLevel =
    state.level;

  state.xp += amount;

  state.level =
    Math.floor(state.xp / 500) + 1;

  saveState();

  updateUI();

  if (
    state.level > oldLevel
  ) {

    setTimeout(() => {

      document
        .getElementById("newLevel")
        .textContent =
        "LEVEL " + state.level;

      document
        .getElementById("levelModal")
        .classList.add("show");

    }, 500);

  }

}


// ---------- MISTAKES ----------

function saveMistake(
  question,
  wrong,
  correct
) {

  state.mistakes.push({

    question,
    wrong,
    correct,
    date: new Date().toLocaleDateString()

  });

  saveState();

}


function renderMistakes() {

  const container =
    document.getElementById(
      "mistakesContainer"
    );

  if (
    state.mistakes.length === 0
  ) {

    container.innerHTML = `

      <div class="empty-mistakes">

        <div>🧠</div>

        <h3>Hozircha xatolar yo‘q</h3>

        <p>
          Missiyani boshlang.
          Xatolaringiz shu yerda paydo bo‘ladi.
        </p>

      </div>

    `;

    return;

  }

  container.innerHTML =
    state.mistakes
      .slice()
      .reverse()
      .map(item => `

        <div class="mistake-item">

          <div class="mistake-question">
            ${item.question}
          </div>

          <div class="wrong">
            ❌ Sizning javobingiz:
            ${item.wrong}
          </div>

          <div class="correct">
            ✅ To‘g‘ri javob:
            ${item.correct}
          </div>

        </div>

      `)
      .join("");

}


// ---------- MISSION BUTTONS ----------

document
  .querySelectorAll(".mission-card")
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        startMission(
          card.dataset.mission
        );

      }
    );

  });


// ---------- START BUTTON ----------

document
  .getElementById("startBtn")
  .addEventListener(
    "click",
    () => {

      document
        .querySelector('[data-page="missions"]')
        .click();

    }
  );


// ---------- CLOSE GAME ----------

closeGame.addEventListener(
  "click",
  () => {

    gameModal.classList.remove(
      "show"
    );

  }
);


// ---------- CLOSE LEVEL ----------

document
  .getElementById("closeLevel")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("levelModal")
        .classList.remove("show");

    }
  );


// ---------- INITIAL ----------

updateUI();
renderMistakes();

/* ================= REWARD SHOP ================= */
(function(){
  function initRewards(){
    const rewardShop=document.getElementById('reward-shop');
    if(!rewardShop) return;
    const modal=document.getElementById('rewardModal');
    const selected=document.getElementById('selectedReward');
    const close=document.getElementById('rewardClose');
    const confirm=document.getElementById('rewardConfirm');
    const cardInput=document.getElementById('demoCardNumber');
    const errorEl=document.getElementById('rewardError');
    const successEl=document.getElementById('rewardSuccess');
    const successText=document.getElementById('successText');
    const coinEl=document.getElementById('rewardCoins');
    const historyEl=document.getElementById('rewardHistory');
    if(!modal||!selected||!confirm||!cardInput) return;
    let rewardState=JSON.parse(localStorage.getItem('realTalkRewards')||'{"history":[]}');
    if(!Array.isArray(rewardState.history)) rewardState.history=[];
    let selectedCoins=0,selectedSum=0;
    const getCoins=()=>{try{return Number(JSON.parse(localStorage.getItem('realTalkState')||'{}').coins||0)}catch(e){return 0}};
    function sync(){
      const coins=getCoins();
      if(coinEl) coinEl.textContent=coins;
      rewardState.coins=coins;
      localStorage.setItem('realTalkRewards',JSON.stringify(rewardState));
      if(historyEl) historyEl.innerHTML=rewardState.history.length?'<h3>📋 Almashtirishlar</h3>'+rewardState.history.slice(-5).reverse().map(x=>`<div class="reward-history-item"><span>${x.sum} so‘m • ${x.coins} 🪙</span><span class="pending">✅ Qabul qilindi</span></div>`).join(''):'';
    }
    function openReward(card){
      selectedCoins=Number(card.dataset.rewardCoins||0); selectedSum=Number(card.dataset.rewardSum||0);
      const coins=getCoins();
      if(coins<selectedCoins){alert(`Sizga yana ${selectedCoins-coins} coin kerak 🪙`);return;}
      selected.textContent=selectedSum.toLocaleString('uz-UZ')+' so‘m';
      cardInput.value=''; errorEl.textContent=''; successEl.classList.remove('show'); confirm.style.display='block'; modal.classList.add('show');
      setTimeout(()=>cardInput.focus(),50);
    }
    document.querySelectorAll('.reward-card').forEach(card=>card.addEventListener('click',()=>openReward(card)));
    cardInput.addEventListener('input',()=>{let d=cardInput.value.replace(/\D/g,'').slice(0,16);cardInput.value=d.replace(/(\d{4})(?=\d)/g,'$1 ');errorEl.textContent='';});
    close?.addEventListener('click',()=>modal.classList.remove('show'));
    modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
    confirm.addEventListener('click',()=>{
      const digits=cardInput.value.replace(/\D/g,'');
      if(digits.length!==16){errorEl.textContent='Demo karta uchun 16 ta raqam kiriting. Masalan: 0000 0000 0000 0000';return;}
      let st; try{st=JSON.parse(localStorage.getItem('realTalkState')||'{}')}catch(e){st={coins:0}}
      st.coins=Number(st.coins||0);
      if(st.coins<selectedCoins){errorEl.textContent='Coin yetarli emas.';return;}
      st.coins-=selectedCoins; localStorage.setItem('realTalkState',JSON.stringify(st));
      rewardState.history.push({sum:selectedSum.toLocaleString('uz-UZ'),coins:selectedCoins,date:new Date().toISOString()});
      localStorage.setItem('realTalkRewards',JSON.stringify(rewardState));
      successText.textContent=`${selectedSum.toLocaleString('uz-UZ')} so‘m uchun demo reward so‘rovi qabul qilindi. ${selectedCoins} coin yechildi.`;
      confirm.style.display='none'; successEl.classList.add('show'); sync();
      if(typeof updateUI==='function') updateUI();
      setTimeout(()=>modal.classList.remove('show'),2200);
    });
    sync(); setInterval(sync,1000);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initRewards); else initRewards();
})();

