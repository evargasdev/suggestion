import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { EvaluationResult } from '../../results/entities/evaluation-result.entity';
import { QuestionAnswer } from '../../question-answers/entities/question-answer.entity';

@Entity('evaluations')
export class Evaluation extends Base {
  @Column({
    name: 'date',
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  //enum-pending
  @Column({ name: 'workplace', type: 'varchar', nullable: true })
  workplace: string;

  @OneToMany(
    () => EvaluationResult,
    (evaluation_results) => evaluation_results.evaluation,
  )
  evaluation_results: EvaluationResult[];

  @OneToMany(
    () => QuestionAnswer,
    (question_answers) => question_answers.evaluation,
  )
  question_answers: QuestionAnswer[];
}
