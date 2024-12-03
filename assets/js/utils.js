function redirectURIById(id) {
    const a = document.createElement('a')
    a.href = id
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}