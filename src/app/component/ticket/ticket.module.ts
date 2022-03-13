import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TicketReceiptConfirmationComponent} from './ticket-receipt-confirmation/ticket-receipt-confirmation.component';
import {TicketReceiptInfromationComponent} from './ticket-receipt-infromation/ticket-receipt-infromation.component';
import {TicketRoutingModule} from "../../routing/ticket-routing.module";

@NgModule({
    declarations: [
        TicketReceiptConfirmationComponent,
        TicketReceiptInfromationComponent
    ],
    imports: [
        CommonModule,
        TicketRoutingModule
    ]
})
export class TicketModule {
}
