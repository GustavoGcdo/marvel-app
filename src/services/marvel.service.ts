import HttpService from './base/http-service';
import { MarvelResponse } from '../models/response';
import { Paginate } from '../models/paginate';
import { Character } from '../models/character';

class MarvelService {

    public getCharacters(): Promise<MarvelResponse<Paginate<Character>>> {
        return HttpService.get('/characters')
            .then(res => res.data)
            .catch((err) => { throw Error(err) });
    }
}

export default new MarvelService();