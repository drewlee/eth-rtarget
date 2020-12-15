import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | basic-dd', function(hooks) {
  setupRenderingTest(hooks);

  test('menu stays open when interacted with', async function(assert) {
    await render(hbs`<BasicDd />`);

    // ensure menu is visible on click
    await click('.basic-dd__trigger');
    assert.dom('.basic-dd__menu').isVisible();

    // ensure menu stays visible when interacted with
    const item = findAll('.basic-dd__menu_item button');
    await click(item[0]);

    // this fails because menu closes prematurely
    assert.dom('.basic-dd__menu').isVisible();
  });
});
