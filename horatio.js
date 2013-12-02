/**
 * Horatio
 * A Javascript compiler for the Shakespeare Programming Language
 *
 * @author Miles Zimmerman
 */
var Horatio = Horatio || {};

/**
 * Line Parser
 */
Horatio.LineParser = function(line_array) {
    this.line_array = line_array;
    this.type = null;
    this.value = null;
    this.multiplier = 1;
    this.direction = 1;
};

Horatio.LineParser.prototype = {
    parse: function() {
        var self = this;
        if (self.line_array.size === 0) {
            console.log("size");
            return null;
        }
        // get word to test
        var str = self.line_array.shift();
        // test and continue parsing if needed.
        switch (true) {
          // Is an adjective
            case self.Expressions.adjectives().test(str):
            console.log(str);
            if (self.Expressions.negative_adjectives().test(str)) {
                self.multiplier *= 2;
                self.direction = -1;
                self.parse();
            }
            if (self.Expressions.positive_adjectives().test(str)) {
                self.multiplier *= 2;
                self.direction = 1;
                self.parse();
            }
            break;

          // Is a noun
            case self.Expressions.nouns().test(str):
            self.value = self.direction * self.multiplier;
            return null;
            break;
        }
    }
};

/**
 * Horatio Parser
 */
Horatio.Parser = function(input_text) {
    this.input_text = input_text;
    this.input_array = null;
    this.program = null;
};

Horatio.Parser.prototype = {
    /**
   * Main parsing function
   */
    parse: function() {
        this.clean(this.input_text);
        this.program = new Horatio.Program(this.getTitle());
        this.addCharacters();
        var t = new Horatio.Tokenizer(this.input_array[2]);
        console.log(t.parse());
    },
    getTitle: function() {
        return this.input_array.shift();
    }
};

/**
 * Program
 */
Horatio.Program = function(title) {
    this.title = title;
    this.characters = {};
    this.acts = {};
};

Horatio.Program.prototype = {
    addCharacter: function(character) {
        this.characters[character.name] = character;
    },
    createCharacter: function(character_name) {
        this.characters[character_name] = new Horatio.Program.Character(character_name);
    },
    addAct: function(act) {
        this.acts[act.num] = act;
    },
    createAct: function(act_num) {
        this.acts[act_num] = new Horatio.Program.Act(act_num);
    }
};

/**
 * Tokenizer
 */
Horatio.Tokenizer = function(line) {
    this.line = line;
    this.type = null;
    if (typeof line === "string") this.line = line.split(" ");
};

Horatio.Tokenizer.prototype = {
    types: {
        Act: function(line_array) {
            return {
                type: "act",
                content: this.clean(line_array[1])
            };
        },
        Scene: function(line_array) {
            return {
                type: "scene",
                content: this.clean(line_array[1])
            };
        },
        Enter: function(line_array) {
            var characters = [ line_array[1] ];
            if (line_array[2] === "and") characters.push(line_array[3]);
            return {
                type: "enter_characters",
                content: characters
            };
        },
        Exit: function(line_array) {
            return "exit";
        },
        You: function(line_array) {}
    },
    clean: function(word) {
        return word.trim().replace(/[:\[,]+/g, "");
    },
    parse: function() {
        var check = this.line[0];
        return this.types[this.clean(check)](this.line);
    }
};

/**
 * Horatio Wordlists
 * Holds syntax for parsing.
 * 
 * Loaded from includes/wordlists/ at make
 */
Horatio.Wordlists = {};

Horatio.LineParser.prototype.Expressions = {
    adjectives: function() {
        var r = "(" + Horatio.Wordlists.negative_adjectives.join("|") + "|" + Horatio.Wordlists.positive_adjectives.join("|") + ")";
        return new RegExp(r);
    },
    negative_adjectives: function() {
        var r = "(" + Horatio.Wordlists.negative_adjectives.join("|") + ")";
        return new RegExp(r);
    },
    positive_adjectives: function() {
        var r = "(" + Horatio.Wordlists.positive_adjectives.join("|") + ")";
        return new RegExp(r);
    },
    nouns: function() {
        var r = "(" + Horatio.Wordlists.negative_nouns.join("|") + "|" + Horatio.Wordlists.positive_nouns.join("|") + ")";
        return new RegExp(r);
    },
    negative_nouns: function() {
        var r = "(" + Horatio.Wordlists.negative_nouns.join("|") + ")";
        return new RegExp(r);
    },
    positive_nouns: function() {
        var r = "(" + Horatio.Wordlists.positive_nouns.join("|") + ")";
        return new RegExp(r);
    },
    will_compare: function() {
        var r = "(are as|art as|as)";
        return new RegExp(r);
    }
};

Horatio.Parser.prototype.Characters = {
    parseCharacter: function(line) {
        return line.match(this.characterReg())[1];
    },
    characterReg: function() {
        var r = "(" + Horatio.Wordlists.characters.join("|") + ")" + Horatio.Wordlists.character_terminal;
        return new RegExp(r);
    }
};

Horatio.Parser.prototype.addCharacters = function() {
    var breaker = "Act I";
    while (this.input_array[0] && this.input_array[0].indexOf(breaker) < 0) {
        var l = this.input_array.shift();
        this.program.createCharacter(this.Characters.parseCharacter(l));
    }
};

/**
 * Clean
 */
Horatio.Parser.prototype.Clean = {
    lineTerminals: function() {
        var terminals = "[" + Horatio.Wordlists.line_terminals.join("") + "]";
        return new RegExp(terminals);
    },
    cleanLine: function(line) {
        return line.trim().replace(/[\s\n]+/g, " ");
    },
    splitLines: function(text) {
        var lines = text.split(this.lineTerminals());
        return this.cleanLines(lines);
    },
    cleanLines: function(lines) {
        var cleaned = [];
        for (var l in lines) {
            var c = this.cleanLine(lines[l]);
            if (c != "") cleaned.push(c);
        }
        return cleaned;
    }
};

Horatio.Parser.prototype.clean = function() {
    this.input_array = this.Clean.splitLines(this.input_text);
};

/**
 * Act
 */
Horatio.Program.Act = function(num) {
    this.num = num;
    this.scenes = {};
};

Horatio.Program.Act.prototype = {
    createScene: function(num) {
        if (!this.scenes[num]) this.scenes[num] = new Scene(num);
    }
};

/**
 * Character
 */
Horatio.Program.Character = function(name) {
    this.name = name;
    this.values = [];
};

Horatio.Program.Character.prototype = {
    peek: function() {
        return this.values[0] || null;
    },
    val: function() {
        return this.peek();
    },
    push: function(value) {
        this.values.unshift(value);
    },
    pop: function() {
        return this.values.shift();
    }
};

/**
 * Scene
 */
Horatio.Program.Scene = function(num) {
    this.num = num;
};

/** Act and Scene */
Horatio.Wordlists.act_and_scene = [ "Act", "Scene" ];

/** Articles **/
Horatio.Wordlists.articles = [ "a", "an", "the" ];

/** Be */
Horatio.Wordlists.be = [ "am", "are", "art", "be", "is" ];

/** Characters */
Horatio.Wordlists.characters = [ "Achilles", "Adonis", "Adriana", "Aegeon", "Aemilia", "Agamemnon", "Agrippa", "Ajax", "Alonso", "Andromache", "Angelo", "Antiochus", "Antonio", "Arthur", "Autolycus", "Balthazar", "Banquo", "Beatrice", "Benedick", "Benvolio", "Bianca", "Brabantio", "Brutus", "Capulet", "Cassandra", "Cassius", "Christopher Sly", "Cicero", "Claudio", "Claudius", "Cleopatra", "Cordelia", "Cornelius", "Cressida", "Cymberline", "Demetrius", "Desdemona", "Dionyza", "Doctor Caius", "Dogberry", "Don John", "Don Pedro", "Donalbain", "Dorcas", "Duncan", "Egeus", "Emilia", "Escalus", "Falstaff", "Fenton", "Ferdinand", "Ford", "Fortinbras", "Francisca", "Friar John", "Friar Laurence", "Gertrude", "Goneril", "Hamlet", "Hecate", "Hector", "Helen", "Helena", "Hermia", "Hermonie", "Hippolyta", "Horatio", "Imogen", "Isabella", "John of Gaunt", "John of Lancaster", "Julia", "Juliet", "Julius Caesar", "King Henry", "King John", "King Lear", "King Richard", "Lady Capulet", "Lady Macbeth", "Lady Macduff", "Lady Montague", "Lennox", "Leonato", "Luciana", "Lucio", "Lychorida", "Lysander", "Macbeth", "Macduff", "Malcolm", "Mariana", "Mark Antony", "Mercutio", "Miranda", "Mistress Ford", "Mistress Overdone", "Mistress Page", "Montague", "Mopsa", "Oberon", "Octavia", "Octavius Caesar", "Olivia", "Ophelia", "Orlando", "Orsino", "Othello", "Page", "Pantino", "Paris", "Pericles", "Pinch", "Polonius", "Pompeius", "Portia", "Priam", "Prince Henry", "Prospero", "Proteus", "Publius", "Puck", "Queen Elinor", "Regan", "Robin", "Romeo", "Rosalind", "Sebastian", "Shallow", "Shylock", "Slender", "Solinus", "Stephano", "Thaisa", "The Abbot of Westminster", "The Apothecary", "The Archbishop of Canterbury", "The Duke of Milan", "The Duke of Venice", "The Ghost", "Theseus", "Thurio", "Timon", "Titania", "Titus", "Troilus", "Tybalt", "Ulysses", "Valentine", "Venus", "Vincentio", "Viola" ];

/** Enter, Exit, and Exeunt */
Horatio.Wordlists.enter_exit_exeunt = [ "Enter", "Exit", "Exeunt" ];

/** First Person */
Horatio.Wordlists.first_person = [ "I", "i", "me" ];

/** First Person Possessive */
Horatio.Wordlists.first_person_possessive = [ "mine", "my" ];

/** First Person Reflexive */
Horatio.Wordlists.first_person_reflexive = [ "myself" ];

/** Negative Adjective */
Horatio.Wordlists.negative_adjectives = [ "bad", "big", "cowardly", "cursed", "damned", "dirty", "disgusting", "distasteful", "dusty", "evil", "fat", "fat-kidneyed", "fatherless", "foul", "hairy", "half-witted", "horrible", "horrid", "infected", "lying", "miserable", "misused", "oozing", "rotten", "smelly", "snotty", "sorry", "stinking", "stuffed", "stupid", "vile", "villainous", "worried" ];

/** Negative Comparatives */
Horatio.Wordlists.negative_comparatives = [ "punier", "smaller", "worse" ];

/** Negative Nouns */
Horatio.Wordlists.negative_nouns = [ "Hell", "Microsoft", "bastard", "beggar", "blister", "codpiece", "coward", "curse", "death", "devil", "draught", "famine", "flirt-gill", "goat", "hate", "hog", "hound", "leech", "lie", "pig", "plague", "starvation", "toad", "war", "wolf" ];

/** Nothing */
Horatio.Wordlists.nothing = [ "nothing", "zero" ];

/** Positive Adjectives */
Horatio.Wordlists.positive_adjectives = [ "amazing", "beautiful", "blossoming", "bold", "brave", "charming", "clearest", "cunning", "cute", "delicious", "embroidered", "fair", "fine", "gentle", "golden", "good", "handsome", "happy", "healthy", "honest", "lovely", "loving", "mighty", "noble", "peaceful", "pretty", "prompt", "proud", "reddest", "rich", "smooth", "sunny", "sweet", "sweetest", "trustworthy", "warm" ];

/** Positive Comparatives */
Horatio.Wordlists.positive_comparatives = [ "better", "bigger", "fresher", "friendlier", "nicer", "jollier" ];

/** Positive Nouns */
Horatio.Wordlists.positive_nouns = [ "Heaven", "King", "Lord", "angel", "flower", "happiness", "joy", "plum", "summer's day", "hero", "rose", "kingdom", "pony" ];

/** Roman Numerals */
Horatio.Wordlists.roman_numerals = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX" ];

/** Second Person */
Horatio.Wordlists.second_person = [ "thee", "thou", "you" ];

/** Second Person Possessive */
Horatio.Wordlists.second_person_possessive = [ "thine", "thy", "your" ];

/** Second Person Reflexive */
Horatio.Wordlists.second_person_reflexive = [ "thyself", "yourself" ];

/** Terminals */
Horatio.Wordlists.terminals = [ ":", ",", "[", ".", "?", "]" ];

Horatio.Wordlists.line_terminals = [ "\\.", "?", "!", "\\]" ];

Horatio.Wordlists.character_terminal = ",";

/** Third Person Possessive */
Horatio.Wordlists.third_person_possessive = [ "his", "her", "its", "their" ];