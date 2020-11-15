
arr=["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
for (var i = 0; i <= arr.length; i++) {
	document.getElementById('menu1').innerHTML=arr[i];
}
function daysLeftNewYear() {
 today = new Date()
 //Можно установить любую дату
 nextDate = new Date("January 1, 2021")
 //Количество миллисекунд в одном дне
 msPerDay = 24*60*60*1000;
 //Высчитываем количество дней
 daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
 dayname = ""
 ds = ""+daysLeft
 //Вырезаем последнею цифру
 dd=parseInt(ds.substr(ds.length-1))
 //Склоняем слово ДЕНЬ
 if(daysLeft>4&&daysLeft<21)dayname=" дней";
 else
 if(dd==1)dayname=" день";
 else
 if(dd==2||dd==3||dd==4)dayname=" дня";
 else dayname=" дней";
 //Выводим надпись в документ
 if(daysLeft<0) {document.write("С новым годом!!!")}
 else {
 if(daysLeft==0) {document.write("Завтра новый год!")} else {
 document.write("До нового года осталось "+daysLeft+dayname+"!")}
 }
 }
