import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000
    }),
  ],
  providers: [
      providePrimeNG({
      theme: {
        options: {
          darkModeSelector: false || 'none'
        },
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '#e1eff8',     // Lightest shade
              100: '#b3d3f1',
              200: '#80b5e6',
              300: '#4d97db',
              400: '#267ac1',    // Lighter primary color
              500: '#074d85',    // 🌟 Main primary color,#074c85 (your reference color)
              600: '#031f47',
              700: '#021a3a',
              800: '#01152d',
              900: '#000f1a',
              950: '#000a14'
            },
            colorScheme: {
              light: {
                primary: {
                  color: '#074d85',          // Text color in light theme
                  inverseColor: '#ffffff',   // Inverse text color
                  hoverColor: '#031f47',     // Hover state
                  activeColor: '#021a3a'     // Active state
                },
                highlight: {
                  background: '#074d85',         // Highlight background in light theme
                  focusBackground: '#031f47',    // Focus background
                  color: '#ffffff',              // Highlight text color
                  focusColor: '#ffffff'          // Focused text color
                }
              },
              dark: {
                primary: {
                  color: '#e1eff8',          // Light text in dark theme
                  inverseColor: '#074d85',   // Inverse background text
                  hoverColor: '#074c85',     // Hover state
                  activeColor: '#80b5e6'     // Active state
                },
              }
            }
          }
        })
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }