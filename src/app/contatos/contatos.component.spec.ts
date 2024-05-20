import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosComponent } from './contatos.component';
import {HttpService} from "../service/http.service";
import {Contato} from "../entidades/contato";
import { HttpClientModule} from "@angular/common/http";
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {NoopScrollStrategy, Overlay} from "@angular/cdk/overlay";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {Observable, of} from "rxjs";
import {MatPaginatorModule} from "@angular/material/paginator";

describe('ContatosComponent', () => {
  let component: ContatosComponent;
  let fixture: ComponentFixture<ContatosComponent>;
  let httpService: HttpService;
  let httpServiceSpy: any;



  beforeEach(async () => {
    httpServiceSpy = jasmine.createSpyObj('HttpService', ['getContacts']);
    httpServiceSpy.getContacts.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ContatosComponent],
      imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NgbModule,
        MatIconModule,
        MatTableModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        MatPaginatorModule,
        FormsModule],
      providers: [{ provide: HttpService, useValue: httpServiceSpy },
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {scrollStrategy: new NoopScrollStrategy()}}],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContatosComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    // matDialog = TestBed.inject(MatDialog);
    // matSnackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo onInit deve ser chamado', () => {
    spyOn(component, 'ngOnInit')
    component.ngOnInit()
   expect(component.ngOnInit).toHaveBeenCalled()
  });

  it('Metodo toggleFavorite deve ser chamado ', () => {
    spyOn(component, 'toggleFavorite');
    component.toggleFavorite(new Contato(10, 'teste', 'teste', 'teste', 'teste', true, false));
    expect(component.toggleFavorite).toHaveBeenCalled();
  });

  it('Metodo edit deve ser chamado', () => {
   spyOn(component, 'edit');
   component.edit(new Contato(10, 'teste', 'teste', 'teste', 'teste', true, false));
    expect(component.edit).toHaveBeenCalled();
  });

  it('metodo getContatos deve ter sido chamado, ao iniciar o metodo init do component', () => {

    httpServiceSpy.getContacts.and.returnValue(of([]));
    component.ngOnInit();
    expect(httpServiceSpy.getContacts).toHaveBeenCalled();

  });

  it('metodo delete deve ser chamado', () => {
    spyOn(component, 'delete');
    component.delete(new Contato(10, 'teste', 'teste', 'teste', 'teste', true, false));
    expect(component.delete).toHaveBeenCalled();
  });

  it('metodo toggleActive deve ser chamado', () => {
    spyOn(component, 'toggleActive');
    component.toggleActive(new Contato(10, 'teste', 'teste', 'teste', 'teste', true, false));
    expect(component.toggleActive).toHaveBeenCalled();
  });

  it('o valor do observable no componente deve ser o mesmo valor passado no service', () => {
    const testValue = [new Contato(10, 'teste', 'teste', 'teste', 'teste', true, false)];
    httpServiceSpy.getContacts.and.returnValue(of(testValue));
    component.ngOnInit();
    expect(httpServiceSpy.getContacts).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(testValue);
  });






});
