const script = document.querySelector('.js-script')
const notes = document.querySelector('.js-notes')
const highlightBtn = document.querySelector('.js-highlight')
const strike = document.querySelector('.js-strike')

const sentences = [
    'Hello, what can I do for you today?',
    'Hi, my lower back really hurts.',
    'And for how long have you felt this pain?',
    'About 2 weeks.',
    'How would you rate your pain on a scale from 1 to 10?',
    'I would say, maybe 8.'
]

var number = 0

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        addSentence(number)
    }
})

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 48) {
        const names = script.querySelectorAll('.js-name')
        names[0].blur()
        names[1].textContent = 'Nikhil'
        names[2].textContent = 'Dr. Vivian'
        names[3].textContent = 'Nikhil'
        names[4].textContent = 'Dr. Vivian'
        names[5].textContent = 'Nikhil'
    }
})

highlightBtn.addEventListener('click', (e) => {
    document.body.classList.add('highlight')
})

strike.addEventListener('click', (e) => {
    const note1 = document.querySelector('.js-note1')

    note1.style.textDecoration = 'line-through'
})

function addSentence() {
    const sentence = sentences[number].split(' ')

    const times1 = [10, 15, 2, 4, 2, 4, 2, 4]
    const times2 = [10, 15, 2, 4, 2, 4, 2, 5]
    const times3 = [8, 10, 2, 4, 2, 4, 2, 5, 4, 3, 5, 2]
    const times4 = [6, 10, 2, 4, 2, 4, 2, 5]
    const times5 = [8, 10, 2, 4, 2, 4, 2, 5, 4, 2, 5, 6, 4, 5]
    const times6 = [10, 8, 2, 4, 2, 4, 2, 5]

    let i = 0

    addWrapper()

    if (number == 0) {
        firstSentence()
        setTimeout(() => { addNote0() }, 1000)
    } else if (number == 1) {
        secondSentence()
        setTimeout(() => { addNote1() }, 4000) // 4000
    } else if (number == 2) {
        thirdSentence()
    } else if (number == 3) {
        fourthSentence()
        setTimeout(() => { addNote2() }, 3000) // 3000
    } else if (number == 4) {
        fifthSentence()
    } else {
        sixthSentence()
        setTimeout(() => { addNote3() }, 3000) // 3000
    }

    // setTimeout(firstSentence, 110 * times1[i]);

    function firstSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(firstSentence, 80 * times1[i]);
        } else {
            number++
        }
    }

    function secondSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(firstSentence, 90 * times2[i]);
        } else {
            number++
        }
    }

    function thirdSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(firstSentence, 90 * times3[i]);
        } else {
            number++
        }
    }

    function fourthSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(firstSentence, 90 * times4[i]);
        } else {
            number++
        }
    }

    function fifthSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(fifthSentence, 90 * times5[i]);
        } else {
            number++
        }
    }

    function sixthSentence() {
        addWord(sentence[i])
        i++
        if (i < sentence.length) {
            setTimeout(firstSentence, 90 * times6[i]);
        } else {
            number++
        }
    }
}

function addWrapper() {
    let scriptNoteTemplate = `
    <div class="Script-note">
        <div class="Script-nameWrapper">
            <div class="Script-name js-name" contenteditable="true">
                ${number % 2 == 0 ? 'Dr. Vivian' : 'Nikhil'}
            </div>
        </div>

        <p class="Script-text js-text"></p>
    </div>
`
    script.innerHTML += scriptNoteTemplate
}

function addWord(word) {
    const textContainer = document.querySelectorAll('.js-text')

    textContainer[number].innerHTML += `<span contenteditable="true">${word} </span>`
}

function addNote0() {
    notes.innerHTML += `
        <div class="Note">
            <p class="Note-text date" style="text-align: center; font-size: 14px;" contenteditable="true">${getDate()}</p>
        </div>
    `
}

function addNote1() {
    notes.innerHTML += `
        <div class="Note">
            <p class="Note-text js-note1" contenteditable="true">Lower back pain</p>
        </div>
    `
}

function addNote2() {
    notes.innerHTML += `
        <div class="Note">
            <p class="Note-text" contenteditable="true">Duration: 2 weeks</p>
        </div>
    `
}

function addNote3() {
    notes.innerHTML += `
        <div class="Note">
            <p class="Note-text" contenteditable="true">Pain level: 8</p>
        </div>
    `
}

function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var dateTime = 'Date of Service: ' + date

    return dateTime
}

