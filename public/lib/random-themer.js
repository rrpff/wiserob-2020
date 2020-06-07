export default class RandomThemer {
  constructor () {
    this._nextResult = this._generateTheme({})
    this._createPreloadElement()
    this._preload(this._nextResult)
  }

  random () {
    const result = this._nextResult
    this._nextResult = this._generateTheme(result)
    this._preload(this._nextResult)
    return result
  }

  _createPreloadElement () {
    this._preloadEl = document.createElement("span")
    this._preloadEl.innerText = "hello world"
    this._preloadEl.style.opacity = 0
    this._preloadEl.style.position = "absolute"
    this._preloadEl.style.left = "-9999px"
    document.body.appendChild(this._preloadEl)
  }

  _preload (theme) {
    const image = new Image()
    image.src = theme.imageUrl

    this._preloadEl.style.fontFamily = theme.fontFamily
  }

  _generateTheme (currentTheme) {
    const random = (arr, predicate, attempts = 0) => {
      const value = arr[Math.floor(Math.random() * arr.length)]
      if (attempts === MAX_ATTEMPTS || predicate === undefined || predicate(value))
        return value

      return random(arr, predicate, attempts + 1)
    }

    const { background, foregrounds } = random(COLOURS, v => v.background !== currentTheme.background)
    const textColour = random(foregrounds)

    return {
      backgroundColour: background,
      textColour: textColour,
      textAlignment: random(FONT_ALIGNMENTS),
      fontFamily: random(FONTS, v => v.fontFamily !== currentTheme.fontFamily),
      imageUrl: random(IMAGES, v => v.imageUrl !== currentTheme.imageUrl),
      imagePosition: {
        x: 15 + (Math.random() * 40) + "%",
        y: 15 + (Math.random() * 40) + "%",
      }
    }
  }
}

const MAX_ATTEMPTS = 10

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
  "https://images.unsplash.com/photo-1477240489935-6c96abea2aba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1488994038434-e995b7a4ba35?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1494331789569-f98601f1934f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1503222646189-eaef09a0b6fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1505243542579-da5adfe8338f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1514837658567-d5a3ad893d60?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1517849325426-6eac321919a0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1517849443514-73aa552d55bd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1528217580778-96e570819666?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1529851494873-bd180b15801e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1529974445367-5b9bf0a0586e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1532264523420-881a47db012d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1533803784419-59c2ea29f8ec?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1534988333262-c455b9332e52?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1548691905-57c36cc8d935?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1551753677-dff56803a44f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1554322662-5b660295377d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1561911957-98085a69688e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1562701447-e0b79b331bab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800490-c741f40b6abb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1564140800994-913d848fdc8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1566770050648-8447d2d40f1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568583792666-e2b221913005?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1570599560373-92ba6bb38cfd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1571587648170-a854b772de8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1581855339095-0c282d58527b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1582319990242-6476d9c447ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1583084578821-c4b20344477f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  "https://images.unsplash.com/photo-1590518670432-6b267bc7f99c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
]
