import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IPhysician } from './physician';

export class PhysicianSelectedData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let physician: IPhysician = 
            {
                'npi': 1,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            };
        return { physician };
    }
}
