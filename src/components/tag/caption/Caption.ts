import CaptionProps from './CaptionProps';
import './caption.css';

class Caption extends HTMLSpanElement {
  constructor(props: CaptionProps) {
    super();
    const { classnames, text } = props;
    this.classList.add(...classnames);
    this.textContent = text;
  }
}

customElements.define('matzip-caption', Caption, { extends: 'span' });

export default Caption;
