import {
  Component,
  ContentChild,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { uniqueId } from 'lodash';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkInputDirective } from '../../../directives/inputs/sprk-input/sprk-input.directive';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';

@Component({
  selector: 'sprk-input-container',
  template: `
    <div [ngClass]="getClasses()" [attr.data-id]="idString">
      <ng-content></ng-content>
      <ng-content select="[sprk-select-icon]"></ng-content>
      <ng-content select="[sprk-input-icon]"></ng-content>
      <ng-content select="sprk-selection-item-container"></ng-content>
      <ng-content select="sprk-checkbox-item"></ng-content>
      <ng-content select="[sprkHelperText]"></ng-content>
      <ng-content select="[sprkFieldError]"></ng-content>
      <ng-content select="[afterSprkInput]"></ng-content>
    </div>
  `,
})
export class SparkInputContainerComponent implements OnInit {
  /**
   * @ignore
   */
  constructor(public ref: ElementRef, private renderer: Renderer2) {}
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * This will be used to determine the variant of
   * the checkbox item.
   */
  @Input()
  variant: 'huge' | undefined;

  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * This component expects a child label element
   * with the `sprkLabel` directive.
   */
  @ContentChild(SprkLabelDirective, { static: true })
  label: SprkLabelDirective;

  /**
   * This component expects a child input element
   * with the `sprkInput` directive.
   */
  @ContentChild(SprkInputDirective, { static: true })
  input: SprkInputDirective;

  /**
   * This component expects a child element
   * with the `sprkFieldError` directive.
   */
  @ContentChild(SprkFieldErrorDirective, { static: true })
  error: SprkFieldErrorDirective;

  /**
   * @ignore
   */
  id = uniqueId();
  /**
   * @ignore
   */
  input_id = `input_${this.id}`;
  /**
   * @ignore
   */
  error_id = `error_${this.id}`;

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = ['sprk-b-InputContainer'];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      });
    }

    if (this.variant === 'huge') {
      classArray.push('sprk-b-InputContainer--huge');
    }

    return classArray.join(' ');
  }

  ngOnInit(): void {
    if (this.label && this.input) {
      this.renderer.setAttribute(
        this.label.ref.nativeElement,
        'for',
        this.input_id,
      );
      this.renderer.setAttribute(
        this.input.ref.nativeElement,
        'id',
        this.input_id,
      );
    }
    if (this.input && this.error) {
      this.renderer.setAttribute(
        this.input.ref.nativeElement,
        'aria-describedby',
        this.error_id,
      );
      this.renderer.setAttribute(
        this.input.ref.nativeElement,
        'id',
        this.error_id,
      );
    }
  }
}
