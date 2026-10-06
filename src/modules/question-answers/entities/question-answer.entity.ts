import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Question } from '../../questions/entities/question.entity';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';
import { Answer } from '../../answers/entities/answer.entity';

@Entity('question_answers')
export class QuestionAnswer extends Base {
  @ManyToOne(() => Evaluation, (evaluation) => evaluation.questionAnswers)
  @JoinColumn({ name: 'evaluation_id' })
  evaluation: Evaluation;

  @ManyToOne(() => Question, (question) => question.questionAnswers)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => Answer, (answer) => answer.questionAnswers)
  @JoinColumn({ name: 'answer_id' })
  answer: Answer;

}
