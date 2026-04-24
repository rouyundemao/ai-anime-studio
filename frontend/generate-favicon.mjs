import { readFileSync } from 'fs'
import sharp from 'sharp'

const svg = readFileSync('public/logo-qingyu.svg')

// Generate 32x32 favicon.png
await sharp(svg)
  .resize(32, 32)
  .png()
  .toFile('public/favicon.png')

console.log('✅ favicon.png 已生成 (32x32)')

// Generate 192x192 for PWA
await sharp(svg)
  .resize(192, 192)
  .png()
  .toFile('public/android-chrome-192x192.png')

console.log('✅ android-chrome-192x192.png 已生成')

// Generate 512x512 for PWA
await sharp(svg)
  .resize(512, 512)
  .png()
  .toFile('public/android-chrome-512x512.png')

console.log('✅ android-chrome-512x512.png 已生成')
