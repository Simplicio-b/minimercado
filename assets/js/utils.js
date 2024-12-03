function redirectURIById(id) {
    console.log("AAAA")
    const a = document.createElement('a')
    a.href = id
    // a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}