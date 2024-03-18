import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {describe, expect, test} from '@jest/globals';
import Web3 from 'web3';
describe('web3 version', () => {
  test('web3 version is 4.6.0', () => {
    expect(Web3.version).toEqual("4.6.0"); 
  });
});


