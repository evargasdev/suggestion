import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { EvaluationResult } from '../../results/entities/evaluation-result.entity';
import { QuestionAnswer } from '../../question-answers/entities/question-answer.entity';

@Entity('evaluations')
export class Evaluation extends Base {
  @Column({
    name: 'date',
    type: 'timestamptz',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  //enum-pending
  @Column({ name: 'workplace', type: 'varchar', nullable: true })
  workplace: string;

  @OneToMany(
    () => EvaluationResult,
    (evaluationResult) => evaluationResult.evaluation,
  )
  evaluationResults: EvaluationResult[];

  @OneToMany(
    () => QuestionAnswer,
    (questionAnswer) => questionAnswer.evaluation,
  )
  questionAnswers: QuestionAnswer[];
}
