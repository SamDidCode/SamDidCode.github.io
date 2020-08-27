class Object {
    constructor(id) {
        //check if provided id is valid and set id
        try {
            document.getElementById(id).style;
        } catch {
            var x = "";
            while(x == ""){
                if (document.getElementById(id.substr(1)).style) {
                   id = id.substr(1);
                   x = "x";
                } else {
                    throw new Error(`${id} could not be found. It is most likely an invalid id`);
                }
            }
        }
        //edit the id
        this.id = {
            value: id,
            set: function(param = id) {
                try {
                    document.getElementById(param).style;
                } catch {
                    var x = "";
                    while(x == ""){
                        if (document.getElementById(param.substr(1)).style) {
                           param = param.substr(1);
                           x = "x";
                        } else {
                            throw new Error(`${id} could not be found. It is most likely an invalid id`);
                        }
                    }
                }
                id = param;
            }
        };
        //edit the objects style
        this.style = {
            color: function(param = "#000000") {
                    document.getElementById(id).style.color = param;
            },
            width: function(param = "auto") {
                document.getElementById(id).style.width = param;
            },
            height: function(param = "auto") {
                document.getElementById(id).style.height = param;
            },
            fontSize: function(param = "auto") {
                document.getElementById(id).style.fontSize = param;
            },
            textAlign: function(param = "auto") {
                document.getElementById(id).style.textAlign = param;
            },
            margin: function(param = "auto") {
                document.getElementById(id).style.margin = param;
            },
            padding: function(param = "auto") {
                document.getElementById(id).style.padding = param;
            },
            fontFamily: function(param = "auto") {
                document.getElementById(id).style.fontFamily = param;
            },
            position: function(param = "auto") {
                document.getElementById(id).style.position = param;
            },
            display: function(param = "auto") {
                document.getElementById(id).style.display = param;
            },
            margin: function(param = "auto") {
                document.getElementById(id).style.margin = param;
            },
        };
    }
}