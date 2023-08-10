import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss'],
})
export class Compo1Component {
  constructor(private scrollService: ScrollService) {}

  scrollTo(targetId: string): void {
    this.scrollService.scrollToSection(targetId);
  }
}
