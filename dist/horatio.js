/*! horatio - v0.0.0 - 2014-05-19
* https://github.com/mileszim/horatio
* Copyright (c) 2014 ; Licensed  */
/**
 * Horatio Namespace
 * @namespace
 */
var Horatio = Horatio || {
  
  // Is this running on nodejs?
  // Borrowed with love from moment.js
  hasModule: (typeof module !== 'undefined' && module.exports && typeof require !== 'undefined')
  
};


/** Expose */
if (Horatio.hasModule) module.exports = Horatio;
Horatio.Wordlists = {};
Horatio.Wordlists.act   = ['Act'];
Horatio.Wordlists.scene = ['Scene'];
Horatio.Wordlists.arithmetic_operators = [
  'the sum of',
  'the difference between',
  'the product of',
  'the quotient between',
  'the remainder of the quotient between'
];
Horatio.Wordlists.articles = [
  'a',
  'an',
  'the'
];
Horatio.Wordlists.be = [
  'Thou art',
  'You are',
  'I am'
  //'am',
  //'are',
  //'art',
  //'be',
  //'is'
];

Horatio.Wordlists.be_comparatives = [
  'Art thou',
  'Are you',
  'Am I'
];
Horatio.Wordlists.characters = [
  'Achilles',
  'Adonis',
  'Adriana',
  'Aegeon',
  'Aemilia',
  'Agamemnon',
  'Agrippa',
  'Ajax',
  'Alonso',
  'Andromache',
  'Angelo',
  'Antiochus',
  'Antonio',
  'Arthur',
  'Autolycus',
  'Balthazar',
  'Banquo',
  'Beatrice',
  'Benedick',
  'Benvolio',
  'Bianca',
  'Brabantio',
  'Brutus',
  'Capulet',
  'Cassandra',
  'Cassius',
  'Christopher Sly',
  'Cicero',
  'Claudio',
  'Claudius',
  'Cleopatra',
  'Cordelia',
  'Cornelius',
  'Cressida',
  'Cymberline',
  'Demetrius',
  'Desdemona',
  'Dionyza',
  'Doctor Caius',
  'Dogberry',
  'Don John',
  'Don Pedro',
  'Donalbain',
  'Dorcas',
  'Duncan',
  'Egeus',
  'Emilia',
  'Escalus',
  'Falstaff',
  'Fenton',
  'Ferdinand',
  'Ford',
  'Fortinbras',
  'Francisca',
  'Friar John',
  'Friar Laurence',
  'Gertrude',
  'Goneril',
  'Hamlet',
  'Hecate',
  'Hector',
  'Helen',
  'Helena',
  'Hermia',
  'Hermonie',
  'Hippolyta',
  'Horatio',
  'Imogen',
  'Isabella',
  'John of Gaunt',
  'John of Lancaster',
  'Julia',
  'Juliet',
  'Julius Caesar',
  'King Henry',
  'King John',
  'King Lear',
  'King Richard',
  'Lady Capulet',
  'Lady Macbeth',
  'Lady Macduff',
  'Lady Montague',
  'Lennox',
  'Leonato',
  'Luciana',
  'Lucio',
  'Lychorida',
  'Lysander',
  'Macbeth',
  'Macduff',
  'Malcolm',
  'Mariana',
  'Mark Antony',
  'Mercutio',
  'Miranda',
  'Mistress Ford',
  'Mistress Overdone',
  'Mistress Page',
  'Montague',
  'Mopsa',
  'Oberon',
  'Octavia',
  'Octavius Caesar',
  'Olivia',
  'Ophelia',
  'Orlando',
  'Orsino',
  'Othello',
  'Page',
  'Pantino',
  'Paris',
  'Pericles',
  'Pinch',
  'Polonius',
  'Pompeius',
  'Portia',
  'Priam',
  'Prince Henry',
  'Prospero',
  'Proteus',
  'Publius',
  'Puck',
  'Queen Elinor',
  'Regan',
  'Robin',
  'Romeo',
  'Rosalind',
  'Sebastian',
  'Shallow',
  'Shylock',
  'Slender',
  'Solinus',
  'Stephano',
  'Thaisa',
  'The Abbot of Westminster',
  'The Apothecary',
  'The Archbishop of Canterbury',
  'The Duke of Milan',
  'The Duke of Venice',
  'The Ghost',
  'Theseus',
  'Thurio',
  'Timon',
  'Titania',
  'Titus',
  'Troilus',
  'Tybalt',
  'Ulysses',
  'Valentine',
  'Venus',
  'Vincentio',
  'Viola'
];
Horatio.Wordlists.enter  = ['Enter'];
Horatio.Wordlists.exit   = ['Exit'];
Horatio.Wordlists.exeunt = ['Exeunt'];
Horatio.Wordlists.first_person = [
  'I',
  'i',
  'me'
];
Horatio.Wordlists.first_person_possessive = [
  'mine',
  'my'
];
Horatio.Wordlists.first_person_reflexive = [
  'myself'
];
Horatio.Wordlists.imperatives = [
  'Let us',
  'let us',
  'We shall',
  'we shall',
  'We must',
  'we must'
];

Horatio.Wordlists.to = ['to'];

Horatio.Wordlists.return = [
  'proceed',
  'return'
];
Horatio.Wordlists.input_integer = ['Listen to your heart'];
Horatio.Wordlists.input_char    = ['Open your mind'];
Horatio.Wordlists.input = Horatio.Wordlists.input_integer.concat(Horatio.Wordlists.input_char);

Horatio.Wordlists.output_integer = ['Open your heart'];
Horatio.Wordlists.output_char    = ['Speak your mind'];
Horatio.Wordlists.output = Horatio.Wordlists.output_integer.concat(Horatio.Wordlists.output_char);
Horatio.Wordlists.as    = ['as'];
Horatio.Wordlists.not   = ['not'];
Horatio.Wordlists.than  = ['than'];
Horatio.Wordlists.if_so = ['If so'];
Horatio.Wordlists.and   = ['and'];
Horatio.Wordlists.negative_adjectives = [
  'bad',
  'big',
  'cowardly',
  'cursed',
  'damned',
  'dirty',
  'disgusting',
  'distasteful',
  'dusty',
  'evil',
  'fat',
  'fat-kidneyed',
  'fatherless',
  'foul',
  'hairy',
  'half-witted',
  'horrible',
  'horrid',
  'infected',
  'lying',
  'miserable',
  'misused',
  'oozing',
  'rotten',
  'smelly',
  'snotty',
  'sorry',
  'stinking',
  'stuffed',
  'stupid',
  'vile',
  'villainous',
  'worried'
];
Horatio.Wordlists.negative_comparatives = [
  'punier',
  'smaller',
  'worse'
];
Horatio.Wordlists.negative_nouns = [
  'Hell',
  'Microsoft',
  'bastard',
  'beggar',
  'blister',
  'codpiece',
  'coward',
  'curse',
  'death',
  'devil',
  'draught',
  'famine',
  'flirt-gill',
  'goat',
  'hate',
  'hog',
  'hound',
  'leech',
  'lie',
  'pig',
  'plague',
  'starvation',
  'toad',
  'war',
  'wolf'
];
Horatio.Wordlists.neutral_adjectives = [
  'black',
  'blue',
  'bluest',
  'bottomless',
  'furry',
  'green',
  'hard',
  'huge',
  'large',
  'little',
  'normal',
  'old',
  'purple',
  'red',
  'rural',
  'small',
  'tiny',
  'white',
  'yellow'
];
Horatio.Wordlists.neutral_nouns = [
  'animal',
  'aunt',
  'brother',
  'cat',
  'chihuahua',
  'cousin',
  'cow',
  'daughter',
  'door',
  'face',
  'father',
  'fellow',
  'granddaughter',
  'grandfather',
  'grandmother',
  'grandson',
  'hair',
  'hamster',
  'horse',
  'lamp',
  'lantern',
  'mistletoe',
  'moon',
  'morning',
  'mother',
  'nephew',
  'niece',
  'nose',
  'purse',
  'road',
  'roman',
  'sister',
  'sky',
  'son',
  'squirrel',
  'stone wall',
  'thing',
  'town',
  'tree',
  'uncle',
  'wind'
];
Horatio.Wordlists.nothing = [
  'nothing',
  'zero'
];
Horatio.Wordlists.positive_adjectives = [
  'amazing',
  'beautiful',
  'blossoming',
  'bold',
  'brave',
  'charming',
  'clearest',
  'cunning',
  'cute',
  'delicious',
  'embroidered',
  'fair',
  'fine',
  'gentle',
  'golden',
  'good',
  'handsome',
  'happy',
  'healthy',
  'honest',
  'little',
  'lovely',
  'loving',
  'mighty',
  'noble',
  'old',
  'peaceful',
  'pretty',
  'prompt',
  'proud',
  'reddest',
  'rich',
  'rural',
  'smooth',
  'sunny',
  'sweet',
  'sweetest',
  'trustworthy',
  'tiny',
  'warm'
];
Horatio.Wordlists.positive_comparatives = [
  'better',
  'bigger',
  'fresher',
  'friendlier',
  'nicer',
  'jollier'
];
Horatio.Wordlists.positive_nouns = [
  'Heaven',
  'King',
  'Lord',
  'angel',
  'flower',
  'happiness',
  'joy',
  'plum',
  'summer\'s day',
  'hero',
  'rose',
  'kingdom',
  'pony',
  'cat'
];
Horatio.Wordlists.first_person_pronouns = [
  //'I',
  'myself',
  'me'
];

Horatio.Wordlists.second_person_pronouns = [
  'you',
  'yourself',
  'thy',
  'thee',
  'thou'
];
Horatio.Wordlists.roman_numerals = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII',
  'XIII',
  'XIV',
  'XV',
  'XVI',
  'XVII',
  'XVIII',
  'XIX',
  'XX'
];
Horatio.Wordlists.second_person = [
  'thee',
  'thou',
  'you'
];
Horatio.Wordlists.second_person_possessive = [
  'thine',
  'thy',
  'your'
];
Horatio.Wordlists.second_person_reflexive = [
  'thyself',
  'yourself'
];
Horatio.Wordlists.remember = ['Remember'];
Horatio.Wordlists.recall   = ['Recall'];
Horatio.Wordlists.colon             = ['COLON'];
Horatio.Wordlists.comma             = ['COMMA'];
Horatio.Wordlists.period            = ['PERIOD'];
Horatio.Wordlists.exclamation_point = ['EXCLAMATION_POINT'];
Horatio.Wordlists.question_mark     = ['QUESTION_MARK'];
Horatio.Wordlists.ampersand         = ['&'];
Horatio.Wordlists.left_bracket      = ['LEFT_BRACKET'];
Horatio.Wordlists.right_bracket     = ['RIGHT_BRACKET'];
Horatio.Wordlists.third_person_possessive = [
  'his',
  'her',
  'its',
  'their'
];
Horatio.Wordlists.unary_operators = [
  'the square of',
  'the cube of',
  'the square root of',
  'the factorial of',
  'twice'
];
Horatio.Token = function(kind, sequence) {
  this.kind     = kind;
  this.sequence = sequence;
};



/** @static */ Horatio.Token.CHARACTER             = 10;
/** @static */ Horatio.Token.ARTICLE               = 11;
/** @static */ Horatio.Token.BE                    = 12;
/** @static */ Horatio.Token.ACT                   = 13;
/** @static */ Horatio.Token.SCENE                 = 14;
/** @static */ Horatio.Token.ENTER                 = 15;
/** @static */ Horatio.Token.EXIT                  = 16;
/** @static */ Horatio.Token.EXEUNT                = 17;

///** @static */ Horatio.Token.INPUT                 = 20;
/** @static */ Horatio.Token.INPUT_INTEGER         = 21;
/** @static */ Horatio.Token.INPUT_CHAR            = 22;
///** @static */ Horatio.Token.OUTPUT                = 23;
/** @static */ Horatio.Token.OUTPUT_INTEGER        = 24;
/** @static */ Horatio.Token.OUTPUT_CHAR           = 25;
  
/** @static */ Horatio.Token.IMPERATIVE            = 30;
/** @static */ Horatio.Token.TO                    = 31;
/** @static */ Horatio.Token.RETURN                = 32;
  
/** @static */ Horatio.Token.POSITIVE_COMPARATIVE  = 40;
/** @static */ Horatio.Token.NEGATIVE_COMPARATIVE  = 41;
/** @static */ Horatio.Token.AS                    = 42;
/** @static */ Horatio.Token.NOT                   = 43;
/** @static */ Horatio.Token.THAN                  = 44;
/** @static */ Horatio.Token.IF_SO                 = 45;
/** @static */ Horatio.Token.BE_COMPARATIVE        = 46;
  
/** @static */ Horatio.Token.UNARY_OPERATOR        = 50;
/** @static */ Horatio.Token.ARITHMETIC_OPERATOR   = 51;
  
/** @static */ Horatio.Token.REMEMBER              = 60;
/** @static */ Horatio.Token.RECALL                = 61;
  
/** @static */ Horatio.Token.FIRST_PERSON_PRONOUN  = 70;
/** @static */ Horatio.Token.SECOND_PERSON_PRONOUN = 71;
/** @static */ Horatio.Token.POSITIVE_ADJECTIVE    = 72;
/** @static */ Horatio.Token.NEUTRAL_ADJECTIVE     = 73;
/** @static */ Horatio.Token.NEGATIVE_ADJECTIVE    = 74;
/** @static */ Horatio.Token.POSITIVE_NOUN         = 75;
/** @static */ Horatio.Token.NEUTRAL_NOUN          = 76;
/** @static */ Horatio.Token.NEGATIVE_NOUN         = 77;
/** @static */ Horatio.Token.ROMAN_NUMERAL         = 78;
  
/** @static */ Horatio.Token.COLON                 = 90;
/** @static */ Horatio.Token.COMMA                 = 91;
/** @static */ Horatio.Token.PERIOD                = 92;
/** @static */ Horatio.Token.EXCLAMATION_POINT     = 93;
/** @static */ Horatio.Token.QUESTION_MARK         = 94;
/** @static */ Horatio.Token.AMPERSAND             = 95;
/** @static */ Horatio.Token.AND                   = 96;
/** @static */ Horatio.Token.LEFT_BRACKET          = 97;
/** @static */ Horatio.Token.RIGHT_BRACKET         = 98;
  
/** @static */ Horatio.Token.COMMENT               = 110;
Horatio.Character = function(name) {
  this._name = name;
  this._value  = null;
  this._memory = [];
};


Horatio.Character.prototype = {
  
  /**
   * @returns {string}
   */
  name: function() {
    return this._name;
  },
  
  
  /**
   * @returns {number|null}
   */
  value: function() {
    return this._value;
  },
  
  
  /**
   * @param {number} val
   */
  setValue: function(val) {
    this._value = val;
  },
  
  
  /**
   * @returns {number}
   */
  memorySize: function() {
    return this.memory.length;
  },
  
  
  /**
   * @returns {boolean}
   */
  noMemory: function() {
    return (this.memory.length===0);
  },
  
  
  /**
   * @param {number}
   */
  remember: function(val) {
    this._memory.push(val);
  },
  
  
  /**
   * set character value from top of stack
   */
  recall: function() {
    if (this.noMemory()) {
      throw new Error("Runtime Error - Trying to recall from empty stack.");
    } else {
      this._value = this._memory.pop();
    }
  }
  
  
};
Horatio.Program = function() {
  this.characters = {};
  this.parts = [];
  this.stage = [];
};


Horatio.Program.prototype = {
  
  run: function() {
    console.log("running?");
    var self = this;
    
    for (var a = 0; a < self.parts.length; a++) {
      for (var s = 0; s < self.parts[a].length; s++) {
        for (var f = 0; f < self.parts[a][s].length; f++) {
          self.parts[a][s][f].call(self);
        }
      }
    }
    
    console.log(this);
    
    return 0;
  },
  
  
  runSub: function(act, start_scene, end_scene) {
    var self = this;
    
    for (var s = start_scene; s < end_scene; s++) {
      for (var f = 0; f < self.parts[act][s].length; f++) {
        self.parts[act][s][f].call(self);
      }
    }
    
    return 0;
  },
  
  
  declareCharacter: function(character_name) {
    this.characters[character_name] = new Horatio.Character(character_name);
  },
  
  
  newAct: function() {
    this.parts.push([]);
    return this.parts.length-1;
  },
  
  
  newScene: function(act) {
    this.parts[act].push([]);
    return this.parts[act].length-1;
  },
  
  
  enterStage: function(character_name) {
    var c = this.characters[character_name];
    this.stage.push(c);
  },
  
  
  exitStage: function(character_name) {
    var c = this.characters[character_name];
    this.stage.splice(this.stage.indexOf(c), 1);
  },
  
  
  exeuntStage: function() {
    this.stage = [];
  },
  
  
  interlocutor: function(character_name) {
    var c = this.characters[character_name];
    var i = this.stage.filter(function(n) { return n !== c; });
    return i[0];
  },
  
  
  addCommand: function(act, scene, command) {
    this.parts[act][scene].push(command);
    
    var self = this;
  }
  
};
Horatio.Semantics = function() {};

Horatio.Semantics.prototype = {
  
  /**
   * Program
   */
  visitProgram: function(program, arg) {    
    var self = this;
    
    // comment
    program.comment.visit(this, null);
    
    // declarations
    if (program.declarations.length > 0) {
      program.declarations.forEach(function(declaration) {
        declaration.visit(self, null);
      });
    } else {
      throw new Error("Semantic Error - No characters declared.");
    }
    
    // parts
    if (program.parts.length > 0) {
      program.parts.forEach(function(part) {
        part.visit(self, null);
      });
    } else {
      throw new Error("Semantic Error - No parts in program.");
    }
    
    return null;
  },
  
  
  
  /**
   * Comment
   */
  visitComment: function(comment, arg) {
    if (comment.sequence) {
      return null;
    } else {
      throw new Error("Semantic Error - Comment malformed.");
    }
  },
  
  
  
  /**
   * Declaration
   */
  visitDeclaration: function(declaration, arg) {
    var c = declaration.character.visit(this, arg);
    
    if (this.characters[c.sequence]) {
      throw new Error("Semantic Error - Character already defined.");
    } else {
      this.characters[c.sequence] = false;
    }
    
    declaration.comment.visit(this, arg);
    return null;
  },
  
  
  
  /**
   * Character
   */
  visitCharacter: function(character, arg) {
    var self = this;
    
    if (!character.sequence) {
      throw new Error("Semantic Error - Character undefined.");
    }
    
    if (!(character instanceof Horatio.AST.Character)) {
      throw new Error("Semantic Error - Not of type Character.");
    }
    
    // Declared flag
    if (arg && arg.declared === true && !this.declared(character.sequence)) {
      throw new Error("Semantic Error - Character Undeclared");
    }
    
    // Present on stage flag
    if (arg && arg.hasOwnProperty('on_stage')) {
      switch (arg.on_stage) {
      case true:
        if (!this.onStage(character.sequence)) {
          throw new Error("Semantic Error - Character not on stage.");
        }
        break;
      
      case false:
        if (this.onStage(character.sequence)) {
          throw new Error("Semantic Error - Character already on stage.");
        }
        break;
      }
    }
    
    return character;
  },
  
  
  
  /**
   * Part
   */
  visitPart: function(part, arg) {
    var self = this;
    
    var n = part.numeral.visit(this, arg);
    part.comment.visit(this, arg);
    
    if (this.parts[n]) {
      throw new Error("Semantic Error - Act already defined.");
    } else
    if (part.subparts.length === 0) {
      throw new Error("Semantic Error - No subparts defined.");
    } else {
      this.parts[n] = [];
      part.subparts.forEach(function(subpart) {
        subpart.visit(self, {act: n});
      });
    }
    
    return null;
  },
  
  
  
  /**
   * Numeral
   */
  visitNumeral: function(numeral, arg) {
    if (numeral.sequence) {
      return numeral.sequence;
    } else {
      throw new Error("Semantic Error - Numeral malformed.");
    }
    return null;
  },
  
  
  
  /**
   * Subparts
   */
  visitSubpart: function(subpart, arg) {
    var n = subpart.numeral.visit(this, arg);
    
    if (this.sceneExists(arg.act, n)) {
      throw new Error("Semantic Error - Scene already defined.");
    } else {
      this.parts[arg.act].push(n);
      subpart.comment.visit(this, arg);
      subpart.stage.visit(this, {act: arg.act, scene: n});
    }
    
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
    if (!presence.character_1 && !presence.character_2) {
      throw new Error("Semantic Error - No characters entering.");
    }
    
    var c1 = presence.character_1.visit(this, {declared: true, on_stage: false});
    this.toggleStage(c1.sequence);
    
    if (presence.character_2) {
      var c2 = presence.character_2.visit(this, {declared: true, on_stage: false});
      
      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Same character entering twice in same statement.");
      }
      
      this.toggleStage(c2.sequence);
    }
        
    return null;
  },
  
  
  
  /**
   * Exit
   */
  visitExit: function(presence, arg) {
    if (!presence.character) {
      throw new Error("Semantic Error - No character exiting.");
    }
    
    var c = presence.character.visit(this, {declared: true, on_stage: true});
    this.toggleStage(c.sequence);
    
    return null;
  },
  
  
  
  /**
   * Exeunt
   */
  visitExeunt: function(presence, arg) {
    // - No characters on stage
    // x Only 1 character exeunting
    // x characters are the same
    
    if (presence.character_1 ? !presence.character_2 : presence.character_2) {
      throw new Error("Semantic Error - Either 2 or no characters can be defined, not one.");
    }
    
    if (presence.character_1 && presence.character_2) {
      var c1 = presence.character_1.visit(this, {declared: true, on_stage: true});
      var c2 = presence.character_2.visit(this, {declared: true, on_stage: true});
      
      if (c1.sequence === c2.sequence) {
        throw new Error("Semantic Error - Characters are the same.");
      }
      
      this.toggleStage(c1.sequence);
      this.toggleStage(c2.sequence);
      
    } else {
      this.exeuntStage();  
    }
    
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

    var c = line.character.visit(this, {declared: true, on_stage: true});
    
    if (line.sentences.length === 0) {
      throw new Error("Semantic Error - Line cannot have no sentences.");
    } else {
      arg.character = c.sequence;
      line.sentences.forEach(function(sentence) {
        sentence.visit(self, arg);
      });
    }
    
    return null;
  },
  
  
  
  /**
   * Goto
   */
  visitGoto: function(goto, arg) {
    var n = goto.numeral.visit(this, arg);
    
    if (!this.sceneExists(arg.act, arg.scene)) {
      throw new Error("Semantic Error - Scene specified by Goto does not exist in this act.");
    }
    
    return null;
  },
  
  
  
  /**
   * Assignment Sentence
   */
  visitAssignmentSentence: function(assignment, arg) {
    assignment.be.visit(this, arg);
    assignment.value.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Question Sentence
   */
  visitQuestionSentence: function(question, arg) {
    question.be.visit(this, arg);
    question.comparison.visit(this, arg);
    question.value.visit(this, arg);
    
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
    
    return null;
  },
  
  
  
  /**
   * Char Output Sentence
   */
  visitCharOutputSentence: function(char_output, arg) {
    
    return null;
  },
  
  
  
  /**
   * Remember Sentence
   */
  visitRememberSentence: function(remember, arg) {
    var p = remember.pronoun.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Recall Sentence
   */
  visitRecallSentence: function(recall, arg) {
    recall.comment.visit(this, arg);
  },
  
  
  
  /**
   * Positive Constant Value
   */
  visitPositiveConstantValue: function(pc_val, arg) {
    var self = this;
    
    var n;    
    if (!(pc_val.noun instanceof Horatio.AST.PositiveNoun) && !(pc_val.noun instanceof Horatio.AST.NeutralNoun)) {
      throw new Error("Semantic Error - Positive Constants must use a positive or neutral noun");
    } else {
      n = pc_val.noun.visit(self, arg);
    }
    pc_val.noun.visit(this, arg);
    pc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof Horatio.AST.PositiveAdjective) && !(adjective instanceof Horatio.AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Positive Constants must use positive of neutral adjectives.");
      } else {
        adjective.visit(self, arg);
      }
    });
    
    //return Math.pow(2, pc_val.adjectives.length);
    return 0; // placeholder
  },
  
  
  
  /**
   * Negative Constant Value
   */
  visitNegativeConstantValue: function(nc_val, arg) {
    var self = this;
    
    var n;
    if (!(nc_val.noun instanceof Horatio.AST.NegativeNoun) && !(nc_val.noun instanceof Horatio.AST.NeutralNoun)) {
      throw new Error("Semantic Error - Negative Constants must use a negative or neutral noun");
    } else {
      n = nc_val.noun.visit(self, arg);
    }
    nc_val.noun.visit(this, arg);
    nc_val.adjectives.forEach(function(adjective) {
      if (!(adjective instanceof Horatio.AST.NegativeAdjective) && !(adjective instanceof Horatio.AST.NeutralAdjective)) {
        throw new Error("Semantic Error - Negative Constants must use negative of neutral adjectives.");
      } else {
        adjective.visit(self, arg);
      }
    });
    
    //return (-1 * Math.pow(2, nc_val.adjectives.length));
    return 0; // placeholder
  },
  
  
  
  /**
   * Unary Operation Value
   */
  visitUnaryOperationValue: function(unary, arg) {
    var o = unary.operator.visit(this, arg);
    var v = unary.value.visit(this, arg);
    
    return 0; // placeholder
  },
  
  
  
  /**
   * Arithmetic Operation Value
   */
  visitArithmeticOperationValue: function(arithmetic, arg) {
    var o = arithmetic.operator.visit(this, arg);
    var v1 = arithmetic.value_1.visit(this, arg);
    var v2 = arithmetic.value_2.visit(this, arg);
    
    return 0; //placeholder
  },
  
  
  
  /**
   * Pronoun Value
   */
  visitPronounValue: function(pronoun, arg) {
    var p = pronoun.pronoun.visit(this, arg);
    
    return p;
  },
  
  
  
  /**
   * Greater Than Comparison
   */
  visitGreaterThanComparison: function(comparison, arg) {
    var c = comparison.comparative.visit(this, arg);
    
    return c;
  },
  
  
  
  /**
   * Lesser Than Comparison
   */
  visitLesserThanComparison: function(comparison, arg) {
    var c = comparison.comparative.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Equal To Comparison
   */
  visitEqualToComparison: function(comparison, arg) {
    comparison.adjective.visit(this, arg);
    
    return null;
  },
  
  
  
  /**
   * Inverse Comparison
   */
  visitInverseComparison: function(comparison, arg) {
    var c = comparison.comparison.visit(this, arg);
    
    return c;
  },
  
  
  
  /**
   * First Person Pronoun
   */
  visitFirstPersonPronoun: function(fpp, arg) {
    
    return null;
  },
  
  
  
  /**
   * Second Person Pronoun
   */
  visitSecondPersonPronoun: function(spp, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Noun
   */
  visitPositiveNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Neutral Noun
   */
  visitNeutralNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Noun
   */
  visitNegativeNoun: function(noun, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Adjective
   */
  visitPositiveAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Neutral Adjective
   */
  visitNeutralAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Adjective
   */
  visitNegativeAdjective: function(adjective, arg) {
    
    return null;
  },
  
  
  
  /**
   * Unary Operator
   */
  visitUnaryOperator: function(operator, arg) {
    
    return null;
  },
  
  
  
  /**
   * Arithmetic Operator
   */
  visitArithmeticOperator: function(operator, arg) {
    
    return null;
  },
  
  
  
  /**
   * Positive Comparative
   */
  visitPositiveComparative: function(comparative, arg) {
    
    return null;
  },
  
  
  
  /**
   * Negative Comparative
   */
  visitNegativeComparative: function(comparative, arg) {
    
    return null;
  },
  
  
  
  /**
   * Be
   */
  visitBe: function(be, arg) {
    if (be.sequence==="You are" || be.sequence==="Thou art") {
      if (this.solo(arg.character)) {
        console.log("solo");
        throw new Error("Semantic Error - Cannot assign value to interlocutor, only 1 character is on stage.");
      }
    }
    
    return null;
  },
  
  
  
  /**
   * Be Comparative
   */
  visitBeComparative: function(be, arg) {
    if (be.sequence==="Are you" || be.sequence==="Art thou") {
      if (this.solo(arg.character))
        throw new Error("Semantic Error - Cannot compare value of interlocutor, only 1 character is on stage.");
    }
    
    return null;
  }
  
};
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
    
    return null;
  },
  
  
  
  /**
   * Char Output Sentence
   */
  visitCharOutputSentence: function(char_output, arg) {
    
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
        var value = this.characters[p].value();
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
    var p = pronoun.pronoun.visit(this, arg);
        
    return p;
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
      return speaking;
    };
    
    return new Command();
  },
  
  
  
  /**
   * Second Person Pronoun
   */
  visitSecondPersonPronoun: function(spp, arg) {
    var Command = function() {
      var speaking = arg.character;
      var target = this.interlocutor.call(this,speaking).name();
      return target;
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
      case "the square of":
        return function(v) {
          return Math.pow(v,2);
        };
      case "the cube of":
        return function(v) {
          return Math.pow(v,3);
        };
      case "the square root of":
        return function(v) {
          var sign = (v < 0) ? -1 : 1;
          return sign*Math.floor(Math.sqrt(Math.abs(v)));
        };
      case "the factorial of":
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
      case "the sum of":
        return function(a,b) {
          return a+b;
        };
      case "the difference between":
        return function(a,b) {
          return a-b;
        };
      case "the product of":
        return function(a,b) {
          return a*b;
        };
      case "the quotient between":
        return function(a,b) {
          return Math.round(a/b);
        };
      case "the remainder of the quotient between":
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
Horatio.AST = {
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Comment}             comment
   * @param {Array.<Horatio.AST.Declaration>} declarations
   * @param {Array.<Horatio.AST.Part>}        parts
   * @constructor
   */
  Program: function(comment, declarations, parts) {
    this.comment      = comment;
    this.declarations = declarations;
    this.parts        = parts;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitProgram(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character
   * @param {Horatio.AST.Comment}   comment
   * @constructor
   */
  Declaration: function(character, comment) {
    this.character = character;
    this.comment   = comment;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitDeclaration(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral}         numeral
   * @param {Horatio.AST.Comment}         comment
   * @param {Array.<Horatio.AST.Subpart>} subparts
   * @constructor
   */
  Part: function(numeral, comment, subparts) {
    this.numeral  = numeral;
    this.comment  = comment;
    this.subparts = subparts;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPart(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral} numeral
   * @param {Horatio.AST.Comment} comment
   * @param {Horatio.AST.Stage}   stage
   * @constructor
   */
  Subpart: function(numeral, comment, stage) {
    this.numeral = numeral;
    this.comment = comment;
    this.stage   = stage;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitSubpart(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Dialogue}                                  dialogue
   * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} start_presence
   * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} end_presence
   * @constructor
   */
  Stage: function(dialogue, start_presence, end_presence) {
    this.dialogue       = dialogue;
    this.start_presence = start_presence;
    this.end_presence   = end_presence;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitStage(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character_1
   * @param {Horatio.AST.Character} character_2
   * @constructor
   */
  Enter: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitEnter(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character
   * @constructor
   */
  Exit: function(character) {
    this.character = character;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitExit(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character} character_1
   * @param {Horatio.AST.Character} character_2
   * @constructor
   */
  Exeunt: function(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitExeunt(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Array.<Horatio.AST.Line>} lines
   * @constructor
   */
  Dialogue: function(lines) {
    this.lines = lines;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitDialogue(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Character}         character
   * @param {Array.<Horatio.AST.Sentences>} sentences
   * @constructor
   */
  Line: function(character, sentences) {
    this.character = character;
    this.sentences = sentences;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitLine(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @param {Horatio.AST.Numeral} numeral
   * @constructor
   */
  Goto: function(numeral) {
    this.numeral = numeral;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGoto(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  AssignmentSentence: function(be, value) {
    this.be = be;
    this.value = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitAssignmentSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  QuestionSentence: function(be, comparison, value) {
    this.be         = be;
    this.comparison = comparison;
    this.value      = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitQuestionSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ResponseSentence: function(goto) {
    this.goto = goto;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitResponseSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  GotoSentence: function(goto) {
    this.goto = goto;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGotoSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  IntegerInputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitIntegerInputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  CharInputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharInputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  IntegerOutputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitIntegerOutputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  CharOutputSentence: function(sequence) { 
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharOutputSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  RememberSentence: function(pronoun) {
    this.pronoun = pronoun;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitRememberSentence(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  RecallSentence: function(comment) {
    this.comment = comment;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitRecallSentence(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeConstantValue: function(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  UnaryOperationValue: function(operator, value) {
    this.operator = operator;
    this.value    = value;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitUnaryOperationValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ArithmeticOperationValue: function(operator, value_1, value_2) {
    this.operator = operator;
    this.value_1  = value_1;
    this.value_2  = value_2;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitArithmeticOperationValue(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PronounValue: function(pronoun) {
    this.pronoun = pronoun;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPronounValue(this, arg);
    };
  },
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  GreaterThanComparison: function(comparative) {
    this.comparative = comparative;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitGreaterThanComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  LesserThanComparison: function(comparative) {
    this.comparative = comparative;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitLesserThanComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  EqualToComparison: function(adjective) {
    this.adjective = adjective;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitEqualToComparison(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  InverseComparison: function(comparison) {
    this.comparison = comparison;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitInverseComparison(this, arg);
    };
  },
  
  
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Comment: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitComment(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Numeral: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNumeral(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Character: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitCharacter(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  FirstPersonPronoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitFirstPersonPronoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  SecondPersonPronoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitSecondPersonPronoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NeutralNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNeutralNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeNoun: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeNoun(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NeutralAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNeutralAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeAdjective: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeAdjective(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  UnaryOperator: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitUnaryOperator(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  ArithmeticOperator: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitArithmeticOperator(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  PositiveComparative: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitPositiveComparative(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  NegativeComparative: function(sequence) {
    this.sequence = sequence; 
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitNegativeComparative(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  Be: function(sequence) {
    this.sequence = sequence;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitBe(this, arg);
    };
  },
  
  /**
   * @memberof Horatio.AST
   * @constructor
   */
  BeComparative: function(sequence) {
    this.sequence = sequence;
    
    // visit
    this.visit = function(visitor, arg) {
      return visitor.visitBeComparative(this, arg);
    };
  }
  
};
Horatio.Tokenizer = function(input) {
  this.tokens = [];
  this.dictionary = {};
  this.buildDictionary();
  this.tokenize(input);
};


Horatio.Tokenizer.prototype = {
  
  /**
   * Get the next token
   * @returns {Horatio.Token|number} - The next token from the input program, or -1 if no remaining tokens.
   */
  nextToken: function() {
    if (this.tokens.length > 0) {
      return this.tokens.shift();
    } else {
      return -1;
    }
  },
  
  
  
  /**
   * Scan and tokenize an input SPL program
   * @param {string} input - The input SPL program
   */
  tokenize: function(input) {
    // strip all newlines/extra whitespace
    input = input.trim().replace(/[\s\n]+/g," ");
    
    // replace terminals
    input = input.replace(/[:,.!?\[\]]/g, function(match) {
      switch(match) {
        case ":": return " COLON";             //break;
        case ",": return " COMMA";             //break;
        case ".": return " PERIOD";            //break;
        case "!": return " EXCLAMATION_POINT"; //break;
        case "?": return " QUESTION_MARK";     //break;
        case "[": return "LEFT_BRACKET ";      //break;
        case "]": return " RIGHT_BRACKET";     //break;
      }
    });
    
    // Split into array by spaces
    var input_array = input.split(" ");
    
    // tokenize
    while (input_array.length > 0) {
      var current = input_array.shift();
      if (this.dictionary[current]) {
        this.tokens.push(new Horatio.Token(this.dictionary[current], current));
      } else {
        
        // check if further appends will find match
        var br = 0;
        var orig = current;
        while (!this.dictionary[current] && br < 6) {
          current = current + " " + input_array[br];
          
          if (this.dictionary[current]) {
            this.tokens.push(new Horatio.Token(this.dictionary[current], current));
            input_array.splice(0,br+1);
          }
          br += 1;
        }
        
        // comment
        if (br===6) this.tokens.push(new Horatio.Token(43, orig));
      }
    }
  },
  
  
  
  /**
   * Builds a hash of words -> byte codes for scanning
   */
  buildDictionary: function() {
    var self = this;
    var wl = Horatio.Wordlists;
    
    wl.characters            .forEach(function(w) { self.dictionary[w] = 10; });
    wl.articles              .forEach(function(w) { self.dictionary[w] = 11; });
    wl.be                    .forEach(function(w) { self.dictionary[w] = 12; });
    wl.act                   .forEach(function(w) { self.dictionary[w] = 13; });
    wl.scene                 .forEach(function(w) { self.dictionary[w] = 14; });
    wl.enter                 .forEach(function(w) { self.dictionary[w] = 15; });
    wl.exit                  .forEach(function(w) { self.dictionary[w] = 16; });
    wl.exeunt                .forEach(function(w) { self.dictionary[w] = 17; });
    
    //wl.input                 .forEach(function(w) { self.dictionary[w] = 20; });
    wl.input_integer         .forEach(function(w) { self.dictionary[w] = 21; });
    wl.input_char            .forEach(function(w) { self.dictionary[w] = 22; });
    //wl.output                .forEach(function(w) { self.dictionary[w] = 23; });
    wl.output_integer        .forEach(function(w) { self.dictionary[w] = 24; });
    wl.output_char           .forEach(function(w) { self.dictionary[w] = 25; });
    
    wl.imperatives           .forEach(function(w) { self.dictionary[w] = 30; });
    wl.to                    .forEach(function(w) { self.dictionary[w] = 31; });
    wl.return                .forEach(function(w) { self.dictionary[w] = 32; });
    
    wl.positive_comparatives .forEach(function(w) { self.dictionary[w] = 40; });
    wl.negative_comparatives .forEach(function(w) { self.dictionary[w] = 41; });
    wl.as                    .forEach(function(w) { self.dictionary[w] = 42; });
    wl.not                   .forEach(function(w) { self.dictionary[w] = 43; });
    wl.than                  .forEach(function(w) { self.dictionary[w] = 44; });
    wl.if_so                 .forEach(function(w) { self.dictionary[w] = 45; });
    wl.be_comparatives       .forEach(function(w) { self.dictionary[w] = 46; });
    
    wl.unary_operators       .forEach(function(w) { self.dictionary[w] = 50; });
    wl.arithmetic_operators  .forEach(function(w) { self.dictionary[w] = 51; });
    
    wl.remember              .forEach(function(w) { self.dictionary[w] = 60; });
    wl.recall                .forEach(function(w) { self.dictionary[w] = 61; });
    
    wl.first_person_pronouns .forEach(function(w) { self.dictionary[w] = 70; });
    wl.second_person_pronouns.forEach(function(w) { self.dictionary[w] = 71; });
    wl.positive_adjectives   .forEach(function(w) { self.dictionary[w] = 72; });
    wl.neutral_adjectives    .forEach(function(w) { self.dictionary[w] = 73; });
    wl.negative_adjectives   .forEach(function(w) { self.dictionary[w] = 74; });
    wl.positive_nouns        .forEach(function(w) { self.dictionary[w] = 75; });
    wl.neutral_nouns         .forEach(function(w) { self.dictionary[w] = 76; });
    wl.negative_nouns        .forEach(function(w) { self.dictionary[w] = 77; });
    wl.roman_numerals        .forEach(function(w) { self.dictionary[w] = 78; });
    
    wl.colon                 .forEach(function(w) { self.dictionary[w] = 90; });
    wl.comma                 .forEach(function(w) { self.dictionary[w] = 91; });
    wl.period                .forEach(function(w) { self.dictionary[w] = 92; });
    wl.exclamation_point     .forEach(function(w) { self.dictionary[w] = 93; });
    wl.question_mark         .forEach(function(w) { self.dictionary[w] = 94; });
    wl.ampersand             .forEach(function(w) { self.dictionary[w] = 95; });
    wl.and                   .forEach(function(w) { self.dictionary[w] = 96; });
    wl.left_bracket          .forEach(function(w) { self.dictionary[w] = 97; });
    wl.right_bracket         .forEach(function(w) { self.dictionary[w] = 98; });
  }

  
};
Horatio.Parser = function(input) {
  this.tokenizer    = new Horatio.Tokenizer(input);
  this.currentToken = null;
};

Horatio.Parser.prototype = {
  
  /**
   * Accept the current token if it matches an expected kind
   * @param  {number}      expectedKind - The byte value of the expected token
   * @throws {SyntaxError}              - Throws syntax error if current token kind does not match expected token kind.
   */
  accept: function(expectedKind) {
    if (this.currentToken.kind === expectedKind) {
      this.currentToken = this.tokenizer.nextToken();
    } else {
      throw new Error("Syntax Error - Unexpected Token: " + JSON.stringify(this.currentToken));
    }
  },
  
  /**
   * Accept the current token regardless of kind
   */
  acceptIt: function() {
    this.currentToken = this.tokenizer.nextToken();
  },
  
  /**
   * Parse the SPL program and return an AST
   * @returns {Horatio.AST.Program} - The program AST.
   */
  parse: function() {
    this.currentToken = this.tokenizer.nextToken();
    var program = this.parseProgram();
    if (this.currentToken !== -1) {
      throw new Error("Syntax Error - unexpected end of program");
    }
    return program;
  },
  
  
  
  /* Parsers */
  parseProgram: function() {
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var declarations = [this.parseDeclaration()];
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      declarations.push(this.parseDeclaration());
    }
    var parts = [this.parsePart()];
    while (this.currentToken.kind===Horatio.Token.ACT) {
      parts.push(this.parsePart());
    }
    return new Horatio.AST.Program(comment, declarations, parts);
  },
  
  
  parseComment: function() {
    var comment = "";
    while (this.currentToken.kind!==Horatio.Token.PERIOD) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new Horatio.AST.Comment(comment.trim());
  },
  
  
  parseDeclaration: function() {
    var character = new Horatio.AST.Character(this.currentToken.sequence);
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COMMA);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    return new Horatio.AST.Declaration(character, comment);
  },
  
  
  parsePart: function() {
    this.accept(Horatio.Token.ACT);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var subparts = [this.parseSubPart()];
    while (this.currentToken.kind===Horatio.Token.SCENE) {
      subparts.push(this.parseSubPart());
    }
    return new Horatio.AST.Part(numeral, comment, subparts);
  },
  
  
  parseSubPart: function() {
    this.accept(Horatio.Token.SCENE);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    this.accept(Horatio.Token.COLON);
    var comment = this.parseComment();
    this.accept(Horatio.Token.PERIOD);
    var stage = this.parseStage();
    return new Horatio.AST.Subpart(numeral, comment, stage);
  },
  
  
  parseStage: function() {
    var start_presence, end_presence;
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      start_presence = this.parsePresence();
    }
    var dialogue = this.parseDialogue();
    if (this.currentToken.kind===Horatio.Token.LEFT_BRACKET) {
      end_presence = this.parsePresence();
    }
    return new Horatio.AST.Stage(dialogue, start_presence, end_presence);
  },
  
  
  parsePresence: function() {
    this.accept(Horatio.Token.LEFT_BRACKET);
    var c1, c2, ret;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.ENTER:
        this.acceptIt();
        c1 = new Horatio.AST.Character(this.currentToken.sequence);
        c2 = null;
        this.accept(Horatio.Token.CHARACTER);
        if (this.currentToken.kind===Horatio.Token.AMPERSAND) {
          this.acceptIt();
          c2 = new Horatio.AST.Character(this.currentToken.sequence);
          this.accept(Horatio.Token.CHARACTER);
        }
        ret = new Horatio.AST.Enter(c1, c2);
        break;
        
      case Horatio.Token.EXIT:
        this.acceptIt();
        var character = new Horatio.AST.Character(this.currentToken.sequence);
        this.accept(Horatio.Token.CHARACTER);
        ret = new Horatio.AST.Exit(character);
        break;
      
      case Horatio.Token.EXEUNT:
        this.acceptIt();
        if (this.currentToken.kind===Horatio.Token.CHARACTER) {
          c1 = new Horatio.AST.Character(this.currentToken.sequence);
          this.acceptIt();
          this.accept(Horatio.Token.AMPERSAND);
          c2 = new Horatio.AST.Character(this.currentToken.sequence);
          this.accept(Horatio.Token.CHARACTER);
          ret = new Horatio.AST.Exeunt(c1, c2);
        } else {
          ret = new Horatio.AST.Exeunt();
        }
        break;
    }
    this.accept(Horatio.Token.RIGHT_BRACKET);
    return ret;
  },
  
  
  parseDialogue: function() {
    var lines = [this.parseLine()];
    while (this.currentToken.kind===Horatio.Token.CHARACTER) {
      lines.push(this.parseLine());
    }
    return new Horatio.AST.Dialogue(lines);
  },
  
  
  parseLine: function() {
    var character = new Horatio.AST.Character(this.currentToken.sequence);
    this.accept(Horatio.Token.CHARACTER);
    this.accept(Horatio.Token.COLON);
    var sentences = [this.parseSentence()];
    
    function isSentence(token) {
      switch(token) {
        case Horatio.Token.BE:
        case Horatio.Token.BE_COMPARATIVE:
        case Horatio.Token.IF_SO:
        case Horatio.Token.IMPERATIVE:
        case Horatio.Token.INPUT_INTEGER:
        case Horatio.Token.INPUT_CHAR:
        case Horatio.Token.OUTPUT_INTEGER:
        case Horatio.Token.OUTPUT_CHAR:
        case Horatio.Token.REMEMBER:
        case Horatio.Token.RECALL:
          return true;
        default:
          return false;
      }
    }
    while (isSentence(this.currentToken.kind)) {
      sentences.push(this.parseSentence());
    }
    return new Horatio.AST.Line(character, sentences);
  },
  
  
  parseSentence: function() {
    var sentence;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.BE:
        sentence = this.parseAssignment();
        this.accept(Horatio.Token.PERIOD);
        break;
        
      case Horatio.Token.BE_COMPARATIVE:
        sentence = this.parseQuestion();
        this.accept(Horatio.Token.QUESTION_MARK);
        break;
      
      case Horatio.Token.IF_SO:
        sentence = this.parseResponse();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.IMPERATIVE:
        sentence = this.parseGoto();
        this.accept(Horatio.Token.PERIOD);
        break;
      
      case Horatio.Token.INPUT_INTEGER:
      case Horatio.Token.INPUT_CHAR:
        sentence = this.parseInput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.OUTPUT_INTEGER:
      case Horatio.Token.OUTPUT_CHAR:
        sentence = this.parseOutput();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.REMEMBER:
        sentence = this.parseRemember();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
      
      case Horatio.Token.RECALL:
        sentence = this.parseRecall();
        this.accept(Horatio.Token.EXCLAMATION_POINT);
        break;
    }
    return sentence;
  },
  
  
  parseBe: function() {
    var be;
    if (this.currentToken.kind===Horatio.Token.BE) {
      be = new Horatio.AST.Be(this.currentToken.sequence);
      this.acceptIt();
    }
    return be;
  },
  
  
  parseAssignment: function() {
    var be = this.parseBe();
    if (this.currentToken.kind===Horatio.Token.AS) {
      this.acceptIt();
      this.parseAdjective();
      this.accept(Horatio.Token.AS);
    }
    var value = this.parseValue();
    return new Horatio.AST.AssignmentSentence(be, value);
  },
  
  
  parseValue: function() {
    var value, pronoun;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.UNARY_OPERATOR:
        value = this.parseUnaryOperation();
        break;
      
      case Horatio.Token.ARITHMETIC_OPERATOR:
        value = this.parseArithmeticOperation();
        break;
      
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.NEGATIVE_ADJECTIVE:
      case Horatio.Token.POSITIVE_NOUN:
      case Horatio.Token.NEUTRAL_NOUN:
      case Horatio.Token.NEGATIVE_NOUN:
      case Horatio.Token.ARTICLE:
        value = this.parseConstant();
        break;
        
      case Horatio.Token.FIRST_PERSON_PRONOUN:
        pronoun = new Horatio.AST.FirstPersonPronoun(this.currentToken.sequence);
        value   = new Horatio.AST.PronounValue(pronoun);
        this.acceptIt();
        break;
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        pronoun = new Horatio.AST.SecondPersonPronoun(this.currentToken.sequence);
        value   = new Horatio.AST.PronounValue(pronoun);
        this.acceptIt();
        break;
      default:
        throw new Error("Syntax Error - Unknown Token");
    }
    return value;
  },
  
  
  parseUnaryOperation: function() {
    var operator = new Horatio.AST.UnaryOperator(this.currentToken.sequence);
    this.accept(Horatio.Token.UNARY_OPERATOR);
    var value = this.parseValue();
    return new Horatio.AST.UnaryOperationValue(operator, value);
  },
  
  
  parseArithmeticOperation: function() {
    var operator = new Horatio.AST.ArithmeticOperator(this.currentToken.sequence);
    this.accept(Horatio.Token.ARITHMETIC_OPERATOR);
    var value_1 = this.parseValue();
    this.accept(Horatio.Token.AND);
    var value_2 = this.parseValue();
    return new Horatio.AST.ArithmeticOperationValue(operator, value_1, value_2);
  },
  
  
  parseConstant: function() {
    if (this.currentToken.kind===Horatio.Token.ARTICLE) {
      this.acceptIt();
    }
    switch (this.currentToken.kind) {
      
      case Horatio.Token.NEUTRAL_ADJECTIVE:
      case Horatio.Token.NEUTRAL_NOUN:
        throw new Error("Syntax Error - Constant Value cannot start with neutral adjective or noun.");
      
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.POSITIVE_NOUN:
        return this.parsePositiveConstant();
      
      case Horatio.Token.NEGATIVE_ADJECTIVE:
      case Horatio.Token.NEGATIVE_NOUN:
        return this.parseNegativeConstant();
        
      default:
        throw new Error("Syntax Error - Unknown Token");
        
    }
  },
  
  
  parsePositiveConstant: function() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Horatio.Token.POSITIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.POSITIVE_ADJECTIVE:
          adjective = new Horatio.AST.PositiveAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          adjective = new Horatio.AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.NEGATIVE_ADJECTIVE:
          throw new Error("Syntax Error - Cannot mix positive and negative words in constant assignment.");
      }
    }
    var noun = new Horatio.AST.PositiveNoun(this.currentToken.sequence);
    this.accept(Horatio.Token.POSITIVE_NOUN);
    return new Horatio.AST.PositiveConstantValue(noun, adjectives);
  },
  
  
  parseNegativeConstant: function() {
    var adjectives = [];
    var adjective;
    while (this.currentToken.kind!==Horatio.Token.NEGATIVE_NOUN) {
      switch (this.currentToken.kind) {
        case Horatio.Token.NEGATIVE_ADJECTIVE:
          adjective = new Horatio.AST.NegativeAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.NEUTRAL_ADJECTIVE:
          adjective = new Horatio.AST.NeutralAdjective(this.currentToken.sequence);
          adjectives.push(adjective);
          this.acceptIt();
          break;
        case Horatio.Token.POSITIVE_ADJECTIVE:
          throw new Error("Syntax Error - Cannot mix positive and negative words in constant assignment.");
      }
    }
    var noun = new Horatio.AST.NegativeNoun(this.currentToken.sequence);
    this.accept(Horatio.Token.NEGATIVE_NOUN);
    return new Horatio.AST.NegativeConstantValue(noun, adjectives);
  },
  
  
  parseQuestion: function() {
    var be         = this.parseBeComparative();
    var comparison = this.parseComparative();
    var value      = this.parseValue();
    return new Horatio.AST.QuestionSentence(be, comparison, value);
  },
  
  
  parseBeComparative: function() {
    var be_comparative;
    if (this.currentToken.kind===Horatio.Token.BE_COMPARATIVE) {
      be_comparative = new Horatio.AST.BeComparative(this.currentToken.sequence);
    }
    return be_comparative;
  },
  
  
  parseComparative: function() {
    var comparison, comparative, adjective;
    switch (this.currentToken.kind) {
      
      case Horatio.Token.POSITIVE_COMPARATIVE:
        comparative = new Horatio.AST.PositiveComparative(this.currentToken.sequence);
        comparison  = new Horatio.AST.GreaterThanComparison(comparative);
        this.acceptIt();
        this.accept(Horatio.Token.THAN);
        break;
      case Horatio.Token.NEGATIVE_COMPARATIVE:
        comparative = new Horatio.AST.NegativeComparative(this.currentToken.sequence);
        comparison  = new Horatio.AST.LesserThanComparison(comparative);
        this.acceptIt();
        this.accept(Horatio.Token.THAN);
        break;
        
      case Horatio.Token.AS:
        this.acceptIt();
        adjective  = this.parseAdjective();
        comparison = new Horatio.AST.EqualToComparison(adjective);
        this.accept(Horatio.Token.AS);
        break;
      
      case Horatio.Token.NOT:
        this.acceptIt();
        comparative = this.parseComparative();
        comparison  = new Horatio.AST.InverseComparison(comparative);
        //switch (this.currentToken.kind) {
        //  case Horatio.Token.POSITIVE_COMPARATIVE:
        //  case Horatio.Token.NEGATIVE_COMPARATIVE:
        //    this.acceptIt();
        //    this.accept(Horatio.Token.THAN);
        //    break;
        //}
        break;
    }
    return comparison;
  },
  
  
  parseResponse: function() {
    this.accept(Horatio.Token.IF_SO);
    this.accept(Horatio.Token.COMMA);
    var goto = this.parseGoto();
    return new Horatio.AST.ResponseSentence(goto);
  },
  
  
  parseGoto: function() {
    this.accept(Horatio.Token.IMPERATIVE);
    this.accept(Horatio.Token.RETURN);
    this.accept(Horatio.Token.TO);
    this.accept(Horatio.Token.SCENE);
    var numeral = new Horatio.AST.Numeral(this.currentToken.sequence);
    this.accept(Horatio.Token.ROMAN_NUMERAL);
    return new Horatio.AST.Goto(numeral);
  },
  
  
  parseInput: function() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Horatio.Token.INPUT_INTEGER:
        ret = new Horatio.AST.IntegerInputSentence(sequence);
        break;
      case Horatio.Token.INPUT_CHAR:
        ret = new Horatio.AST.CharInputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  },
  
  
  parseOutput: function() {
    var sequence = this.currentToken.sequence;
    var ret;
    switch (this.currentToken.kind) {
      case Horatio.Token.OUTPUT_INTEGER:
        ret = new Horatio.AST.IntegerOutputSentence(sequence);
        break;
      case Horatio.Token.OUTPUT_CHAR:
        ret = new Horatio.AST.CharOutputSentence(sequence);
        break;
    }
    this.acceptIt();
    return ret;
  },
  
  
  parseRemember: function() {
    this.accept(Horatio.Token.REMEMBER);
    var pronoun;
    switch (this.currentToken.kind) {
      case Horatio.Token.FIRST_PERSON_PRONOUN:
        pronoun = new Horatio.AST.FirstPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
      case Horatio.Token.SECOND_PERSON_PRONOUN:
        pronoun = new Horatio.AST.SecondPersonPronoun(this.currentToken.sequence);
        this.acceptIt();
        break;
    }
    return new Horatio.AST.RememberSentence(pronoun);
  },
  
  
  parseRecall: function() {
    this.accept(Horatio.Token.RECALL);
    this.accept(Horatio.Token.COMMA);
    var comment = "";
    while (this.currentToken.kind!==Horatio.Token.EXCLAMATION_POINT) {
      comment += this.currentToken.sequence + " ";
      this.acceptIt();
    }
    return new Horatio.AST.RecallSentence(comment.trim());
  },
  
  
  parseAdjective: function() {
    switch (this.currentToken.kind) {
      case Horatio.Token.POSITIVE_ADJECTIVE:
      case Horatio.Token.NEUTRAL_ADJECTIVE:
      case Horatio.Token.NEGATIVE_ADJECTIVE:
        this.acceptIt();
        break;
    }
  }
   
};
Horatio.Checker = function() {
  //Horatio.Visitor.call(this);
  this.characters = {};
  this.parts = {};
};

// inherit visitor prototype
Horatio.Checker.prototype = new Horatio.Semantics();



/**
 * Check
 */
Horatio.Checker.prototype.check = function(program) {
  program.visit(this, null);
};



/**
 * Character exists
 */
Horatio.Checker.prototype.declared = function(character) {
  return this.characters.hasOwnProperty(character);
};


/**
 * Character on stage
 */
Horatio.Checker.prototype.onStage = function(character) {
  if (this.declared(character)) {
    return this.characters[character];
  } else {
    return false;
  }
};


/**
 * Solo on stage?
 */
Horatio.Checker.prototype.solo = function(character) {
  if (this.declared(character) && this.characters[character]) {
    for (var k in this.characters) {
      if ((k!==character) && (this.characters[k]===true)) {
        return false;
      }
    }
    return true;
  }
  return false;
};


/**
 * Toggle Stage presence
 */
Horatio.Checker.prototype.toggleStage = function(character) {
  if (this.declared(character)) {
    this.characters[character] = !this.characters[character];
  }
};


/**
 * Exeunt all
 */
Horatio.Checker.prototype.exeuntStage = function() {
  for (var c in this.characters) {
    this.characters[c] = false;
  }
};



/**
 * Scene exists
 */
Horatio.Checker.prototype.sceneExists = function(act, scene) {
  if (!this.parts[act]) {
    return false;
  } else {
    return (this.parts[act].indexOf(scene) !== -1);
  }
};
Horatio.Encoder = function() {
  //Horatio.Visitor.call(this);
  
  this.program = new Horatio.Program();
};

// inherit visitor prototype
Horatio.Encoder.prototype = new Horatio.Generator();



/**
 * Encode
 */
Horatio.Encoder.prototype.encode = function(program) {
  program.visit(this, null);
  return this.program;
};



/**
 * Get index number from roman numeral
 */
Horatio.Encoder.prototype.numeralIndex = function(numeral) {
  return Horatio.Wordlists.roman_numerals.indexOf(numeral);
};
Horatio.Compiler = function() {};


Horatio.Compiler.prototype = {
  
  /**
   * Compile an SPL program
   * @param {string} input - The input SPL program
   */
  compile: function(input) {
    // Parse input
    var parser = new Horatio.Parser(input);
    
    // Generate AST
    var ast = parser.parse();
    
    // Semantic Check
    var checker = new Horatio.Checker();
    checker.check(ast);
    
    // Code Generation
    var encoder = new Horatio.Encoder();
    var program = encoder.encode(ast);
    
    return program;
  }
  
};