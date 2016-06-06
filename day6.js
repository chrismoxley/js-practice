function average(numbers_list) {
	// run a for loop through the list that adds up each number and divides by the total number of numbers //
    var sum = 0;

    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
        
    }
    return sum/i;
}

function assignGrade(grade) {
	// run an if/else if statement, return the grade based on the number range //
	if (grade >= 90) {
		return 'A';
	}
	else if (80 <= grade) {
		return 'B';
	}
	else if (70 <= grade)
		{
			return 'C';
		}
	else if  (60 <= grade) {
		return 'D';
	}	
	else {
		return 'F';
	}
}

function pluralize(num, noun) {
	// if num > 1 return the num and noun plus an s, otherwise just return num + noun//
	if (num>1) {
		return num + " " + noun + "s";
	}
	else {
		return num + " " + noun;
	}
}

function longestWord(sentence) {
	// split at each space, run a for loop to measure the length of each word, replace longest with the current word when it is shorter than longest variable, return when no word is longer than longest //
    var str = sentence.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

function palindrome(word) {
	//split the word, reverse its letters, join the reversed letter, if the new words are equal, return yes, otherwise return no //
	var pal = word.split("").reverse().join("")
	if (pal === word) {
		return "yes";
	}
	else if (pal != word) {
		return "no";
	}
}

function letterCounter(phrase, letter) {
	// split the word into letters, make a variable to count the equal letters, run a for loop with an if statement that adds one to count whenever i=letter//
	var cut = phrase.split("")
	var count = 0;
	for (var i = 0; i <= cut.length - 1; i++) {
	 	if (cut[i] === letter) {
	 		count++;
	 	}
	 } 
	return count 
}

function longestPalindrome(sentence) {
	//Add the code from longestword to the front of palindrome, return the proper statement //
	var str = sentence.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
         if (longest < str[i].length) {
             longest = str[i].length;
             word = str[i];
         }
     };
     var pal = word.split("").reverse().join("");
	 if (pal === word) {
	 	return word + " is a palindrome"
	 }
	 else {
	 	return word + " is not a palindrome"
	 }
}

function doItTwice(f) {
	//call the function twice
	return f() + f();
}

function objectFun(first, last, age, email, color) {
	//creat the properties of the person, store them in an object, call the object
	var person = {
		first_name: first,
		last_name: last,
		age: age,
		email: email,
		fav_color: color
	};
	return person;
}

function numChildren(obj) {
	//return the length of the children property
	return obj.children.length;
}

function greeting(name) {
	return name;
}

function sayHello(first, last, greet) {
	//return greet function and first and last
	return greet("Hello") + ", " + first + " " + last + "!";
}

function goodnight(name) {
	if (name === "Night")
	{
		return true
	}
	else {
		return false
	}
}

function sayGoodnight(name, status, message) {
	if (message(status)) {
		return "Goodnight, " + name + "!";
	}
	else {
		return "It's not bedtime!"
	}
}
