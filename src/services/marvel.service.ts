import HttpService from './base/http-service';
import { MarvelResponse } from '../models/response';
import { Paginate } from '../models/paginate';
import { Character } from '../models/character';
import { stringify } from 'querystring';

class MarvelService {

    public getCharacters(offset = 0, name?: string): Promise<MarvelResponse<Paginate<Character>>> {
        const params: any = { offset }

        if (name) {
            params['nameStartsWith'] = name;
        }

        const queryString = stringify(params);
        
        return HttpService.get(`/characters?${queryString}`)
            .then(res => res.data)
            .catch((err) => { throw Error(err) });
    }
}

export default new MarvelService();