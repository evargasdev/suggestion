import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Dimension } from '../../dimensions/entities/dimension.entity';
import { AnswerProfile } from '../../answer-profiles/entities/answer-profile.entity';

@Entity('questions')
export class Question extends Base {
  @Column({ name: 'label', type: 'varchar', nullable: false })
  label: string;

  @ManyToOne(() => Dimension, (dimension) => dimension.label)
  @JoinColumn({ name: 'dimension' })
  dimension: Dimension;

  @ManyToOne(() => AnswerProfile, (answerProfile) => answerProfile.label)
  @JoinColumn({ name: 'answer_profile_id' }) // Opcional: para darle un nombre limpio a la columna en la BD
  answerProfile: AnswerProfile;
}
