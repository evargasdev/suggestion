import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { AnswerProfile } from '../../answer-profiles/entities/answer-profile.entity';
import { QuestionAnswer } from '../../question-answers/entities/question-answer.entity';

@Entity('answers')
export class Answer extends Base {
  @Column({ name: 'label', type: 'varchar', nullable: false })
  label: string;

  @Column({ name: 'value', type: 'int', nullable: false })
  value: number;

  // Configuración correcta del ManyToOne
  @ManyToOne(() => AnswerProfile, (answerProfile) => answerProfile.label)
  @JoinColumn({ name: 'answer_profile_id' }) // Opcional: para darle un nombre limpio a la columna en la BD
  answerProfile: AnswerProfile;

  @OneToMany(() => QuestionAnswer, (question_answer) => question_answer.answer)
  question_answers: QuestionAnswer[];
}
