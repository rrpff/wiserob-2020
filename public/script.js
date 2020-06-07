import html from "https://dev.jspm.io/choo/html"
import choo from "https://dev.jspm.io/choo"

import ApiQuoter from "./lib/api-quoter.js"

const FONT_ALIGNMENTS = [
  "left",
  "center",
  "right"
]

const FONTS = [
  "BluuNext-Bold",
  "LeagueGothic-Italic",
  "OstrichSans-Heavy",
  "texgyreheros-bolditalic",
  "YoungSerif-Regular",
]

const COLOURS = [
  { background: "#cd84f1", foregrounds: ["#000", "#fff"] },
  { background: "#ffcccc", foregrounds: ["#000"] },
  { background: "#ff4d4d", foregrounds: ["#000", "#fff"] },
  { background: "#ffaf40", foregrounds: ["#000", "#fff"] },
  { background: "#fffa65", foregrounds: ["#000"] },
  { background: "#fff200", foregrounds: ["#000"] },
  { background: "#32ff7e", foregrounds: ["#000", "#fff"] },
  { background: "#7efff5", foregrounds: ["#000", "#fff"] },
  { background: "#18dcff", foregrounds: ["#000", "#fff"] },
  { background: "#7d5fff", foregrounds: ["#000", "#fff"] },
  { background: "#4b4b4b", foregrounds: ["#000", "#fff"] }
]

const IMAGES = [
  "https://images.unsplash.com/photo-1590518670432-6b267bc7f99c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1477240489935-6c96abea2aba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1561911957-98085a69688e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1562701447-e0b79b331bab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1532264523420-881a47db012d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1517849443514-73aa552d55bd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1571587648170-a854b772de8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800994-913d848fdc8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1582319990242-6476d9c447ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1529851494873-bd180b15801e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568583792666-e2b221913005?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568583792666-e2b221913005?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1514837658567-d5a3ad893d60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1551753677-dff56803a44f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1571587648170-a854b772de8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1505243542579-da5adfe8338f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1503222646189-eaef09a0b6fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1477240489935-6c96abea2aba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1517849325426-6eac321919a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1529974445367-5b9bf0a0586e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1570599560373-92ba6bb38cfd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1562701447-e0b79b331bab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1477240489935-6c96abea2aba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1532264523420-881a47db012d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1517849443514-73aa552d55bd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1514837658567-d5a3ad893d60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1561911957-98085a69688e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1581855339095-0c282d58527b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1505243542579-da5adfe8338f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1548691905-57c36cc8d935?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1477240489935-6c96abea2aba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1514837658567-d5a3ad893d60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1570599560373-92ba6bb38cfd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
]

class RandomThemer {
  constructor () {
    this.nextResult = this._generateTheme()
    this._preload(this.nextResult)
  }

  random () {
    const result = this.nextResult
    this.nextResult = this._generateTheme()
    this._preload(this.nextResult)
    return result
  }

  _preload (theme) {
    const image = new Image()
    image.src = theme.imageUrl
  }

  _generateTheme () {
    const random = arr => arr[Math.floor(Math.random() * arr.length)]

    const { background, foregrounds } = random(COLOURS)
    const textColour = random(foregrounds)

    return {
      backgroundColour: background,
      textColour: textColour,
      textAlignment: random(FONT_ALIGNMENTS),
      fontFamily: random(FONTS),
      imageUrl: random(IMAGES),
      imagePosition: {
        x: 15 + (Math.random() * 40) + "%",
        y: 15 + (Math.random() * 40) + "%",
      }
    }
  }
}

const quoteMiddleware = quoter => async (state, emitter) => {
  state.quote = { loading: true, text: null }
  state.quote = { loading: false, text: await quoter.quote() }
  emitter.emit("render")

  emitter.on("NEXT_QUOTE", async () => {
    state.quote = { loading: true, text: state.quote.text }
    state.quote = { loading: false, text: await quoter.quote() }
    emitter.emit("render")
  })
}

const themeMiddleware = themer => {
  let lastQuote = null

  return (state, emitter) => {
    state.theme = themer.random()

    emitter.on("render", () => {
      if (lastQuote !== state.quote.text) {
        state.theme = themer.random()
        lastQuote = state.quote.text
      }

      document.documentElement.style.background = state.theme.backgroundColour
    })
  }
}

// text-shadow: yellow 2px 0px 0px, yellow -2px 0px 0px, yellow 0px 2px 0px, yellow 0px -2px 0px;
const Quote = quote => html`
  <div style="
    font-size: 72px;
    line-height: 72px;
    width: 100%;
    z-index: 20;
  ">${quote}</div>
`

const Button = (text, colour, onClick) => html`
  <a href="#!" style="
    display: block;
    font-size: 48px;
    color: ${colour};
    opacity: 0.5;
    width: 100%;
    text-decoration: none;
    margin-top: 32px;
    display: block;
    user-select: none;
    z-index: 20;
  " onclick=${onClick}>${text}</a>
`

const StockImage = (url, position) => html`
  <img style="
    max-width: 300px;
    position: absolute;
    left: ${position.x};
    top: ${position.y};
    opacity: 0.5;
    z-index: 10;
  " src=${url} />
`

const Main = (state, emit) => {
  const handleClick = e => {
    const selectionMade = window.getSelection().toString().length > 0
    if (!selectionMade) emit("NEXT_QUOTE")
  }

  return html`
    <main onclick=${handleClick} style="
      position: absolute;
      top: 0;
      left: 0;
      padding: 5% 20%;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      color: ${state.theme.textColour};
      font-family: ${state.theme.fontFamily};
      text-align: ${state.theme.textAlignment};
      cursor: pointer;
    ">
      ${state.quote.loading ? null : [
        Quote(state.quote.text),
        Button("more wisdom?", state.theme.textColour, () => null),
        StockImage(state.theme.imageUrl, state.theme.imagePosition)
      ]}
    </main>
  `
}

const quoter = new ApiQuoter()
const themer = new RandomThemer()

const app = choo()
app.use(quoteMiddleware(quoter))
app.use(themeMiddleware(themer))
app.route("/", Main)
app.mount("main")
