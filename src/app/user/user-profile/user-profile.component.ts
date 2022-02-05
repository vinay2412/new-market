import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public breakpoint: number;
  public formData: FormGroup;
  user: any;
  imageUrl: any;
  isSubmit: boolean;
  defaultImg: any = '../../../assets/images/profile.jpg'
  constructor(
    public builder: FormBuilder,
    public router: Router,
    private cd: ChangeDetectorRef,
    public snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.build();
  }

  build(){
    this.formData = this.builder.group({
      firstName: new FormControl ('Charles', [Validators.required]),
      lastName: new FormControl ('Morris'),
      address: new FormControl ('Caneda'),
      city: new FormControl (''),
      state: new FormControl (''),
      pin: new FormControl (''),
      email: new FormControl ('charles.morris@reqres.in', [Validators.required]),
      imageSrc: ([''])
    })
  }

  save() {
    this.isSubmit = true;
    const data = this.formData;
    if (!data.valid) {
      return false;
    }
    else{
      this.snack.open('Data Updated Sucessfully', 'Thanks',{
        duration: 3000,
      })
      console.log(data);
      return true
    }

  }

  uploadFile(event: any) {
    const reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      const extension = file.type.split('/').pop();
      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        // this.user.imageSrc = this.imageUrl;
        const imgData = {
          name: file.name,
          type: file.type,
          extension: (extension === file.type) ? '' : extension,
          path: reader.result,
          size: file.size,
        };
        this.formData.patchValue({
          imageSrc: imgData,
        });
        // this.save();
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  submitData(){
    let param = this.formData.getRawValue()
    console.log('Data', param);
    this.save();
  }

}
