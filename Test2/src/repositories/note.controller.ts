import { repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  requestBody,
} from '@loopback/rest';
import { Note } from '../models';
import { NoteRepository } from '../repositories';

export class NoteController {
  constructor(
    @repository(NoteRepository)
    public noteRepository: NoteRepository,
  ) { }

  @get('/notes', {
    responses: {
      '200': {
        description: 'Array of Note model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Note } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Note)) filter?: any,
  ): Promise<Note[]> {
    return await this.noteRepository.find(filter);
  }

  @get('/notes/{id}', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Note } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Note> {
    return await this.noteRepository.findById(id);
  }


  @post('/notes', {
    responses: {
      '200': {
        description: 'Note model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Note } } },
      },
    },
  })
  async create(@requestBody() note: Note): Promise<Note> {
    return await this.noteRepository.create(note);
  }
}