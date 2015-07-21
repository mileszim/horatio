import { act, scene }                from './wordlists/act_and_scene';
import { arithmetic_operators }      from './wordlists/arithmetic_operators';
import { articles }                  from './wordlists/articles';
import { be, be_comparatives }       from './wordlists/be';
import { characters }                from './wordlists/characters';
import { enter, exit, exeunt }       from './wordlists/enter_exit_exeunt';
import { first_person }              from './wordlists/first_person';
import { first_person_possessive }   from './wordlists/first_person_possessive';
import { first_person_reflexive }    from './wordlists/first_person_reflexive';
import { imperatives, to, proceed }  from './wordlists/imperatives';
import { as, not, than, if_so, and } from './wordlists/misc';
import { negative_adjectives }       from './wordlists/negative_adjectives';
import { negative_comparatives }     from './wordlists/negative_comparatives';
import { negative_nouns }            from './wordlists/negative_nouns';
import { neutral_adjectives }        from './wordlists/neutral_adjectives';
import { neutral_nouns }             from './wordlists/neutral_nouns';
import { nothing }                   from './wordlists/nothing';
import { positive_adjectives }       from './wordlists/positive_adjectives';
import { positive_comparatives }     from './wordlists/positive_comparatives';
import { positive_nouns }            from './wordlists/positive_nouns';
import { roman_numerals }            from './wordlists/roman_numerals';
import { second_person }             from './wordlists/second_person';
import { second_person_possessive }  from './wordlists/second_person_possessive';
import { second_person_reflexive }   from './wordlists/second_person_reflexive';
import { remember, recall }          from './wordlists/stacks';
import { third_person_possessive }   from './wordlists/third_person_possessive';
import { unary_operators }           from './wordlists/unary_operators';
import { first_person_pronouns, second_person_pronouns }          from './wordlists/pronouns';
import { input_integer, input_char, output_integer, output_char } from './wordlists/input_output';
import { colon, comma, period, exclamation_point, question_mark,
         ampersand, left_bracket, right_bracket }                 from './wordlists/terminals';



/**
 * Horatio Wordlists
 * Holds syntax for parsing. Loaded from includes/wordlists/ at make
 * @memberof Horatio
 * @namespace
 */
export default {
  act: act,
  scene: scene,
  arithmetic_operators: arithmetic_operators,
  articles: articles,
  be: be,
  be_comparatives: be_comparatives,
  characters: characters,
  enter: enter,
  exit: exit,
  exeunt: exeunt,
  first_person: first_person,
  first_person_possessive: first_person_possessive,
  first_person_reflexive: first_person_reflexive,
  imperatives: imperatives,
  to: to,
  proceed: proceed,
  input_integer: input_integer,
  input_char: input_char,
  output_integer: output_integer,
  output_char: output_char,
  as: as,
  not: not,
  than: than,
  if_so: if_so,
  and: and,
  negative_adjectives: negative_adjectives,
  negative_comparatives: negative_comparatives,
  negative_nouns: negative_nouns,
  neutral_adjectives: neutral_adjectives,
  neutral_nouns: neutral_nouns,
  nothing: nothing,
  positive_adjectives: positive_adjectives,
  positive_comparatives: positive_comparatives,
  positive_nouns: positive_nouns,
  first_person_pronouns: first_person_pronouns,
  second_person_pronouns: second_person_pronouns,
  roman_numerals: roman_numerals,
  second_person: second_person,
  second_person_possessive: second_person_possessive,
  second_person_reflexive: second_person_reflexive,
  remember: remember,
  recall: recall,
  colon: colon,
  comma: comma,
  period: period,
  exclamation_point: exclamation_point,
  question_mark: question_mark,
  ampersand: ampersand,
  left_bracket: left_bracket,
  right_bracket: right_bracket,
  third_person_possessive: third_person_possessive,
  unary_operators: unary_operators
}
