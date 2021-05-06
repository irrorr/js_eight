let num = +prompt('Введите число: ');

if (typeof(num) === "number" && isNaN(num) === false)
{
   if (num % 2)
   {
      console.log("Нечетное");
   }
   else {
      console.log("Четное");
   }
}
else
{
   console.log("Упс, кажется, вы ошиблись");
}