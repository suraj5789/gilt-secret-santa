import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';
import { ActivatedRoute }    from '@angular/router';

/**
 * SantaList Component
 * View 1 - For admin
 * View 2 - For user
 */
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
     * subscribe for UserList
     */
    public ngOnInit(): void {
        const role = this.route.snapshot.data['role'];
        this.isAdmin = role ? role === 'admin' : false;
        this.route.data.subscribe(({ users }) => {
            this.users = users;
            this.updateRecipients();
        });    
    }

    /**
     * updateRecipients - call to suffle recipient list.
     */
    public updateRecipients() {
        this.santaWithRecipients = this.setRecipientForSanta();
    }

    /**
     * setRecipientForSanta - Main logic to assign recipient to each User(Santa)
     */
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
