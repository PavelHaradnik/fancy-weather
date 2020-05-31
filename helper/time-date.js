window.onload = function(){
    (function() {
        var date = new Date();
        var time = date.getHours() + ':' + date.getMinutes();
        document.getElementById('time-name').innerHTML = time;
        window.setTimeout(arguments.caller, 1000);
    })();
    (function() {
        var d = new Date();
        var month = new Array("January","February","March","April","May","June",
            "July","August","September","October","November","December");
        var monthRu =  new Array('Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь');   
        var monthBe = new Array('Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Май', 'Червень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань');
        var days = new Array( 'Sun','Mon','Tues','Wed','Thurs','Fri','Sat');
        var daysEng = new Array( 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
        var daysLangRu = new Array( 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
        var daysLangBe = new Array( 'Нядзеля', 'Панядзелак', 'Аўторак',' Серада', 'Чацвер', 'Пятніца', 'Субота');
        var daysR = new Array( 'ВСК','ПН','ВТ','СР','ЧТ','ПТ','СБ');
        var daysB = new Array( 'НЯ','ПА','АТ','СР','ЧЦ','ПТ','СБ');
        //set language
        window['monthE'] = (days[d.getDay()] + ' ' + d.getDate() + " " + month[d.getMonth()]);
        window['monthR'] = (daysR[d.getDay()] + ' ' + d.getDate() + " " + monthRu[d.getMonth()]);
        window['monthB'] = (daysB[d.getDay()] + ' ' + d.getDate() + " " + monthBe[d.getMonth()]);
        window['monthBackground'] = month[d.getMonth()];
        document.getElementById('dateName').innerHTML = (days[d.getDay()] + ' ' + d.getDate() + " " + month[d.getMonth()]);
        document.querySelector('.date-name_tomorrow').innerHTML = daysEng[(d.getDay() + 1) % 7];
        document.querySelector('.date-name_tomorrow1').innerHTML = daysEng[(d.getDay() + 2) % 7];
        document.querySelector('.date-name_tomorrow2').innerHTML = daysEng[(d.getDay() + 3) % 7];

        //date language
          window['date1Ru'] = daysLangRu[(d.getDay() + 1) % 7];
          window['date2Ru'] = daysLangRu[(d.getDay() + 2) % 7];
          window['date3Ru'] = daysLangRu[(d.getDay() + 3) % 7];
          window['date1Be'] = daysLangBe[(d.getDay() + 1) % 7];
          window['date2Be'] = daysLangBe[(d.getDay() + 2) % 7];
          window['date3Be'] = daysLangBe[(d.getDay() + 3) % 7];
          window['date1Eng'] = daysEng[(d.getDay() + 1) % 7];
          window['date2Eng'] = daysEng[(d.getDay() + 2) % 7];
          window['date3Eng'] = daysEng[(d.getDay() + 3) % 7];
    })();
};



