import { EntityRepository, Repository } from 'typeorm-dmdb8';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
