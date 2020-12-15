import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BasicDdComponent extends Component {
  @tracked isOpen = false;

  @action
  openMenu() {
    this.isOpen = true;
  }

  @action
  closeMenu(evt) {
    const element = document.querySelector('.basic-dd');
    if (!element.contains(evt.relatedTarget)) {
      this.isOpen = false;
    }
  }
}
