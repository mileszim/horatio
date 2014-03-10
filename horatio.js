/**
 * Horatio
 * A Javascript compiler for the Shakespeare Programming Language
 *
 * @author Miles Zimmerman
 */
var Horatio = Horatio || {};

/**
 * Tokens
 */
Horatio.Token = function(token, sequence) {
    this.token = token;
    this.sequence = sequence;
};

Horatio.Token.prototype = {
    /**
   * Token Constants
   */
    CHARACTER: function() {
        return this.token === 1;
    },
    ARTICLE: function() {
        return this.token === 2;
    },
    BE: function() {
        return this.token === 3;
    },
    ACT: function() {
        return this.token === 4;
    },
    SCENE: function() {
        return this.token === 5;
    },
    ENTER: function() {
        return this.token === 6;
    },
    EXIT: function() {
        return this.token === 7;
    },
    EXEUNT: function() {
        return this.token === 8;
    },
    INPUT: function() {
        return this.token === 9;
    },
    OUTPUT: function() {
        return this.token === 10;
    },
    IMPERATIVE: function() {
        return this.token === 11;
    },
    TO: function() {
        return this.token === 12;
    },
    RETURN: function() {
        return this.token === 13;
    },
    POSITIVE_COMPARATIVE: function() {
        return this.token === 14;
    },
    NEGATIVE_COMPARATIVE: function() {
        return this.token === 15;
    },
    AS: function() {
        return this.token === 16;
    },
    NOT: function() {
        return this.token === 17;
    },
    THAN: function() {
        return this.token === 18;
    },
    IF_SO: function() {
        return this.token === 19;
    },
    UNARY_OPERATOR: function() {
        return this.token === 20;
    },
    ARITHMETIC_OPERATOR: function() {
        return this.token === 21;
    },
    REMEMBER: function() {
        return this.token === 22;
    },
    RECALL: function() {
        return this.token === 23;
    },
    FIRST_PERSON_PRONOUN: function() {
        return this.token === 24;
    },
    SECOND_PERSON_PRONOUN: function() {
        return this.token === 25;
    },
    POSITIVE_ADJECTIVE: function() {
        return this.token === 26;
    },
    NEUTRAL_ADJECTIVE: function() {
        return this.token === 27;
    },
    NEGATIVE_ADJECTIVE: function() {
        return this.token === 28;
    },
    POSITIVE_NOUN: function() {
        return this.token === 29;
    },
    NEUTRAL_NOUN: function() {
        return this.token === 30;
    },
    NEGATIVE_NOUN: function() {
        return this.token === 31;
    },
    ROMAN_NUMERAL: function() {
        return this.token === 32;
    },
    COLON: function() {
        return this.token === 33;
    },
    COMMA: function() {
        return this.token === 34;
    },
    PERIOD: function() {
        return this.token === 35;
    },
    EXCLAMATION_POINT: function() {
        return this.token === 36;
    },
    QUESTION_MARK: function() {
        return this.token === 37;
    },
    AMPERSAND: function() {
        return this.token === 38;
    },
    AND: function() {
        return this.token === 39;
    },
    LEFT_BRACKET: function() {
        return this.token === 40;
    },
    RIGHT_BRACKET: function() {
        return this.token === 41;
    },
    COMMENT: function() {
        return this.token === 42;
    }
};

/**
 * Tokenizer
 */
Horatio.Tokenizer = function() {
    this.tokens = [];
    this.dictionary = {};
    this.buildDictionary();
};

Horatio.Tokenizer.prototype = {
    tokenize: function(input) {
        // strip all newlines/extra whitespace
        input = input.trim().replace(/[\s\n]+/g, " ");
        // replace terminals
        input = input.replace(/[:,.!?\[\]]/g, function(match) {
            switch (match) {
              case ":":
                return " COLON";
                break;

              case ",":
                return " COMMA";
                break;

              case ".":
                return " PERIOD";
                break;

              case "!":
                return " EXCLAMATION_POINT";
                break;

              case "?":
                return " QUESTION_MARK";
                break;

              case "[":
                return " LEFT_BRACKET";
                break;

              case "]":
                return " RIGHT_BRACKET";
                break;
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
                        input_array.splice(0, br + 1);
                    }
                    br += 1;
                }
                // comment
                if (br === 6) this.tokens.push(new Horatio.Token(42, orig));
            }
        }
        console.log(this.tokens);
    },
    buildDictionary: function() {
        var self = this;
        var wl = Horatio.Wordlists;
        wl.characters.forEach(function(w) {
            self.dictionary[w] = 1;
        });
        wl.articles.forEach(function(w) {
            self.dictionary[w] = 2;
        });
        wl.be.forEach(function(w) {
            self.dictionary[w] = 3;
        });
        wl.act.forEach(function(w) {
            self.dictionary[w] = 4;
        });
        wl.scene.forEach(function(w) {
            self.dictionary[w] = 5;
        });
        wl.enter.forEach(function(w) {
            self.dictionary[w] = 6;
        });
        wl.exit.forEach(function(w) {
            self.dictionary[w] = 7;
        });
        wl.exeunt.forEach(function(w) {
            self.dictionary[w] = 8;
        });
        wl.input.forEach(function(w) {
            self.dictionary[w] = 9;
        });
        wl.output.forEach(function(w) {
            self.dictionary[w] = 10;
        });
        wl.imperatives.forEach(function(w) {
            self.dictionary[w] = 11;
        });
        wl.to.forEach(function(w) {
            self.dictionary[w] = 12;
        });
        wl.return.forEach(function(w) {
            self.dictionary[w] = 13;
        });
        wl.positive_comparatives.forEach(function(w) {
            self.dictionary[w] = 14;
        });
        wl.negative_comparatives.forEach(function(w) {
            self.dictionary[w] = 15;
        });
        wl.as.forEach(function(w) {
            self.dictionary[w] = 16;
        });
        wl.not.forEach(function(w) {
            self.dictionary[w] = 17;
        });
        wl.than.forEach(function(w) {
            self.dictionary[w] = 18;
        });
        wl.if_so.forEach(function(w) {
            self.dictionary[w] = 19;
        });
        wl.unary_operators.forEach(function(w) {
            self.dictionary[w] = 20;
        });
        wl.arithmetic_operators.forEach(function(w) {
            self.dictionary[w] = 21;
        });
        wl.remember.forEach(function(w) {
            self.dictionary[w] = 22;
        });
        wl.recall.forEach(function(w) {
            self.dictionary[w] = 23;
        });
        wl.first_person_pronouns.forEach(function(w) {
            self.dictionary[w] = 24;
        });
        wl.second_person_pronouns.forEach(function(w) {
            self.dictionary[w] = 25;
        });
        wl.positive_adjectives.forEach(function(w) {
            self.dictionary[w] = 26;
        });
        wl.neutral_adjectives.forEach(function(w) {
            self.dictionary[w] = 27;
        });
        wl.negative_adjectives.forEach(function(w) {
            self.dictionary[w] = 28;
        });
        wl.positive_nouns.forEach(function(w) {
            self.dictionary[w] = 29;
        });
        wl.neutral_nouns.forEach(function(w) {
            self.dictionary[w] = 30;
        });
        wl.negative_nouns.forEach(function(w) {
            self.dictionary[w] = 31;
        });
        wl.roman_numerals.forEach(function(w) {
            self.dictionary[w] = 32;
        });
        wl.colon.forEach(function(w) {
            self.dictionary[w] = 33;
        });
        wl.comma.forEach(function(w) {
            self.dictionary[w] = 34;
        });
        wl.period.forEach(function(w) {
            self.dictionary[w] = 35;
        });
        wl.exclamation_point.forEach(function(w) {
            self.dictionary[w] = 36;
        });
        wl.question_mark.forEach(function(w) {
            self.dictionary[w] = 37;
        });
        wl.ampersand.forEach(function(w) {
            self.dictionary[w] = 38;
        });
        wl.and.forEach(function(w) {
            self.dictionary[w] = 39;
        });
        wl.left_bracket.forEach(function(w) {
            self.dictionary[w] = 40;
        });
        wl.right_bracket.forEach(function(w) {
            self.dictionary[w] = 41;
        });
    }
};

/**
 * Horatio Wordlists
 * Holds syntax for parsing.
 * 
 * Loaded from includes/wordlists/ at make
 */
Horatio.Wordlists = {};

/** Act and Scene */
Horatio.Wordlists.act = [ "Act" ];

Horatio.Wordlists.scene = [ "Scene" ];

Horatio.Wordlists.arithmetic_operators = [ "the sum of", "the difference between", "the product of", "the quotient between", "the remainder of the quotient between" ];

/** Articles **/
Horatio.Wordlists.articles = [ "a", "an", "the" ];

/** Be */
Horatio.Wordlists.be = [ "Thou art", "You are", "I am" ];

/** Characters */
Horatio.Wordlists.characters = [ "Achilles", "Adonis", "Adriana", "Aegeon", "Aemilia", "Agamemnon", "Agrippa", "Ajax", "Alonso", "Andromache", "Angelo", "Antiochus", "Antonio", "Arthur", "Autolycus", "Balthazar", "Banquo", "Beatrice", "Benedick", "Benvolio", "Bianca", "Brabantio", "Brutus", "Capulet", "Cassandra", "Cassius", "Christopher Sly", "Cicero", "Claudio", "Claudius", "Cleopatra", "Cordelia", "Cornelius", "Cressida", "Cymberline", "Demetrius", "Desdemona", "Dionyza", "Doctor Caius", "Dogberry", "Don John", "Don Pedro", "Donalbain", "Dorcas", "Duncan", "Egeus", "Emilia", "Escalus", "Falstaff", "Fenton", "Ferdinand", "Ford", "Fortinbras", "Francisca", "Friar John", "Friar Laurence", "Gertrude", "Goneril", "Hamlet", "Hecate", "Hector", "Helen", "Helena", "Hermia", "Hermonie", "Hippolyta", "Horatio", "Imogen", "Isabella", "John of Gaunt", "John of Lancaster", "Julia", "Juliet", "Julius Caesar", "King Henry", "King John", "King Lear", "King Richard", "Lady Capulet", "Lady Macbeth", "Lady Macduff", "Lady Montague", "Lennox", "Leonato", "Luciana", "Lucio", "Lychorida", "Lysander", "Macbeth", "Macduff", "Malcolm", "Mariana", "Mark Antony", "Mercutio", "Miranda", "Mistress Ford", "Mistress Overdone", "Mistress Page", "Montague", "Mopsa", "Oberon", "Octavia", "Octavius Caesar", "Olivia", "Ophelia", "Orlando", "Orsino", "Othello", "Page", "Pantino", "Paris", "Pericles", "Pinch", "Polonius", "Pompeius", "Portia", "Priam", "Prince Henry", "Prospero", "Proteus", "Publius", "Puck", "Queen Elinor", "Regan", "Robin", "Romeo", "Rosalind", "Sebastian", "Shallow", "Shylock", "Slender", "Solinus", "Stephano", "Thaisa", "The Abbot of Westminster", "The Apothecary", "The Archbishop of Canterbury", "The Duke of Milan", "The Duke of Venice", "The Ghost", "Theseus", "Thurio", "Timon", "Titania", "Titus", "Troilus", "Tybalt", "Ulysses", "Valentine", "Venus", "Vincentio", "Viola" ];

/** Enter, Exit, and Exeunt */
Horatio.Wordlists.enter = [ "Enter" ];

Horatio.Wordlists.exit = [ "Exit" ];

Horatio.Wordlists.exeunt = [ "Exeunt" ];

/** First Person */
Horatio.Wordlists.first_person = [ "I", "i", "me" ];

/** First Person Possessive */
Horatio.Wordlists.first_person_possessive = [ "mine", "my" ];

/** First Person Reflexive */
Horatio.Wordlists.first_person_reflexive = [ "myself" ];

Horatio.Wordlists.imperatives = [ "Let us", "let us", "We shall", "we shall", "We must", "we must" ];

Horatio.Wordlists.to = [ "to" ];

Horatio.Wordlists.return = [ "proceed", "return" ];

Horatio.Wordlists.input = [ "Listen to your heart", "Open your mind" ];

Horatio.Wordlists.output = [ "Open your heart", "Speak your mind" ];

Horatio.Wordlists.as = [ "as" ];

Horatio.Wordlists.not = [ "not" ];

Horatio.Wordlists.than = [ "than" ];

Horatio.Wordlists.if_so = [ "If so" ];

Horatio.Wordlists.and = [ "and" ];

/** Negative Adjective */
Horatio.Wordlists.negative_adjectives = [ "bad", "big", "cowardly", "cursed", "damned", "dirty", "disgusting", "distasteful", "dusty", "evil", "fat", "fat-kidneyed", "fatherless", "foul", "hairy", "half-witted", "horrible", "horrid", "infected", "lying", "miserable", "misused", "oozing", "rotten", "smelly", "snotty", "sorry", "stinking", "stuffed", "stupid", "vile", "villainous", "worried" ];

/** Negative Comparatives */
Horatio.Wordlists.negative_comparatives = [ "punier", "smaller", "worse" ];

/** Negative Nouns */
Horatio.Wordlists.negative_nouns = [ "Hell", "Microsoft", "bastard", "beggar", "blister", "codpiece", "coward", "curse", "death", "devil", "draught", "famine", "flirt-gill", "goat", "hate", "hog", "hound", "leech", "lie", "pig", "plague", "starvation", "toad", "war", "wolf" ];

Horatio.Wordlists.neutral_adjectives = [ "big", "black", "blue", "bluest", "bottomless", "furry", "green", "hard", "huge", "large", "little", "normal", "old", "purple", "red", "rural", "small", "tiny", "white", "yellow" ];

Horatio.Wordlists.neutral_nouns = [ "animal", "aunt", "brother", "cat", "chihuahua", "cousin", "cow", "daughter", "door", "face", "father", "fellow", "granddaughter", "grandfather", "grandmother", "grandson", "hair", "hamster", "horse", "lamp", "lantern", "mistletoe", "moon", "morning", "mother", "nephew", "niece", "nose", "purse", "road", "roman", "sister", "sky", "son", "squirrel", "stone wall", "thing", "town", "tree", "uncle", "wind" ];

/** Nothing */
Horatio.Wordlists.nothing = [ "nothing", "zero" ];

/** Positive Adjectives */
Horatio.Wordlists.positive_adjectives = [ "amazing", "beautiful", "blossoming", "bold", "black", "brave", "charming", "clearest", "cunning", "cute", "delicious", "embroidered", "fair", "fine", "gentle", "golden", "good", "handsome", "happy", "healthy", "honest", "little", "lovely", "loving", "mighty", "noble", "old", "peaceful", "pretty", "prompt", "proud", "reddest", "rich", "rural", "smooth", "sunny", "sweet", "sweetest", "trustworthy", "tiny", "warm" ];

/** Positive Comparatives */
Horatio.Wordlists.positive_comparatives = [ "better", "bigger", "fresher", "friendlier", "nicer", "jollier" ];

/** Positive Nouns */
Horatio.Wordlists.positive_nouns = [ "Heaven", "King", "Lord", "angel", "flower", "happiness", "joy", "plum", "summer's day", "hero", "rose", "kingdom", "pony", "cat" ];

Horatio.Wordlists.first_person_pronouns = [ "I", "myself", "me" ];

Horatio.Wordlists.second_person_pronouns = [ "you", "yourself", "thy", "thee", "thou" ];

/** Roman Numerals */
Horatio.Wordlists.roman_numerals = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX" ];

/** Second Person */
Horatio.Wordlists.second_person = [ "thee", "thou", "you" ];

/** Second Person Possessive */
Horatio.Wordlists.second_person_possessive = [ "thine", "thy", "your" ];

/** Second Person Reflexive */
Horatio.Wordlists.second_person_reflexive = [ "thyself", "yourself" ];

Horatio.Wordlists.remember = [ "Remember" ];

Horatio.Wordlists.recall = [ "Recall" ];

/** Terminals
Horatio.Wordlists.terminals = [
  ":",
  ",",
  "[",
  "\.",
  "?",
  "]"
];

Horatio.Wordlists.line_terminals = [
  '\\.',
  "?",
  "!",
  '\\]'
];

Horatio.Wordlists.character_terminal = ",";
*/
Horatio.Wordlists.colon = [ "COLON" ];

Horatio.Wordlists.comma = [ "COMMA" ];

Horatio.Wordlists.period = [ "PERIOD" ];

Horatio.Wordlists.exclamation_point = [ "EXCLAMATION_POINT" ];

Horatio.Wordlists.question_mark = [ "QUESTION_MARK" ];

Horatio.Wordlists.ampersand = [ "&" ];

Horatio.Wordlists.left_bracket = [ "LEFT_BRACKET" ];

Horatio.Wordlists.right_bracket = [ "RIGHT_BRACKET" ];

/** Third Person Possessive */
Horatio.Wordlists.third_person_possessive = [ "his", "her", "its", "their" ];

Horatio.Wordlists.unary_operators = [ "the square of", "the cube of", "the square root of", "the factorial of", "twice" ];