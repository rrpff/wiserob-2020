import html from "https://dev.jspm.io/choo/html"
import choo from "https://dev.jspm.io/choo"

import ApiQuoter from "./lib/api-quoter.js"
import RandomThemer from "./lib/random-themer.js"

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

const Logo = black => html`
  <a href="#!" style="
    display: block;
    position: absolute;
    top: 30px;
    left: 30px;
  ">
    <img
      src="/images/${black ? "logo-black" : "logo-white"}.png"
      srcset="/images/${black ? "logo-black" : "logo-white"}@2x.png 2x"
      style="width: 60px; opacity: 0.5;"
    />
  </a>
`

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
        Logo(state.theme.textColour === "#000"),
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
