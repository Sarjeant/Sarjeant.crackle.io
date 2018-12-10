
for (var numbers=1; numbers <= 100; numbers++){



if( numbers % 3 == 0 && numbers % 5 == 0)
  {
    console.log('CracklePop ');
  }else if( numbers % 5 == 0){

    console.log('Pop ');

  }else if ( numbers % 3 == 0){

    console.log('Crackle ');
  }
else{
console.log(numbers);
}
}

