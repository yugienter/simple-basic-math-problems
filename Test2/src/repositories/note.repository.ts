import { DefaultCrudRepository } from '@loopback/repository';
import { Note } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.id
> {

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Note, dataSource);
  }
}