import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsageService } from '../usage.service';
@Component({
  selector: 'app-edit',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./edit.component.scss']
})
export class UsageEditComponent implements OnInit {
  id = '';
  usage = {
  // date = '',
  // employee = '',
  // usage = ''
  };
  constructor(private acRouter: ActivatedRoute,
              private usageService: UsageService) { 
    this.id = this.acRouter.snapshot.params.id;
              }

  ngOnInit() {
    this.usageService.getOneById(this.id)
    .subscribe(
      (response: any) => {
        this.usage = response;
      }
    );
}

save() {
  this.usageService.update(this.usage, this.id)
    .subscribe(
      (response) => {
        console.log('Response', response);
      }
    )
}

}

  


