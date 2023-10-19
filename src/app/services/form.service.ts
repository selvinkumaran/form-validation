import { Injectable } from '@angular/core';
import { Form } from '../models/form';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private datas: Form[] = [];

  add(nameRef: string, emailRef: string, numberRef: string): Form[] {
    let data: Form = {
      id: this.datas.length + 1,
      name: nameRef,
      email: emailRef,
      number: numberRef,
    };
    if (nameRef === '' && emailRef === '' && numberRef === '') {
    } else {
      this.datas.push(data);
    }
    return this.datas;
  }

  delete(id: number): Form[] {
    this.datas = this.datas.filter((o) => o.id !== id);
    return this.datas;
  }

  getName(id: number): string {
    let data = this.datas.find((o) => o.id === id);
    if (data) return data.name;
    else return '';
  }
  getEmail(id: number): string {
    let data = this.datas.find((o) => o.id === id);
    if (data) return data.email;
    else return '';
  }
  getNumber(id: number): string {
    let data = this.datas.find((o) => o.id === id);
    if (data) return data.number;
    else return '';
  }

  edit(
    id: number,
    nameRef: string,
    emailRef: string,
    numberRef: string
  ): Form[] {
    let data = this.datas.find((o) => o.id === id);
    console.log(data);
    if (data) {
      data.name = nameRef;
      data.email = emailRef;
      data.number = numberRef;
    }
    console.log(data);
    console.log(this.datas);

    return this.datas;
  }
}
