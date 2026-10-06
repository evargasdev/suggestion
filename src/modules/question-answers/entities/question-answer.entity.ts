import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Question } from '../../questions/entities/question.entity';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';
import { Answer } from '../../answers/entities/answer.entity';

@Entity('question_answers')
export class QuestionAnswer extends Base {
  @ManyToOne(() => Evaluation, (evaluation) => evaluation.id)
  @JoinColumn({ name: 'evaluation' })
  evaluation: Evaluation;

  @ManyToOne(() => Question, (question) => question.label)
  @JoinColumn({ name: 'question' })
  question: Question;

  @ManyToOne(() => Answer, (answer) => answer.label)
  @JoinColumn({ name: 'answer '})
  answer: Answer;

}
