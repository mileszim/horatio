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
class Program {
  constructor(comment, declarations, parts) {
    this.comment      = comment;
    this.declarations = declarations;
    this.parts        = parts;
  }

  visit(visitor, arg) {
    return visitor.visitProgram(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character
 * @param {Horatio.AST.Comment}   comment
 */
class Declaration {
  constructor(character, comment) {
    this.character = character;
    this.comment   = comment;
  }

  visit(visitor, arg) {
    return visitor.visitDeclaration(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral}         numeral
 * @param {Horatio.AST.Comment}         comment
 * @param {Array.<Horatio.AST.Subpart>} subparts
 */
class Part {
  constructor(numeral, comment, subparts) {
    this.numeral  = numeral;
    this.comment  = comment;
    this.subparts = subparts;
  }

  visit(visitor, arg) {
    return visitor.visitPart(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral} numeral
 * @param {Horatio.AST.Comment} comment
 * @param {Horatio.AST.Stage}   stage
 */
class Subpart {
  constructor(numeral, comment, stage) {
    this.numeral = numeral;
    this.comment = comment;
    this.stage   = stage;
  }

  visit(visitor, arg) {
    return visitor.visitSubpart(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Dialogue}                                  dialogue
 * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} start_presence
 * @param {Horatio.AST.Enter|Horatio.AST.Exit|Horatio.AST.exeunt} end_presence
 */
class Stage {
  constructor(dialogue, start_presence, end_presence) {
    this.dialogue       = dialogue;
    this.start_presence = start_presence;
    this.end_presence   = end_presence;
  }

  visit(visitor, arg) {
    return visitor.visitStage(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character_1
 * @param {Horatio.AST.Character} character_2
 */
class Enter {
  constructor(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
  }

  visit(visitor, arg) {
    return visitor.visitEnter(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character
 */
class Exit {
  constructor(character) {
    this.character = character;
  }

  visit(visitor, arg) {
    return visitor.visitExit(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character} character_1
 * @param {Horatio.AST.Character} character_2
 */
class Exeunt {
  constructor(character_1, character_2) {
    this.character_1 = character_1;
    this.character_2 = character_2;
  }

  visit(visitor, arg) {
    return visitor.visitExeunt(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Array.<Horatio.AST.Line>} lines
 */
class Dialogue {
  constructor(lines) {
    this.lines = lines;
  }

  visit(visitor, arg) {
    return visitor.visitDialogue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Character}         character
 * @param {Array.<Horatio.AST.Sentences>} sentences
 */
class Line {
  constructor(character, sentences) {
    this.character = character;
    this.sentences = sentences;
  }

  visit(visitor, arg) {
    return visitor.visitLine(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 * @param {Horatio.AST.Numeral} numeral
 */
class Goto {
  constructor(numeral) {
    this.numeral = numeral;
  }

  visit(visitor, arg) {
    return visitor.visitGoto(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class AssignmentSentence {
  constructor(be, value) {
    this.be    = be;
    this.value = value;
  }

  visit(visitor, arg) {
    return visitor.visitAssignmentSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class QuestionSentence {
  constructor(be, comparison, value) {
    this.be         = be;
    this.comparison = comparison;
    this.value      = value;
  }

  visit(visitor, arg) {
    return visitor.visitQuestionSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class ResponseSentence {
  constructor(goto) {
    this.goto = goto;
  }

  visit(visitor, arg) {
    return visitor.visitResponseSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class GotoSentence {
  constructor(goto) {
    this.goto = goto;
  }

  visit(visitor, arg) {
    return visitor.visitGotoSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class IntegerInputSentence {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitIntegerInputSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class CharInputSentence {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitCharInputSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class IntegerOutputSentence {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitIntegerOutputSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class CharOutputSentence {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitCharOutputSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class RememberSentence {
  constructor(pronoun) {
    this.pronoun = pronoun;
  }

  visit(visitor, arg) {
    return visitor.visitRememberSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class RecallSentence {
  constructor(comment) {
    this.comment = comment;
  }

  visit(visitor, arg) {
    return visitor.visitRecallSentence(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class PositiveConstantValue {
  constructor(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
  }

  visit(visitor, arg) {
    return visitor.visitPositiveConstantValue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NegativeConstantValue {
  constructor(noun, adjectives) {
    this.noun       = noun;
    this.adjectives = adjectives;
  }

  visit(visitor, arg) {
    return visitor.visitNegativeConstantValue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class UnaryOperationValue {
  constructor(operator, value) {
    this.operator = operator;
    this.value    = value;
  }

  visit(visitor, arg) {
    return visitor.visitUnaryOperationValue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class ArithmeticOperationValue {
  constructor(operator, value_1, value_2) {
    this.operator = operator;
    this.value_1  = value_1;
    this.value_2  = value_2;
  }

  visit(visitor, arg) {
    return visitor.visitArithmeticOperationValue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class PronounValue {
  constructor(pronoun) {
    this.pronoun = pronoun;
  }

  visit(visitor, arg) {
    return visitor.visitPronounValue(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class GreaterThanComparison {
  constructor(comparative) {
    this.comparative = comparative;
  }

  visit(visitor, arg) {
    return visitor.visitGreaterThanComparison(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class LesserThanComparison {
  constructor(comparative) {
    this.comparative = comparative;
  }

  visit(visitor, arg) {
    return visitor.visitLesserThanComparison(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class EqualToComparison {
  constructor(adjective) {
    this.adjective = adjective;
  }

  visit(visitor, arg) {
    return visitor.visitEqualToComparison(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class InverseComparison {
  constructor(comparison) {
    this.comparison = comparison;
  }

  visit(visitor, arg) {
    return visitor.visitInverseComparison(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class Comment {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitComment(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class Numeral {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNumeral(this, arg);
  }
}

/**
 * @memberof Horatio.AST
 */
class Character {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitCharacter(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class FirstPersonPronoun {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitFirstPersonPronoun(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class SecondPersonPronoun {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitSecondPersonPronoun(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class PositiveNoun {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitPositiveNoun(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NeutralNoun {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNeutralNoun(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NegativeNoun {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNegativeNoun(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class PositiveAdjective {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitPositiveAdjective(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NeutralAdjective {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNeutralAdjective(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NegativeAdjective {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNegativeAdjective(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class UnaryOperator {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitUnaryOperator(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class ArithmeticOperator {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitArithmeticOperator(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class PositiveComparative {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitPositiveComparative(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class NegativeComparative {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitNegativeComparative(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class Be {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitBe(this, arg);
  }
}


/**
 * @memberof Horatio.AST
 */
class BeComparative {
  constructor(sequence) {
    this.sequence = sequence;
  }

  visit(visitor, arg) {
    return visitor.visitBeComparative(this, arg);
  }
}


/** Export */
export default {
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
}
