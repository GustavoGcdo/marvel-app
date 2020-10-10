import HttpService from './base/http-service';
import { MarvelResponse } from '../models/response';
import { Paginate } from '../models/paginate';
import { Character } from '../models/character';

class MarvelService {

    public getCharacters(offset = 0): Promise<MarvelResponse<Paginate<Character>>> {
        return HttpService.get(`/characters?offset=${offset}`)
            .then(res => res.data)
            .catch((err) => { throw Error(err) });
    }
}

export default new MarvelService();