const reverseOdd = str => console.log(str.split( " " ).map( el => el.length % 2 ? [ ...el ].reverse().join( "" ) : el ).join( " " ) );
reverseOdd("Bananas")
reverseOdd("One two three four")
reverseOdd("Make sure uoy only esrever sdrow of ddo length")