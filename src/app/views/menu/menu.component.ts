import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Menu } from '@interfaces/menu/menu';
import { ActivatedRoute } from '@angular/router';
import { menuComponents } from './components/menu-components';
import { ColorDirective } from '@directives/color.directive';
import { ActiveWordMayusPipe } from '@pipes/active-word-mayus.pipe';
import { toSignal } from '@angular/core/rxjs-interop';
import { MenuServices } from '@service/menu.service';

@Component({
    selector: 'menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [provideIcons({ octPlus })],
    imports: [CommonModule,NgIconComponent, ColorDirective, ActiveWordMayusPipe,...menuComponents],
})
export default class MenuComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  private menuService = inject(MenuServices);
  menu: Signal<Menu[] | undefined> = toSignal(this.menuService.allCategories$);
  showForm = signal<boolean>(false);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
      if (data['id']) {
        this.showFormFn();
      }
    });
  }
  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }

  addDataFn(menu: Menu): void {
    menu.id = this.menu()!.length + 1;
    this.menuService.postNewMenu(menu).subscribe(console.log);
    this.showForm.set(false);
  }
}
