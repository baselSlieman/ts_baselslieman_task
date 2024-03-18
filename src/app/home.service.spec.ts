import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';




import {describe, expect, test} from '@jest/globals';
import Web3 from 'web3';
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

describe('web3 version', () => {
  test('web3 version is 4.6.0', () => {
    expect(Web3.version).toEqual("4.6.0");
  });
});

