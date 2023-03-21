import { Component } from '@angular/core';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navItems: NavItem[] = [
    { label: 'Accueil', link: '/' },
    { label: 'À propos', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ];

}