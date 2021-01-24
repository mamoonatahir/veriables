var i;
var j;
for (i = 0; i <= 50; i++ )
{
document.write("</br>");
for ( j = 0; j < 60-i; j++ )
{
document.write( "&nbsp&nbsp&nbsp" );
}
for ( j = 6-i; j <= 5; j++ )
{

document.write( " * " );
}
}
// function leftTriangle(rows){
//     let result = '';
//     for(let i=rows;i>0;i--){
//       if(i===rows) {
//         result += '*'.repeat(i) + '\n';
//       }else{
//         let empty = rows-i
//         result+= ' '.repeat(empty) + '*'.repeat(i)+ '\n'
//       }
//     }
//     return result;
//   }
  
//   console.log(leftTriangle(5))
