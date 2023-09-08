import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
   readonly subscriptions: Subscription[] = [];
    ngOnDestroy() {
    }
}
