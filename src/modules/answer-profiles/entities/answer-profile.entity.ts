import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../../common/shared/entities';
import { Answer } from '../../answers/entities/answer.entity'; // Ajusta la ruta según tu estructura
import { Question } from '../../questions/entities/question.entity';

@Entity('answer_profiles')
export class AnswerProfile extends Base {
  @Column({ name: 'label', type: 'varchar', nullable: false })
  label: string;

  @OneToMany(() => Answer, (answer) => answer.answerProfile)
  answers: Answer[];

  @OneToMany(() => Question, (question) => question.answerProfile)
  questions: Question[];
}
