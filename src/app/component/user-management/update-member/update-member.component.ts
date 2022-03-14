import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
    selector: 'app-update-member',
    templateUrl: './update-member.component.html',
    styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

    constructor(private service: UserService,
                private activatedRoute: ActivatedRoute,
                private route: Router,
                private fb: FormBuilder
    ) {
    }


    updateMember!: FormGroup;


    ngOnInit(): void {
        this.updateMember = this.fb.group(
            {
                id: ['', Validators.required],
                fullName: ['', Validators.required],
                email: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                address: ['', Validators.required],
                dayOfBirth: ['', Validators.required],
                password: ['', Validators.required]
            }
        )

        this.service.getMemberById(this.activatedRoute.snapshot.params['id']).subscribe(data =>
            this.updateMember.setValue({
                id: data.id,
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                address: data.address,
                dayOfBirth: data.dayOfBirth,
                password: data.password
            })
        )
        console.log(this.updateMember.value);
    }


    save() {
        if (this.updateMember.valid) {
            // @ts-ignore
            this.service.editMember(this.updateMember.value).subscribe(
                () => {
                    this.route.navigateByUrl("user")
                }
            );
        }
    }
}
