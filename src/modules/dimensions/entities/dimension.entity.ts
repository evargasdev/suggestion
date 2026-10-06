import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Question } from '../../questions/entities/question.entity';
import { EvaluationResult } from '../../results/entities/evaluation-result.entity';

@Entity('dimensions')
export class Dimension extends Base {
  @Column({ name: 'label', type: 'varchar', nullable: false })
  label: string;

  @Column({ name: 'sort_order', type: 'int', nullable: false, default: 0 })
  sortOrder: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Question, (question) => question.dimension)
  questions: Question[];

  @OneToMany(
    () => EvaluationResult,
    (evaluationResult) => evaluationResult.dimension,
  )
  evaluationResults: EvaluationResult[];
}
