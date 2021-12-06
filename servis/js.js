function Aboniment (title, time) {
    this.title = title;
    this.time = time;
}

let standart = new Aboniment('Стандарт', 'Любое');
let econom = new Aboniment('Экономный', 'ПН СР ПТ');
let study = new Aboniment('Студент', 'Любой день до 18:00');
let weekend = new Aboniment("Выходной", 'Выходные дни');
let week = new Aboniment('Будние дни', 'Будние дни');
let visit = new Aboniment('Визит', 'Ограниченное колличество посещений клуба');

let all = [
    standart,
    econom,
    study,
    weekend,
    week,
    visit
];
let result = [];
document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault();
    let q1Inputs = document.getElementsByName('que1');
    let checkedValue = '';
    q1Inputs.forEach(function(input) {
        if (input.checked) {
            checkedValue = input.value;
        }
    });
    localStorage.setItem('q1', checkedValue);
    
    if (checkedValue == 'Ограниченное колличество посещений клуба') {
        result[0] = all.filter(b => b.time == 'Ограниченное колличество посещений клуба');
    } else if (checkedValue == 'ПН СР ПТ') {
        result[0] = all.filter(b => b.time == 'ПН СР ПТ');
    } else if (checkedValue == 'Любое') {
        result[0] = all.filter(b => b.time == 'Любое');
    }
});

document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault();
    let q2Inputs = document.getElementsByName('que2');
    let checkedValue = '';
    q2Inputs.forEach(function(input) {
        if (input.checked) {
            checkedValue = input.value;
        }
    });

    localStorage.setItem('q2', checkedValue);
    
    if (checkedValue == 'Выходной') {
        result[1] = all.filter(b => b.title == 'Выходной');
    } else if (checkedValue == 'Стандарт') {
        result[1] = all.filter(b => b.title == 'Стандарт');
    } else if (checkedValue == 'Будние дни') {
        result[1] = all.filter(b => b.title == 'Будние дни');
    } else if (checkedValue == 'Студент') {
        result[1] = all.filter(b => b.title == 'Студент');
    }
});

document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault();
    let q3Inputs = document.getElementsByName('que3');
    let checkedValue = '';
    q3Inputs.forEach(function(input) {
        if (input.checked) {
            checkedValue = input.value;
        }
    });

    localStorage.setItem('q3', checkedValue);
    
    if (checkedValue == 'Визит') {
        result[2] = all.filter(b => b.title == 'Визит');
    } else if (checkedValue == 'Будние дни') {
        result[2] = all.filter(b => b.title == 'Будние дни');
    } else if (checkedValue == 'Стандарт') {
        result[2] = all.filter(b => b.title == 'Стандарт');
    }
});

document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault();
    if (document.getElementById('exp2').checked) {
        let ind = 1;
    }
    if (ind == 1) {
        document.getElementById('res2').innerHTML += 'Так как Вы не имеете опыта в работе в тренажёрном зале, мы хотим предложить Вам индивидуальные тренировки с профессиональным тренером, который поможет Вам соблюдать верную технику при выполнении упражнений и не получить травмы. Также он поможет Вам с организацией питания. Цену уточните по телефону.'
    }

    if (document.getElementById('alone2').checked) {
        let al = 1;
    }
    if (al == 1) {
        document.getElementById('para').innerHTML += 'и Вашему партнеру'
    } 

});

document.getElementById('test').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(result);
    let a = new Aboniment('', '');
    if ((result[0].title == result[1].title)||(result[0].title == result[2].title)) {
        a = result[0];
    } else if(result[1].title == result[2].title) {
        a = result[1];
    } else a = standart;
    
    
    document.getElementById('res').style.display = "inline-block";
    document.getElementById('res1').innerHTML += 'Идельный выбор для Вас — это абонимент "' + a[0].title + '"';
})

let printRes = function() {
    let result = [];
    
    if (localStorage.getItem('q1') == 'Ограниченное колличество посещений клуба') {
            result[0] = all.filter(b => b.time == 'Ограниченное колличество посещений клуба');
        } else if (localStorage.getItem('q1') == 'ПН СР ПТ') {
            result[0] = all.filter(b => b.time == 'ПН СР ПТ');
        } else if (localStorage.getItem('q1') == 'Любое') {
            result[0] = all.filter(b => b.time == 'Любое');
        };
    
    if (localStorage.getItem('q2') == 'Выходной') {
            result[1] = all.filter(b => b.title == 'Выходной');
        } else if (localStorage.getItem('q2') == 'Стандарт') {
            result[1] = all.filter(b => b.title == 'Стандарт');
        } else if (localStorage.getItem('q2') == 'Будние дни') {
            result[1] = all.filter(b => b.title == 'Будние дни');
        } else if (localStorage.getItem('q2') == 'Студент') {
            result[1] = all.filter(b => b.title == 'Студент');
        };
    

    if (localStorage.getItem('q3') == 'Визит') {
            result[2] = all.filter(b => b.title == 'Визит');
        } else if (localStorage.getItem('q3') == 'Будние дни') {
            result[2] = all.filter(b => b.title == 'Будние дни');
        } else if (localStorage.getItem('q3') == 'Стандарт') {
            result[2] = all.filter(b => b.title == 'Стандарт');
        };

    let a = new Aboniment('', '');
    if ((result[0].title == result[1].title)||(result[0].title == result[2].title)) {
        a = result[0];
    } else if(result[1].title == result[2].title) {
        a = result[1];
    } else a = standart;
    
    
    document.getElementById('res').style.display = "inline-block";
    document.getElementById('res1').innerHTML += 'Идельный выбор для Вас — это абонимент "' + a[0].title + '"';

}

printRes();



document.getElementById('themeButton').onclick = function () {
    let link = document.getElementById("themeLink");
    let greenTheme = "style.css";
    let redTheme = "theme.css";

    let currentTheme = link.getAttribute("href");
    let theme = "";


    if (currentTheme == greenTheme) {
        currentTheme = redTheme;
        theme = "red";
    } else 
    {
        currentTheme = greenTheme;
        theme = "green";
    }
    link.setAttribute("href", currentTheme);
}