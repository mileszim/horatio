/**
 * Horatio
 * A Javascript compiler for the Shakespeare Programming Language
 *
 * @author Miles Zimmerman
 */
var Horatio = Horatio || {};

/**
 * Horatio Parser
 */
Horatio.Parser = {
    test: function() {
        console.log(Horatio.Parser.Wordlists.characters);
    }
};

/**
 * Horatio Wordlists
 * Holds syntax for parsing.
 */
Horatio.Parser.Wordlists = {};

/** Act and Scene */
Horatio.Parser.Wordlists.act_and_scene = [ "Act", "Scene" ];

/** Articles **/
Horatio.Parser.Wordlists.articles = [ "a", "an", "the" ];

/** Be */
Horatio.Parser.Wordlists.be = [ "am", "are", "art", "be", "is" ];

/** Characters */
Horatio.Parser.Wordlists.characters = [ "Achilles", "Adonis", "Adriana", "Aegeon", "Aemilia", "Agamemnon", "Agrippa", "Ajax", "Alonso", "Andromache", "Angelo", "Antiochus", "Antonio", "Arthur", "Autolycus", "Balthazar", "Banquo", "Beatrice", "Benedick", "Benvolio", "Bianca", "Brabantio", "Brutus", "Capulet", "Cassandra", "Cassius", "Christopher Sly", "Cicero", "Claudio", "Claudius", "Cleopatra", "Cordelia", "Cornelius", "Cressida", "Cymberline", "Demetrius", "Desdemona", "Dionyza", "Doctor Caius", "Dogberry", "Don John", "Don Pedro", "Donalbain", "Dorcas", "Duncan", "Egeus", "Emilia", "Escalus", "Falstaff", "Fenton", "Ferdinand", "Ford", "Fortinbras", "Francisca", "Friar John", "Friar Laurence", "Gertrude", "Goneril", "Hamlet", "Hecate", "Hector", "Helen", "Helena", "Hermia", "Hermonie", "Hippolyta", "Horatio", "Imogen", "Isabella", "John of Gaunt", "John of Lancaster", "Julia", "Juliet", "Julius Caesar", "King Henry", "King John", "King Lear", "King Richard", "Lady Capulet", "Lady Macbeth", "Lady Macduff", "Lady Montague", "Lennox", "Leonato", "Luciana", "Lucio", "Lychorida", "Lysander", "Macbeth", "Macduff", "Malcolm", "Mariana", "Mark Antony", "Mercutio", "Miranda", "Mistress Ford", "Mistress Overdone", "Mistress Page", "Montague", "Mopsa", "Oberon", "Octavia", "Octavius Caesar", "Olivia", "Ophelia", "Orlando", "Orsino", "Othello", "Page", "Pantino", "Paris", "Pericles", "Pinch", "Polonius", "Pompeius", "Portia", "Priam", "Prince Henry", "Prospero", "Proteus", "Publius", "Puck", "Queen Elinor", "Regan", "Robin", "Romeo", "Rosalind", "Sebastian", "Shallow", "Shylock", "Slender", "Solinus", "Stephano", "Thaisa", "The Abbot of Westminster", "The Apothecary", "The Archbishop of Canterbury", "The Duke of Milan", "The Duke of Venice", "The Ghost", "Theseus", "Thurio", "Timon", "Titania", "Titus", "Troilus", "Tybalt", "Ulysses", "Valentine", "Venus", "Vincentio", "Viola" ];

/** Enter, Exit, and Exeunt */
Horatio.Parser.Wordlists.enter_exit_exeunt = [ "Enter", "Exit", "Exeunt" ];

/** First Person */
Horatio.Parser.Wordlists.first_person = [ "I", "me" ];

/** First Person Possessive */
Horatio.Parser.Wordlists.first_person_possessive = [ "mine", "my" ];

/** First Person Reflexive */
Horatio.Parser.Wordlists.first_person_reflexive = [ "myself" ];

/** Negative Adjective */
Horatio.Parser.Wordlists.negative_adjectives = [ "bad", "cowardly", "cursed", "damned", "dirty", "disgusting", "distasteful", "dusty", "evil", "fat", "fat-kidneyed", "fatherless", "foul", "hairy", "half-witted", "horrible", "horrid", "infected", "lying", "miserable", "misused", "oozing", "rotten", "smelly", "snotty", "sorry", "stinking", "stuffed", "stupid", "vile", "villainous", "worried" ];

/** Negative Comparatives */
Horatio.Parser.Wordlists.negative_comparatives = [ "punier", "smaller", "worse" ];

/** Negative Nouns */
Horatio.Parser.Wordlists.negative_nouns = [ "Hell", "Microsoft", "bastard", "beggar", "blister", "codpiece", "coward", "curse", "death", "devil", "draught", "famine", "flirt-gill", "goat", "hate", "hog", "hound", "leech", "lie", "pig", "plague", "starvation", "toad", "war", "wolf" ];

/** Nothing */
Horatio.Parser.Wordlists.nothing = [ "nothing", "zero" ];

/** Positive Adjectives */
Horatio.Parser.Wordlists.positive_adjectives = [ "amazing", "beautiful", "blossoming", "bold", "brave", "charming", "clearest", "cunning", "cute", "delicious", "embroidered", "fair", "fine", "gentle", "golden", "good", "handsome", "happy", "healthy", "honest", "lovely", "loving", "mighty", "noble", "peaceful", "pretty", "prompt", "proud", "reddest", "rich", "smooth", "sunny", "sweet", "sweetest", "trustworthy", "warm" ];

/** Positive Comparatives */
Horatio.Parser.Wordlists.positive_comparatives = [ "better", "bigger", "fresher", "friendlier", "nicer", "jollier" ];

/** Positive Nouns */
Horatio.Parser.Wordlists.positive_nouns = [ "Heaven", "King", "Lord", "angel", "flower", "happiness", "joy", "plum", "summer's day", "hero", "rose", "kingdom", "pony" ];

/** Roman Numerals */
Horatio.Parser.Wordlists.roman_numerals = [ "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX" ];

/** Second Person */
Horatio.Parser.Wordlists.second_person = [ "thee", "thou", "you" ];

/** Second Person Possessive */
Horatio.Parser.Wordlists.second_person_possessive = [ "thine", "thy", "your" ];

/** Second Person Reflexive */
Horatio.Parser.Wordlists.second_person_reflexive = [ "thyself", "yourself" ];

/** Terminals */
Horatio.Parser.Wordlists.terminals = [ ":", ",", "[", ".", "?", "]" ];

/** Third Person Possessive */
Horatio.Parser.Wordlists.third_person_possessive = [ "his", "her", "its", "their" ];