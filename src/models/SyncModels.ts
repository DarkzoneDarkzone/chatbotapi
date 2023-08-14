
import { Post } from './post';
import { sequelize } from '../util/database';

export function OnInit(){
    const declaredModel = {
        Post,
    }
    sequelize.sync(); 
}
