import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';
import { ActivatedRoute }    from '@angular/router';

@Component({
    selector: 'gilt-santa-list',
    templateUrl: './santa-list.component.html',
    styleUrls: ['./santa-list.component.scss']
})
export class SantaListComponent implements OnInit {

    public users: User[];
    public isAdmin:boolean;
    public santaWithRecipients: any;
    constructor(private dataService: DataService, private route: ActivatedRoute) {
    }

    /**
     * angular life cycle hook
     * using to set users data
     */
    public ngOnInit(): void {
        const role = this.route.snapshot.data['role'];
        this.isAdmin = role ? role === 'admin' : false;
        this.route.data.subscribe(({ data }) => {
            this.users = data.users;
            this.updateRecipients();
        });    
    }

    public updateRecipients() {
        this.santaWithRecipients = this.setRecipientForSanta();
    }

    private setRecipientForSanta(): any {
        let santaWithRecepients = [];
        let recipients = this.users.slice();
        let len = this.users.length;
        let santa, recipient, recipientIndex, i;
        for (i = 0; i < len; i++) {
            santa = this.users[i];
            recipientIndex = Math.floor(Math.random() * recipients.length);
            // Santa shouldn't be his recipient.
            if (recipients[recipientIndex] === santa) {
                recipientIndex = Math.floor(Math.random() * recipients.length);
            }
            recipient = recipients.splice(recipientIndex, 1)[0];
            santaWithRecepients.push({
                santa,
                recipient
            });
        }
        return santaWithRecepients;
    }

}
