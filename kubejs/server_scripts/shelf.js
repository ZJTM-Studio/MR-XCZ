// SPDX-FileCopyrightText: 2026 Yang458 and Chushi
// SPDX-License-Identifier: GPL-3.0-or-later

const WOODS = [
  'oak', 'spruce', 'birch', 'jungle', 'acacia',
  'dark_oak', 'mangrove', 'crimson', 'warped',
  'bamboo', 'cherry'
]

ServerEvents.recipes(event => {
  for (const wood of WOODS) {
    const shelf = `shelfmod:shelf_item_${wood}`
    const floorShelf = `shelfmod:floor_shelf_item_${wood}`

    // 壁挂式书架：木板 + 木棍 + 皮革
    event.shaped(shelf, [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: `minecraft:${wood}_planks`,
      B: 'minecraft:stick',
      C: 'minecraft:leather'
    })

    // 壁挂式 <-> 落地式 互相转换
    event.shapeless(shelf, [floorShelf])
    event.shapeless(floorShelf, [shelf])
  }
})