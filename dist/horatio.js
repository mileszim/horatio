(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Horatio AST
 * @namespace
 */

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Comment}             comment
 * @param {Array.<Horatio.AST.Declaration>} declarations
 * @param {Array.<Horatio.AST.Part>}        parts
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Program = (function () {
  function Program(comment, declarations, parts) {
    _classCallCheck(this, Program);

    this.comment = comment;
    this.declarations = declarations;
    this.parts = parts;
  }

  _createClass(Program, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitProgram(this, arg);
    }
  }]);

  return Program;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character
 * @param {Horatio.AST.Comment}   comment
 */

var Declaration = (function () {
  function Declaration(character, comment) {
    _classCallCheck(this, Declaration);

    this.character = character;
    this.comment = comment;
  }

  _createClass(Declaration, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitDeclaration(this, arg);
    }
  }]);

  return Declaration;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral}         numeral
 * @param {Horatio.AST.Comment}         comment
 * @param {Array.<Horatio.AST.Subpart>} subparts
 */

var Part = (function () {
  function Part(numeral, comment, subparts) {
    _classCallCheck(this, Part);

    this.numeral = numeral;
    this.comment = comment;
    this.subparts = subparts;
  }

  _createClass(Part, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPart(this, arg);
    }
  }]);

  return Part;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral} numeral
 * @param {Horatio.AST.Comment} comment
 * @param {Horatio.AST.Stage}   stage
 */

var Subpart = (function () {
  function Subpart(numeral, comment, stage) {
    _classCallCheck(this, Subpart);

    this.numeral = numeral;
    this.comment = comment;
    this.stage = stage;
  }

  _createClass(Subpart, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitSubpart(this, arg);
    }
  }]);

  return Subpart;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Dialogue}                                  dialogue
 * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} start_presence
 * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} end_presence
 */

var Stage = (function () {
  function Stage(dialogue, start_presence, end_presence) {
    _classCallCheck(this, Stage);

    this.dialogue = dialogue;
    this.start_presence = start_presence;
    this.end_presence = end_presence;
  }

  _createClass(Stage, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitStage(this, arg);
    }
  }]);

  return Stage;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character_1
 * @param {Horatio.AST.Character} character_2
 */

var Enter = (function () {
  function Enter(character_1, character_2) {
    _classCallCheck(this, Enter);

    this.character_1 = character_1;
    this.character_2 = character_2;
  }

  _createClass(Enter, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitEnter(this, arg);
    }
  }]);

  return Enter;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character
 */

var Exit = (function () {
  function Exit(character) {
    _classCallCheck(this, Exit);

    this.character = character;
  }

  _createClass(Exit, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitExit(this, arg);
    }
  }]);

  return Exit;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character_1
 * @param {Horatio.AST.Character} character_2
 */

var Exeunt = (function () {
  function Exeunt(character_1, character_2) {
    _classCallCheck(this, Exeunt);

    this.character_1 = character_1;
    this.character_2 = character_2;
  }

  _createClass(Exeunt, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitExeunt(this, arg);
    }
  }]);

  return Exeunt;
})();

/**
 * @memberof Horatio.AST
 * @param {Array.<Horatio.AST.Line>} lines
 */

var Dialogue = (function () {
  function Dialogue(lines) {
    _classCallCheck(this, Dialogue);

    this.lines = lines;
  }

  _createClass(Dialogue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitDialogue(this, arg);
    }
  }]);

  return Dialogue;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character}         character
 * @param {Array.<Horatio.AST.Sentences>} sentences
 */

var Line = (function () {
  function Line(character, sentences) {
    _classCallCheck(this, Line);

    this.character = character;
    this.sentences = sentences;
  }

  _createClass(Line, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitLine(this, arg);
    }
  }]);

  return Line;
})();

/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral} numeral
 */

var Goto = (function () {
  function Goto(numeral) {
    _classCallCheck(this, Goto);

    this.numeral = numeral;
  }

  _createClass(Goto, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitGoto(this, arg);
    }
  }]);

  return Goto;
})();

/**
 * @memberof Horatio.AST
 */

var AssignmentSentence = (function () {
  function AssignmentSentence(be, value) {
    _classCallCheck(this, AssignmentSentence);

    this.be = be;
    this.value = value;
  }

  _createClass(AssignmentSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitAssignmentSentence(this, arg);
    }
  }]);

  return AssignmentSentence;
})();

/**
 * @memberof Horatio.AST
 */

var QuestionSentence = (function () {
  function QuestionSentence(be, comparison, value) {
    _classCallCheck(this, QuestionSentence);

    this.be = be;
    this.comparison = comparison;
    this.value = value;
  }

  _createClass(QuestionSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitQuestionSentence(this, arg);
    }
  }]);

  return QuestionSentence;
})();

/**
 * @memberof Horatio.AST
 */

var ResponseSentence = (function () {
  function ResponseSentence(goto) {
    _classCallCheck(this, ResponseSentence);

    this.goto = goto;
  }

  _createClass(ResponseSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitResponseSentence(this, arg);
    }
  }]);

  return ResponseSentence;
})();

/**
 * @memberof Horatio.AST
 */

var GotoSentence = (function () {
  function GotoSentence(goto) {
    _classCallCheck(this, GotoSentence);

    this.goto = goto;
  }

  _createClass(GotoSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitGotoSentence(this, arg);
    }
  }]);

  return GotoSentence;
})();

/**
 * @memberof Horatio.AST
 */

var IntegerInputSentence = (function () {
  function IntegerInputSentence(sequence) {
    _classCallCheck(this, IntegerInputSentence);

    this.sequence = sequence;
  }

  _createClass(IntegerInputSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitIntegerInputSentence(this, arg);
    }
  }]);

  return IntegerInputSentence;
})();

/**
 * @memberof Horatio.AST
 */

var CharInputSentence = (function () {
  function CharInputSentence(sequence) {
    _classCallCheck(this, CharInputSentence);

    this.sequence = sequence;
  }

  _createClass(CharInputSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitCharInputSentence(this, arg);
    }
  }]);

  return CharInputSentence;
})();

/**
 * @memberof Horatio.AST
 */

var IntegerOutputSentence = (function () {
  function IntegerOutputSentence(sequence) {
    _classCallCheck(this, IntegerOutputSentence);

    this.sequence = sequence;
  }

  _createClass(IntegerOutputSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitIntegerOutputSentence(this, arg);
    }
  }]);

  return IntegerOutputSentence;
})();

/**
 * @memberof Horatio.AST
 */

var CharOutputSentence = (function () {
  function CharOutputSentence(sequence) {
    _classCallCheck(this, CharOutputSentence);

    this.sequence = sequence;
  }

  _createClass(CharOutputSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitCharOutputSentence(this, arg);
    }
  }]);

  return CharOutputSentence;
})();

/**
 * @memberof Horatio.AST
 */

var RememberSentence = (function () {
  function RememberSentence(pronoun) {
    _classCallCheck(this, RememberSentence);

    this.pronoun = pronoun;
  }

  _createClass(RememberSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitRememberSentence(this, arg);
    }
  }]);

  return RememberSentence;
})();

/**
 * @memberof Horatio.AST
 */

var RecallSentence = (function () {
  function RecallSentence(comment) {
    _classCallCheck(this, RecallSentence);

    this.comment = comment;
  }

  _createClass(RecallSentence, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitRecallSentence(this, arg);
    }
  }]);

  return RecallSentence;
})();

/**
 * @memberof Horatio.AST
 */

var PositiveConstantValue = (function () {
  function PositiveConstantValue(noun, adjectives) {
    _classCallCheck(this, PositiveConstantValue);

    this.noun = noun;
    this.adjectives = adjectives;
  }

  _createClass(PositiveConstantValue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPositiveConstantValue(this, arg);
    }
  }]);

  return PositiveConstantValue;
})();

/**
 * @memberof Horatio.AST
 */

var NegativeConstantValue = (function () {
  function NegativeConstantValue(noun, adjectives) {
    _classCallCheck(this, NegativeConstantValue);

    this.noun = noun;
    this.adjectives = adjectives;
  }

  _createClass(NegativeConstantValue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNegativeConstantValue(this, arg);
    }
  }]);

  return NegativeConstantValue;
})();

/**
 * @memberof Horatio.AST
 */

var UnaryOperationValue = (function () {
  function UnaryOperationValue(operator, value) {
    _classCallCheck(this, UnaryOperationValue);

    this.operator = operator;
    this.value = value;
  }

  _createClass(UnaryOperationValue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitUnaryOperationValue(this, arg);
    }
  }]);

  return UnaryOperationValue;
})();

/**
 * @memberof Horatio.AST
 */

var ArithmeticOperationValue = (function () {
  function ArithmeticOperationValue(operator, value_1, value_2) {
    _classCallCheck(this, ArithmeticOperationValue);

    this.operator = operator;
    this.value_1 = value_1;
    this.value_2 = value_2;
  }

  _createClass(ArithmeticOperationValue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitArithmeticOperationValue(this, arg);
    }
  }]);

  return ArithmeticOperationValue;
})();

/**
 * @memberof Horatio.AST
 */

var PronounValue = (function () {
  function PronounValue(pronoun) {
    _classCallCheck(this, PronounValue);

    this.pronoun = pronoun;
  }

  _createClass(PronounValue, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPronounValue(this, arg);
    }
  }]);

  return PronounValue;
})();

/**
 * @memberof Horatio.AST
 */

var GreaterThanComparison = (function () {
  function GreaterThanComparison(comparative) {
    _classCallCheck(this, GreaterThanComparison);

    this.comparative = comparative;
  }

  _createClass(GreaterThanComparison, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitGreaterThanComparison(this, arg);
    }
  }]);

  return GreaterThanComparison;
})();

/**
 * @memberof Horatio.AST
 */

var LesserThanComparison = (function () {
  function LesserThanComparison(comparative) {
    _classCallCheck(this, LesserThanComparison);

    this.comparative = comparative;
  }

  _createClass(LesserThanComparison, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitLesserThanComparison(this, arg);
    }
  }]);

  return LesserThanComparison;
})();

/**
 * @memberof Horatio.AST
 */

var EqualToComparison = (function () {
  function EqualToComparison(adjective) {
    _classCallCheck(this, EqualToComparison);

    this.adjective = adjective;
  }

  _createClass(EqualToComparison, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitEqualToComparison(this, arg);
    }
  }]);

  return EqualToComparison;
})();

/**
 * @memberof Horatio.AST
 */

var InverseComparison = (function () {
  function InverseComparison(comparison) {
    _classCallCheck(this, InverseComparison);

    this.comparison = comparison;
  }

  _createClass(InverseComparison, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitInverseComparison(this, arg);
    }
  }]);

  return InverseComparison;
})();

/**
 * @memberof Horatio.AST
 */

var Comment = (function () {
  function Comment(sequence) {
    _classCallCheck(this, Comment);

    this.sequence = sequence;
  }

  _createClass(Comment, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitComment(this, arg);
    }
  }]);

  return Comment;
})();

/**
 * @memberof Horatio.AST
 */

var Numeral = (function () {
  function Numeral(sequence) {
    _classCallCheck(this, Numeral);

    this.sequence = sequence;
  }

  _createClass(Numeral, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNumeral(this, arg);
    }
  }]);

  return Numeral;
})();

/**
 * @memberof Horatio.AST
 */

var Character = (function () {
  function Character(sequence) {
    _classCallCheck(this, Character);

    this.sequence = sequence;
  }

  _createClass(Character, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitCharacter(this, arg);
    }
  }]);

  return Character;
})();

/**
 * @memberof Horatio.AST
 */

var FirstPersonPronoun = (function () {
  function FirstPersonPronoun(sequence) {
    _classCallCheck(this, FirstPersonPronoun);

    this.sequence = sequence;
  }

  _createClass(FirstPersonPronoun, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitFirstPersonPronoun(this, arg);
    }
  }]);

  return FirstPersonPronoun;
})();

/**
 * @memberof Horatio.AST
 */

var SecondPersonPronoun = (function () {
  function SecondPersonPronoun(sequence) {
    _classCallCheck(this, SecondPersonPronoun);

    this.sequence = sequence;
  }

  _createClass(SecondPersonPronoun, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitSecondPersonPronoun(this, arg);
    }
  }]);

  return SecondPersonPronoun;
})();

/**
 * @memberof Horatio.AST
 */

var PositiveNoun = (function () {
  function PositiveNoun(sequence) {
    _classCallCheck(this, PositiveNoun);

    this.sequence = sequence;
  }

  _createClass(PositiveNoun, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPositiveNoun(this, arg);
    }
  }]);

  return PositiveNoun;
})();

/**
 * @memberof Horatio.AST
 */

var NeutralNoun = (function () {
  function NeutralNoun(sequence) {
    _classCallCheck(this, NeutralNoun);

    this.sequence = sequence;
  }

  _createClass(NeutralNoun, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNeutralNoun(this, arg);
    }
  }]);

  return NeutralNoun;
})();

/**
 * @memberof Horatio.AST
 */

var NegativeNoun = (function () {
  function NegativeNoun(sequence) {
    _classCallCheck(this, NegativeNoun);

    this.sequence = sequence;
  }

  _createClass(NegativeNoun, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNegativeNoun(this, arg);
    }
  }]);

  return NegativeNoun;
})();

/**
 * @memberof Horatio.AST
 */

var PositiveAdjective = (function () {
  function PositiveAdjective(sequence) {
    _classCallCheck(this, PositiveAdjective);

    this.sequence = sequence;
  }

  _createClass(PositiveAdjective, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPositiveAdjective(this, arg);
    }
  }]);

  return PositiveAdjective;
})();

/**
 * @memberof Horatio.AST
 */

var NeutralAdjective = (function () {
  function NeutralAdjective(sequence) {
    _classCallCheck(this, NeutralAdjective);

    this.sequence = sequence;
  }

  _createClass(NeutralAdjective, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNeutralAdjective(this, arg);
    }
  }]);

  return NeutralAdjective;
})();

/**
 * @memberof Horatio.AST
 */

var NegativeAdjective = (function () {
  function NegativeAdjective(sequence) {
    _classCallCheck(this, NegativeAdjective);

    this.sequence = sequence;
  }

  _createClass(NegativeAdjective, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNegativeAdjective(this, arg);
    }
  }]);

  return NegativeAdjective;
})();

/**
 * @memberof Horatio.AST
 */

var UnaryOperator = (function () {
  function UnaryOperator(sequence) {
    _classCallCheck(this, UnaryOperator);

    this.sequence = sequence;
  }

  _createClass(UnaryOperator, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitUnaryOperator(this, arg);
    }
  }]);

  return UnaryOperator;
})();

/**
 * @memberof Horatio.AST
 */

var ArithmeticOperator = (function () {
  function ArithmeticOperator(sequence) {
    _classCallCheck(this, ArithmeticOperator);

    this.sequence = sequence;
  }

  _createClass(ArithmeticOperator, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitArithmeticOperator(this, arg);
    }
  }]);

  return ArithmeticOperator;
})();

/**
 * @memberof Horatio.AST
 */

var PositiveComparative = (function () {
  function PositiveComparative(sequence) {
    _classCallCheck(this, PositiveComparative);

    this.sequence = sequence;
  }

  _createClass(PositiveComparative, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitPositiveComparative(this, arg);
    }
  }]);

  return PositiveComparative;
})();

/**
 * @memberof Horatio.AST
 */

var NegativeComparative = (function () {
  function NegativeComparative(sequence) {
    _classCallCheck(this, NegativeComparative);

    this.sequence = sequence;
  }

  _createClass(NegativeComparative, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitNegativeComparative(this, arg);
    }
  }]);

  return NegativeComparative;
})();

/**
 * @memberof Horatio.AST
 */

var Be = (function () {
  function Be(sequence) {
    _classCallCheck(this, Be);

    this.sequence = sequence;
  }

  _createClass(Be, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitBe(this, arg);
    }
  }]);

  return Be;
})();

/**
 * @memberof Horatio.AST
 */

var BeComparative = (function () {
  function BeComparative(sequence) {
    _classCallCheck(this, BeComparative);

    this.sequence = sequence;
  }

  _createClass(BeComparative, [{
    key: "visit",
    value: function visit(visitor, arg) {
      return visitor.visitBeComparative(this, arg);
    }
  }]);

  return BeComparative;
})();

/** Export */
exports["default"] = {
  Program: Program,
  Declaration: Declaration,
  Part: Part,
  Subpart: Subpart,
  Stage: Stage,
  Enter: Enter,
  Exit: Exit,
  Exeunt: Exeunt,
  Dialogue: Dialogue,
  Line: Line,
  Goto: Goto,
  AssignmentSentence: AssignmentSentence,
  QuestionSentence: QuestionSentence,
  ResponseSentence: ResponseSentence,
  GotoSentence: GotoSentence,
  IntegerInputSentence: IntegerInputSentence,
  IntegerOutputSentence: IntegerOutputSentence,
  CharOutputSentence: CharOutputSentence,
  RememberSentence: RememberSentence,
  RecallSentence: RecallSentence,
  PositiveConstantValue: PositiveConstantValue,
  NegativeConstantValue: NegativeConstantValue,
  UnaryOperationValue: UnaryOperationValue,
  ArithmeticOperationValue: ArithmeticOperationValue,
  PronounValue: PronounValue,
  GreaterThanComparison: GreaterThanComparison,
  LesserThanComparison: LesserThanComparison,
  EqualToComparison: EqualToComparison,
  InverseComparison: InverseComparison,
  Comment: Comment,
  Numeral: Numeral,
  Character: Character,
  FirstPersonPronoun: FirstPersonPronoun,
  SecondPersonPronoun: SecondPersonPronoun,
  PositiveNoun: PositiveNoun,
  NeutralNoun: NeutralNoun,
  NegativeNoun: NegativeNoun,
  PositiveAdjective: PositiveAdjective,
  NeutralAdjective: NeutralAdjective,
  NegativeAdjective: NegativeAdjective,
  UnaryOperator: UnaryOperator,
  ArithmeticOperator: ArithmeticOperator,
  PositiveComparative: PositiveComparative,
  NegativeComparative: NegativeComparative,
  Be: Be,
  BeComparative: BeComparative
};
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
/**
 * Horatio Program Character
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = (function () {
  function Character(name) {
    _classCallCheck(this, Character);

    this._name = name;
    this._value = null;
    this._memory = [];
  }

  _createClass(Character, [{
    key: "name",

    /**
     * @returns {string}
     */
    value: function name() {
      return this._name;
    }
  }, {
    key: "value",

    /**
     * @returns {number|null}
     */
    value: function value() {
      return this._value;
    }
  }, {
    key: "setValue",

    /**
     * @param {number} val
     */
    value: function setValue(val) {
      this._value = val;
    }
  }, {
    key: "memorySize",

    /**
     * @returns {number}
     */
    value: function memorySize() {
      return this.memory.length;
    }
  }, {
    key: "noMemory",

    /**
     * @returns {boolean}
     */
    value: function noMemory() {
      return this.memory.length === 0;
    }
  }, {
    key: "remember",

    /**
     * @param {number}
     */
    value: function remember(val) {
      this._memory.push(val);
    }
  }, {
    key: "recall",

    /**
     * set character value from top of stack
     */
    value: function recall() {
      if (this.noMemory()) {
        throw new Error("Runtime Error - Trying to recall from empty stack.");
      } else {
        this._value = this._memory.pop();
      }
    }
  }]);

  return Character;
})();

exports["default"] = Character;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _semantics = require('./semantics');

var _semantics2 = _interopRequireDefault(_semantics);

/**
 * Horatio Checker
 */

var Checker = (function (_Semantics) {
  _inherits(Checker, _Semantics);

  function Checker() {
    _classCallCheck(this, Checker);

    _get(Object.getPrototypeOf(Checker.prototype), 'constructor', this).call(this);
    this.characters = {};
    this.parts = {};
  }

  _createClass(Checker, [{
    key: 'check',

    /**
     * Check
     */
    value: function check(program) {
      program.visit(this, null);
    }
  }, {
    key: 'declared',

    /**
     * Character exists
     */
    value: function declared(character) {
      return this.characters.hasOwnProperty(character);
    }
  }, {
    key: 'onStage',

    /**
     * Character on stage
     */
    value: function onStage(character) {
      if (this.declared(character)) {
        return this.characters[character];
      } else {
        return false;
      }
    }
  }, {
    key: 'solo',

    /**
     * Solo on stage?
     */
    value: function solo(character) {
      if (this.declared(character) && this.characters[character]) {
        for (var k in this.characters) {
          if (k !== character && this.characters[k] === true) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  }, {
    key: 'toggleStage',

    /**
     * Toggle Stage presence
     */
    value: function toggleStage(character) {
      if (this.declared(character)) {
        this.characters[character] = !this.characters[character];
      }
    }
  }, {
    key: 'exeuntStage',

    /**
     * Exeunt all
     */
    value: function exeuntStage() {
      for (var c in this.characters) {
        this.characters[c] = false;
      }
    }
  }, {
    key: 'sceneExists',

    /**
     * Scene exists
     */
    value: function sceneExists(act, scene) {
      if (!this.parts[act]) {
        return false;
      } else {
        return this.parts[act].indexOf(scene) !== -1;
      }
    }
  }]);

  return Checker;
})(_semantics2['default']);

exports['default'] = Checker;
module.exports = exports['default'];

},{"./semantics":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _checker = require('./checker');

var _checker2 = _interopRequireDefault(_checker);

var _encoder = require('./encoder');

var _encoder2 = _interopRequireDefault(_encoder);

/**
 * Compiles SPL into javascript
 * @memberof Horatio
 */

var Compiler = (function () {
  function Compiler(io) {
    _classCallCheck(this, Compiler);

    this.io = io;
  }

  _createClass(Compiler, [{
    key: 'compile',

    /**
     * Compile an SPL program
     * @param {string} input - The input SPL program
     */
    value: function compile(input) {
      // Parse input
      var parser = new _parser2['default'](input);

      // Generate AST
      var ast = parser.parse();

      // Semantic Check
      var checker = new _checker2['default']();
      checker.check(ast);

      // Code Generation
      var encoder = new _encoder2['default'](this.io);
      var program = encoder.encode(ast);

      return program;
    }
  }]);

  return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];

},{"./checker":3,"./encoder":5,"./parser":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

var _program = require('./program');

var _program2 = _interopRequireDefault(_program);

var _wordlists = require('./wordlists');

var _wordlists2 = _interopRequireDefault(_wordlists);

/**
 * Horatio Encoder
 */

var Encoder = (function (_Generator) {
  _inherits(Encoder, _Generator);

  function Encoder(io) {
    _classCallCheck(this, Encoder);

    _get(Object.getPrototypeOf(Encoder.prototype), 'constructor', this).call(this);
    this.program = new _program2['default'](io);
  }

  _createClass(Encoder, [{
    key: 'encode',

    /**
     * Encode
     */
    value: function encode(program) {
      program.visit(this, null);
      return this.program;
    }
  }, {
    key: 'numeralIndex',

    /**
     * Get index number from roman numeral
     */
    value: function numeralIndex(numeral) {
      return _wordlists2['default'].roman_numerals.indexOf(numeral);
    }
  }]);

  return Encoder;
})(_generator2['default']);

exports['default'] = Encoder;
module.exports = exports['default'];

},{"./generator":6,"./program":9,"./wordlists":13}],6:[function(require,module,exports){
/**
 * Horatio Generation Visitor
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generator = (function () {
  function Generator() {
    _classCallCheck(this, Generator);
  }

  _createClass(Generator, [{
    key: "visitProgram",

    /**
     * Program
     */
    value: function visitProgram(program, arg) {
      var self = this;

      // declarations
      program.declarations.forEach(function (declaration) {
        declaration.visit(self, null);
      });

      // parts
      program.parts.forEach(function (part) {
        part.visit(self, null);
      });

      return null;
    }
  }, {
    key: "visitDeclaration",

    /**
     * Declaration
     */
    value: function visitDeclaration(declaration, arg) {
      var c = declaration.character.sequence;
      this.program.declareCharacter(c);
      return null;
    }
  }, {
    key: "visitNumeral",

    /**
     * Numeral
     */
    value: function visitNumeral(numeral, arg) {
      var n = this.numeralIndex(numeral.sequence);
      return n;
    }
  }, {
    key: "visitPart",

    /**
     * Part
     */
    value: function visitPart(part, arg) {
      var self = this;

      var n = part.numeral.visit(this, arg);
      var act = this.program.newAct();
      part.subparts.forEach(function (subpart) {
        subpart.visit(self, { act: act });
      });

      return null;
    }
  }, {
    key: "visitSubpart",

    /**
     * Subparts
     */
    value: function visitSubpart(subpart, arg) {
      var n = subpart.numeral.visit(this, arg);
      var scene = this.program.newScene(arg.act);
      subpart.stage.visit(this, { act: arg.act, scene: scene });

      return null;
    }
  }, {
    key: "visitStage",

    /**
     * Stage
     */
    value: function visitStage(stage, arg) {
      if (stage.start_presence) stage.start_presence.visit(this, arg);
      if (stage.dialogue) stage.dialogue.visit(this, arg);
      if (stage.end_presence) stage.end_presence.visit(this, arg);

      return null;
    }
  }, {
    key: "visitEnter",

    /**
     * Enter
     */
    value: function visitEnter(presence, arg) {
      var Command = function Command(cname) {
        var c = cname;
        return function () {
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
    }
  }, {
    key: "visitExit",

    /**
     * Exit
     */
    value: function visitExit(presence, arg) {
      var Command = function Command(cname) {
        var c = cname;
        return function () {
          this.exitStage(c);
        };
      };

      var c = presence.character.sequence;

      this.program.addCommand(arg.act, arg.scene, new Command(c));

      return null;
    }
  }, {
    key: "visitExeunt",

    /**
     * Exeunt
     */
    value: function visitExeunt(presence, arg) {
      var Command = function Command() {
        return function () {
          this.exeuntStage();
        };
      };

      this.program.addCommand(arg.act, arg.scene, new Command());

      return null;
    }
  }, {
    key: "visitDialogue",

    /**
     * Dialogue
     */
    value: function visitDialogue(dialogue, arg) {
      var self = this;
      dialogue.lines.forEach(function (line) {
        line.visit(self, arg);
      });
      return null;
    }
  }, {
    key: "visitLine",

    /**
     * Line
     */
    value: function visitLine(line, arg) {
      var self = this;

      var c = line.character.sequence;
      arg.character = c;

      line.sentences.forEach(function (sentence) {
        sentence.visit(self, arg);
      });

      return null;
    }
  }, {
    key: "visitGoto",

    /**
     * Goto
     */
    value: function visitGoto(goto, arg) {
      var n = goto.numeral.visit(this, arg);

      return null;
    }
  }, {
    key: "visitAssignmentSentence",

    /**
     * Assignment Sentence
     */
    value: function visitAssignmentSentence(assignment, arg) {
      var Command = function Command(target, value) {
        var t = target;
        var v = value;

        return function () {
          var target = t.call(this);
          var val = v.call(this);
          this.characters[target].setValue(val);
        };
      };

      var target = assignment.be.visit(this, arg);
      var value = assignment.value.visit(this, arg);

      this.program.addCommand(arg.act, arg.scene, new Command(target, value));

      return null;
    }
  }, {
    key: "visitQuestionSentence",

    /**
     * Question Sentence
     */
    value: function visitQuestionSentence(question, arg) {
      var Command = function Command(be, comparative, value) {
        var b = be;
        var c = comparative;
        var v = value;

        return function () {
          var character = b.call(this);
          var a = this.characters[b].value();
          var val = v.call(this);
          var result = c.call(this, a, val);
        };
      };

      var be = question.be.visit(this, arg);
      var comparative = question.comparison.visit(this, arg);
      var value = question.value.visit(this, arg);

      this.program.addCommand(arg.act, arg.scene, new Command(be, comparative, value));

      return null;
    }
  }, {
    key: "visitResponseSentence",

    /**
     * Response Sentence
     */
    value: function visitResponseSentence(response, arg) {
      response.goto.visit(this, arg);

      return null;
    }
  }, {
    key: "visitGotoSentence",

    /**
     * Goto Sentence
     */
    value: function visitGotoSentence(goto, arg) {
      goto.goto.visit(this, arg);

      return null;
    }
  }, {
    key: "visitIntegerInputSentence",

    /**
     * Integer Input Sentence
     */
    value: function visitIntegerInputSentence(integer_input, arg) {

      return null;
    }
  }, {
    key: "visitCharInputSentence",

    /**
     * Char Input Sentence
     */
    value: function visitCharInputSentence(char_input, arg) {

      return null;
    }
  }, {
    key: "visitIntegerOutputSentence",

    /**
     * Integer Output Sentence
     */
    value: function visitIntegerOutputSentence(integer_output, arg) {
      var Command = function Command() {
        var speaker = arg.character;

        return function () {
          var val = this.interlocutor(speaker).value();
          this.io.print(val);
        };
      };

      this.program.addCommand(arg.act, arg.scene, new Command());

      return null;
    }
  }, {
    key: "visitCharOutputSentence",

    /**
     * Char Output Sentence
     */
    value: function visitCharOutputSentence(char_output, arg) {
      var Command = function Command() {
        var speaker = arg.character;

        return function () {
          var val = this.interlocutor(speaker).value();
          this.io.print(String.fromCharCode(val));
        };
      };

      this.program.addCommand(arg.act, arg.scene, new Command());

      return null;
    }
  }, {
    key: "visitRememberSentence",

    /**
     * Remember Sentence
     */
    value: function visitRememberSentence(remember, arg) {
      var Command = function Command(pronoun) {
        var speaking = arg.character;
        var p = pronoun;

        return function () {
          var pn = p();
          var value = this.characters[pn].value();
          this.characters[speaking].remember(value);
        };
      };

      var p = remember.pronoun.visit(this, arg);

      this.program.addCommand(arg.act, arg.scene, new Command(p));

      return null;
    }
  }, {
    key: "visitRecallSentence",

    /**
     * Recall Sentence
     */
    value: function visitRecallSentence(recall, arg) {
      var Command = function Command() {
        var speaking = arg.character;

        return function () {
          this.interlocutor(speaking).recall();
        };
      };

      this.program.addCommand(arg.act, arg.scene, new Command());

      return null;
    }
  }, {
    key: "visitPositiveConstantValue",

    /**
     * Positive Constant Value
     */
    value: function visitPositiveConstantValue(pc_val, arg) {
      var Command = function Command(num_adjectives) {
        var exp = num_adjectives;

        return function () {
          return Math.pow(2, exp);
        };
      };

      var adjectives = pc_val.adjectives;

      return new Command(adjectives.length);
    }
  }, {
    key: "visitNegativeConstantValue",

    /**
     * Negative Constant Value
     */
    value: function visitNegativeConstantValue(nc_val, arg) {
      var Command = function Command(num_adjectives) {
        var exp = num_adjectives;

        return function () {
          return -1 * Math.pow(2, exp);
        };
      };

      var adjectives = nc_val.adjectives;

      return new Command(adjectives.length);
    }
  }, {
    key: "visitUnaryOperationValue",

    /**
     * Unary Operation Value
     */
    value: function visitUnaryOperationValue(unary, arg) {
      var Command = function Command(operator, value) {
        var o = operator;
        var v = value;

        return function () {
          var val = v.call(this);
          return o.call(this, val);
        };
      };

      var o = unary.operator.visit(this, arg);
      var v = unary.value.visit(this, arg);

      return new Command(o, v);
    }
  }, {
    key: "visitArithmeticOperationValue",

    /**
     * Arithmetic Operation Value
     */
    value: function visitArithmeticOperationValue(arithmetic, arg) {
      var Command = function Command(operator, value1, value2) {
        var o = operator;
        var v1 = value1;
        var v2 = value2;

        return function () {
          var val1 = v1.call(this);
          var val2 = v2.call(this);
          return o.call(this, val1, val2);
        };
      };

      var o = arithmetic.operator.visit(this, arg);
      var v1 = arithmetic.value_1.visit(this, arg);
      var v2 = arithmetic.value_2.visit(this, arg);

      return new Command(o, v1, v2);
    }
  }, {
    key: "visitPronounValue",

    /**
     * Pronoun Value
     */
    value: function visitPronounValue(pronoun, arg) {
      var Command = function Command(p) {
        var pronoun = p;

        return function () {
          var p = pronoun.call(this);
          return this.characters[p].value();
        };
      };
      var p = pronoun.pronoun.visit(this, arg);

      return new Command(p);
    }
  }, {
    key: "visitGreaterThanComparison",

    /**
     * Greater Than Comparison
     */
    value: function visitGreaterThanComparison(comparison, arg) {
      var Command = function Command() {
        return function (a, b) {
          return a > b;
        };
      };

      return new Command();
    }
  }, {
    key: "visitLesserThanComparison",

    /**
     * Lesser Than Comparison
     */
    value: function visitLesserThanComparison(comparison, arg) {
      var Command = function Command() {
        return function (a, b) {
          return a < b;
        };
      };

      return new Command();
    }
  }, {
    key: "visitEqualToComparison",

    /**
     * Equal To Comparison
     */
    value: function visitEqualToComparison(comparison, arg) {
      var Command = function Command() {
        return function (a, b) {
          return a === b;
        };
      };

      return new Command();
    }
  }, {
    key: "visitInverseComparison",

    /**
     * Inverse Comparison
     */
    value: function visitInverseComparison(comparison, arg) {
      var Command = function Command(comparison) {
        var c = comparison;

        return function (a, b) {
          return !c(a, b);
        };
      };

      var c = comparison.comparison.visit(this, arg);

      return new Command(c);
    }
  }, {
    key: "visitFirstPersonPronoun",

    /**
     * First Person Pronoun
     */
    value: function visitFirstPersonPronoun(fpp, arg) {
      var Command = function Command() {
        var speaking = arg.character;

        return function () {
          return speaking;
        };
      };

      return new Command();
    }
  }, {
    key: "visitSecondPersonPronoun",

    /**
     * Second Person Pronoun
     */
    value: function visitSecondPersonPronoun(spp, arg) {
      var Command = function Command() {
        var speaking = arg.character;

        return function () {
          return this.interlocutor(speaking).name();
        };
      };

      return new Command();
    }
  }, {
    key: "visitUnaryOperator",

    /**
     * Unary Operator
     */
    value: function visitUnaryOperator(operator, arg) {
      var Command = function Command(operator) {
        var o = operator;

        switch (o) {
          case "square of":
            return function (v) {
              return Math.pow(v, 2);
            };
          case "cube of":
            return function (v) {
              return Math.pow(v, 3);
            };
          case "square root of":
            return function (v) {
              var sign = v < 0 ? -1 : 1;
              return sign * Math.floor(Math.sqrt(Math.abs(v)));
            };
          case "factorial of":
            return function (v) {
              var sign = v < 0 ? -1 : 1;
              var num = Math.abs(v);
              var fv = 1;
              for (var i = 2; i <= num; i++) {
                fv = fv * i;
              }
              return sign * fv;
            };
          case "twice":
            return function (v) {
              return 2 * v;
            };
        }
      };

      var o = operator.sequence;

      return new Command(o);
    }
  }, {
    key: "visitArithmeticOperator",

    /**
     * Arithmetic Operator
     */
    value: function visitArithmeticOperator(operator, arg) {
      var Command = function Command(operator) {
        var o = operator;

        switch (o) {
          case "sum of":
            return function (a, b) {
              return a + b;
            };
          case "difference between":
            return function (a, b) {
              return a - b;
            };
          case "product of":
            return function (a, b) {
              return a * b;
            };
          case "quotient between":
            return function (a, b) {
              return Math.round(a / b);
            };
          case "remainder of the quotient between":
            return function (a, b) {
              return a % b;
            };
        }
      };

      var o = operator.sequence;

      return new Command(o);
    }
  }, {
    key: "visitBe",

    /**
     * Be
     */
    value: function visitBe(be, arg) {
      var Command = function Command(be) {
        var b = be;
        var speaking = arg.character;

        switch (b) {
          case "Thou art":
          case "You are":
          case "You":
            return function () {
              return this.interlocutor(speaking).name();
            };
          case "I am":
            return function () {
              return speaking;
            };
        }
      };

      var b = be.sequence;

      return new Command(b);
    }
  }, {
    key: "visitBeComparative",

    /**
     * Be Comparative
     */
    value: function visitBeComparative(be, arg) {
      var Command = function Command(be) {
        var b = be;
        var speaking = arg.character;
        var t = undefined;

        switch (b) {
          case "Art thou":
          case "Are you":
            return function () {
              return this.interlocutor(speaking).name();
            };
          case "Am I":
            return function () {
              return this.characters[speaking].name();
            };
        }
      };

      var b = be.sequence;

      return new Command(b);
    }
  }]);

  return Generator;
})();

exports["default"] = Generator;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

/**
 * Horatio
 * A Javascript compiler for the Shakespeare Programming Language
 *
 * @author Miles Zimmerman
 */
window.Horatio = (function (_Compiler) {
  _inherits(Horatio, _Compiler);

  function Horatio(io) {
    _classCallCheck(this, Horatio);

    _get(Object.getPrototypeOf(Horatio.prototype), 'constructor', this).call(this, io);
  }

  return Horatio;
})(_compiler2['default']);

},{"./compiler":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

var _tokenizer = require('./tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

var _ast = require('./ast');

var _ast2 = _interopRequireDefault(_ast);

/**
 * Parses an SPL program and generates an AST.
 * @memberof Horatio
 * @param {string} input - The SPL program to parse
 */

var Parser = (function () {
  function Parser(input) {
    _classCallCheck(this, Parser);

    this.tokenizer = new _tokenizer2['default'](input);
    this.currentToken = null;
  }

  _createClass(Parser, [{
    key: 'accept',

    /**
     * Accept the current token if it matches an expected kind
     * @param  {number}      expectedKind - The byte value of the expected token
     * @throws {SyntaxError}              - Throws syntax error if current token kind does not match expected token kind.
     */
    value: function accept(expectedKind) {
      if (this.currentToken.kind === expectedKind) {
        this.currentToken = this.tokenizer.nextToken();
      } else {
        throw new Error('Syntax Error - Unexpected Token: ' + JSON.stringify(this.currentToken));
      }
    }
  }, {
    key: 'acceptIt',

    /**
     * Accept the current token regardless of kind
     */
    value: function acceptIt() {
      this.currentToken = this.tokenizer.nextToken();
    }
  }, {
    key: 'parse',

    /**
     * Parse the SPL program and return an AST
     * @returns {AST.Program} - The program AST.
     */
    value: function parse() {
      this.currentToken = this.tokenizer.nextToken();
      var program = this.parseProgram();
      //console.log(program);
      if (this.currentToken !== -1) {
        throw new Error('Syntax Error - unexpected end of program');
      }
      return program;
    }
  }, {
    key: 'parseProgram',

    /* Parsers */
    value: function parseProgram() {
      var comment = this.parseComment();
      this.accept(_token2['default'].PERIOD);
      var declarations = [this.parseDeclaration()];
      while (this.currentToken.kind === _token2['default'].CHARACTER) {
        declarations.push(this.parseDeclaration());
      }
      var parts = [this.parsePart()];
      while (this.currentToken.kind === _token2['default'].ACT) {
        parts.push(this.parsePart());
      }
      return new _ast2['default'].Program(comment, declarations, parts);
    }
  }, {
    key: 'parseComment',
    value: function parseComment() {
      var comment = '';
      while (this.currentToken.kind !== _token2['default'].PERIOD) {
        comment += this.currentToken.sequence + ' ';
        this.acceptIt();
      }
      return new _ast2['default'].Comment(comment.trim());
    }
  }, {
    key: 'parseDeclaration',
    value: function parseDeclaration() {
      var character = new _ast2['default'].Character(this.currentToken.sequence);
      this.accept(_token2['default'].CHARACTER);
      this.accept(_token2['default'].COMMA);
      var comment = this.parseComment();
      this.accept(_token2['default'].PERIOD);
      return new _ast2['default'].Declaration(character, comment);
    }
  }, {
    key: 'parsePart',
    value: function parsePart() {
      this.accept(_token2['default'].ACT);
      var numeral = new _ast2['default'].Numeral(this.currentToken.sequence);
      this.accept(_token2['default'].ROMAN_NUMERAL);
      this.accept(_token2['default'].COLON);
      var comment = this.parseComment();
      this.accept(_token2['default'].PERIOD);
      var subparts = [this.parseSubPart()];
      while (this.currentToken.kind === _token2['default'].SCENE) {
        subparts.push(this.parseSubPart());
      }
      return new _ast2['default'].Part(numeral, comment, subparts);
    }
  }, {
    key: 'parseSubPart',
    value: function parseSubPart() {
      this.accept(_token2['default'].SCENE);
      var numeral = new _ast2['default'].Numeral(this.currentToken.sequence);
      this.accept(_token2['default'].ROMAN_NUMERAL);
      this.accept(_token2['default'].COLON);
      var comment = this.parseComment();
      this.accept(_token2['default'].PERIOD);
      var stage = this.parseStage();
      return new _ast2['default'].Subpart(numeral, comment, stage);
    }
  }, {
    key: 'parseStage',
    value: function parseStage() {
      var start_presence = undefined,
          end_presence = undefined;
      if (this.currentToken.kind === _token2['default'].LEFT_BRACKET) {
        start_presence = this.parsePresence();
      }
      var dialogue = this.parseDialogue();
      if (this.currentToken.kind === _token2['default'].LEFT_BRACKET) {
        end_presence = this.parsePresence();
      }
      return new _ast2['default'].Stage(dialogue, start_presence, end_presence);
    }
  }, {
    key: 'parsePresence',
    value: function parsePresence() {
      this.accept(_token2['default'].LEFT_BRACKET);
      var c1 = undefined,
          c2 = undefined,
          ret = undefined;
      switch (this.currentToken.kind) {

        case _token2['default'].ENTER:
          this.acceptIt();
          c1 = new _ast2['default'].Character(this.currentToken.sequence);
          c2 = null;
          this.accept(_token2['default'].CHARACTER);
          if (this.currentToken.kind === _token2['default'].AMPERSAND) {
            this.acceptIt();
            c2 = new _ast2['default'].Character(this.currentToken.sequence);
            this.accept(_token2['default'].CHARACTER);
          }
          ret = new _ast2['default'].Enter(c1, c2);
          break;

        case _token2['default'].EXIT:
          this.acceptIt();
          var character = new _ast2['default'].Character(this.currentToken.sequence);
          this.accept(_token2['default'].CHARACTER);
          ret = new _ast2['default'].Exit(character);
          break;

        case _token2['default'].EXEUNT:
          this.acceptIt();
          if (this.currentToken.kind === _token2['default'].CHARACTER) {
            c1 = new _ast2['default'].Character(this.currentToken.sequence);
            this.acceptIt();
            this.accept(_token2['default'].AMPERSAND);
            c2 = new _ast2['default'].Character(this.currentToken.sequence);
            this.accept(_token2['default'].CHARACTER);
            ret = new _ast2['default'].Exeunt(c1, c2);
          } else {
            ret = new _ast2['default'].Exeunt();
          }
          break;
      }
      this.accept(_token2['default'].RIGHT_BRACKET);
      return ret;
    }
  }, {
    key: 'parseDialogue',
    value: function parseDialogue() {
      var lines = [this.parseLine()];
      while (this.currentToken.kind === _token2['default'].CHARACTER) {
        lines.push(this.parseLine());
      }
      return new _ast2['default'].Dialogue(lines);
    }
  }, {
    key: 'parseLine',
    value: function parseLine() {
      var character = new _ast2['default'].Character(this.currentToken.sequence);
      this.accept(_token2['default'].CHARACTER);
      this.accept(_token2['default'].COLON);
      var sentences = [this.parseSentence()];

      function isSentence(token) {
        switch (token) {
          case _token2['default'].BE:
          case _token2['default'].BE_COMPARATIVE:
          case _token2['default'].IF_SO:
          case _token2['default'].IMPERATIVE:
          case _token2['default'].INPUT_INTEGER:
          case _token2['default'].INPUT_CHAR:
          case _token2['default'].OUTPUT_INTEGER:
          case _token2['default'].OUTPUT_CHAR:
          case _token2['default'].REMEMBER:
          case _token2['default'].RECALL:
            return true;
          default:
            return false;
        }
      }
      while (isSentence(this.currentToken.kind)) {
        sentences.push(this.parseSentence());
      }
      return new _ast2['default'].Line(character, sentences);
    }
  }, {
    key: 'parseSentence',
    value: function parseSentence() {
      var sentence = undefined;
      switch (this.currentToken.kind) {

        case _token2['default'].BE:
          sentence = this.parseAssignment();
          //this.accept(Token.PERIOD);
          this.acceptIt();
          break;

        case _token2['default'].BE_COMPARATIVE:
          sentence = this.parseQuestion();
          this.accept(_token2['default'].QUESTION_MARK);
          break;

        case _token2['default'].IF_SO:
          sentence = this.parseResponse();
          this.accept(_token2['default'].PERIOD);
          break;

        case _token2['default'].IMPERATIVE:
          sentence = this.parseGoto();
          this.accept(_token2['default'].PERIOD);
          break;

        case _token2['default'].INPUT_INTEGER:
        case _token2['default'].INPUT_CHAR:
          sentence = this.parseInput();
          this.accept(_token2['default'].EXCLAMATION_POINT);
          break;

        case _token2['default'].OUTPUT_INTEGER:
        case _token2['default'].OUTPUT_CHAR:
          sentence = this.parseOutput();
          this.accept(_token2['default'].EXCLAMATION_POINT);
          break;

        case _token2['default'].REMEMBER:
          sentence = this.parseRemember();
          this.accept(_token2['default'].EXCLAMATION_POINT);
          break;

        case _token2['default'].RECALL:
          sentence = this.parseRecall();
          this.accept(_token2['default'].EXCLAMATION_POINT);
          break;
      }
      return sentence;
    }
  }, {
    key: 'parseBe',
    value: function parseBe() {
      var be = undefined;
      if (this.currentToken.kind === _token2['default'].BE) {
        be = new _ast2['default'].Be(this.currentToken.sequence);
        this.acceptIt();
      }
      return be;
    }
  }, {
    key: 'parseAssignment',
    value: function parseAssignment() {
      var be = this.parseBe();
      if (this.currentToken.kind === _token2['default'].AS) {
        this.acceptIt();
        this.parseAdjective();
        this.accept(_token2['default'].AS);
      }
      var value = this.parseValue();
      return new _ast2['default'].AssignmentSentence(be, value);
    }
  }, {
    key: 'parseValue',
    value: function parseValue() {
      var value = undefined,
          pronoun = undefined;
      if (this.currentToken.kind === _token2['default'].ARTICLE) {
        this.acceptIt();
      }
      switch (this.currentToken.kind) {

        case _token2['default'].UNARY_OPERATOR:
          value = this.parseUnaryOperation();
          break;

        case _token2['default'].ARITHMETIC_OPERATOR:
          value = this.parseArithmeticOperation();
          break;

        case _token2['default'].POSITIVE_ADJECTIVE:
        case _token2['default'].NEUTRAL_ADJECTIVE:
        case _token2['default'].NEGATIVE_ADJECTIVE:
        case _token2['default'].POSITIVE_NOUN:
        case _token2['default'].NEUTRAL_NOUN:
        case _token2['default'].NEGATIVE_NOUN:
          value = this.parseConstant();
          break;

        case _token2['default'].FIRST_PERSON_PRONOUN:
          pronoun = new _ast2['default'].FirstPersonPronoun(this.currentToken.sequence);
          value = new _ast2['default'].PronounValue(pronoun);
          this.acceptIt();
          break;
        case _token2['default'].SECOND_PERSON_PRONOUN:
          pronoun = new _ast2['default'].SecondPersonPronoun(this.currentToken.sequence);
          value = new _ast2['default'].PronounValue(pronoun);
          this.acceptIt();
          break;
        default:
          throw new Error('Syntax Error - Unknown Token: ' + this.currentToken.sequence);
      }
      return value;
    }
  }, {
    key: 'parseUnaryOperation',
    value: function parseUnaryOperation() {
      var operator = new _ast2['default'].UnaryOperator(this.currentToken.sequence);
      this.accept(_token2['default'].UNARY_OPERATOR);
      var value = this.parseValue();
      return new _ast2['default'].UnaryOperationValue(operator, value);
    }
  }, {
    key: 'parseArithmeticOperation',
    value: function parseArithmeticOperation() {
      if (this.currentToken.kind === _token2['default'].ARTICLE) {
        this.acceptIt();
      }
      var operator = new _ast2['default'].ArithmeticOperator(this.currentToken.sequence);
      this.accept(_token2['default'].ARITHMETIC_OPERATOR);
      var value_1 = this.parseValue();
      this.accept(_token2['default'].AND);
      var value_2 = this.parseValue();
      return new _ast2['default'].ArithmeticOperationValue(operator, value_1, value_2);
    }
  }, {
    key: 'parseConstant',
    value: function parseConstant() {
      if (this.currentToken.kind === _token2['default'].ARTICLE) {
        this.acceptIt();
      }
      switch (this.currentToken.kind) {

        case _token2['default'].NEUTRAL_ADJECTIVE:
        case _token2['default'].NEUTRAL_NOUN:
          throw new Error('Syntax Error - Constant Value cannot start with neutral adjective or noun.');

        case _token2['default'].POSITIVE_ADJECTIVE:
        case _token2['default'].POSITIVE_NOUN:
          return this.parsePositiveConstant();

        case _token2['default'].NEGATIVE_ADJECTIVE:
        case _token2['default'].NEGATIVE_NOUN:
          return this.parseNegativeConstant();

        default:
          throw new Error('Syntax Error - Unknown Token: ' + this.currentToken.sequence);

      }
    }
  }, {
    key: 'parsePositiveConstant',
    value: function parsePositiveConstant() {
      var adjectives = [];
      var adjective = undefined;
      while (this.currentToken.kind !== _token2['default'].POSITIVE_NOUN) {
        switch (this.currentToken.kind) {
          case _token2['default'].POSITIVE_ADJECTIVE:
            adjective = new _ast2['default'].PositiveAdjective(this.currentToken.sequence);
            adjectives.push(adjective);
            this.acceptIt();
            break;
          case _token2['default'].NEUTRAL_ADJECTIVE:
            adjective = new _ast2['default'].NeutralAdjective(this.currentToken.sequence);
            adjectives.push(adjective);
            this.acceptIt();
            break;
          case _token2['default'].NEGATIVE_ADJECTIVE:
            throw new Error('Syntax Error - Cannot mix positive and negative words in constant assignment.');
        }
      }
      var noun = new _ast2['default'].PositiveNoun(this.currentToken.sequence);
      this.accept(_token2['default'].POSITIVE_NOUN);
      return new _ast2['default'].PositiveConstantValue(noun, adjectives);
    }
  }, {
    key: 'parseNegativeConstant',
    value: function parseNegativeConstant() {
      var adjectives = [];
      var adjective = undefined;
      while (this.currentToken.kind !== _token2['default'].NEGATIVE_NOUN) {
        switch (this.currentToken.kind) {
          case _token2['default'].NEGATIVE_ADJECTIVE:
            adjective = new _ast2['default'].NegativeAdjective(this.currentToken.sequence);
            adjectives.push(adjective);
            this.acceptIt();
            break;
          case _token2['default'].NEUTRAL_ADJECTIVE:
            adjective = new _ast2['default'].NeutralAdjective(this.currentToken.sequence);
            adjectives.push(adjective);
            this.acceptIt();
            break;
          case _token2['default'].POSITIVE_ADJECTIVE:
            throw new Error('Syntax Error - Cannot mix positive and negative words in constant assignment.');
        }
      }
      var noun = new _ast2['default'].NegativeNoun(this.currentToken.sequence);
      this.accept(_token2['default'].NEGATIVE_NOUN);
      return new _ast2['default'].NegativeConstantValue(noun, adjectives);
    }
  }, {
    key: 'parseQuestion',
    value: function parseQuestion() {
      var be = this.parseBeComparative();
      var comparison = this.parseComparative();
      var value = this.parseValue();
      return new _ast2['default'].QuestionSentence(be, comparison, value);
    }
  }, {
    key: 'parseBeComparative',
    value: function parseBeComparative() {
      var be_comparative = undefined;
      if (this.currentToken.kind === _token2['default'].BE_COMPARATIVE) {
        be_comparative = new _ast2['default'].BeComparative(this.currentToken.sequence);
      }
      return be_comparative;
    }
  }, {
    key: 'parseComparative',
    value: function parseComparative() {
      var comparison = undefined,
          comparative = undefined,
          adjective = undefined;
      switch (this.currentToken.kind) {

        case _token2['default'].POSITIVE_COMPARATIVE:
          comparative = new _ast2['default'].PositiveComparative(this.currentToken.sequence);
          comparison = new _ast2['default'].GreaterThanComparison(comparative);
          this.acceptIt();
          this.accept(_token2['default'].THAN);
          break;
        case _token2['default'].NEGATIVE_COMPARATIVE:
          comparative = new _ast2['default'].NegativeComparative(this.currentToken.sequence);
          comparison = new _ast2['default'].LesserThanComparison(comparative);
          this.acceptIt();
          this.accept(_token2['default'].THAN);
          break;

        case _token2['default'].AS:
          this.acceptIt();
          adjective = this.parseAdjective();
          comparison = new _ast2['default'].EqualToComparison(adjective);
          this.accept(_token2['default'].AS);
          break;

        case _token2['default'].NOT:
          this.acceptIt();
          comparative = this.parseComparative();
          comparison = new _ast2['default'].InverseComparison(comparative);
          //switch (this.currentToken.kind) {
          //  case Token.POSITIVE_COMPARATIVE:
          //  case Token.NEGATIVE_COMPARATIVE:
          //    this.acceptIt();
          //    this.accept(Token.THAN);
          //    break;
          //}
          break;
      }
      return comparison;
    }
  }, {
    key: 'parseResponse',
    value: function parseResponse() {
      this.accept(_token2['default'].IF_SO);
      this.accept(_token2['default'].COMMA);
      var goto = this.parseGoto();
      return new _ast2['default'].ResponseSentence(goto);
    }
  }, {
    key: 'parseGoto',
    value: function parseGoto() {
      this.accept(_token2['default'].IMPERATIVE);
      this.accept(_token2['default'].RETURN);
      this.accept(_token2['default'].TO);
      this.accept(_token2['default'].SCENE);
      var numeral = new _ast2['default'].Numeral(this.currentToken.sequence);
      this.accept(_token2['default'].ROMAN_NUMERAL);
      return new _ast2['default'].Goto(numeral);
    }
  }, {
    key: 'parseInput',
    value: function parseInput() {
      var sequence = this.currentToken.sequence;
      var ret = undefined;
      switch (this.currentToken.kind) {
        case _token2['default'].INPUT_INTEGER:
          ret = new _ast2['default'].IntegerInputSentence(sequence);
          break;
        case _token2['default'].INPUT_CHAR:
          ret = new _ast2['default'].CharInputSentence(sequence);
          break;
      }
      this.acceptIt();
      return ret;
    }
  }, {
    key: 'parseOutput',
    value: function parseOutput() {
      var sequence = this.currentToken.sequence;
      var ret = undefined;
      switch (this.currentToken.kind) {
        case _token2['default'].OUTPUT_INTEGER:
          ret = new _ast2['default'].IntegerOutputSentence(sequence);
          break;
        case _token2['default'].OUTPUT_CHAR:
          ret = new _ast2['default'].CharOutputSentence(sequence);
          break;
      }
      this.acceptIt();
      return ret;
    }
  }, {
    key: 'parseRemember',
    value: function parseRemember() {
      this.accept(_token2['default'].REMEMBER);
      var pronoun = undefined;
      switch (this.currentToken.kind) {
        case _token2['default'].FIRST_PERSON_PRONOUN:
          pronoun = new _ast2['default'].FirstPersonPronoun(this.currentToken.sequence);
          this.acceptIt();
          break;
        case _token2['default'].SECOND_PERSON_PRONOUN:
          pronoun = new _ast2['default'].SecondPersonPronoun(this.currentToken.sequence);
          this.acceptIt();
          break;
      }
      return new _ast2['default'].RememberSentence(pronoun);
    }
  }, {
    key: 'parseRecall',
    value: function parseRecall() {
      this.accept(_token2['default'].RECALL);
      this.accept(_token2['default'].COMMA);
      var comment = '';
      while (this.currentToken.kind !== _token2['default'].EXCLAMATION_POINT) {
        comment += this.currentToken.sequence + ' ';
        this.acceptIt();
      }
      return new _ast2['default'].RecallSentence(comment.trim());
    }
  }, {
    key: 'parseAdjective',
    value: function parseAdjective() {
      switch (this.currentToken.kind) {
        case _token2['default'].POSITIVE_ADJECTIVE:
        case _token2['default'].NEUTRAL_ADJECTIVE:
        case _token2['default'].NEGATIVE_ADJECTIVE:
          this.acceptIt();
          break;
      }
    }
  }]);

  return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];

},{"./ast":1,"./token":11,"./tokenizer":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _character = require('./character');

var _character2 = _interopRequireDefault(_character);

/**
 * A Horatio Program
 */

var Program = (function () {
  function Program(io) {
    _classCallCheck(this, Program);

    this.io = io;
    this.characters = {};
    this.parts = [];
    this.stage = [];
  }

  _createClass(Program, [{
    key: 'run',
    value: function run() {
      var self = this;
      for (var a = 0; a < self.parts.length; a++) {
        for (var s = 0; s < self.parts[a].length; s++) {
          for (var f = 0; f < self.parts[a][s].length; f++) {
            self.parts[a][s][f].call(self);
          }
        }
      }
      return 0;
    }
  }, {
    key: 'runSub',
    value: function runSub(act, start_scene, end_scene) {
      var self = this;
      for (var s = start_scene; s < end_scene; s++) {
        for (var f = 0; f < self.parts[act][s].length; f++) {
          self.parts[act][s][f].call(self);
        }
      }
      return 0;
    }
  }, {
    key: 'declareCharacter',
    value: function declareCharacter(character_name) {
      this.characters[character_name] = new _character2['default'](character_name);
    }
  }, {
    key: 'newAct',
    value: function newAct() {
      this.parts.push([]);
      return this.parts.length - 1;
    }
  }, {
    key: 'newScene',
    value: function newScene(act) {
      this.parts[act].push([]);
      return this.parts[act].length - 1;
    }
  }, {
    key: 'enterStage',
    value: function enterStage(character_name) {
      var c = this.characters[character_name];
      this.stage.push(c);
    }
  }, {
    key: 'exitStage',
    value: function exitStage(character_name) {
      var c = this.characters[character_name];
      this.stage.splice(this.stage.indexOf(c), 1);
    }
  }, {
    key: 'exeuntStage',
    value: function exeuntStage() {
      this.stage = [];
    }
  }, {
    key: 'interlocutor',
    value: function interlocutor(character_name) {
      var c = this.characters[character_name];
      var i = this.stage.filter(function (n) {
        return n !== c;
      });
      return i[0];
    }
  }, {
    key: 'addCommand',
    value: function addCommand(act, scene, command) {
      this.parts[act][scene].push(command);
      var self = this;
    }
  }]);

  return Program;
})();

exports['default'] = Program;
module.exports = exports['default'];

},{"./character":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ast = require("./ast");

var _ast2 = _interopRequireDefault(_ast);

/**
 * Horatio Semantics Visitor
 */

var Semantics = (function () {
  function Semantics() {
    _classCallCheck(this, Semantics);
  }

  _createClass(Semantics, [{
    key: "visitProgram",

    /**
     * Program
     */
    value: function visitProgram(program, arg) {
      var self = this;

      // comment
      program.comment.visit(this, null);

      // declarations
      if (program.declarations.length > 0) {
        program.declarations.forEach(function (declaration) {
          declaration.visit(self, null);
        });
      } else {
        throw new Error("Semantic Error - No characters declared.");
      }

      // parts
      if (program.parts.length > 0) {
        program.parts.forEach(function (part) {
          part.visit(self, null);
        });
      } else {
        throw new Error("Semantic Error - No parts in program.");
      }

      return null;
    }
  }, {
    key: "visitComment",

    /**
     * Comment
     */
    value: function visitComment(comment, arg) {
      if (comment.sequence) {
        return null;
      } else {
        throw new Error("Semantic Error - Comment malformed.");
      }
    }
  }, {
    key: "visitDeclaration",

    /**
     * Declaration
     */
    value: function visitDeclaration(declaration, arg) {
      var c = declaration.character.visit(this, arg);

      if (this.characters[c.sequence]) {
        throw new Error("Semantic Error - Character already defined.");
      } else {
        this.characters[c.sequence] = false;
      }

      declaration.comment.visit(this, arg);
      return null;
    }
  }, {
    key: "visitCharacter",

    /**
     * Character
     */
    value: function visitCharacter(character, arg) {
      var self = this;

      if (!character.sequence) {
        throw new Error("Semantic Error - Character undefined.");
      }

      if (!(character instanceof _ast2["default"].Character)) {
        throw new Error("Semantic Error - Not of type Character.");
      }

      // Declared flag
      if (arg && arg.declared === true && !this.declared(character.sequence)) {
        throw new Error("Semantic Error - Character Undeclared");
      }

      // Present on stage flag
      if (arg && arg.hasOwnProperty("on_stage")) {
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
    }
  }, {
    key: "visitPart",

    /**
     * Part
     */
    value: function visitPart(part, arg) {
      var self = this;

      var n = part.numeral.visit(this, arg);
      part.comment.visit(this, arg);

      if (this.parts[n]) {
        throw new Error("Semantic Error - Act already defined.");
      } else if (part.subparts.length === 0) {
        throw new Error("Semantic Error - No subparts defined.");
      } else {
        this.parts[n] = [];
        part.subparts.forEach(function (subpart) {
          subpart.visit(self, { act: n });
        });
      }

      return null;
    }
  }, {
    key: "visitNumeral",

    /**
     * Numeral
     */
    value: function visitNumeral(numeral, arg) {
      if (numeral.sequence) {
        return numeral.sequence;
      } else {
        throw new Error("Semantic Error - Numeral malformed.");
      }
      return null;
    }
  }, {
    key: "visitSubpart",

    /**
     * Subparts
     */
    value: function visitSubpart(subpart, arg) {
      var n = subpart.numeral.visit(this, arg);

      if (this.sceneExists(arg.act, n)) {
        throw new Error("Semantic Error - Scene already defined.");
      } else {
        this.parts[arg.act].push(n);
        subpart.comment.visit(this, arg);
        subpart.stage.visit(this, { act: arg.act, scene: n });
      }

      return null;
    }
  }, {
    key: "visitStage",

    /**
     * Stage
     */
    value: function visitStage(stage, arg) {
      if (stage.start_presence) stage.start_presence.visit(this, arg);
      if (stage.dialogue) stage.dialogue.visit(this, arg);
      if (stage.end_presence) stage.end_presence.visit(this, arg);
      return null;
    }
  }, {
    key: "visitEnter",

    /**
     * Enter
     */
    value: function visitEnter(presence, arg) {
      if (!presence.character_1 && !presence.character_2) {
        throw new Error("Semantic Error - No characters entering.");
      }

      var c1 = presence.character_1.visit(this, { declared: true, on_stage: false });
      this.toggleStage(c1.sequence);

      if (presence.character_2) {
        var c2 = presence.character_2.visit(this, { declared: true, on_stage: false });

        if (c1.sequence === c2.sequence) {
          throw new Error("Semantic Error - Same character entering twice in same statement.");
        }

        this.toggleStage(c2.sequence);
      }

      return null;
    }
  }, {
    key: "visitExit",

    /**
     * Exit
     */
    value: function visitExit(presence, arg) {
      if (!presence.character) {
        throw new Error("Semantic Error - No character exiting.");
      }

      var c = presence.character.visit(this, { declared: true, on_stage: true });
      this.toggleStage(c.sequence);

      return null;
    }
  }, {
    key: "visitExeunt",

    /**
     * Exeunt
     */
    value: function visitExeunt(presence, arg) {
      // - No characters on stage
      // x Only 1 character exeunting
      // x characters are the same

      if (presence.character_1 ? !presence.character_2 : presence.character_2) {
        throw new Error("Semantic Error - Either 2 or no characters can be defined, not one.");
      }

      if (presence.character_1 && presence.character_2) {
        var c1 = presence.character_1.visit(this, { declared: true, on_stage: true });
        var c2 = presence.character_2.visit(this, { declared: true, on_stage: true });

        if (c1.sequence === c2.sequence) {
          throw new Error("Semantic Error - Characters are the same.");
        }

        this.toggleStage(c1.sequence);
        this.toggleStage(c2.sequence);
      } else {
        this.exeuntStage();
      }

      return null;
    }
  }, {
    key: "visitDialogue",

    /**
     * Dialogue
     */
    value: function visitDialogue(dialogue, arg) {
      var self = this;
      dialogue.lines.forEach(function (line) {
        line.visit(self, arg);
      });
      return null;
    }
  }, {
    key: "visitLine",

    /**
     * Line
     */
    value: function visitLine(line, arg) {
      var self = this;

      var c = line.character.visit(this, { declared: true, on_stage: true });

      if (line.sentences.length === 0) {
        throw new Error("Semantic Error - Line cannot have no sentences.");
      } else {
        arg.character = c.sequence;
        line.sentences.forEach(function (sentence) {
          sentence.visit(self, arg);
        });
      }

      return null;
    }
  }, {
    key: "visitGoto",

    /**
     * Goto
     */
    value: function visitGoto(goto, arg) {
      var n = goto.numeral.visit(this, arg);

      if (!this.sceneExists(arg.act, arg.scene)) {
        throw new Error("Semantic Error - Scene specified by Goto does not exist in this act.");
      }

      return null;
    }
  }, {
    key: "visitAssignmentSentence",

    /**
     * Assignment Sentence
     */
    value: function visitAssignmentSentence(assignment, arg) {
      assignment.be.visit(this, arg);

      assignment.value.visit(this, arg);

      return null;
    }
  }, {
    key: "visitQuestionSentence",

    /**
     * Question Sentence
     */
    value: function visitQuestionSentence(question, arg) {
      question.be.visit(this, arg);
      question.comparison.visit(this, arg);
      question.value.visit(this, arg);

      return null;
    }
  }, {
    key: "visitResponseSentence",

    /**
     * Response Sentence
     */
    value: function visitResponseSentence(response, arg) {
      response.goto.visit(this, arg);

      return null;
    }
  }, {
    key: "visitGotoSentence",

    /**
     * Goto Sentence
     */
    value: function visitGotoSentence(goto, arg) {
      goto.goto.visit(this, arg);

      return null;
    }
  }, {
    key: "visitIntegerInputSentence",

    /**
     * Integer Input Sentence
     */
    value: function visitIntegerInputSentence(integer_input, arg) {
      if (this.solo(arg.character)) {
        throw new Error("Semantic Error - Input calls require two characters on stage.");
      }
      return null;
    }
  }, {
    key: "visitCharInputSentence",

    /**
     * Char Input Sentence
     */
    value: function visitCharInputSentence(char_input, arg) {
      if (this.solo(arg.character)) {
        throw new Error("Semantic Error - Input calls require two characters on stage.");
      }
      return null;
    }
  }, {
    key: "visitIntegerOutputSentence",

    /**
     * Integer Output Sentence
     */
    value: function visitIntegerOutputSentence(integer_output, arg) {
      if (this.solo(arg.character)) {
        throw new Error("Semantic Error - Output calls require two characters on stage.");
      }
      return null;
    }
  }, {
    key: "visitCharOutputSentence",

    /**
     * Char Output Sentence
     */
    value: function visitCharOutputSentence(char_output, arg) {
      if (this.solo(arg.character)) {
        throw new Error("Semantic Error - Output calls require two characters on stage.");
      }
      return null;
    }
  }, {
    key: "visitRememberSentence",

    /**
     * Remember Sentence
     */
    value: function visitRememberSentence(remember, arg) {
      var p = remember.pronoun.visit(this, arg);

      return null;
    }
  }, {
    key: "visitRecallSentence",

    /**
     * Recall Sentence
     */
    value: function visitRecallSentence(recall, arg) {
      recall.comment.visit(this, arg);
    }
  }, {
    key: "visitPositiveConstantValue",

    /**
     * Positive Constant Value
     */
    value: function visitPositiveConstantValue(pc_val, arg) {
      var self = this;

      var n = undefined;
      if (!(pc_val.noun instanceof _ast2["default"].PositiveNoun) && !(pc_val.noun instanceof _ast2["default"].NeutralNoun)) {
        throw new Error("Semantic Error - Positive Constants must use a positive or neutral noun");
      } else {
        n = pc_val.noun.visit(self, arg);
      }
      pc_val.noun.visit(this, arg);
      pc_val.adjectives.forEach(function (adjective) {
        if (!(adjective instanceof _ast2["default"].PositiveAdjective) && !(adjective instanceof _ast2["default"].NeutralAdjective)) {
          throw new Error("Semantic Error - Positive Constants must use positive of neutral adjectives.");
        } else {
          adjective.visit(self, arg);
        }
      });

      //return Math.pow(2, pc_val.adjectives.length);
      return 0; // placeholder
    }
  }, {
    key: "visitNegativeConstantValue",

    /**
     * Negative Constant Value
     */
    value: function visitNegativeConstantValue(nc_val, arg) {
      var self = this;

      var n = undefined;
      if (!(nc_val.noun instanceof _ast2["default"].NegativeNoun) && !(nc_val.noun instanceof _ast2["default"].NeutralNoun)) {
        throw new Error("Semantic Error - Negative Constants must use a negative or neutral noun");
      } else {
        n = nc_val.noun.visit(self, arg);
      }
      nc_val.noun.visit(this, arg);
      nc_val.adjectives.forEach(function (adjective) {
        if (!(adjective instanceof _ast2["default"].NegativeAdjective) && !(adjective instanceof _ast2["default"].NeutralAdjective)) {
          throw new Error("Semantic Error - Negative Constants must use negative of neutral adjectives.");
        } else {
          adjective.visit(self, arg);
        }
      });

      //return (-1 * Math.pow(2, nc_val.adjectives.length));
      return 0; // placeholder
    }
  }, {
    key: "visitUnaryOperationValue",

    /**
     * Unary Operation Value
     */
    value: function visitUnaryOperationValue(unary, arg) {
      var o = unary.operator.visit(this, arg);
      var v = unary.value.visit(this, arg);

      return 0; // placeholder
    }
  }, {
    key: "visitArithmeticOperationValue",

    /**
     * Arithmetic Operation Value
     */
    value: function visitArithmeticOperationValue(arithmetic, arg) {
      var o = arithmetic.operator.visit(this, arg);
      var v1 = arithmetic.value_1.visit(this, arg);
      var v2 = arithmetic.value_2.visit(this, arg);

      return 0; //placeholder
    }
  }, {
    key: "visitPronounValue",

    /**
     * Pronoun Value
     */
    value: function visitPronounValue(pronoun, arg) {
      var p = pronoun.pronoun.visit(this, arg);

      return p;
    }
  }, {
    key: "visitGreaterThanComparison",

    /**
     * Greater Than Comparison
     */
    value: function visitGreaterThanComparison(comparison, arg) {
      var c = comparison.comparative.visit(this, arg);

      return c;
    }
  }, {
    key: "visitLesserThanComparison",

    /**
     * Lesser Than Comparison
     */
    value: function visitLesserThanComparison(comparison, arg) {
      var c = comparison.comparative.visit(this, arg);

      return null;
    }
  }, {
    key: "visitEqualToComparison",

    /**
     * Equal To Comparison
     */
    value: function visitEqualToComparison(comparison, arg) {
      comparison.adjective.visit(this, arg);

      return null;
    }
  }, {
    key: "visitInverseComparison",

    /**
     * Inverse Comparison
     */
    value: function visitInverseComparison(comparison, arg) {
      var c = comparison.comparison.visit(this, arg);

      return c;
    }
  }, {
    key: "visitFirstPersonPronoun",

    /**
     * First Person Pronoun
     */
    value: function visitFirstPersonPronoun(fpp, arg) {

      return null;
    }
  }, {
    key: "visitSecondPersonPronoun",

    /**
     * Second Person Pronoun
     */
    value: function visitSecondPersonPronoun(spp, arg) {

      return null;
    }
  }, {
    key: "visitPositiveNoun",

    /**
     * Positive Noun
     */
    value: function visitPositiveNoun(noun, arg) {

      return null;
    }
  }, {
    key: "visitNeutralNoun",

    /**
     * Neutral Noun
     */
    value: function visitNeutralNoun(noun, arg) {

      return null;
    }
  }, {
    key: "visitNegativeNoun",

    /**
     * Negative Noun
     */
    value: function visitNegativeNoun(noun, arg) {

      return null;
    }
  }, {
    key: "visitPositiveAdjective",

    /**
     * Positive Adjective
     */
    value: function visitPositiveAdjective(adjective, arg) {

      return null;
    }
  }, {
    key: "visitNeutralAdjective",

    /**
     * Neutral Adjective
     */
    value: function visitNeutralAdjective(adjective, arg) {

      return null;
    }
  }, {
    key: "visitNegativeAdjective",

    /**
     * Negative Adjective
     */
    value: function visitNegativeAdjective(adjective, arg) {

      return null;
    }
  }, {
    key: "visitUnaryOperator",

    /**
     * Unary Operator
     */
    value: function visitUnaryOperator(operator, arg) {

      return null;
    }
  }, {
    key: "visitArithmeticOperator",

    /**
     * Arithmetic Operator
     */
    value: function visitArithmeticOperator(operator, arg) {

      return null;
    }
  }, {
    key: "visitPositiveComparative",

    /**
     * Positive Comparative
     */
    value: function visitPositiveComparative(comparative, arg) {

      return null;
    }
  }, {
    key: "visitNegativeComparative",

    /**
     * Negative Comparative
     */
    value: function visitNegativeComparative(comparative, arg) {

      return null;
    }
  }, {
    key: "visitBe",

    /**
     * Be
     */
    value: function visitBe(be, arg) {
      if (be.sequence === "You are" || be.sequence === "Thou art" || be.sequence === "You") {
        if (this.solo(arg.character)) {
          console.log("solo");
          throw new Error("Semantic Error - Cannot assign value to interlocutor, only 1 character is on stage.");
        }
      }

      return null;
    }
  }, {
    key: "visitBeComparative",

    /**
     * Be Comparative
     */
    value: function visitBeComparative(be, arg) {
      if (be.sequence === "Are you" || be.sequence === "Art thou") {
        if (this.solo(arg.character)) throw new Error("Semantic Error - Cannot compare value of interlocutor, only 1 character is on stage.");
      }

      return null;
    }
  }]);

  return Semantics;
})();

exports["default"] = Semantics;
module.exports = exports["default"];

},{"./ast":1}],11:[function(require,module,exports){
/**
 * SPL Tokens
 * @memberof Horatio
 * @param {number} kind     - The scanned token byte
 * @param {string} sequence - The matched phrase
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = (function () {
  function Token(kind, sequence) {
    _classCallCheck(this, Token);

    this.kind = kind;
    this.sequence = sequence;
  }

  _createClass(Token, null, [{
    key: "CHARACTER",
    get: function get() {
      return 10;
    }
  }, {
    key: "ARTICLE",
    get: function get() {
      return 11;
    }
  }, {
    key: "BE",
    get: function get() {
      return 12;
    }
  }, {
    key: "ACT",
    get: function get() {
      return 13;
    }
  }, {
    key: "SCENE",
    get: function get() {
      return 14;
    }
  }, {
    key: "ENTER",
    get: function get() {
      return 15;
    }
  }, {
    key: "EXIT",
    get: function get() {
      return 16;
    }
  }, {
    key: "EXEUNT",
    get: function get() {
      return 17;
    }
  }, {
    key: "INPUT_INTEGER",
    get: function get() {
      return 21;
    }
  }, {
    key: "INPUT_CHAR",
    get: function get() {
      return 22;
    }
  }, {
    key: "OUTPUT_INTEGER",
    get: function get() {
      return 24;
    }
  }, {
    key: "OUTPUT_CHAR",
    get: function get() {
      return 25;
    }
  }, {
    key: "IMPERATIVE",
    get: function get() {
      return 30;
    }
  }, {
    key: "TO",
    get: function get() {
      return 31;
    }
  }, {
    key: "RETURN",
    get: function get() {
      return 32;
    }
  }, {
    key: "POSITIVE_COMPARATIVE",
    get: function get() {
      return 40;
    }
  }, {
    key: "NEGATIVE_COMPARATIVE",
    get: function get() {
      return 41;
    }
  }, {
    key: "AS",
    get: function get() {
      return 42;
    }
  }, {
    key: "NOT",
    get: function get() {
      return 43;
    }
  }, {
    key: "THAN",
    get: function get() {
      return 44;
    }
  }, {
    key: "IF_SO",
    get: function get() {
      return 45;
    }
  }, {
    key: "BE_COMPARATIVE",
    get: function get() {
      return 46;
    }
  }, {
    key: "UNARY_OPERATOR",
    get: function get() {
      return 50;
    }
  }, {
    key: "ARITHMETIC_OPERATOR",
    get: function get() {
      return 51;
    }
  }, {
    key: "REMEMBER",
    get: function get() {
      return 60;
    }
  }, {
    key: "RECALL",
    get: function get() {
      return 61;
    }
  }, {
    key: "FIRST_PERSON_PRONOUN",
    get: function get() {
      return 70;
    }
  }, {
    key: "SECOND_PERSON_PRONOUN",
    get: function get() {
      return 71;
    }
  }, {
    key: "POSITIVE_ADJECTIVE",
    get: function get() {
      return 72;
    }
  }, {
    key: "NEUTRAL_ADJECTIVE",
    get: function get() {
      return 73;
    }
  }, {
    key: "NEGATIVE_ADJECTIVE",
    get: function get() {
      return 74;
    }
  }, {
    key: "POSITIVE_NOUN",
    get: function get() {
      return 75;
    }
  }, {
    key: "NEUTRAL_NOUN",
    get: function get() {
      return 76;
    }
  }, {
    key: "NEGATIVE_NOUN",
    get: function get() {
      return 77;
    }
  }, {
    key: "ROMAN_NUMERAL",
    get: function get() {
      return 78;
    }
  }, {
    key: "COLON",
    get: function get() {
      return 90;
    }
  }, {
    key: "COMMA",
    get: function get() {
      return 91;
    }
  }, {
    key: "PERIOD",
    get: function get() {
      return 92;
    }
  }, {
    key: "EXCLAMATION_POINT",
    get: function get() {
      return 93;
    }
  }, {
    key: "QUESTION_MARK",
    get: function get() {
      return 94;
    }
  }, {
    key: "AMPERSAND",
    get: function get() {
      return 95;
    }
  }, {
    key: "AND",
    get: function get() {
      return 96;
    }
  }, {
    key: "LEFT_BRACKET",
    get: function get() {
      return 97;
    }
  }, {
    key: "RIGHT_BRACKET",
    get: function get() {
      return 98;
    }
  }, {
    key: "COMMENT",
    get: function get() {
      return 110;
    }
  }]);

  return Token;
})();

exports["default"] = Token;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _wordlists = require('./wordlists');

var _wordlists2 = _interopRequireDefault(_wordlists);

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

/**
 * SPL Tokenizer
 * @memberof Horatio
 * @param {string} input - An input SPL program
 */

var Tokenizer = (function () {
  function Tokenizer(input) {
    _classCallCheck(this, Tokenizer);

    this.tokens = [];
    this.dictionary = {};
    this.buildDictionary();
    this.tokenize(input);
  }

  _createClass(Tokenizer, [{
    key: 'nextToken',

    /**
     * Get the next token
     * @returns {Token|number} - The next token from the input program, or -1 if no remaining tokens.
     */
    value: function nextToken() {
      if (this.tokens.length > 0) {
        return this.tokens.shift();
      } else {
        return -1;
      }
    }
  }, {
    key: 'tokenize',

    /**
     * Scan and tokenize an input SPL program
     * @param {string} input - The input SPL program
     */
    value: function tokenize(input) {
      // strip all newlines/extra whitespace
      input = input.trim().replace(/[\s\n]+/g, ' ');

      // replace terminals
      input = input.replace(/[:,.!?\[\]]/g, function (match) {
        switch (match) {
          case ':':
            return ' COLON'; //break;
          case ',':
            return ' COMMA'; //break;
          case '.':
            return ' PERIOD'; //break;
          case '!':
            return ' EXCLAMATION_POINT'; //break;
          case '?':
            return ' QUESTION_MARK'; //break;
          case '[':
            return 'LEFT_BRACKET '; //break;
          case ']':
            return ' RIGHT_BRACKET'; //break;
        }
      });

      // Split into array by spaces
      var input_array = input.split(' ');

      // tokenize
      while (input_array.length > 0) {
        var current = input_array.shift();
        if (this.dictionary[current]) {
          var check_next = current + ' ' + input_array[0];
          if (this.dictionary[check_next]) {
            current = check_next;
            this.tokens.push(new _token2['default'](this.dictionary[current], current));
            input_array.splice(0, 1);
          } else {
            this.tokens.push(new _token2['default'](this.dictionary[current], current));
          }
        } else {

          // check if further appends will find match
          var br = 0;
          var orig = current;
          while (!this.dictionary[current] && br < 6) {
            current = current + ' ' + input_array[br];

            if (this.dictionary[current]) {
              this.tokens.push(new _token2['default'](this.dictionary[current], current));
              input_array.splice(0, br + 1);
            }
            br += 1;
          }

          // comment
          if (br === 6) this.tokens.push(new _token2['default'](43, orig));
        }
      }
    }
  }, {
    key: 'buildDictionary',

    /**
     * Builds a hash of words -> byte codes for scanning
     */
    value: function buildDictionary() {
      var self = this;
      var wl = _wordlists2['default'];

      wl.characters.forEach(function (w) {
        self.dictionary[w] = 10;
      });
      wl.articles.forEach(function (w) {
        self.dictionary[w] = 11;
      });
      wl.be.forEach(function (w) {
        self.dictionary[w] = 12;
      });
      wl.act.forEach(function (w) {
        self.dictionary[w] = 13;
      });
      wl.scene.forEach(function (w) {
        self.dictionary[w] = 14;
      });
      wl.enter.forEach(function (w) {
        self.dictionary[w] = 15;
      });
      wl.exit.forEach(function (w) {
        self.dictionary[w] = 16;
      });
      wl.exeunt.forEach(function (w) {
        self.dictionary[w] = 17;
      });

      //wl.input                 .forEach(function(w) { self.dictionary[w] = 20; });
      wl.input_integer.forEach(function (w) {
        self.dictionary[w] = 21;
      });
      wl.input_char.forEach(function (w) {
        self.dictionary[w] = 22;
      });
      //wl.output                .forEach(function(w) { self.dictionary[w] = 23; });
      wl.output_integer.forEach(function (w) {
        self.dictionary[w] = 24;
      });
      wl.output_char.forEach(function (w) {
        self.dictionary[w] = 25;
      });

      wl.imperatives.forEach(function (w) {
        self.dictionary[w] = 30;
      });
      wl.to.forEach(function (w) {
        self.dictionary[w] = 31;
      });
      wl.proceed.forEach(function (w) {
        self.dictionary[w] = 32;
      });

      wl.positive_comparatives.forEach(function (w) {
        self.dictionary[w] = 40;
      });
      wl.negative_comparatives.forEach(function (w) {
        self.dictionary[w] = 41;
      });
      wl.as.forEach(function (w) {
        self.dictionary[w] = 42;
      });
      wl.not.forEach(function (w) {
        self.dictionary[w] = 43;
      });
      wl.than.forEach(function (w) {
        self.dictionary[w] = 44;
      });
      wl.if_so.forEach(function (w) {
        self.dictionary[w] = 45;
      });
      wl.be_comparatives.forEach(function (w) {
        self.dictionary[w] = 46;
      });

      wl.unary_operators.forEach(function (w) {
        self.dictionary[w] = 50;
      });
      wl.arithmetic_operators.forEach(function (w) {
        self.dictionary[w] = 51;
      });

      wl.remember.forEach(function (w) {
        self.dictionary[w] = 60;
      });
      wl.recall.forEach(function (w) {
        self.dictionary[w] = 61;
      });

      wl.first_person_pronouns.forEach(function (w) {
        self.dictionary[w] = 70;
      });
      wl.second_person_pronouns.forEach(function (w) {
        self.dictionary[w] = 71;
      });
      wl.positive_adjectives.forEach(function (w) {
        self.dictionary[w] = 72;
      });
      wl.neutral_adjectives.forEach(function (w) {
        self.dictionary[w] = 73;
      });
      wl.negative_adjectives.forEach(function (w) {
        self.dictionary[w] = 74;
      });
      wl.positive_nouns.forEach(function (w) {
        self.dictionary[w] = 75;
      });
      wl.neutral_nouns.forEach(function (w) {
        self.dictionary[w] = 76;
      });
      wl.negative_nouns.forEach(function (w) {
        self.dictionary[w] = 77;
      });
      wl.roman_numerals.forEach(function (w) {
        self.dictionary[w] = 78;
      });

      wl.colon.forEach(function (w) {
        self.dictionary[w] = 90;
      });
      wl.comma.forEach(function (w) {
        self.dictionary[w] = 91;
      });
      wl.period.forEach(function (w) {
        self.dictionary[w] = 92;
      });
      wl.exclamation_point.forEach(function (w) {
        self.dictionary[w] = 93;
      });
      wl.question_mark.forEach(function (w) {
        self.dictionary[w] = 94;
      });
      wl.ampersand.forEach(function (w) {
        self.dictionary[w] = 95;
      });
      wl.and.forEach(function (w) {
        self.dictionary[w] = 96;
      });
      wl.left_bracket.forEach(function (w) {
        self.dictionary[w] = 97;
      });
      wl.right_bracket.forEach(function (w) {
        self.dictionary[w] = 98;
      });
    }
  }]);

  return Tokenizer;
})();

exports['default'] = Tokenizer;
module.exports = exports['default'];

},{"./token":11,"./wordlists":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _wordlistsAct_and_scene = require('./wordlists/act_and_scene');

var _wordlistsArithmetic_operators = require('./wordlists/arithmetic_operators');

var _wordlistsArticles = require('./wordlists/articles');

var _wordlistsBe = require('./wordlists/be');

var _wordlistsCharacters = require('./wordlists/characters');

var _wordlistsEnter_exit_exeunt = require('./wordlists/enter_exit_exeunt');

var _wordlistsFirst_person = require('./wordlists/first_person');

var _wordlistsFirst_person_possessive = require('./wordlists/first_person_possessive');

var _wordlistsFirst_person_reflexive = require('./wordlists/first_person_reflexive');

var _wordlistsImperatives = require('./wordlists/imperatives');

var _wordlistsMisc = require('./wordlists/misc');

var _wordlistsNegative_adjectives = require('./wordlists/negative_adjectives');

var _wordlistsNegative_comparatives = require('./wordlists/negative_comparatives');

var _wordlistsNegative_nouns = require('./wordlists/negative_nouns');

var _wordlistsNeutral_adjectives = require('./wordlists/neutral_adjectives');

var _wordlistsNeutral_nouns = require('./wordlists/neutral_nouns');

var _wordlistsNothing = require('./wordlists/nothing');

var _wordlistsPositive_adjectives = require('./wordlists/positive_adjectives');

var _wordlistsPositive_comparatives = require('./wordlists/positive_comparatives');

var _wordlistsPositive_nouns = require('./wordlists/positive_nouns');

var _wordlistsRoman_numerals = require('./wordlists/roman_numerals');

var _wordlistsSecond_person = require('./wordlists/second_person');

var _wordlistsSecond_person_possessive = require('./wordlists/second_person_possessive');

var _wordlistsSecond_person_reflexive = require('./wordlists/second_person_reflexive');

var _wordlistsStacks = require('./wordlists/stacks');

var _wordlistsThird_person_possessive = require('./wordlists/third_person_possessive');

var _wordlistsUnary_operators = require('./wordlists/unary_operators');

var _wordlistsPronouns = require('./wordlists/pronouns');

var _wordlistsInput_output = require('./wordlists/input_output');

var _wordlistsTerminals = require('./wordlists/terminals');

/**
 * Horatio Wordlists
 * Holds syntax for parsing. Loaded from includes/wordlists/ at make
 * @memberof Horatio
 * @namespace
 */
exports['default'] = {
  act: _wordlistsAct_and_scene.act,
  scene: _wordlistsAct_and_scene.scene,
  arithmetic_operators: _wordlistsArithmetic_operators.arithmetic_operators,
  articles: _wordlistsArticles.articles,
  be: _wordlistsBe.be,
  be_comparatives: _wordlistsBe.be_comparatives,
  characters: _wordlistsCharacters.characters,
  enter: _wordlistsEnter_exit_exeunt.enter,
  exit: _wordlistsEnter_exit_exeunt.exit,
  exeunt: _wordlistsEnter_exit_exeunt.exeunt,
  first_person: _wordlistsFirst_person.first_person,
  first_person_possessive: _wordlistsFirst_person_possessive.first_person_possessive,
  first_person_reflexive: _wordlistsFirst_person_reflexive.first_person_reflexive,
  imperatives: _wordlistsImperatives.imperatives,
  to: _wordlistsImperatives.to,
  proceed: _wordlistsImperatives.proceed,
  input_integer: _wordlistsInput_output.input_integer,
  input_char: _wordlistsInput_output.input_char,
  output_integer: _wordlistsInput_output.output_integer,
  output_char: _wordlistsInput_output.output_char,
  as: _wordlistsMisc.as,
  not: _wordlistsMisc.not,
  than: _wordlistsMisc.than,
  if_so: _wordlistsMisc.if_so,
  and: _wordlistsMisc.and,
  negative_adjectives: _wordlistsNegative_adjectives.negative_adjectives,
  negative_comparatives: _wordlistsNegative_comparatives.negative_comparatives,
  negative_nouns: _wordlistsNegative_nouns.negative_nouns,
  neutral_adjectives: _wordlistsNeutral_adjectives.neutral_adjectives,
  neutral_nouns: _wordlistsNeutral_nouns.neutral_nouns,
  nothing: _wordlistsNothing.nothing,
  positive_adjectives: _wordlistsPositive_adjectives.positive_adjectives,
  positive_comparatives: _wordlistsPositive_comparatives.positive_comparatives,
  positive_nouns: _wordlistsPositive_nouns.positive_nouns,
  first_person_pronouns: _wordlistsPronouns.first_person_pronouns,
  second_person_pronouns: _wordlistsPronouns.second_person_pronouns,
  roman_numerals: _wordlistsRoman_numerals.roman_numerals,
  second_person: _wordlistsSecond_person.second_person,
  second_person_possessive: _wordlistsSecond_person_possessive.second_person_possessive,
  second_person_reflexive: _wordlistsSecond_person_reflexive.second_person_reflexive,
  remember: _wordlistsStacks.remember,
  recall: _wordlistsStacks.recall,
  colon: _wordlistsTerminals.colon,
  comma: _wordlistsTerminals.comma,
  period: _wordlistsTerminals.period,
  exclamation_point: _wordlistsTerminals.exclamation_point,
  question_mark: _wordlistsTerminals.question_mark,
  ampersand: _wordlistsTerminals.ampersand,
  left_bracket: _wordlistsTerminals.left_bracket,
  right_bracket: _wordlistsTerminals.right_bracket,
  third_person_possessive: _wordlistsThird_person_possessive.third_person_possessive,
  unary_operators: _wordlistsUnary_operators.unary_operators
};
module.exports = exports['default'];

},{"./wordlists/act_and_scene":14,"./wordlists/arithmetic_operators":15,"./wordlists/articles":16,"./wordlists/be":17,"./wordlists/characters":18,"./wordlists/enter_exit_exeunt":19,"./wordlists/first_person":20,"./wordlists/first_person_possessive":21,"./wordlists/first_person_reflexive":22,"./wordlists/imperatives":23,"./wordlists/input_output":24,"./wordlists/misc":25,"./wordlists/negative_adjectives":26,"./wordlists/negative_comparatives":27,"./wordlists/negative_nouns":28,"./wordlists/neutral_adjectives":29,"./wordlists/neutral_nouns":30,"./wordlists/nothing":31,"./wordlists/positive_adjectives":32,"./wordlists/positive_comparatives":33,"./wordlists/positive_nouns":34,"./wordlists/pronouns":35,"./wordlists/roman_numerals":36,"./wordlists/second_person":37,"./wordlists/second_person_possessive":38,"./wordlists/second_person_reflexive":39,"./wordlists/stacks":40,"./wordlists/terminals":41,"./wordlists/third_person_possessive":42,"./wordlists/unary_operators":43}],14:[function(require,module,exports){
/** Act and Scene */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var act = ['Act'];
exports.act = act;
var scene = ['Scene'];
exports.scene = scene;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var arithmetic_operators = ['sum of', 'difference between', 'product of', 'quotient between', 'remainder of the quotient between'];
exports.arithmetic_operators = arithmetic_operators;

},{}],16:[function(require,module,exports){
/** Articles **/
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var articles = ['a', 'an', 'the'];
exports.articles = articles;

},{}],17:[function(require,module,exports){
/** Be */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var be = ['Thou art', 'You are', 'I am', 'You'
//'am',
//'are',
//'art',
//'be',
//'is'
];

exports.be = be;
var be_comparatives = ['Art thou', 'Are you', 'Am I'];
exports.be_comparatives = be_comparatives;

},{}],18:[function(require,module,exports){
/** Characters */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var characters = ['Achilles', 'Adonis', 'Adriana', 'Aegeon', 'Aemilia', 'Agamemnon', 'Agrippa', 'Ajax', 'Alonso', 'Andromache', 'Angelo', 'Antiochus', 'Antonio', 'Arthur', 'Autolycus', 'Balthazar', 'Banquo', 'Beatrice', 'Benedick', 'Benvolio', 'Bianca', 'Brabantio', 'Brutus', 'Capulet', 'Cassandra', 'Cassius', 'Christopher Sly', 'Cicero', 'Claudio', 'Claudius', 'Cleopatra', 'Cordelia', 'Cornelius', 'Cressida', 'Cymberline', 'Demetrius', 'Desdemona', 'Dionyza', 'Doctor Caius', 'Dogberry', 'Don John', 'Don Pedro', 'Donalbain', 'Dorcas', 'Duncan', 'Egeus', 'Emilia', 'Escalus', 'Falstaff', 'Fenton', 'Ferdinand', 'Ford', 'Fortinbras', 'Francisca', 'Friar John', 'Friar Laurence', 'Gertrude', 'Goneril', 'Hamlet', 'Hecate', 'Hector', 'Helen', 'Helena', 'Hermia', 'Hermonie', 'Hippolyta', 'Horatio', 'Imogen', 'Isabella', 'John of Gaunt', 'John of Lancaster', 'Julia', 'Juliet', 'Julius Caesar', 'King Henry', 'King John', 'King Lear', 'King Richard', 'Lady Capulet', 'Lady Macbeth', 'Lady Macduff', 'Lady Montague', 'Lennox', 'Leonato', 'Luciana', 'Lucio', 'Lychorida', 'Lysander', 'Macbeth', 'Macduff', 'Malcolm', 'Mariana', 'Mark Antony', 'Mercutio', 'Miranda', 'Mistress Ford', 'Mistress Overdone', 'Mistress Page', 'Montague', 'Mopsa', 'Oberon', 'Octavia', 'Octavius Caesar', 'Olivia', 'Ophelia', 'Orlando', 'Orsino', 'Othello', 'Page', 'Pantino', 'Paris', 'Pericles', 'Pinch', 'Polonius', 'Pompeius', 'Portia', 'Priam', 'Prince Henry', 'Prospero', 'Proteus', 'Publius', 'Puck', 'Queen Elinor', 'Regan', 'Robin', 'Romeo', 'Rosalind', 'Sebastian', 'Shallow', 'Shylock', 'Slender', 'Solinus', 'Stephano', 'Thaisa', 'The Abbot of Westminster', 'The Apothecary', 'The Archbishop of Canterbury', 'The Duke of Milan', 'The Duke of Venice', 'The Ghost', 'Theseus', 'Thurio', 'Timon', 'Titania', 'Titus', 'Troilus', 'Tybalt', 'Ulysses', 'Valentine', 'Venus', 'Vincentio', 'Viola'];
exports.characters = characters;

},{}],19:[function(require,module,exports){
/** Enter, Exit, and Exeunt */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var enter = ['Enter'];
exports.enter = enter;
var exit = ['Exit'];
exports.exit = exit;
var exeunt = ['Exeunt'];
exports.exeunt = exeunt;

},{}],20:[function(require,module,exports){
/** First Person */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var first_person = ['I', 'i', 'me'];
exports.first_person = first_person;

},{}],21:[function(require,module,exports){
/** First Person Possessive */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var first_person_possessive = ['mine', 'my'];
exports.first_person_possessive = first_person_possessive;

},{}],22:[function(require,module,exports){
/** First Person Reflexive */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var first_person_reflexive = ['myself'];
exports.first_person_reflexive = first_person_reflexive;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var imperatives = ['Let us', 'let us', 'We shall', 'we shall', 'We must', 'we must'];

exports.imperatives = imperatives;
var to = ['to'];

exports.to = to;
var proceed = ['proceed', 'return'];
exports.proceed = proceed;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var input_integer = ['Listen to your heart'];
exports.input_integer = input_integer;
var input_char = ['Open your mind'];
exports.input_char = input_char;
var input = input_integer.concat(input_char);

exports.input = input;
var output_integer = ['Open your heart'];
exports.output_integer = output_integer;
var output_char = ['Speak your mind'];
exports.output_char = output_char;
var output = output_integer.concat(output_char);
exports.output = output;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var as = ['as'];
exports.as = as;
var not = ['not'];
exports.not = not;
var than = ['than'];
exports.than = than;
var if_so = ['If so'];
exports.if_so = if_so;
var and = ['and'];
exports.and = and;

},{}],26:[function(require,module,exports){
/** Negative Adjective */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var negative_adjectives = ['bad', 'big', 'cowardly', 'cursed', 'damned', 'dirty', 'disgusting', 'distasteful', 'dusty', 'evil', 'fat', 'fat-kidneyed', 'fatherless', 'foul', 'hairy', 'half-witted', 'horrible', 'horrid', 'infected', 'lying', 'miserable', 'misused', 'oozing', 'rotten', 'smelly', 'snotty', 'sorry', 'stinking', 'stuffed', 'stupid', 'vile', 'villainous', 'worried'];
exports.negative_adjectives = negative_adjectives;

},{}],27:[function(require,module,exports){
/** Negative Comparatives */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var negative_comparatives = ['punier', 'smaller', 'worse'];
exports.negative_comparatives = negative_comparatives;

},{}],28:[function(require,module,exports){
/** Negative Nouns */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var negative_nouns = ['Hell', 'Microsoft', 'bastard', 'beggar', 'blister', 'codpiece', 'coward', 'curse', 'death', 'devil', 'draught', 'famine', 'flirt-gill', 'goat', 'hate', 'hog', 'hound', 'leech', 'lie', 'pig', 'plague', 'starvation', 'toad', 'war', 'wolf'];
exports.negative_nouns = negative_nouns;

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var neutral_adjectives = ['black', 'blue', 'bluest', 'bottomless', 'furry', 'green', 'hard', 'huge', 'large', 'little', 'normal', 'old', 'purple', 'red', 'small', 'tiny', 'yellow'];
exports.neutral_adjectives = neutral_adjectives;

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var neutral_nouns = ['animal', 'aunt', 'brother', 'chihuahua', 'cousin', 'cow', 'daughter', 'door', 'face', 'father', 'fellow', 'granddaughter', 'grandfather', 'grandmother', 'grandson', 'hair', 'horse', 'lamp', 'lantern', 'mistletoe', 'moon', 'morning', 'mother', 'nephew', 'niece', 'road', 'roman', 'sister', 'son', 'squirrel', 'stone wall', 'thing', 'tree', 'uncle', 'wind'];
exports.neutral_nouns = neutral_nouns;

},{}],31:[function(require,module,exports){
/** Nothing */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var nothing = ['nothing', 'zero'];
exports.nothing = nothing;

},{}],32:[function(require,module,exports){
/** Positive Adjectives */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var positive_adjectives = ['amazing', 'beautiful', 'blossoming', 'bold', 'brave', 'charming', 'clearest', 'cunning', 'cute', 'delicious', 'embroidered', 'fair', 'fine', 'gentle', 'golden', 'good', 'handsome', 'happy', 'healthy', 'honest', 'little', 'lovely', 'loving', 'mighty', 'noble', 'old', 'peaceful', 'pretty', 'prompt', 'proud', 'reddest', 'rich', 'rural', 'smooth', 'sunny', 'sweet', 'sweetest', 'trustworthy', 'tiny', 'warm', 'white'];
exports.positive_adjectives = positive_adjectives;

},{}],33:[function(require,module,exports){
/** Positive Comparatives */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var positive_comparatives = ['better', 'bigger', 'fresher', 'friendlier', 'nicer', 'jollier'];
exports.positive_comparatives = positive_comparatives;

},{}],34:[function(require,module,exports){
/** Positive Nouns */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var positive_nouns = ['Heaven', 'King', 'Lord', 'angel', 'flower', 'happiness', 'joy', 'plum', 'summer\'s day', 'hero', 'rose', 'kingdom', 'pony', 'cat', 'town', 'purse', 'sky', 'hamster', 'nose'];
exports.positive_nouns = positive_nouns;

},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var first_person_pronouns = [
//'I',
'myself', 'me'];

exports.first_person_pronouns = first_person_pronouns;
var second_person_pronouns = ['you', 'yourself', 'thyself', 'thy', 'thee', 'thou'];
exports.second_person_pronouns = second_person_pronouns;

},{}],36:[function(require,module,exports){
/** Roman Numerals */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var roman_numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
exports.roman_numerals = roman_numerals;

},{}],37:[function(require,module,exports){
/** Second Person */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var second_person = ['thee', 'thou', 'you'];
exports.second_person = second_person;

},{}],38:[function(require,module,exports){
/** Second Person Possessive */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var second_person_possessive = ['thine', 'thy', 'your'];
exports.second_person_possessive = second_person_possessive;

},{}],39:[function(require,module,exports){
/** Second Person Reflexive */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var second_person_reflexive = ['thyself', 'yourself'];
exports.second_person_reflexive = second_person_reflexive;

},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var remember = ['Remember'];
exports.remember = remember;
var recall = ['Recall'];
exports.recall = recall;

},{}],41:[function(require,module,exports){
/** Terminals
export const terminals = [
  ":",
  ",",
  "[",
  "\.",
  "?",
  "]"
];

export const line_terminals = [
  '\\.',
  "?",
  "!",
  '\\]'
];

export const character_terminal = ",";
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var colon = ['COLON'];
exports.colon = colon;
var comma = ['COMMA'];
exports.comma = comma;
var period = ['PERIOD'];
exports.period = period;
var exclamation_point = ['EXCLAMATION_POINT'];
exports.exclamation_point = exclamation_point;
var question_mark = ['QUESTION_MARK'];
exports.question_mark = question_mark;
var ampersand = ['&'];
exports.ampersand = ampersand;
var left_bracket = ['LEFT_BRACKET'];
exports.left_bracket = left_bracket;
var right_bracket = ['RIGHT_BRACKET'];
exports.right_bracket = right_bracket;

},{}],42:[function(require,module,exports){
/** Third Person Possessive */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var third_person_possessive = ['his', 'her', 'its', 'their'];
exports.third_person_possessive = third_person_possessive;

},{}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var unary_operators = ['square of', 'cube of', 'square root of', 'factorial of', 'twice'];
exports.unary_operators = unary_operators;

},{}]},{},[7]);
