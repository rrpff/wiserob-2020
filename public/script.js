import html from "https://dev.jspm.io/choo/html"
import choo from "https://dev.jspm.io/choo"

import ApiQuoter from "./lib/api-quoter.js"

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

const Quote = quote => html`
  <div style="
    color: #000;
    font-size: 72px;
    line-height: 72px;
    text-shadow: yellow 2px 0px 0px, yellow -2px 0px 0px, yellow 0px 2px 0px, yellow 0px -2px 0px;
  ">${quote}</div>
`

const Button = (text, onClick) => html`
  <a href="#!" style="
    font-size: 48px;
    color: orange;
    text-decoration: none;
    margin-top: 32px;
    display: block;
    user-select: none;
  " onclick=${onClick}>${text}</a>
`

const Main = (state, emit) => {
  const handleClick = e => {
    const selectionMade = window.getSelection().toString().length > 0
    if (!selectionMade) emit("NEXT_QUOTE")
  }

  return html`
    <main onclick=${handleClick} style="
      margin: auto;
      display: block;
      width: 600px;
      max-width: 80%;
      margin-top: 50px;
      font-family: 'BluuNext-Bold', cursive;
      cursor: pointer;
    ">
      ${state.quote.loading ? null : [
        Quote(state.quote.text),
        Button("more wisdom", () => null)
      ]}
    </main>
  `
}

const app = choo()
app.use(quoteMiddleware(new ApiQuoter()))
app.route("/", Main)
app.mount("main")

// const Button = ({ onClick }, children) =>
//   h("button", { "ev-click": onClick }, children)

// const Quote = (quote) =>
//   h("div", { style: { color: "red" } }, [quote])

// const Root = () =>
//   State("", (quote, setQuote) =>
//     h("main", { style: { margin: "auto", display: "block", width: "600px", "margin-top": "50px" } }, [
//       Quote("Death is the greatest of all human blessings"),
//       Button({ onClick: e => console.log("NEXT_QUOTE", e) }, ["next quote"])
//     ])
//   )

// const State = (initialState, handler) => {
//   let state = initialState
//   const setState = v => {
//     state = v
//   }
// }

// let tree = Root()
// let node = createElement(tree)
// document.body.appendChild(node)

// const rerender = () => {
//   const newTree = App()
//   const patches = diff(tree, newTree)
//   node = patch(node, patches)
//   tree = newTree

//   requestAnimationFrame(rerender)
// }

// requestAnimationFrame(rerender)

// const thingo = (render, initialState, rootNode) => {
//   const tree = app.getTree()
//   const node = createElement(tree)
//   rootNode.append(node)
// }

// const reducer = (state, event) => {

// }

// const app = thingo(Root, reducer, document.body)

// mount(app, document.body)

// ;(async () => {
//   console.log(await quoter.quote())
// })()
