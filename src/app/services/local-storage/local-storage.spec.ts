import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {LocalStorage} from './local-storage';


describe('LocalStorage Service', () => {

  beforeEachProviders(() => [LocalStorage]);


  it('should ...', inject([LocalStorage], (service:LocalStorage) => {

  }));

});
