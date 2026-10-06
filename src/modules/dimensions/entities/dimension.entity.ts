import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Question } from '../../questions/entities/question.entity';
import { EvaluationResult } from '../../results/entities/evaluation-result.entity';

@Entity('dimensions')
export class Dimension extends Base {
  @Column({ name: 'label', type: 'varchar', nullable: false })
  label: string;

  @OneToMany(() => Question, (question) => question.dimension)
  questions: Question[];

  @OneToMany(
    () => EvaluationResult,
    (evaluation_results) => evaluation_results.dimension,
  )
  evaluation_results: EvaluationResult[];
}
