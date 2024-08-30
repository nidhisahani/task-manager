import { Model, Column, Table, DataType } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: false, 

  })
  completed!: boolean;
}
