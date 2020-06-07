#!/usr/bin/env node

const fetch = require("node-fetch")

const NUM_IMAGES = process.env.NUM_IMAGES ? parseInt(process.env.NUM_IMAGES, 10) : 50
const UNSPLASH_CLIENT_ID = process.env.UNSPLASH_CLIENT_ID

const responses = []
const images = []

const loop = async () => {
  const url = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_CLIENT_ID}&query=philosophy`
  const res = await fetch(url)
  const json = await res.json()

  responses.push(json)
  images.push(json.regular)

  console.log(`got ${responses.length}`)

  if (responses.length >= NUM_IMAGES) {
    console.log(responses)
    console.log(images)
  } else {
    setTimeout(loop, 5000)
  }
}

loop()
