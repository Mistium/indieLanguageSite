CodeMirror.defineMode("x3", function () {
  const keywords = [
    "reg", "reg_len", "goto", "if", "else", "end", "while", "def",
    "fncend", "call", "##", "log", "prt", "wait", "flush", "exit", "cls",
    "inp", "add", "sub", "mul", "div", "mod", "sqrt", "fastmath",
    "w_file", "r_file", "a_file", "del_file",
    "create_dir", "delete_dir", "search_file"
  ];

  const types = [
    "int", "string", "float", "bool", "double"
  ];

  const builtins = [
    "$var", "$pi", "$x", "$y", "$z"
  ];

  const keywordRegex = new RegExp(`^(${keywords.join("|")})\\b`, "i");
  const typeRegex = new RegExp(`^(${types.join("|")})\\b`, "i");
  const builtinRegex = new RegExp(`^(${builtins.join("|")})\\b`, "i");

  return {
    startState: () => ({}),

    token: (stream) => {
      if (stream.eatSpace()) return null;

      if (stream.match(/#.*$/)) {
        return "comment";
      }

      if (stream.match(/"(?:[^\\"]|\\.)*"?/)) {
        return "string";
      }

      if (stream.match(/^\d+(\.\d+)?/)) {
        return "number";
      }

      if (stream.match(keywordRegex)) {
        return "keyword";
      }

      if (stream.match(typeRegex)) {
        return "type";
      }

      if (stream.match(builtinRegex)) {
        return "variable-2";
      }

      if (stream.match(/[+\-*/%=<>&|!]+/)) {
        return "operator";
      }

      stream.next();
      return null;
    }
  };
});
