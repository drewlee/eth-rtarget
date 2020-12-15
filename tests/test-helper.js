import Application from 'eth-rtarget/app';
import config from 'eth-rtarget/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
