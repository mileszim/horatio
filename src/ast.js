/**
 * Abstract Syntax Trees
 */
Horatio.AST = {
  
  Program: function(comment, declaration, part) {
    this.comment     = comment;
    this.declaration = declaration;
    this.part        = part;
  },
  
  
  Comment: function(text) {
    this.text = text;
  },
  
  
  Declaration: function(character, comment) {
    this.character = character;
    this.comment   = comment;
  },
  
  
  DeclarationList: function(d1, d2) {
    this.d1 = d1;
    this.d2 = d2;
  },
  
  
  Part: function(numeral, comment, subpart) {
    this.numeral = numeral;
    this.comment = comment;
    this.subpart = subpart;
  },
  
  PartList: function(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  },
  
  
  SubPart: function(numeral, comment, stage) {
    this.numeral = numeral;
    this.comment = comment;
    this.stage   = stage;
  },
  
  SubPartList: function(s1, s2) {
    this.s1 = s1;
    this.s2 = s2;
  },
  
  
  Stage: function(dialogue, initial_presence, final_presence) {
    this.dialogue         = dialogue;
    this.initial_presence = initial_presence;
    this.final_presence   = final_presence;
  },
  
  
  Presence: function(type, c1, c2) {
    this.type = type;
    this.c1   = c1;
    this.c2   = c2;
  },
  
  
  Dialogue: function(line1,line2) {
    this.line1 = line1;
  }
  
};