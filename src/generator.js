/**
 * Horatio Generation Visitor
 */
Horatio.Generator = function() {};

Horatio.Generator.prototype = {
  
  /**
   * Program
   */
  visitProgram: function(program, arg) {    
    var self = this;
    
    // declarations
    program.declarations.forEach(function(declaration) {
      declaration.visit(self, null);
    });
    
    // parts
    program.parts.forEach(function(part) {
      part.visit(self, null);
    });
    
    return null;
  },
  
  
  
  /**
   * Declaration
   */
  visitDeclaration: function(declaration, arg) {
    var c = declaration.character.sequence;
    this.program.declareCharacter(c);

    return null;
  },
  
  
  
  /**
   * Numeral
   */
  visitNumeral: function(numeral, arg) {
    var n = this.numeralIndex(numeral.sequence);
    
    return n;
  },
  
  
  
  /**
   * Part
   */
  visitPart: function(part, arg) {
    var self = this;
    
    var n = part.numeral.visit(this, arg);
    var act = this.program.newAct();
    part.subparts.forEach(function(subpart) {
      subpart.visit(self, {act: act});
    });
    
    return null;
  },
  
  
  
  /**
   * Subparts
   */
  visitSubpart: function(subpart, arg) {
    var n = subpart.numeral.visit(this, arg);
    var scene = this.program.newScene(arg.act);
    subpart.stage.visit(this, {act: arg.act, scene: scene});
    
    return null;
  },
  
  
  
  /**
   * Stage
   */
  visitStage: function(stage, arg) {
    if (stage.start_presence) stage.start_presence.visit(this, arg);
    if (stage.dialogue) stage.dialogue.visit(this, arg);
    if (stage.end_presence) stage.end_presence.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Enter
   */
  visitEnter: function(presence, arg) {
    var Command = function(cname) {
      var c = cname;
      return function() {
        this.enterStage(c);
      };
    };
    
    var c1 = presence.character_1.sequence;
        
    this.program.addCommand(arg.act, arg.scene, new Command(c1));
    
    if (presence.character_2) {
      var c2 = presence.character_2.sequence;
      
      this.program.addCommand(arg.act, arg.scene, new Command(c2));
    }
        
    return null;
  },
  
  
  
  /**
   * Exit
   */
  visitExit: function(presence, arg) {
    var Command = function(cname) {
      var c = cname;
      return function() {
        this.exitStage(c);
      };
    };
    
    var c = presence.character.sequence;
    
    this.program.addCommand(arg.act, arg.scene, new Command(c));
    
    return null;
  },
  
  
  
  /**
   * Exeunt
   */
  visitExeunt: function(presence, arg) {
    var Command = function() {
      return function() {
        this.exeuntStage();
      };
    };
    
    this.program.addCommand(arg.act, arg.scene, new Command());
    
    return null;
  },
  
  
  
  /**
   * Dialogue
   */
  visitDialogue: function(dialogue, arg) {
    var self = this;
    dialogue.lines.forEach(function(line) {
      line.visit(self, arg);
    });
    return null;
  },
  
  
  
  /**
   * Line
   */
  visitLine: function(line, arg) {
    var self = this;

    var c = line.character.sequence;
    arg.character = c;
        
    line.sentences.forEach(function(sentence) {
      sentence.visit(self, arg);
    });
    
    return null;
  },
  
  
  
  /**
   * Goto
   */
  visitGoto: function(goto, arg) {
    var n = goto.numeral.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Assignment Sentence
   */
  visitAssignmentSentence: function(assignment, arg) {
    var Command = function(target, value) {
      var t = target;
      var v = value;
      
      return function() {
        var target = t.call(this);
        var val = v.call(this);
        this.characters[target].setValue(val);
      };
    };
    
    var target = assignment.be.visit(this, arg);
    var value = assignment.value.visit(this, arg);
    
    this.program.addCommand(arg.act, arg.scene, new Command(target, value));
    
    return null;
  },
  
  
  
  /**
   * Question Sentence
   */
  visitQuestionSentence: function(question, arg) {
    var Command = function(be, comparative, value) {
      var b = be;
      var c = comparative;
      var v = value;
      
      return function() {
        var character = b.call(this);
        var a = this.characters[b].value();
        var val = v.call(this);
        var result = c.call(this,a,val);
      };
    };
    
    var be          = question.be.visit(this, arg);
    var comparative = question.comparison.visit(this, arg);
    var value       = question.value.visit(this, arg);
    
    this.program.addCommand(arg.act, arg.scene, new Command(be, comparative, value));
    
    return null;
  },
  
  
  
  /**
   * Response Sentence
   */
  visitResponseSentence: function(response, arg) {
    response.goto.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Goto Sentence
   */
  visitGotoSentence: function(goto, arg) {
    goto.goto.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Integer Input Sentence
   */
  visitIntegerInputSentence: function(integer_input, arg) {
    
    return null;
  },
  
  
  
  /**
   * Char Input Sentence
   */
  visitCharInputSentence: function(char_input, arg) {
    
    return null;
  },
  
  
  
  /**
   * Integer Output Sentence
   */
  visitIntegerOutputSentence: function(integer_output, arg) {
    var Command = function() {
      var speaker = arg.character;
      
      return function() {
        var val = this.interlocutor(speaker).value();
        this.io.print(val);
      };
    };
    
    this.program.addCommand(arg.act, arg.scene, new Command());
    
    return null;
  },
  
  
  
  /**
   * Char Output Sentence
   */
  visitCharOutputSentence: function(char_output, arg) {
    var Command = function() {
      var speaker = arg.character;
      
      return function() {
        var val = this.interlocutor(speaker).value();
        this.io.print(String.fromCharCode(val));
      };
    };
    
    this.program.addCommand(arg.act, arg.scene, new Command());
    
    return null;
  },
  
  
  
  /**
   * Remember Sentence
   */
  visitRememberSentence: function(remember, arg) {
    var Command = function(pronoun) {
      var speaking = arg.character;
      var p = pronoun;
      
      return function() {
        var pn = p();
        var value = this.characters[pn].value();
        this.characters[speaking].remember(value);
      };
    };
    
    var p = remember.pronoun.visit(this, arg);
    
    this.program.addCommand(arg.act, arg.scene, new Command(p));
    
    return null;
  },
  
  
  
  /**
   * Recall Sentence
   */
  visitRecallSentence: function(recall, arg) {
    var Command = function() {
      var speaking = arg.character;
      
      return function() {
        this.interlocutor(speaking).recall();
      };
    };
        
    this.program.addCommand(arg.act, arg.scene, new Command());
    
    return null;
  },
  
  
  
  /**
   * Positive Constant Value
   */
  visitPositiveConstantValue: function(pc_val, arg) {
    var Command = function(num_adjectives) {
      var exp = num_adjectives;
      
      return function() {
        return Math.pow(2, exp);
      };
    };
    
    var adjectives = pc_val.adjectives;
    
    return new Command(adjectives.length);
  },
  
  
  
  /**
   * Negative Constant Value
   */
  visitNegativeConstantValue: function(nc_val, arg) {
    var Command = function(num_adjectives) {
      var exp = num_adjectives;
      
      return function() {
        return (-1*Math.pow(2, exp));
      };
    };
    
    var adjectives = nc_val.adjectives;
    
    return new Command(adjectives.length);
  },
  
  
  
  /**
   * Unary Operation Value
   */
  visitUnaryOperationValue: function(unary, arg) {
    var Command = function(operator, value) {
      var o = operator;
      var v = value;
      
      return function() {
        var val = v.call(this);
        return o.call(this,val);
      };
    };
    
    var o = unary.operator.visit(this, arg);
    var v = unary.value.visit(this, arg);
    
    return new Command(o,v);
  },
  
  
  
  /**
   * Arithmetic Operation Value
   */
  visitArithmeticOperationValue: function(arithmetic, arg) {
    var Command = function(operator, value1, value2) {
      var o = operator;
      var v1 = value1;
      var v2 = value2;
      
      return function() {
        var val1 = v1.call(this);
        var val2 = v2.call(this);
        return o.call(this,val1, val2);
      };
    };
    
    var o = arithmetic.operator.visit(this, arg);
    var v1 = arithmetic.value_1.visit(this, arg);
    var v2 = arithmetic.value_2.visit(this, arg);
    
    return new Command(o, v1, v2);
  },
  
  
  
  /**
   * Pronoun Value
   */
  visitPronounValue: function(pronoun, arg) {
    var Command = function(p) {
      var pronoun = p;
            
      return function() {
        var p = pronoun.call(this);
        return this.characters[p].value();
      };
    };
    var p = pronoun.pronoun.visit(this, arg);
        
    return new Command(p);
  },
  
  
  
  /**
   * Greater Than Comparison
   */
  visitGreaterThanComparison: function(comparison, arg) {
    var Command = function() {
      return function(a, b) {
        return (a > b);
      };
    };
    
    return new Command();
  },
  
  
  
  /**
   * Lesser Than Comparison
   */
  visitLesserThanComparison: function(comparison, arg) {
    var Command = function() {
      return function(a, b) {
        return (a < b);
      };
    };
    
    return new Command();
  },
  
  
  
  /**
   * Equal To Comparison
   */
  visitEqualToComparison: function(comparison, arg) {
    var Command = function() {
      return function(a, b) {
        return (a === b);
      };
    };
    
    return new Command();
  },
  
  
  
  /**
   * Inverse Comparison
   */
  visitInverseComparison: function(comparison, arg) {
    var Command = function(comparison) {
      var c = comparison;
      
      return function(a, b) {
        return (!c(a,b));
      };
    };
    
    var c = comparison.comparison.visit(this, arg);
    
    return new Command(c);
  },
  
  
  
  /**
   * First Person Pronoun
   */
  visitFirstPersonPronoun: function(fpp, arg) {
    var Command = function() {
      var speaking = arg.character;
      
      return function() {
        return speaking;
      };
    };
    
    return new Command();
  },
  
  
  
  /**
   * Second Person Pronoun
   */
  visitSecondPersonPronoun: function(spp, arg) {
    var Command = function() {
      var speaking = arg.character;
      
      return function() {
        return this.interlocutor(speaking).name();
      };
    };
    
    return new Command();
  },
  
  
  
  /**
   * Unary Operator
   */
  visitUnaryOperator: function(operator, arg) {
    var Command = function(operator) {
      var o = operator;
      
      switch(o) {
      case "square of":
        return function(v) {
          return Math.pow(v,2);
        };
      case "cube of":
        return function(v) {
          return Math.pow(v,3);
        };
      case "square root of":
        return function(v) {
          var sign = (v < 0) ? -1 : 1;
          return sign*Math.floor(Math.sqrt(Math.abs(v)));
        };
      case "factorial of":
        return function(v) {
          var sign = (v < 0) ? -1 : 1;
          var num = Math.abs(v);
          var fv = 1;
          for (var i = 2; i<=num; i++) {
            fv = fv*i;
          }
          return sign*fv;
        };
      case "twice":
        return function(v) {
          return 2*v;
        };
      }
    };
    
    var o = operator.sequence;
    
    return new Command(o);
  },
  
  
  
  /**
   * Arithmetic Operator
   */
  visitArithmeticOperator: function(operator, arg) {
    var Command = function(operator) {
      var o = operator;
      
      switch(o) {
      case "sum of":
        return function(a,b) {
          return a+b;
        };
      case "difference between":
        return function(a,b) {
          return a-b;
        };
      case "product of":
        return function(a,b) {
          return a*b;
        };
      case "quotient between":
        return function(a,b) {
          return Math.round(a/b);
        };
      case "remainder of the quotient between":
        return function(a,b) {
          return a%b;
        };
      }
    };
    
    var o = operator.sequence;
    
    return new Command(o);
  },
  
  
  
  /**
   * Be
   */
  visitBe: function(be, arg) {
    var Command = function(be) {
      var b = be;
      var speaking = arg.character;
      
      switch(b) {
      case "Thou art":
      case "You are":
      case "You":
        return function() {
          return this.interlocutor(speaking).name();
        };
      case "I am":
        return function() {
          return speaking;
        };
      }
    };
    
    var b = be.sequence;
    
    return new Command(b);
  },
  
  
  
  /**
   * Be Comparative
   */
  visitBeComparative: function(be, arg) {
    var Command = function(be) {
      var b = be;
      var speaking = arg.character;
      var t;
      
      switch(b) {
      case "Art thou":
      case "Are you":
        return function() {
          return this.interlocutor(speaking).name();
        };
      case "Am I":
        return function() {
          return this.characters[speaking].name();
        };
      }
    };
    
    var b = be.sequence;
    
    return new Command(b);
  }
   
  
};