import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component'
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            CommonModule,
            RouterTestingModule.withRoutes([
                { path: 'home', component: NavbarComponent },
                { path: 'about', component: NavbarComponent },
                { path: 'contact', component: NavbarComponent }
            ])
          ],
          declarations: [ NavbarComponent ]
        });
      });
    
      it('should go to url /home',
        async(inject([Router, Location], (router: Router, location: Location) => {
    
        let fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
    
        fixture.debugElement.query(By.css('#home')).nativeElement.click();
        fixture.whenStable().then(() => {
            expect(location.path()).toEqual('/home');
        });
      })));
    
      it('should go to url /about',
        async(inject([Router, Location], (router: Router, location: Location) => {
    
        let fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
    
        fixture.debugElement.query(By.css('#about')).nativeElement.click();
        fixture.whenStable().then(() => {
            expect(location.path()).toEqual('/about');
        });
      })));
    
      it('should go to url /contact',
        async(inject([Router, Location], (router: Router, location: Location) => {
    
        let fixture = TestBed.createComponent(NavbarComponent);
        fixture.detectChanges();
    
        fixture.debugElement.query(By.css('#contact')).nativeElement.click();
        fixture.whenStable().then(() => {
            expect(location.path()).toEqual('/contact');
        });
      })));
  });