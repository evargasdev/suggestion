import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Dimension } from '../../dimensions/entities/dimension.entity';
import { Evaluation } from '../../evaluations/entities/evaluation.entity';

@Entity('evaluation_results')
export class EvaluationResult extends Base {
  @Column({ name: 'score', type: 'int', nullable: false })
  score: number;

  //enum-pending
  @Column({ name: 'classification', type: 'varchar', nullable: false })
  classification: string;

  @ManyToOne(() => Dimension, (dimension) => dimension.label)
  @JoinColumn({ name: 'dimension' })
  dimension: Dimension;

  @ManyToOne(() => Evaluation, (evaluation) => evaluation.id)
  @JoinColumn({ name: 'evaluation' })
  evaluation: Evaluation;
}
