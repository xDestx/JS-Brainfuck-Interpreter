var inputText = prompt("Enter program");

brainfuck(inputText);

function brainfuck(bfText) {
    var bfArray = [];
    for(var i = 0; i < 10000; i++) {
        bfArray[i] = 0;
    }
    var loopStarts = [];
    var pointer = 0;
    var loopEscape = false;
    for(var i = 0; i < bfText.length; i++) {
            //console.log(pointer + " " + bfArray[pointer] + "  " + i + "  " + bfText.charAt(i));
        if(loopEscape && bfText.charAt(i) != ']') continue;
        switch(bfText.charAt(i)) {
            case '>':
                pointer++;
                if(pointer >= 10000) {
                    alert("Yeet");
                    return;
                }
                break;
            case '<':
                pointer--;
                if(pointer < 0) {
                    alert("BALJEET");
                    return;
                }
                break;
            case '+':
                bfArray[pointer]+=1;
                break;
            case '-':
                bfArray[pointer]-=1;
                break;
            case '[':
                if(bfArray[pointer] != 0) {
                    loopStarts.push(i);
                } else {
                    loopEscape = true;   
                }
                break;
            case ']':
                if(bfArray[pointer] != 0 && loopStarts.length > 0) {
                    i = loopStarts[loopStarts.length-1];
                } else {
                    loopStarts.pop();
                }
                break;
            case '.':
                //console.log(String.fromCharCode(bfArray[pointer]));
                document.write(String.fromCharCode(bfArray[pointer]));
                break;
            case ',':
                input = prompt("Enter input (1 byte)");
                input = input.charAt(0);
                bfArray[pointer] = input.charCodeAt(0);
                break;
        }
    }
}

//Hello World
//++++++++>+++++++++<[>[>+<-]+++++++++<-]>>.---.+++++++..+++.<<++++++++>++++<>---------<[>[>>+<<-]++++<-]>>>.<++++++++.--------.+++.------.--------.

//Write 5 letters
//,>,>,>,>,<<<<.>.>.>.>.
