let div = document.querySelector("div");
console.log(div);

let ID = div.getAttribute("id");
console.log(ID);

let name = div.getAttribute("name");
console.log(name);

// setAttribute( attr, value )

// node.style -> for inline style

 let NewBtn = document.createElement("button");
 NewBtn.innerText = "Hello, My name is Mohammad Tahbib Ullah";
console.log(NewBtn);

div.append(NewBtn);  //adds at the end of node (inside)
// div.prepend(NewBtn); //adds at the start of node (inside)
// div.before(NewBtn);  //adds before the node (outside)
// div.after(NewBtn);  //adds after the node (outside)

// node.remove( ) //removes the node

// Q: What is append child and remove child??

//Practice question 02 solved by classlist.add()
