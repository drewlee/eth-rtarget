import Application from 'eth-rtarget/app';
import config from 'eth-rtarget/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setup(QUnit.assert);
setApplication(Application.create(config.APP));
start();
