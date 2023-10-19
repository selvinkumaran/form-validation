import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  nameRef: string = '';
  emailRef: string = '';
  numberRef: string = '';
  datas: Form[] = [];
  editId = 0;
  btnText = 'add';
  error = '';
  constructor(private formService: FormService) {}

  onSubmit(todoForm: NgForm) {}

  add(todoForm: NgForm): void {
    if (this.editId === 0) {
      this.datas = this.formService.add(
        this.nameRef,
        this.emailRef,
        this.numberRef
      );
    } else {
      this.datas = this.formService.edit(
        this.editId,
        this.nameRef,
        this.emailRef,
        this.numberRef
      );
      this.editId = 0;
      this.btnText = 'add';
    }
    this.nameRef = '';
    this.emailRef = '';
    this.numberRef = '';
    todoForm.resetForm();
  }

  delete(id: number): void {
    this.datas = this.formService.delete(id);
  }

  edit(id: number): void {
    this.editId = id;
    this.btnText = 'edit';
    this.nameRef = this.formService.getName(id);
    this.emailRef = this.formService.getEmail(id);
    this.numberRef = this.formService.getNumber(id);
  }
}
