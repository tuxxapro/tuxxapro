import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('deve criar a aplicação TUXXA', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('deve conter o logotipo e slogan oficial TUXXA - INFRAESTRUTURA EM MOVIMENTO', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const logoImg = compiled.querySelector('.brand-nav-image') as HTMLImageElement;
    expect(logoImg).toBeTruthy();
    expect(logoImg.alt).toContain('TUXXA - INFRAESTRUTURA EM MOVIMENTO');
  });

  it('deve conter o menu de navegação com Início e Sobre', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.nav-desktop .nav-link');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Início');
    expect(links[1].textContent?.trim()).toBe('Sobre');
  });
});
