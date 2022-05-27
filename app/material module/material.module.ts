import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports:[MatToolbarModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule],
    exports: [MatToolbarModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule]
})

export class MaterialModule {}