const quotes = [
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote:
      "네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다",
    author: "간디",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴테",
  },
  {
    quote:
      "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.",
    author: "맹자",
  },
  {
    quote:
      "먹고 싶은것을 다 먹는 것은 그렇게 재미있지 않다 . 인생을 경계선 없이 살면 기쁨이 덜하다 . 먹고싶은대로 다 먹을 수있다면 먹고싶은 것을 먹는데 무슨 재미가 있겠나",
    author: "톰행크스",
  },
  {
    quote:
      "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토밴",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
    author: "동아프리카속담",
  },
  {
    quote:
      "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다",
    author: "아인슈타인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
