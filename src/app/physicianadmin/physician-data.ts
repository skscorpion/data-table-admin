import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IPhysician } from './physician';

export class PhysicianData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let physicians: IPhysician[] = [
            {
                'npi': 1,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            },
            {
                'npi': 2,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            },
            {
                'npi': 3,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': null,
                'state': null,
                'zipcode': null,
                'isUpdated': false
            },
            {
                'npi': 4,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            },
            {
                'npi': 5,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            }
        ];
        let physician: IPhysician = 
            {
                'npi': 3,
                'firstName': 'Leaf Rake',
                'lastName': 'GDN-0011',
                'address': 'Leaf rake with 48-inch wooden handle.',
                'state': 's1',
                'zipcode': '12345',
                'isUpdated': false
            };
        return { physicians, physician };
    }
}
