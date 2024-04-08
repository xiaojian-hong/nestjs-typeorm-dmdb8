import { EntityRepository, Repository } from 'typeorm-dm8';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
