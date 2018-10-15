import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { NAMESPACE } from '../../constants/namespace';

@Injectable()
export class DomRendererService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
   }

  public createSVGElement(tagName: string, data: Map<string, string>): Element {
    const shape: Element = document.createElementNS(NAMESPACE.SVG, tagName);
    data.forEach((value: string, key: string) => {
      this.renderer.setAttribute(shape, key, value);
    });
    return shape;
  }


}
