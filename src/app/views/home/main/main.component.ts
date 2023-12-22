import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

// declare var bootstrap: any;
// import * as bootstrap from "bootstrap";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscription: Subscription | null = null;
  private subject: Subject<number>;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  constructor(private modalService: NgbModal) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);

  }

  ngOnInit() {
    console.log(environment.production);

    // const myModalAlternative = new bootstrap.Modal('#myModal', {})
    // myModalAlternative.show();

    this.subscription = this.subject
      .subscribe({
        next: (param: number) => {
          console.log('subscribe 1: ', param);
        },
        error: (error: string) => {
          console.log('error: ' + error);
        }
      })
  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;
  ngAfterViewInit() {
    this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {

    this.subject
      .pipe(
        map((number) => {
          return 'ЧИСЛО ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscribe 2: ', param);
      });

  }

}
