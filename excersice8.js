let price = 109;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}




		// The string '5' is converted
		// to number 5 in all cases
		// implicitly
		var w = 10 - '5';
		var x = 10 * '5';
		var y = 10 / '5';
		var z = 10 % '5';

		document.write(w);
		document.write("<br>")
		document.write(x);
		document.write("<br>")
		document.write(y);
		document.write("<br>")
		document.write(z);	

        // The Boolean value true is
        // converted to number 1 and
        // then operation is performed
        var x = true + 2;
  
        // The Boolean value false is
        // converted to number 0 and
        // then operation is performed
        var y = false + 2;
  
        document.write(x);
        document.write("<br>")
        document.write(y);        

         // Should output 'true' as string '10'
        // is coerced to number 10 
        var x = (10 == '10');
  
        // Should output 'true', as boolean true
        // is coerced to number 1
        var y = (true == 1);
  
        // Should output 'false' as string 'true'
        // is coerced to NaN which is not equal to
        // 1 of Boolean true
        var z = (true == 'true');
  
        document.write(x);
        document.write("<br>");
        document.write(y);
        document.write("<br>");
        document.write(z); 	