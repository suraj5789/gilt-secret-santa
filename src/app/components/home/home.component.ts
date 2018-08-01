import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'gilt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[];
  public pairedUsers: any;
  constructor(private dataService: DataService) { 
  }

    /**
     * angular life cycle hook
     * using to set users data
     */
    public ngOnInit(): void {
        this.users = this.dataService.getUsers();
        if (!this.users) {
            this.dataService.loadUsers().subscribe((data) => {
                this.users = data.users;
                this.dataService.setUsers(data);
                this.pairedUsers = this.pairUsers(this.users);
                console.log(this.pairedUsers);
            });
        }
    }

    public pairUsers(users: User[]): any {
        let result = [];
        let recipients = users.slice();
        let len = users.length;
        for (var i = 0; i < len; i++) {
            var sender =users[i];		
            var recipientIndex = Math.floor(Math.random() * recipients.length);
            while (recipients[recipientIndex] === sender) {
                // Can't send gift to myself
            recipientIndex = Math.floor(Math.random() * recipients.length);
            }
    var recipient = recipients.splice(recipientIndex, 1)[0];
    result.push({
      sender: sender,
      receiver: recipient
    });
  }
  return result;
}

}
