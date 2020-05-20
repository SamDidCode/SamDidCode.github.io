var css = function(a) {
  //check if a is an array
    if (typeof(a) == "object") {
      let id = "";
      for (var i = 0; i < a.length; i++) {
        let n = a[i].search(":");
        if (n == -1) {
          //define id
          if (a[i].substr(0,1) == "#") {
            id = a[i].substr(1);
            try{ document.getElementById(id).style }
            catch(e) {
              //error handling
              throw new Error(`Uh-oh! We think that ${id} is not a valid id! Here is the error message: ${e}`);
              return;
            }
            continue;
          } else {
            //more error handling
            throw new Error("You must use an : somewhere in your phrase.")
            return;
          }
        }
        // all the commands
        let param = a[i].substr(n + 1);
        switch (a[i].substr(0, n)) {
          //very uniform definition method:
          case "color":
            if (id != "") {
              document.getElementById(id).style.color = param;
            } else {
              //even more error handling
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "fontSize":
            if (id != "") {
              document.getElementById(id).style.fontSize = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "textAlign":
            if (id != "") {
              document.getElementById(id).style.textAlign = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "margin":
            if (id != "") {
              document.getElementById(id).style.margin = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "padding":
            if (id != "") {
              document.getElementById(id).style.padding = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "fontFamily":
            if (id != "") {
              document.getElementById(id).style.fontFamily = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "position":
            if (id != "") {
              document.getElementById(id).style.position = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "height":
            if (id != "") {
              document.getElementById(id).style.height = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          case "width":
            if (id != "") {
              document.getElementById(id).style.width = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
           case "display":
            if (id != "") {
              document.getElementById(id).style.display = param;
            } else {
              throw new Error("You must enter an id before changing the style.")
              return;
            }
            break;
          default:
            throw new Error(`\n\r\nThe problem value: \n\r\n ${a[i]} \n\r\n Uh-oh! We didn't understand what you wrote at position ${i} in your array.`);
        }
      }
    } else {
      //just some more error handling
      var str = "                     ";
      for (var i = 0; i <= a.length; i++) {
        str += "^";
      }
      str += " "
      throw new Error(`css(${a})\r\n${str}\r\n Uh-Oh! You didn't use an array here! (or something else went wrong)`);
    }
  }
