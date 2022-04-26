body = document.body

function not(type, text) {
    if (type == 'suc') {
        body.innerHTML += `
        <div class="not not-suc">${text}</div>
        `
    }

    if (type == 'war') {
        body.innerHTML += `
        <div class="not not-war">${text}</div>
        `
    }

    if (type == 'err') {
        body.innerHTML += `
        <div class="not not-err">${text}</div>
        `
    }
}

