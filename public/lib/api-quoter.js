export default class ApiQuoter {
  constructor () {
    this.loaded = false
    this.left = []
    this.right = []
  }

  async quote () {
    if (!this.loaded) await this._load()
    return this._randomQuote()
  }

  async _load () {
    const res = await fetch("/quotes.json")
    const { left, right } = await res.json()

    this.loaded = true
    this.left = left
    this.right = right
  }

  _randomQuote () {
    const random = arr => arr[Math.floor(Math.random() * arr.length)]
    return random(this.left) + " is " + random(this.right) + "."
  }
}
