import { faker } from '@faker-js/faker';

export const CREATE_DRAGON_MOCK = {
  name: faker.person.firstName(),
  type: String(faker.science.chemicalElement()),
  histories: faker.lorem.lines(2),
};
