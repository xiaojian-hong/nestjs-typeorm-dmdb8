import { EntityRepository, Repository } from 'typeorm-dm8';
import { Photo } from '../photo.entity';
import { PhotoSchema } from './photo.schema';

@EntityRepository(PhotoSchema)
export class CustomPhotoSchemaRepository extends Repository<Photo> {}
