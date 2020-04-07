function ageInDays() {
    var birthYear = prompt('What year were you born...Friend?');
    var ageDays = (2020 - birthYear);
    var h3 = document.createElement('h3');
    var textAns = document.createTextNode('You are ' + ageDays + ' years old !');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(h3);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


function change() {
    var age = document.getElementById('age').value;
    document.getElementById('months').value = (age * 12) + " Months";
    document.getElementById('days').value = (age * 12 * 30) + " Days";
    document.getElementById('hours').value = (age * 12 * 30 * 24) + " Hours";
    document.getElementById('minutes').value = (age * 12 * 30 * 24 * 60) + " Minutes";
    document.getElementById('seconds').value = (age * 12 * 30 * 24 * 60 * 60) + " Seconds";

}