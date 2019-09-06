import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {

        return { };
    }

    genId(collection: any[]): number {
        return collection.length > 0 ? Math.max(...collection.map(val => val.id)) + 1 : 1;
    }

}
