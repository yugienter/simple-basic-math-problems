import { Entity, model, property } from '@loopback/repository';

@model()
export class Note extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: false,
  })
  added: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  constructor(data?: Partial<Note>) {
    super(data);
  }
}

export interface NoteRelations {
  // describe navigational properties here
}

export type NoteWithRelations = Note & NoteRelations;