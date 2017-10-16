import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from './authors.service';
import { IService, ICollection } from 'ngx-jsonapi';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent {
    public authors: ICollection;

    public constructor(
        private authorsService: AuthorsService
    ) {
        authorsService.register();

        this.authors = authorsService.all(
            // { include: ['books', 'photos'] },
            success => {
                console.log('success authors controll', this.authors);
            },
            error => {
                console.log('error authors controll', error);
            }
        );
    }
}
