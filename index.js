function getImage(imgs, idx) {
    // 1 % 3  => 1
    // 2 % 3  => 2
    // 3 % 3  => 0
    // 4 % 3  => 1
    // 5 % 3  => 2
    const neededIndex = idx % imgs.length
    return imgs[neededIndex]
}


export { getImage }